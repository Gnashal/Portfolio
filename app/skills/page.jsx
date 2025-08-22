"use client";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import { DiJavascript1, DiPython, DiJava, DiReact, DiNodejs, DiDocker, 
    DiGithub, DiGit, DiMongodb, DiPostgresql, DiMysql, DiHtml5, DiCss3, DiAws, DiTerminal, DiGo, DiNginx } from "react-icons/di";

const skills = [
  {
    num: '01',
    title: 'Programming Languages',
    description: 'JavaScript, Python, Java, C',
    icons: [<DiJavascript1 key="js" />, <DiPython key="py" />, <DiJava key="java" />, <DiTerminal key="c" />, <DiGo key="go"/>],
  },
  {
    num: '02',
    title: 'Frameworks & Libraries',
    description: 'React, Node.js',
    icons: [<DiReact key="react" />, <DiNodejs key="node" />],
  },
  {
    num: '03',
    title: 'Tools & Platforms',
    description: 'Git, GitHub, Docker, AWS',
    icons: [<DiGit key="git" />, <DiGithub key="github" />, <DiDocker key="docker" />, <DiAws key="aws" />],
  },
  {
    num: '04',
    title: 'Databases',
    description: 'MongoDB, PostgreSQL, MySQL',
    icons: [<DiMongodb key="mongodb" />, <DiPostgresql key="postgresql" />, <DiMysql key="mysql" />],
  },
  {
    num: '05',
    title: 'Web Technologies',
    description: 'HTML5, CSS3',
    icons: [<DiHtml5 key="html5" />, <DiCss3 key="css3" />],
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
                    {/* description */}
                    <div className="flex gap-6 mt-4">
                        {skill.icons.map((icon, index) => {
                            return <span key={index}
                            className="w-12 h-12 text-5xl flex justify-center
                            items-center text-white hover:text-accent transition-all duration-500"
                            >{icon}
                            </span>
                        })}
                    </div>
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
