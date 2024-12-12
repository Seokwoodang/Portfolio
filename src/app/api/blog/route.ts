import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// 일반적인 블로그 포스트 조회 API
export async function GET() {
  try {
    console.log("Fetching posts from database...");
    const { data: posts, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Database fetch error:", error);
      throw error;
    }

    return NextResponse.json({ posts: posts || [] });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return NextResponse.json(
      { error: "블로그 포스트를 가져오는데 실패했습니다." },
      { status: 500 }
    );
  }
}
