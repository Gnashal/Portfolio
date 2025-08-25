"use client";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import { DiJavascript1, DiPython, DiJava, DiReact, DiNodejs, DiDocker, 
    DiGithub, DiGit, DiMongodb, DiPostgresql, DiMysql, DiHtml5, DiCss3, DiAws, DiTerminal, DiGo, DiNginx } from "react-icons/di";
import IconView from "./components/iconview";
const skills = [
  {
    num: '01',
    title: 'Programming Languages',
    icons: [
      { icon: <DiJavascript1 key="js" />, label: 'JavaScript' },
      { icon: <DiPython key="py" />, label: 'Python' },
      { icon: <DiJava key="java" />, label: 'Java' },
      { icon: <DiTerminal key="c" />, label: 'C' },
      { icon: <DiGo key="go" />, label: 'Go' },
    ],
  },
  {
    num: '02',
    title: 'Frameworks & Libraries',
    icons: [
      { icon: <DiReact key="react" />, label: 'React' },
      { icon: <DiNodejs key="node" />, label: 'Node.js' },
    ],
  },
  {
    num: '03',
    title: 'Tools & Platforms',
    icons: [
      { icon: <DiGit key="git" />, label: 'Git' },
      { icon: <DiGithub key="github" />, label: 'GitHub' },
      { icon: <DiDocker key="docker" />, label: 'Docker' },
      { icon: <DiAws key="aws" />, label: 'AWS' },
    ],
  },
  {
    num: '04',
    title: 'Databases',
    icons: [
      { icon: <DiMongodb key="mongodb" />, label: 'MongoDB' },
      { icon: <DiPostgresql key="postgresql" />, label: 'PostgreSQL' },
      { icon: <DiMysql key="mysql" />, label: 'MySQL' },
    ],
  },
  {
    num: '05',
    title: 'Web Technologies',
    icons: [
      { icon: <DiHtml5 key="html5" />, label: 'HTML5' },
      { icon: <DiCss3 key="css3" />, label: 'CSS3' },
    ],
  },
];

function Skills() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div 
            initial= {{opacity: 0}}
            animate={{
                opacity: 1,
                transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            {skills.map((skill, index) => {
                return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                    {/* Top */}
                    <div className="w-full flex justify-between items-center">
                        <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transtition-all duration-500">
                            {skill.num}
                         </div>
                         <div className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500
                         flex justify-center items-center hover:-rotate-45">
                            <BsArrowDownRight className="text-primary text-3xl"/>
                         </div>
                    </div>
                    {/* heading */}
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{skill.title}</h2>
                    {/* icon */}
                    <IconView icons={skill.icons} />
                    {/* border */}
                    <div className="border-b border-white/20 w-full"></div>    
                </div>
              
            })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
