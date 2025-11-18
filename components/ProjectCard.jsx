"use client";
import Image from "next/image";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="group block overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
    >
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

        <span className="inline-block text-sm text-white group-hover:text-accent transition-all">
          View Project →
        </span>
      </div>
    </a>
  );
}
