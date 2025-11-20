"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SelectLabel } from "@radix-ui/react-select";

export default function HireMeForm() {
  return (
    <div className="xl:h-[54%] order-2 xl:order-none">
      <form className="flex flex-col p-10 gap-6 rounded-[10px] mx-4">
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
        <Button className="w-full mt-4">Submit</Button>
      </form>
    </div>
  );
}
