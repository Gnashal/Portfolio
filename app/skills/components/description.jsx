"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

function DescriptionCard({ onClick , description}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.2, ease: "easeInOut" },
      }}
      className="w-full flex flex-col gap-4"
    >
      {/* Close button aligned to the right */}
      <div className="flex justify-end">
        <button
          onClick={onClick}
          className="w-[60px] h-[60px] rounded-full bg-white hover:bg-accent transition-all duration-300
          flex justify-center items-center hover:-rotate-45"
        >
          <BsArrowDownRight className="text-primary text-2xl rotate-180" />
        </button>
      </div>

      {/* Description text */}
      <p className="text-lg text-white/80 leading-relaxed">
        {description}
      </p>

    </motion.div>
  );
}

export default DescriptionCard;
