import Blog from "@/components/sections/Blog";
import PageTransition from "@/components/layout/PageTransition";
import { createMetadata } from "@/config";

export const metadata = createMetadata({
  title: "블로그",
  description:
    "프론트엔드 개발 관련 기술 블로그 글 모음입니다. React, Next.js, TypeScript 등 다양한 웹 개발 기술을 다룹니다.",
});

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        <Blog />
      </div>
    </PageTransition>
  );
}
