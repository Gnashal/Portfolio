"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

function IconView({ icons }) {
  return (
    <TooltipProvider>
      <div className="flex gap-6 mt-4 flex-wrap">
        {icons.map((icon, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <span
                className="w-12 h-12 text-5xl flex justify-center items-center 
                text-white hover:text-accent transition-all duration-500 cursor-pointer"
              >
                {icon.icon}
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">{icon.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default IconView;
