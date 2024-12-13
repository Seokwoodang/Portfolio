export interface Experience {
  company: string;
  period: string;
  role: string;
  projects: string[];
}

export interface Project {
  name: string;
  period: string;
  description: string;
  techStack: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: "EDINT",
    period: "2022.08 - 현재",
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
      "페이지 템플릿, 모바일 템플릿 등 프로젝트에서 사용되는 공용 컴포넌트 제작",
      "Atomic Pattern 적용하여 작업 안정성 및 생산성 개선",
      "S3 Presigned URL을 통한 이미지 업로드 구현",
    ],
  },
  {
    name: "Proctormatic BackOffice",
    period: "2023.07 - 2023.11",
    description: "Proctormatic 서비스의 고객 응대 및 서버 관리용 백오피스",
    techStack: ["TypeScript", "React", "React Query", "Recoil"],
    achievements: [
      "16개의 Feature 기획 및 팀원들에게 맞는 작업 할당",
      "리프레쉬 토큰으로 로그인 인증을 구현하여 보안성 향상",
      "풀스택을 지향하는 서버 개발자에게 React와 Atomic Pattern 온보딩",
    ],
  },
];
