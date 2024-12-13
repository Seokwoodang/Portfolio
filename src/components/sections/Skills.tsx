"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/config/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
            variants={itemVariants}
            className="text-2xl md:text-4xl font-bold text-center mb-16"
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skillsData.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill) => {
                    const IconComponent = skill.icon as React.ElementType;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2"
                      >
                        <IconComponent
                          className="w-8 h-8 md:w-12 md:h-12 mb-2"
                          style={{ color: skill.color }}
                        />
                        <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
