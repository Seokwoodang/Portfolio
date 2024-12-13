export interface BlogPost {
  title: string;
  description?: string;
  link: string;
  image_url?: string;
  published_at?: string;
  category?: string;
}

export const ITEMS_PER_PAGE = 15;

// 날짜 포맷팅 함수
export function formatDate(dateString?: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
