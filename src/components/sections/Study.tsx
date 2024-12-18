"use client";

import { studyData } from "@/config/data/study";
import { motion } from "framer-motion";
import { Book, Calendar, Github } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Study() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-8"
        >
          <div className="flex items-center gap-2 mb-12">
            <Book className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-bold">Study & Growth</h2>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-8"
          >
            <a
              href="https://github.com/monthly-cs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>스터디 GitHub 방문하기</span>
            </a>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {studyData.map((study, index) => (
              <a key={index} href={`${study.url}`} target="_blank">
                <motion.div
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {study.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{study.period}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm whitespace-nowrap min-w-[70px] text-center">
                      {study.type}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {study.description}
                  </p>
                </motion.div>
              </a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">스터디 운영 방식</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                매월 새로운 주제 선정 및 학습
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                주간 미팅을 통한 지식 공유
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                GitHub를 통한 학습 내용 정리 및 공유
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                실무 적용 사례 공유 및 토론
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
