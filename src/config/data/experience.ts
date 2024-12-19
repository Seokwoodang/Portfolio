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
  projectExplanation: string[];
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
    projects: [
      "HTML, CSS, JS, TS, React, Next의 기본 개념, 상태 관리 라이프 사이클 메서드 등의 학습 지원을 위해 일대일 멘토링 및 질의 응답 세션을 통해 학습 목표 설정 및 진도 관리",
      "수강생 코드 리뷰 및 코드 품질 개선을 위한 피드백",
      "코드 최적화, 성능 개선 및 리팩토링을 스스로 해낼 수 있도록 지원하고 학습 동기 부여 및 지속적 피드백 제공",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "proctoringx",
    name: "ProctoringX",
    period: "2023.12 - 2024.02",
    description: "LMS 공유대학 온라인 시험 관리서비스",
    techStack: [
      "TypeScript",
      "React",
      "React Query",
      "Recoil",
      "ESLint",
      "Prettier",
    ],
    achievements: [
      "Xinics사의 LMS 서비스 통합 프로젝트",
      "AI를 사용한 공유 대학 온라인 시험 관리 감독 서비스 ",
      "15개 이상 대학 시험 도입 및 적용",
    ],
    link: "https://proctoringx.com",
    details:
      "ProctoringX는 온라인 시험 감독 시스템으로, 학습자들의 공정한 평가를 위한 솔루션입니다. LMS 서비스와의 통합을 통해 더욱 효율적인 온라인 시험 환경을 제공합니다.",
    projectExplanation: [
      "연결된 대학 및 기업 계정 관리 구현",
      "실시간 시험 감독 기능 구현",
      "AI 검사 결과에 따른 분석 페이지 구현",
      "민감 정보 페이지를 위한 token 발급 및 세션 저장소를 도입으로 보안성 증가",
      "Atomic Pattern 적용하여 작업 안정성 및 생산성 개선",
      "S3 Presigned URL을 통한 이미지 업로드 구현",
    ],
    media: [
      {
        type: "image",
        url: "/projects/proctoringX/proctorx1.png",
      },
      {
        type: "image",
        url: "/projects/proctoringX/proctorx2.png",
      },
      {
        type: "image",
        url: "/projects/proctoringX/proctorx3.png",
      },
      {
        type: "image",
        url: "/projects/proctoringX/proctorx4.png",
      },
    ],
  },
  {
    id: "proctormatic",
    name: "Proctormatic Korea / Global",
    period: "2023.02 - 2023.11",
    description: "AI 기반 온라인 시험 자동 관리감독 글로벌 서비스",
    techStack: [
      "TypeScript",
      "React",
      "React Query",
      "axios",
      "Recoil",
      "i18next",
      "storybook",
      "dayjs",
    ],
    achievements: [
      "AI를 통한 부정행위 관리 감독 프로젝트",
      "다국어 서비스 제공을 통한 국제 서비스 런칭",
      "CES 혁신상 및 iF DESIGN AWARD 수상 프로젝트",
    ],
    projectExplanation: [
      "프로젝트 프론트 총괄 및 전체 페이지 담당",
      "개인, 기업 계정 유저 플로우 로직 구현",
      "기업계정을 통한 그룹형 관리 서비스 제공",
      "모바일 시험 생성 기능 구현",
      "개인, 기업플랜에 따른 결제 플로우 및 시스템 구현",
      "공지사항, 문의사항 기능 구현",
      "AI 검사 결과에 따른 분석 페이지 구현",
      "프록토매틱 시리즈를 위한 디자인 시스템 개발",
    ],
    link: "https://proctormatic.com",
    details: "AI 기반 온라인 시험 자동 관리 감독 글로벌 서비스.",
    media: [
      {
        type: "video",
        url: "/projects/proctormatic/proctor1.mp4",
      },
      {
        type: "video",
        url: "/projects/proctormatic/proctor2.mp4",
      },
      {
        type: "video",
        url: "/projects/proctormatic/proctor3.mp4",
      },
    ],
  },
  {
    id: "proctorBack",
    name: "Proctormatic BackOffice",
    period: "2023.07 - 2023.11",
    description: "Proctormatic 서비스의 고객 응대 및 서버 관리용 백오피스",
    projectExplanation: [
      "TPM 직책을 맡아 16개의 Feature 기획 및 팀원들에게 맞는 작업 할당",
      "리프레쉬 토큰으로 로그인 인증을 구현하여 보안성 향상",
      "풀스택을 지향하는 서버 개발자에게 React와 Atomic Pattern 온보딩",
      "결제 대행사 웹훅 연결을 통해 정보 안정성 강화",
      "관리자 페이지를 통한 프로젝트 직원 권한 관리 구현",
      "현재 진행되고 있는 시험 및 완료된 시험 전체 결과 구현",
      "상용화 서버 재배포 기능 추가를 통해 터미널 수작업으로 진행되던 서버 재배포 생산성을 증대시킴.",
    ],
    techStack: ["TypeScript", "React", "React Query", "Recoil"],
    achievements: [
      "추가적인 프로젝트 확장성을 고려한 통합 백오피스",
      "공통, 개발, 마케팅 세 가지 카테고리를 구현",
      "TPM 직책을 맡아 성공적으로 프로젝트를 마무리",
    ],
    media: [
      {
        type: "image",
        url: "/projects/backoffice/back1.png",
      },
      {
        type: "image",
        url: "/projects/backoffice/back2.png",
      },
      {
        type: "image",
        url: "/projects/backoffice/back3.png",
      },
      {
        type: "image",
        url: "/projects/backoffice/back4.png",
      },
    ],
  },
];
