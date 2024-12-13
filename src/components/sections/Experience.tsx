"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap } from "lucide-react";
import { experiences, projects } from "@/config/data/experience";

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
              <Building2 className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Work Experience
              </h2>
            </div>
            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-lg"
                >
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {exp.company}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm md:text-base">
                    {exp.period}
                  </p>
                  <p className="text-purple-600 font-medium mt-2 text-sm md:text-base">
                    {exp.role}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.projects.map((project, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm md:text-base"
                      >
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
              <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Featured Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-lg"
                >
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm md:text-base">
                    {project.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-xs md:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm md:text-base"
                      >
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
