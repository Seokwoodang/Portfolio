"use client";

import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiJest,
  SiCypress,
  SiStorybook,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiAmazon,
} from "react-icons/si";

const skillsData = [
  {
    category: "Language",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    category: "Framework",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    ],
  },
  {
    category: "Testing",
    skills: [
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Cypress", icon: SiCypress, color: "#17202C" },
      { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
    ],
  },
  {
    category: "State Management",
    skills: [
      { name: "React Query", icon: SiReactquery, color: "#FF4154" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    category: "Styling",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Styled Components", icon: SiStyledcomponents, color: "#DB7093" },
    ],
  },
  {
    category: "Cloud",
    skills: [{ name: "AWS", icon: SiAmazon, color: "#232F3E" }],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const categoryVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const skillVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.h2
            variants={categoryVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category) => (
              <motion.div
                key={category.category}
                variants={categoryVariants}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center"
                    >
                      <skill.icon
                        className="w-12 h-12 mb-2"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
