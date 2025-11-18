"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "./data/data";
import { motion } from "framer-motion";
export default function Projects() {
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
        <div className="px-6 md:px-10 lg:px-20 py-20 text-white">
          <h1 className="text-4xl font-bold mb-10">Projects</h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, index) => (
              <ProjectCard
                key={index}
                title={proj.title}
                description={proj.description}
                image={proj.image}
                link={proj.link}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
