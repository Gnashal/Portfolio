"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import HireMeForm from "./HireMeForm";

function Header() {
  return (
    <>
      <header className="py-8 xl:py-8 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Yousif<span className="text-accent">.</span>
            </h1>
          </Link>

          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Sheet>
              <SheetTrigger asChild>
                <Button className="">Hire me</Button>
              </SheetTrigger>
              <SheetContent side="center" className="p-4">
                <VisuallyHidden>
                  <SheetHeader>
                    <SheetTitle>Hire me</SheetTitle>
                  </SheetHeader>
                </VisuallyHidden>
                <div className="mt-2">
                  <HireMeForm />
                </div>
                <SheetFooter>
                  <div className="flex gap-2">
                    <SheetClose asChild>
                      <Button variant="outline">Close</Button>
                    </SheetClose>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
