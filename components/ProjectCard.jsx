"use client";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  image,
  link,
  github,
}) {
  return (
    <div className="group flex flex-col overflow-hidden bg-white/5 backdrop-blur border-y sm:border border-white/10 hover:border-white/20 transition-colors duration-300 h-full">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex gap-3 mt-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-white bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 hover:bg-white/10 hover:text-accent transition-all duration-300 rounded"
            >
              View Project
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-white bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 hover:bg-white/10 hover:text-accent transition-all duration-300 rounded"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
