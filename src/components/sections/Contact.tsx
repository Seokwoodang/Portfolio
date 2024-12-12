"use client";

import { motion } from "framer-motion";
import { Mail, Github, Globe } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "swoo1429@gmail.com",
    href: "mailto:swoo1429@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Seokwoodang",
    href: "https://github.com/Seokwoodang",
  },
  {
    icon: Globe,
    label: "Blog",
    value: "inblog.ai/luke",
    href: "http://inblog.ai/luke",
  },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Contact() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-600 dark:text-gray-400">
              언제든 연락 주시면 빠르게 답변 드리도록 하겠습니다.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <contact.icon className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{contact.label}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center text-gray-600 dark:text-gray-400"
          >
            <p>현재 새로운 기회를 찾고 있습니다.</p>
            <p>함께 일하고 싶은 개발자가 되는 것을 목표로 하고 있습니다.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
