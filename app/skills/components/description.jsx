"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
function DescriptionCard({onClick}){
    return(
        <motion.div
        initial={{opacity: 0}}
        animate={{
            opacity: 1, 
            transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"}
        }}>
             {/* Top */}
      <div className="w-full flex justify-between items-center">
        <div className="text-xl font-extrabold  transition-all duration-500">
          {/* Instead of skill.num, maybe just "Info" */}
          Info
        </div>
        <button
          onClick={onClick}
          className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500
          flex justify-center items-center hover:-rotate-45"
        >
          <BsArrowDownRight className="text-primary text-3xl rotate-180" />
        </button>
      </div>

      {/* heading */}
      <h2 className="text-[42px] font-bold leading-none text-accent group-hover:text-white transition-all duration-500">
        Description
      </h2>

      {/* description text */}
      <p className="text-lg text-white/80 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>

      {/* border */}
      <div className="border-b border-white/20 w-full"></div>
        </motion.div>
    )
}

export default DescriptionCard;