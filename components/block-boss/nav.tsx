"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close sheet after scrolling
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-200 px-6 md:px-16 py-3 sm:py-1 flex justify-between items-center z-50 shadow-md">
      {/* Logo */}
      <Link href="/">
        <img src="/block-boss-logo.png" alt="Logo" className="h-12 md:h-20" />
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
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-orange-500 transition"
                >
                  Home
                </button>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* About Us */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-orange-500 transition"
                >
                  About Us
                </button>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <div
                  onClick={() => scrollToSection("our-services")}
                  className="hover:text-orange-500 transition"
                >
                  Services
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[250px] gap-3 p-4">
                  {[
                    {
                      href: "/services/building",
                      label: "Building Construction",
                    },
                    {
                      href: "/services/block-industry",
                      label: "Industrial Scale Block Production",
                    },
                    {
                      href: "/services/flooring-roofing",
                      label: "Flooring and Roofing",
                    },
                    {
                      href: "/services/architecture-design",
                      label: "Architecture Design",
                    },
                    {
                      href: "/services/renovation",
                      label: "Renovation & Remodeling",
                    },
                    { href: "/services/civil", label: "Civil Engineering" },
                    { href: "/services/interior", label: "Interior Design" },
                    {
                      href: "/services/project-management",
                      label: "Project Management",
                    },
                  ].map((service) => (
                    <li key={service.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={service.href}
                          className="block p-2 rounded-md hover:bg-slate-100"
                        >
                          {service.label}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Quotation */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <button
                  onClick={() => scrollToSection("quote")}
                  className="rounded-lg px-4 py-2 text-sm font-medium transition"
                >
                  Quotation
                </button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-orange-500 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 transition"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu (Sheet) */}
      <div className="flex md:hidden items-center gap-4 font-montserrat">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md hover:bg-slate-300">
              <TbMenu className="text-3xl" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col gap-6 mt-8 font-montserrat text-center pt-4">
              <button
                onClick={() => {
                  scrollToSection("home");
                  setOpen(false);
                }}
                className="text-lg font-medium hover:underline"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="text-lg font-medium hover:underline"
              >
                About Us
              </button>

              <div>
                <Link
                  href="/services/block-industry"
                  className="text-lg font-medium mb-2 hover:underline"
                >
                  Services
                </Link>
                <div className="flex flex-col gap-2 pl-3 mt-2">
                  {[
                    {
                      href: "/services/building",
                      label: "Building Construction",
                    },
                    {
                      href: "/services/block-industry",
                      label: "Industrial Scale Block Production",
                    },
                    {
                      href: "/services/flooring-roofing",
                      label: "Flooring and Roofing",
                    },
                    {
                      href: "/services/architecture-design",
                      label: "Architecture Design",
                    },
                    {
                      href: "/services/renovation",
                      label: "Renovation & Remodeling",
                    },
                    { href: "/services/civil", label: "Civil Engineering" },
                    { href: "/services/interior", label: "Interior Design" },
                    {
                      href: "/services/project-management",
                      label: "Project Management",
                    },
                  ].map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      onClick={() => setOpen(false)}
                      className="underline"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollToSection("quote")}
                className="text-lg font-medium hover:underline"
              >
                Quotation
              </button>

              <Link href="/contact" onClick={() => setOpen(false)}>
                <button className="bg-orange-500 rounded-lg px-4 py-2 text-white hover:bg-orange-600 transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Nav;
