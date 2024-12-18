import { NextResponse } from "next/server";
import * as puppeteer from "puppeteer";
import { createServerClient } from "@supabase/ssr";

interface BlogPost {
  title: string;
  description?: string;
  link: string;
  image_url?: string;
  published_at?: string;
  category?: string;
}

async function crawlBlogPosts(): Promise<BlogPost[]> {
  console.log("Starting crawling process...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  try {
    console.log("Navigating to blog...");
    await page.goto("https://inblog.ai/luke", {
      waitUntil: "networkidle0",
      timeout: 60000,
    });

    console.log("Waiting for posts to load...");
    await page.waitForSelector("main", { timeout: 30000 });

    const posts = await page.evaluate(() => {
      // Function to extract post data
      const extractPostData = (element: Element) => {
        const linkElement = element as HTMLAnchorElement;
        const titleElement = element.querySelector("h2");
        const imageElement = element.querySelector("img[alt]");
        const dateElement = element.querySelector(".font-light.text-sm");
        const categoryElement = element.querySelector(
          ".rounded-full.bg-gray-200"
        );

        const dateText = dateElement?.textContent?.trim().split("\n").pop();

        return {
          title: titleElement?.textContent?.trim() || "",
          link: linkElement.href || "",
          image_url: imageElement?.getAttribute("src") || undefined,
          published_at: dateText || undefined,
          category: categoryElement?.textContent?.trim() || undefined,
          description: undefined,
        };
      };

      // 1. 메인 큰 포스트
      const largePosts = Array.from(
        document.querySelectorAll("div.w-full.mb-4 > a")
      ).map(extractPostData);

      // 2. 그리드 레이아웃의 포스트들 (3열 그리드)
      const gridPosts = Array.from(
        document.querySelectorAll(
          "div.grid.grid-cols-1.md\\:grid-cols-3 > div > a"
        )
      ).map(extractPostData);

      // 3. 2열 그리드 레이아웃의 포스트들
      const gridPosts2 = Array.from(
        document.querySelectorAll(
          "div.w-full.max-w-6xl.grid.grid-cols-1.md\\:grid-cols-2 > a"
        )
      ).map(extractPostData);

      // 4. 모바일 뷰의 포스트들
      const mobilePosts = Array.from(
        document.querySelectorAll("div.md\\:hidden > a")
      ).map(extractPostData);

      // Combine all posts and remove duplicates based on link
      const allPosts = [
        ...largePosts,
        ...gridPosts,
        ...gridPosts2,
        ...mobilePosts,
      ];

      // Remove duplicates and ensure each post has a unique link
      const uniquePosts = Array.from(
        new Map(allPosts.map((post) => [post.link, post])).values()
      );

      console.log("Found posts:", uniquePosts.length);
      return uniquePosts;
    });

    console.log("Crawled posts:", posts);
    // Filter out invalid posts and ensure they're from your blog
    return posts.filter(
      (post) => post.title && post.link && post.link.includes("/luke/")
    );
  } catch (error) {
    console.error("Crawling error:", error);
    return [];
  } finally {
    await browser.close();
  }
}

async function updateDatabase(posts: BlogPost[]) {
  console.log("Updating database with posts:", posts);
  // @ts-expect-error: deprecated
  const supabase = createServerClient();

  if (posts.length === 0) {
    console.log("No posts to update");
    return;
  }

  for (const post of posts) {
    // Clean the post data before inserting
    const cleanedPost = {
      ...post,
      link: post.link.startsWith("http")
        ? post.link
        : `https://inblog.ai${post.link}`,
      published_at: post.published_at?.replace(
        /(\d{2}) (\d{2}), (\d{4})/,
        "$3-$1-$2"
      ),
    };

    const { data: existing, error: selectError } = await supabase
      .from("blog_posts")
      .select()
      .eq("link", cleanedPost.link)
      .single();

    if (selectError && selectError.code !== "PGRST116") {
      console.error("Error checking existing post:", selectError);
      continue;
    }

    if (!existing) {
      const { error: insertError } = await supabase
        .from("blog_posts")
        .insert([cleanedPost]);

      if (insertError) {
        console.error("Error inserting post:", insertError);
      } else {
        console.log("Successfully inserted post:", cleanedPost);
      }
    }
  }
}

export async function POST() {
  // @ts-expect-error: deprecated
  const supabase = createServerClient();
  try {
    // 크롤링 실행
    console.log("Starting crawling process...");
    const crawledPosts = await crawlBlogPosts();

    if (crawledPosts.length > 0) {
      await updateDatabase(crawledPosts);
    }

    // 업데이트된 데이터 가져오기
    const { data: posts, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("published_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({
      posts: posts || [],
      crawledCount: crawledPosts.length,
    });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "크롤링 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
