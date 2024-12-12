import PageTransition from "@/components/layout/PageTransition";
import Blog from "@/components/sections/Blog";

export const metadata = {
  title: "블로그 | 강석우 포트폴리오",
  description: "프론트엔드 개발자 강석우의 기술 블로그 글 모음입니다.",
};

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        <Blog />
      </div>
    </PageTransition>
  );
}
