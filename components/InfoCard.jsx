"use client";
import Image from "next/image";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function InfoCard({ photo, aboutMe, age, hobbies, socials }) {
  return (
    <div className="p-6 flex flex-col items-center space-y-4 text-white">
      {/* Profile Photo */}
      <div className="relative w-80 h-80 rounded-xl overflow-hidden border-4 border-accent mb-4">
        <Image
          src={photo}
          alt="Profile Photo"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* About Me */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-accent">About Me</h2>
        <p className="text-white/60">{aboutMe}</p>
      </div>

      {/* Age and Hobbies */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold">Details</h3>
        <p className="text-accent">
          Age: <span className="text-white">{age}</span>
        </p>
        <p className="text-accent">
          Hobbies: <span className="text-white">{hobbies.join(", ")}</span>
        </p>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 mt-4">
        {socials.github && (
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-accent transition-colors"
          >
            <FaGithub size={24} />
          </a>
        )}
        {socials.facebook && (
          <a
            href={socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-accent transition-colors"
          >
            <FaFacebook size={24} />
          </a>
        )}
        {socials.linkedin && (
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-accent transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        )}
        {socials.instagram && (
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-accent transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        )}
      </div>
    </div>
  );
}

export default InfoCard;
