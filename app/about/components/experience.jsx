"use client";

import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { experience } from "../data/data";

export default function Experience() {
  return (
    <TabsContent value="experience" className="w-full">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <div className="flex flex-row gap-6">
          <img
            src={experience.icon}
            alt="experience_icon"
            className="flex w-[40px]"
          />
          <h3 className="text-4xl font-bold">{experience.title}</h3>
        </div>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-[20px]">
          {experience.description}
        </p>
        <ScrollArea className="h-[500px]">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {experience.items.map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-[#232329] px-8 py-6 rounded-[20px] flex flex-col items-center lg:items-start gap-3"
                >
                  <span className="text-accent text-sm text-center lg:text-left">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold max-w-[300px] text-center lg:text-left">
                    {item.company}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="max-w-[300px] text-center lg:text-left text-white/60">
                      {item.position}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </div>
    </TabsContent>
  );
}
