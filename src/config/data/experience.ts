export interface Experience {
  company: string;
  period: string;
  role: string;
  projects: string[];
}

export interface Project {
  id: string; // 추가: 프로젝트 고유 식별자
  name: string;
  period: string;
  description: string;
  techStack: string[];
  achievements: string[];
  link?: string; // 추가: 프로젝트 링크
  media?: {
    type: "image" | "video";
    url: string;
    thumbnail?: string; // 비디오인 경우 썸네일 이미지 URL
  }[]; // 프로젝트 미디어 (이미지 또는 비디오)
  details?: string; // 추가: 프로젝트 상세 설명
}

export const experiences: Experience[] = [
  {
    company: "EDINT",
    period: "2022.08 - 2024-04",
    role: "Frontend 개발",
    projects: [
      "Cheating Challenge 개발",
      "ProctoringX 출시",
      "Proctormatic Backoffice 개발",
      "Proctormatic Korea/Global 출시",
    ],
  },
  {
    company: "SPARTA",
    period: "2024.04 - 현재",
    role: "Frontend 강사",
    projects: ["React와 Next를 통한 웹개발 강의"],
  },
];

export const projects: Project[] = [
  {
    id: "proctoringx",
    name: "ProctoringX",
    period: "2023.12 - 2024.02",
    description: "Xinics사의 LMS 서비스 통합 프로젝트",
    techStack: [
      "TypeScript",
      "React",
      "React Query",
      "Recoil",
      "ESLint",
      "Prettier",
    ],
    achievements: [
      "민감 정보 페이지를 위한 token 발급 및 세션 저장소를 도입으로 보안성 증가",
      "Atomic Pattern 적용하여 작업 안정성 및 생산성 개선",
      "S3 Presigned URL을 통한 이미지 업로드 구현",
    ],
    link: "https://proctoringx.com",
    details:
      "ProctoringX는 온라인 시험 감독 시스템으로, 학습자들의 공정한 평가를 위한 솔루션입니다. LMS 서비스와의 통합을 통해 더욱 효율적인 온라인 시험 환경을 제공합니다.",
    media: [
      {
        type: "image",
        url: "/projects/proctorx1.png",
      },
      {
        type: "image",
        url: "/projects/proctorx2.png",
      },
      {
        type: "image",
        url: "/projects/proctorx3.png",
      },
      {
        type: "image",
        url: "/projects/proctorx4.png",
      },
    ],
  },
  {
    id: "proctormatic",
    name: "Proctormatic Korea / Global",
    period: "2023.02 - 2023.11",
    description: "AI 기반 온라인 시험 관리감독 글로벌 서비스",
    techStack: ["TypeScript", "React", "React Query", "Recoil"],
    achievements: [
      "i18next를 통한 다국어 처리",
      "Atomic Pattern 적용하여 작업 안정성 및 생산성 개선",
      "S3 Presigned URL을 통한 이미지 업로드 구현",
    ],
    link: "https://proctormatic.com",
    details:
      "ProctoringX는 온라인 시험 감독 시스템으로, 학습자들의 공정한 평가를 위한 솔루션입니다. LMS 서비스와의 통합을 통해 더욱 효율적인 온라인 시험 환경을 제공합니다.",
    media: [
      {
        type: "video",
        url: "/projects/proctor1.mp4",
        // thumbnail: "/projects/thumbnail.png",
      },
      {
        type: "video",
        url: "/projects/proctor2.mp4",
      },
      {
        type: "video",
        url: "/projects/proctor3.mp4",
      },
    ],
  },
  {
    id: "proctorBack",
    name: "Proctormatic BackOffice",
    period: "2023.07 - 2023.11",
    description: "Proctormatic 서비스의 고객 응대 및 서버 관리용 백오피스",
    techStack: ["TypeScript", "React", "React Query", "Recoil"],
    achievements: [
      "16개의 Feature 기획 및 팀원들에게 맞는 작업 할당",
      "리프레쉬 토큰으로 로그인 인증을 구현하여 보안성 향상",
      "풀스택을 지향하는 서버 개발자에게 React와 Atomic Pattern 온보딩",
    ],
    media: [
      {
        type: "video",
        url: "/projects/demo.mp4",
        thumbnail: "/projects/thumbnail.png",
      },
      {
        type: "image",
        url: "/projects/dashboard.png",
      },
      {
        type: "image",
        url: "/projects/mobile.png",
      },
    ],
  },
];
