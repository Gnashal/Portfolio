"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import InfoCard from "@/components/InfoCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SelectLabel } from "@radix-ui/react-select";
import { aboutme } from "./data/data";
function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col p-10 gap-6 bg-[#27272c] rounded-[10px] mx-4">
              <h3 className="text-4xl text-accent ">Let's Work Together</h3>
              <p className="text-white/60">
                This could be the start of an epic partnership.
              </p>
              {/* input  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone" />
              </div>
              {/* select  */}
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="est">Frontend Development</SelectItem>
                    <SelectItem value="cst">Backend Developement</SelectItem>
                    <SelectItem value="mst">Fullstack Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* text area */}
              <Textarea />
            </form>
          </div>
          {/* info */}
          <div
            className="flex-1 flex items-center xl:justify-end order-1 xl:order-none 
                    mb-8 xl:mb-0 "
          >
            <InfoCard
              photo={aboutme.photo}
              aboutMe={aboutme.description}
              age={aboutme.age}
              hobbies={aboutme.hobbies}
              socials={aboutme.socials}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Contact;
