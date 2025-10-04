import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const services = [
  {
    title: "Building Construction",
    desc: "Post-construction services give you peace of mind knowing that we are still here for you even after.",
  },
  {
    title: "Architecture Design",
    desc: "Our expert team transforms ideas into detailed plans, ensuring every project blends creativity with functionality.",
  },
  {
    title: "Building Renovation",
    desc: "We breathe new life into existing structures, enhancing beauty and efficiency while preserving their core strength.",
  },
  {
    title: "Building Maintenance",
    desc: "Regular maintenance services keep your property in top condition, preventing costly issues and ensuring durability.",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1D] text-gray-300 py-10 px-6 md:px-12 font-montserrat">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & About */}
        <div className="md:col-span-2">
          <img
            src="/logo.png"
            alt="Stable Homes Logo"
            className="h-12 mb-4 invert"
          />
          <p className="text-sm">
            Building trust, reliability, and lasting value with every project.
            At Stable Homes, your vision is our foundation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-orange-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {services.map((service, index) => (
              <li key={index}>
                <Link href="/services" className="hover:text-orange-500">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@stablehomes.com</li>
            <li>Phone: +234 800 123 4567</li>
            <li>Address: 123 Main Street, Lagos, Nigeria</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-orange-500">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-orange-500">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-orange-500">
              <FaLinkedinIn />
            </Link>
            <Link href="#" className="hover:text-orange-500">
              <FaInstagram />
            </Link>
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
