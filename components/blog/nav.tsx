"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile sheet after scrolling
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1a1a1a]/95 backdrop-blur-sm px-6 md:px-16 py-3 sm:py-2 flex justify-between items-center z-50 shadow-md transition-colors">
      {/* Logo */}
      <Link href="/block-boss">
        <img src="/block-boss-logo.png" alt="Logo" className="h-14 md:h-20" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href="/block-boss"
                  className="hover:text-orange-500 transition"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Impact */}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact button */}
        <Link
          href="/quote"
          onClick={() => scrollToSection("contact")}
          className="bg-orange-500 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 transition"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu (Sheet) */}
      <div className="flex md:hidden items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md hover:bg-slate-300/30">
              <TbMenu className="text-3xl text-white" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-64 bg-[#1a1a1a] text-white border-l border-gray-700"
          >
            <div className="flex flex-col gap-6 mt-10 text-center font-montserrat">
              {/* Home */}
              <Link
                href="/block-boss"
                onClick={() => {
                  scrollToSection("home");
                }}
                className="text-lg font-medium hover:text-orange-500 transition"
              >
                Home
              </Link>

              {/* Contact */}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-orange-500 rounded-lg px-4 py-2 text-white font-medium hover:bg-orange-600 transition mx-auto"
              >
                Contact Us
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Nav;
