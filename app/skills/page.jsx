"use client";
import { motion, AnimatePresence} from "framer-motion";
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
                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col justify-center gap-6 group relative"
                  >
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.div
                          key="description"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <DescriptionCard description={skill.description} onClick={() => handleButtonPress(index)} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="skill"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <SkillCard skill={skill} onClick={() => handleButtonPress(index)} />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="border-b border-white/20 w-full mt-6" />
                  </div>
                )
            })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
