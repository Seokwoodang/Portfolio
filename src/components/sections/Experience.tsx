"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap } from "lucide-react";

const experiences = [
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

const projects = [
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Experience() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Experience Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Building2 className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {exp.period}
                  </p>
                  <p className="text-purple-600 font-medium mt-2">{exp.role}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.projects.map((project, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {project.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
