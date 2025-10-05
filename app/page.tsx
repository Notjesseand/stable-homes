"use client";
import React, { useEffect, useState } from "react";
import Nav from "@/components/nav";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaAward, FaQ } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
import { IoIosStar } from "react-icons/io";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Router from "next/router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const Page = () => {
  const services = [
    {
      title: "Industrial-scale block production",
      desc: "High-quality solid, hollow, and interlocking blocks produced on-site at scale, ensuring durability, uniformity, and cost savings.",
      bg: "/services/blocks.jpg",
      slug: "block-industry",
    },
    {
      title: "Building Construction",
      desc: "Post-construction services give you peace of mind knowing that we are still here for you even after.",
      bg: "/services/construction.jpg",
      slug: "building",
    },
    {
      title: "Architecture Design",
      desc: "Our expert team transforms ideas into detailed plans, ensuring every project blends creativity with functionality.",
      bg: "/services/sketch-3.jpg",
      slug: "architecture-design",
    },
    {
      title: "Building Renovation",
      desc: "We breathe new life into existing structures, enhancing beauty and efficiency while preserving their core strength.",
      bg: "/services/renovation.jpg",
      slug: "renovation",
    },
  ];

  const why = [
    {
      title: "Innovative Solutions",
      desc: "We embrace modern construction techniques and smart technologies to deliver creative solutions that make every project more efficient, sustainable, and future-ready.",
      img: "",
      icon: HiOutlineLightBulb,
    },
    {
      title: "",
      desc: "",
      img: "/services/sketch-2.jpg",
      icon: "",
    },
    {
      title: "Quality Craftsmanship",
      desc: "Our commitment to excellence is reflected in every detail. From the foundation to the finishing touches, we ensure top-quality work that stands the test of time.",
      img: "",
      icon: FaAward,
    },
    {
      title: "",
      desc: "",
      img: "/bg.jpg",
      icon: "",
    },
    {
      title: "Expertise And Experience",
      desc: "Backed by years of industry knowledge and a skilled team, we bring proven expertise to every project, ensuring reliable results and client satisfaction.",
      img: "",
      icon: HiBadgeCheck,
    },
    {
      title: "",
      desc: "",
      img: "/services/roofing.jpg",
      icon: "",
    },
  ];

  const testimonials = [
    {
      author: "Mr. & Mrs. Adeyemi",
      desc: "Stable Homes delivered exactly what they promised — and more. From the foundation to the finishing details, the quality of their work was outstanding. We couldn't be happier with our new home!",
    },
    {
      author: "Chika O., Lagos",
      desc: "The team was professional, transparent, and always kept us updated. They turned our renovation into a stress-free experience, and the results are breathtaking.",
    },
    {
      author: "Daniel M., Project Manager",
      desc: "What impressed me most was their attention to detail and commitment to deadlines. Our office project was completed ahead of schedule without compromising quality.",
    },
    {
      author: "Amaka N., Interior Design Client",
      desc: "Stable Homes brought our vision to life with creativity and precision. Their team truly cares about the client's needs, and it shows in their craftsmanship.",
    },
    {
      author: "Oluwaseun T., Business Owner",
      desc: "Reliable, innovative, and trustworthy. We've worked with other contractors before, but this was by far the best experience we've had.",
    },
  ];

  const FAQs = [
    {
      Q: "Do you offer a free, no-obligation quotation?",
      A: "Yes, we do. Simply click the 'Get Quotation' button, and on the quotations page, provide your contact details, project type (renovation, building, interior, etc.), budget (optional), and project details.",
    },
    {
      Q: "What services do you offer?",
      A: "We provide a wide range of construction services including building construction, renovations, architectural design, interior design, civil engineering works, and project management.",
    },
    {
      Q: "How long does a typical project take?",
      A: "The timeline depends on the size and complexity of the project. For example, a small renovation may take a few weeks, while a full construction project could take several months. We always provide a project timeline during the planning stage.",
    },
    {
      Q: "Do you help with design and planning?",
      A: "Absolutely. Our team includes architects and designers who will work with you from concept to completion, ensuring your vision is fully realized before construction begins.",
    },
    {
      Q: "Are your projects covered by warranty?",
      A: "Yes, we stand by the quality of our work. Most of our projects come with a workmanship warranty to give you peace of mind long after completion.",
    },
    {
      Q: "Can you work within my budget?",
      A: "Yes. We tailor our solutions to fit different budget ranges without compromising on quality. We’ll discuss your budget during the quotation process and provide the best options available.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    // cycle through services every 4s on large screens only
    const interval = setInterval(() => {
      if (window.innerWidth >= 1024) {
        setActiveIndex((prev) =>
          prev === null || prev === services.length - 1 ? 0 : prev + 1
        );
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="font-montserrat overflow-hidden">
      <Nav />
      <div className="h-screen bg-[url(/services/crafting.jpg)] bg-cover bg-center relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* hero markup */}
        <div
          id="home"
          className="relative flex flex-col h-full justify-center items-center text-center px-6"
        >
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
          >
            Welcome to Stable Homes
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-4xl font-semibold text-white mt-4 leading-snug max-w-3xl"
          >
            Building dreams with{" "}
            <span className="text-orange-400">precision</span> and{" "}
            <span className="text-orange-400">excellence</span>
          </motion.h2>

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base md:text-lg text-gray-200 mt-6 max-w-2xl leading-relaxed"
          >
            We specialize in turning visions into reality with exceptional
            craftsmanship and meticulous attention to detail. With years of
            experience and a commitment to quality, we make your dream spaces
            come alive.
          </motion.p>
        </div>
      </div>
      {/*  About Us*/}
      <div
        id="about"
        className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="p-4 md:p-6 flex justify-center items-center"
        >
          <img
            src="/services/tractor.jpg"
            className="w-full max-w-lg rounded-3xl object-cover"
            alt="Workers"
          />
        </motion.div>

        {/* about us desc */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col px-4 md:px-8 justify-center"
        >
          <div className="pb-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-orange-400 text-2xl md:text-3xl font-semibold text-center md:text-left"
            >
              About Us
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-semibold mt-6 font-poppins text-center md:text-left"
            >
              Crafting structures that last a lifetime
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="mt-5 text-sm md:text-base text-center md:text-left leading-relaxed"
            >
              Crafting structures that last a lifetime requires a holistic
              approach that integrates advanced materials, resilient design,
              regular maintenance, and sustainability practices. By learning
              from historical examples and leveraging modern technology.
            </motion.p>

            {/* highlights */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              viewport={{ once: true }}
              className="bg-[#e9f7fe] w-full py-6 md:py-8 space-y-2 rounded-3xl mt-5 px-4"
            >
              <p className="flex items-center text-sm md:text-base">
                <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl text-orange-400 mr-2" />
                Comprehensive Services
              </p>
              <p className="flex items-center text-sm md:text-base">
                <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl text-orange-400 mr-2" />
                Advanced Technology
              </p>
              <p className="flex items-center text-sm md:text-base">
                <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl text-orange-400 mr-2" />
                Transparent Communication
              </p>
            </motion.div>

            {/* get quotations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              viewport={{ once: true }}
              className="pt-5 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start"
            >
              <Link
                href="/quote"
                className="px-8 sm:px-10 py-2 bg-black text-white font-semibold rounded flex items-center"
              >
                Get Quotation
                <IoArrowForwardCircleOutline className="ml-3 text-lg sm:text-xl shake-horizontal" />
              </Link>
              <p className="flex items-center text-sm md:text-base">
                <FaPhoneAlt className="mr-2 sm:mr-3" />
                +234 909 909 7788
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* our services */}
      <div id="our-services" className="min-h-screen pb-20 bg-[#e9f7fe] ">
        {/* section header */}
        <motion.p
          className="text-xl md:text-2xl text-center pt-14 md:pt-20 font-semibold text-orange-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.p>

        <motion.p
          className="font-semibold text-3xl md:text-5xl mt-4 md:mt-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our construction services
        </motion.p>

        <motion.p
          className="text-base md:text-lg w-11/12 md:w-2/3 text-center mx-auto mt-4 md:mt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          We specialize in a wide range of construction services, including
          residential, commercial, and industrial projects.
        </motion.p>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 px-4 md:px-8 pt-10 md:pt-20">
          {services.map((service, index) => {
            const isActive =
              typeof window !== "undefined" && window.innerWidth < 1024
                ? true
                : activeIndex === index;

            return (
              <motion.div
                key={index}
                className="group relative h-72 md:h-96 w-full rounded-3xl overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${service.bg})` }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                  delay: index * 0.8, // shorter stagger
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Content wrapper */}
                <Link
                  href={`services/${service.slug}`}
                  className="relative z-10 flex h-full w-full flex-col justify-end px-3 md:px-4 py-2 text-white"
                >
                  {/* Title */}
                  <p
                    className={`text-lg md:text-xl font-semibold text-center transition-all duration-500 md:transform
                    ${
                      isActive
                        ? "-translate-y-[100%]"
                        : "group-hover:-translate-y-[100%]"
                    }`}
                  >
                    {service.title}
                  </p>

                  {/* Description */}
                  <p
                    className={`text-xs md:text-sm text-center mt-3 transition-all duration-500
                    ${
                      isActive
                        ? "opacity-100 -translate-y-6"
                        : "opacity-0 translate-y-6 group-hover:opacity-100 group-hover:-translate-y-6"
                    }`}
                  >
                    {service.desc}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* button */}
        <motion.button
          className="bg-black font-montserrat text-white mt-10 md:mt-14 mx-auto flex  rounded items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/services/block-industry"
            className="w-full h-full px-6 md:px-8 py-2 items-center flex"
          >
            View all services
            <IoArrowForwardCircleOutline className="ml-3 text-lg sm:text-xl shake-horizontal" />
          </Link>
        </motion.button>
      </div>
      {/* why choose us */}
      <p className="text-2xl text-center mt-20 font-semibold text-orange-500">
        Why choose us?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pt-14 pb-20 px-4 items-stretch">
        {why.map((why, index) => {
          const Icon = why?.icon;
          return (
            <motion.div
              key={index}
              style={{ backgroundImage: `url(${why.img})` }}
              className="rounded-xl border bg-cover bg-center p-6 md:p-8 text-center 
                   flex flex-col justify-center items-center 
                   h-full min-h-[320px] md:min-h-[360px]"
              initial={{ opacity: 0, y: 50 }} // hidden state
              whileInView={{ opacity: 1, y: 0 }} // animate when in view
              transition={{ duration: 0.8, delay: index * 0.3 }} // staggered
              viewport={{ once: true, amount: 0.2 }} // trigger once
            >
              {Icon ? (
                <Icon className="text-4xl md:text-5xl text-orange-400 mb-4" />
              ) : null}

              <p className="font-semibold text-lg md:text-xl">{why.title}</p>
              <p className="mt-4 text-sm md:text-base">{why.desc}</p>
            </motion.div>
          );
        })}
      </div>
      {/* Let's build something together */}
      <div
        id="quote"
        className="bg-[#1A1A1D] min-h-[60vh] grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 sm:px-10 lg:px-16 py-12"
      >
        {/* Text Section */}
        <div>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold leading-snug">
            Let&apos;s build something great together!
          </p>
          <p className="text-white mt-6 text-base sm:text-lg lg:text-xl max-w-lg">
            Don&apos;t wait any longer to bring your construction dreams to
            life. Partner with Stable Homes and experience unparalleled service
            and quality.
          </p>
          <Link
            href="/quote"
            className="px-6 sm:px-8 lg:px-10 py-2 bg-orange-500 text-white font-semibold rounded  mt-8 items-center inline-flex justify-center hover:bg-orange-600 transition "
          >
            Get Quotation
            <IoArrowForwardCircleOutline className="ml-3 text-lg sm:text-xl shake-horizontal" />
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/cons2.png"
            alt="Construction illustration"
            className="w-3/4 sm:w-2/3 md:w-full h-auto max-h-96 object-contain hidden md:flex"
          />
          <img
            src="/cons-mobile.png"
            alt="Construction illustration"
            className="w-3/4 sm:w-2/3 md:w-full h-auto max-h-96 object-contain md:hidden"
          />
        </div>
      </div>
      {/* testimonials */}
      <div className="text-center pb-20 pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl text-orange-500 font-semibold"
        >
          Testimonials
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold mt-5"
        >
          What are people saying
        </motion.p>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 px-6 md:px-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="px-4 border rounded-2xl py-6 bg-white shadow-sm flex flex-col justify-between transition-all"
            >
              <div className="text-orange-400 text-lg flex justify-center py-5">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                {testimonial.desc}
              </p>
              <p className="mt-4 font-semibold text-gray-900">
                {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* FAQs */}
      <div className="py-20 bg-gray-50">
        <p className="text-2xl text-orange-500 text-center font-semibold">
          FAQs
        </p>
        <p className="text-2xl md:text-4xl font-semibold text-center mt-6">
          Got questions? we&apos;ve got answers
        </p>

        <div className="px-4 md:px-12 mt-14">
          {/* grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQs.map((faq, index) => (
              <Accordion type="single" collapsible key={index}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.Q}
                  </AccordionTrigger>
                  <AccordionContent>{faq.A}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
      {/* get in touch */}
      <div
        id="contact"
        className="min-h-screen bg-[#f9f9f9] flex flex-col justify-center items-center px-6 md:px-16 py-16"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-orange-500 font-semibold text-lg">Get in Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Let&apos;s Start Your Project Together
          </h2>
          <p className="mt-4 text-gray-600">
            Have a question or ready to bring your construction vision to life?
            Reach out to us today — our team is here to help.
          </p>
        </motion.div>

        {/* Grid: Contact info + form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white shadow-md rounded-2xl p-8 flex flex-col justify-center"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-6">
              Fill out the form and our team will get back to you within 24
              hours.
            </p>
            <div className="space-y-4">
              <p className="flex items-center text-gray-700">
                📍 <span className="ml-3">123 Main Street, Abuja, Nigeria</span>
              </p>
              <p className="flex items-center text-gray-700">
                📞 <span className="ml-3">+234 909 909 7788</span>
              </p>
              <p className="flex items-center text-gray-700">
                ✉️ <span className="ml-3">info@stablehomes.com</span>
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white shadow-md rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Message
              </label>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-2 px-4 rounded-lg"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
