"use client";

import { BsArrowDownRight } from "react-icons/bs";

import IconView from "./iconview";

function SkillCard({skill, onClick}){
    return (
        <>
            {/* Top */}
        <div className="w-full flex justify-between items-center">
            <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transtition-all duration-500">
                {skill.num}
            </div>
            <button className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500
            flex justify-center items-center hover:-rotate-45"
            onClick={onClick}>
                <BsArrowDownRight className="text-primary text-3xl"/>
            </button>
        </div>
        {/* heading */}
        <h2 className="text-[42px] font-bold leading-none text-accent group-hover:text-white transition-all duration-500">{skill.title}</h2>
        {/* icon */}
        <IconView icons={skill.icons} />
        {/* border */}
        <div className="border-b border-white/20 w-full"></div>   
        </>
    )
}
export default SkillCard;