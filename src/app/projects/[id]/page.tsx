"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/config/data/experience";
import { useParams } from "next/navigation";
import ProjectMediaSlider from "../components/MediaSlider";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>프로젝트를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            돌아가기
          </Link>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {project.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.period}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                프로젝트 방문하기
              </a>
            )}

            {project.media && project.media.length > 0 && (
              <ProjectMediaSlider
                media={project.media}
                projectName={project.name}
              />
            )}

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">프로젝트 개요</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.details || project.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">주요 성과</h2>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">사용 기술</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
