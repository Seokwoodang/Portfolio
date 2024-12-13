"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <motion.div
        className="text-center space-y-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          강석우
        </motion.h1>

        <motion.h2
          className="text-xl md:text-4xl text-gray-700 dark:text-gray-300 px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Frontend Developer
        </motion.h2>

        <motion.p
          className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 md:px-0 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          초기 스타트업에서 개발의 설계부터 운영까지 모두 경험한 3년차
          프론트엔드 개발자입니다. 서비스와 비즈니스를 우선하며 개발 생산성
          개선에 관심이 많습니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 justify-center flex-col sm:flex-row px-4 md:px-0"
        >
          <a
            href="https://github.com/Seokwoodang"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors text-sm md:text-base"
          >
            GitHub
          </a>
          <a
            href="http://inblog.ai/luke"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm md:text-base"
          >
            Blog
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-gray-600 dark:text-gray-400" />
      </motion.div>
    </div>
  );
}
