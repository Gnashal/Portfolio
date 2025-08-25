"use client";

import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";


const education = {
        icon: "/assets/resume/cap.svg", 
        title: "My Education", 
        description: "Coding my way through college, chasing dreams and deadlines!",
        items: [
            {
                insitution: "University of San Carlos",
                level: "Bachelor of Science in Information Technology",
                year: "2023 - Present",
            },
            {
                insitution: "Patronage of Mary Development School",
                level: "Seior High School - STEM Strand",
                year: "2021 - 2023",
            },
            {
                insitution: "Patronage of Mary Development School",
                level: "Junior High School",
                year: "2017 - 2021",
            },
            {
                insitution: "Patronage of Mary Development School",
                level: "Elementary School",
                year: "2009 - 2017",
            },
            
        ]
    }

function Education() {
    return (
        <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-[20px]">{education.description}</p>
                <ScrollArea className="h-[500px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => {
                            return (
                            <li key={index} className="bg-[#232329] px-8 py-6 rounded-[20px] flex flex-col items-center lg:items-start gap-3">
                            <span className="text-accent text-sm text-center lg:text-left">{item.year}</span>
                            <h3 className="text-xl font-semibold max-w-[300px] text-center lg:text-left">
                                {item.insitution}
                            </h3>
                            <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="max-w-[300px] text-center lg:text-left text-white/60">
                                {item.level}
                                </p>
                            </div>
                            </li>
                            )
                            })}
                            </ul>
                </ScrollArea>
            </div>
        </TabsContent>
    )
}
export default Education;