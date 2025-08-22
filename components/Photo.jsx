"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import pic1 from '../public/assets/pic1.png';
function Photo() {
    return(
        <div className="w-full h-full relative">
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1,
                transition: {
                    delay: 2, duration: 0.4, ease: "easeIn",
                },
            }}
            >
            {/* image */}
                <motion.div 
                 initial={{opacity:0}}
                 animate={{opacity:1,
                transition: {
                    delay: 2.4, duration: 0.4, ease: "easeInOut",
                },
                }}
                className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
                    <Image src={pic1} alt="Yousif Ceballos" className="object-contain" quality={100} fill priority />
                </motion.div>
                {/* circle */}
                <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                fill="transparent" 
                viewBox="0 0 506 506"
                xmlns="htttp://www.w3.org/2000/svg">
                    <motion.circle 
                    cx="253" 
                    cy="253" 
                    r="250" 
                    stroke="#00ff99" 
                    strokeWidth="6"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0"}}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360]
                    }}
                    transition={{
                        duration: 24,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}/>
                </motion.svg>
            </motion.div>
        </div>
    )
}
export default Photo;