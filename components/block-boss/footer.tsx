// components/Footer.tsx
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const serviceLinks = [
  {
    href: "/block-boss",
    label: "Stable Homes",
  },
  { href: "/services/building", label: "Building Construction" },
  { href: "/services/flooring-roofing", label: "Flooring and Roofing" },
  { href: "/services/architecture-design", label: "Architecture Design" },
  { href: "/services/renovation", label: "Renovation & Remodeling" },
  { href: "/services/civil", label: "Civil Engineering" },
  { href: "/services/interior", label: "Interior Design" },
  { href: "/services/project-management", label: "Project Management" },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1D] text-gray-300 py-10 px-6 md:px-12 font-montserrat">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & About */}
        <div className="md:col-span-2">
          {/* Use Link without nested <a> */}
          <Link
            href="/"
            aria-label="Stable Homes homepage"
            className="inline-block"
          >
            <img
              src="/block-boss-logo.png"
              alt="Stable Homes Logo"
              className="h-14 mb-4"
            />
          </Link>

          <p className="text-sm leading-relaxed">
            Building trust, reliability, and lasting value with every project.
            At Stable Homes, your vision is our foundation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>
            <li>
              {/* <Link href="/about" className="hover:text-orange-500 transition"> */}
              <button onClick={() => scrollToSection("about")}>About Us</button>
              {/* </Link> */}
            </li>
            <li>
              <Link href="/quote" className="hover:text-orange-500 transition">
                Quotation
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-orange-500 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services (matching nav) */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="hover:text-orange-500 transition"
                  aria-label={s.label}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:info@stablehomes.com"
                className="hover:text-orange-500"
              >
                info@stablehomes.com
              </a>
            </li>
            <li>
              <a href="tel:+2348001234567" className="hover:text-orange-500">
                +234 800 123 4567
              </a>
            </li>
            <li>123 Main Street, Abuja, Nigeria</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* External links should be <a> */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Stable Homes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
