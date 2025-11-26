"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import AboutMe from "./components/aboutme";
import Education from "./components/education";
import Experience from "./components/experience";
function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.2,
            ease: "easeIn",
          },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="aboutme"
            className="flex flex-col xl:flex-row gap-[60px] "
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="aboutme">About Me</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
            </TabsList>
            <div className="min-h-[80vh] w-full">
              {/* about me */}
              <AboutMe />
              {/* education */}
              <Education />
              {/* experience */}
              <Experience />
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
}
export default About;
