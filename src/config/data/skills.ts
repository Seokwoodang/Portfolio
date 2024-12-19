import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiJest,
  SiStorybook,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiAmazon,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: React.ComponentType;
  color: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
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
      // { name: "Cypress", icon: SiCypress, color: "#17202C" },
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
    skills: [{ name: "AWS", icon: SiAmazon, color: "#e87909" }],
  },
];
