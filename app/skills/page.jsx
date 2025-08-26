"use client";
import { motion } from "framer-motion";
import { skills } from "./data/data";
import { useState } from "react";
import SkillCard from "./components/skillcard";
import DescriptionCard from "./components/description";

function Skills() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleButtonPress(index) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }
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
              const isActive = activeIndex === index;


                return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                  {isActive ? (
                  // description card 
                    <DescriptionCard onClick={() => handleButtonPress(index)}/>
                  ): (
                    // skill card
                      <SkillCard skill={skill} onClick={() => handleButtonPress(index)}/>
                    )}
                </div>
              
            })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
