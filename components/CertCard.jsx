"use client";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function CertCard({ cert }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="group block overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300cursor-pointer">
          <div className="relative w-full h-48">
            <Image
              src={cert.image}
              alt={cert.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2 text-white">
              {cert.name}
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              {cert.issuer} · {cert.date}
            </p>

            <div className="flex items-center gap-3">
              <button className="inline-block text-sm text-white group-hover:text-accent transition-all">
                View Certificate
              </button>
            </div>
          </div>
        </div>
      </SheetTrigger>

      <SheetContent side="center" className="p-0 max-w-full">
        <SheetHeader>
          <SheetTitle className="flex text-3xl items-center justify-center">
            {cert.name}
          </SheetTitle>
        </SheetHeader>

        <div className="flex justify-center items-center p-6">
          <img
            src={cert.image}
            alt={cert.name}
            className="mx-auto w-full max-w-[900px] max-h-[80vh] object-contain"
          />
        </div>

        <SheetFooter>
          <div className="flex items-center gap-3">
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
