"use client"

import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";


const about = {
        title: "About Me", 
        description: 
        `My name is Yousif Quirico Ceballos, 
        a 3rd-Year BSIT student from the University of San Carlos and an aspiring Software Engineer. 
        Efficient, versatile, and innovative, I am a collaborative problem solver who thrives on learning and creating user-focused solutions. 
        Driven by curiosity and adaptability, I consistently deliver impactful results while working seamlessly with teams.`,
        info:[
            {
            fieldName: "Name", 
            fieldValue: "Yousif Quirico R. Ceballos"
            },
            {
            fieldName: "Email", 
            fieldValue: "yousifceballos@gmail.com"
            },
            {
            fieldName: "Phone", 
            fieldValue: "(+63) 927 001 7284"
            },
            {
            fieldName: "Experience", 
            fieldValue: "3 Years"
            },
            {
            fieldName: "Nationality", 
            fieldValue: "Filipino"
            },
            {
            fieldName: "Languages", 
            fieldValue: "English, Bisaya (Cebuano), Tagalog"
            },
            
        ]
    }

function AboutMe(){
    return (
        <TabsContent value="aboutme"className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{about.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-[20px]">{about.description}</p>
                                <ScrollArea className="h-[500px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {about.info.map((item, index) => {
                                            return <li key={index} className="bg-[#232329] px-8 py-4 rounded-[20px] 
                                            flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className='text-accent text-center lg:text-left'>{item.fieldName}</span>
                                                <span className='text-xl max-w-[300px] min-h-[60px] text-center lg:text-left'>{item.fieldValue}</span>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                                </div>
                            </TabsContent>
    ) 
}
export default AboutMe;