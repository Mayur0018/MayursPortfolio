import React from "react";
import { motion } from "framer-motion";
import  SkillCard  from "./SkillCard";
import { SiReact, SiNodedotjs, SiTailwindcss, SiMongodb, SiCss3, SiHtml5, SiJavascript, SiFigma, SiGit, SiNextdotjs } from "react-icons/si";
 
 type SkillItem = {
  title: string;
  variant: 'light' | 'dark';
  iconType: 'react';
  iconComponent: React.ElementType;
};

 const skillsData: SkillItem[] = [
  { title: "React", variant: 'light' as const, iconType: 'react' as const, iconComponent: SiReact },
  { title: "Node.js", variant: 'light' as const, iconType: 'react' as const, iconComponent: SiNodedotjs },
  { title: "Tailwind CSS", variant: 'light' as const, iconType: 'react' as const, iconComponent: SiTailwindcss },
  { title: "CSS", variant: 'light' as const, iconType: 'react' as const, iconComponent: SiCss3 },
  { title: "MongoDB", variant: 'light' as const, iconType: 'react' as const, iconComponent: SiMongodb },
  { title: "HTML", variant: 'light' as const, iconType: 'react' as const, iconComponent: SiHtml5 },
  { title: "JavaScript", variant: 'light' as const, iconType: 'react' as const, iconComponent: SiJavascript },
  { title: "Figma", variant: 'light' as const, iconType: 'react' as const, iconComponent: SiFigma },
  { title: "Git", variant: 'light' as const, iconType: 'react' as const, iconComponent: SiGit },
  { title: "Next.js", variant: 'light' as const, iconType: 'react' as const, iconComponent: SiNextdotjs },
];
 
export default function SkillsSection() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="skills"
      className="flex flex-col justify-start items-center px-5 py-20 w-full bg-white min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.header
        className="mb-16 text-4xl font-bold text-black"
        variants={itemVariants}
      >
        <h1>
          
           <div className="font-bold">My Skills</div>
         </h1>
      </motion.header>
      <motion.div 
        className="grid grid-cols-5 gap-5 w-full max-w-[1200px] max-md:grid-cols-3 max-sm:grid-cols-2"
        variants={containerVariants}
      >
         {skillsData.map((skill, index) => (
          <motion.div key={`${skill.title}-${index}`} variants={itemVariants}>
           <SkillCard
             title={skill.title}
            icon={""}
             variant={skill.variant}
             iconType={skill.iconType}
            iconText={""}
            iconComponent={skill.iconComponent}
           />
          </motion.div>
         ))}
       </motion.div>
    </motion.section>
   );
 }
