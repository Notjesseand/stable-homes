// // app/block-boss/page.tsx
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Nav from "@/components/block-boss/nav";
// import Footer from "@/components/footer";
// import { motion } from "framer-motion";
// import Slider from "react-slick";

// export default function BlockBoss() {
//   const [startDate, setStartDate] = useState<Date | null>(null);

//   // Shared slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     arrows: false,
//     pauseOnHover: true,
//   };

//   return (
//     <>
//       <Nav />

//       <main className="relative overflow-x-hidden">
//         {/* Background Layer */}
//         <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
//           <Image
//             src="/block-boss/interlocking-8.jpg"
//             alt="Block Boss background"
//             fill
//             priority
//             quality={100}
//             className="object-cover object-center"
//           />
//         </div>

//         {/* Dark Overlay */}
//         <div className="fixed top-0 left-0 w-full h-screen bg-black/70 z-[0]"></div>

//         {/* HERO SECTION */}
//         <section
//           id="home"
//           className="relative flex flex-col justify-center items-center text-center h-screen z-10 px-6 sm:px-10 bg-white/10 backdrop-blur-sm"
//         >
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-snug max-w-3xl"
//           >
//             Powering Construction with{" "}
//             <span className="text-orange-400">Precision Block Production</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//             className="mt-6 text-gray-200 text-base sm:text-lg max-w-2xl leading-relaxed"
//           >
//             Industrial-grade, mobile block manufacturing — built to deliver
//             strength, precision, and efficiency wherever you build.
//           </motion.p>

//           <a href="#booking">
//             <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
//               Book Our Mobile Machine
//             </button>
//           </a>
//         </section>

//         {/* CONTENT SECTION */}
//         <div className="pt-20 pb-20 px-6 sm:px-10 md:px-16 relative z-10 bg-white/85 backdrop-blur-sm">
//           {/* About Section */}
//           <section id="about" className="mb-20 text-center md:text-left">
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-4xl font-semibold mb-6 text-gray-800 text-center md:text-left"
//             >
//               About Block Boss
//             </motion.h2>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="space-y-5 text-gray-700 leading-relaxed max-w-5xl mx-auto"
//             >
//               <p>
//                 <strong>Block Boss</strong> is a proud subsidiary of{" "}
//                 <strong>Stable Homes Construction Ltd</strong>, established with
//                 a clear vision — to redefine block and brick production in
//                 Nigeria. Our operations merge innovation, precision, and
//                 sustainability to ensure that every block produced meets
//                 international construction standards.
//               </p>

//               <p>
//                 With our{" "}
//                 <strong>state-of-the-art mobile block-making technology</strong>
//                 , we bring production directly to your site — eliminating
//                 transportation costs, minimizing waste, and ensuring your
//                 project stays on schedule. From small-scale developments to
//                 large estate projects, our system is designed to deliver
//                 consistency and durability at every stage.
//               </p>

//               <p>
//                 At Block Boss, we believe that great buildings start with a
//                 strong foundation. That’s why we prioritize{" "}
//                 <strong>quality control</strong> at every production stage,
//                 using high-grade materials and advanced equipment to ensure
//                 uniform strength and finish. Whether you need hollow blocks,
//                 interlocking pavers, or custom brick designs, our machines and
//                 expert team are equipped to meet your exact needs.
//               </p>

//               <p>
//                 Our mobile production service is supported by a professional
//                 crew that manages setup, calibration, curing, and delivery right
//                 on your project site. We also assist with sourcing of raw
//                 materials such as cement, sand, and aggregates — helping you
//                 focus on what matters most:{" "}
//                 <strong>building with confidence</strong>.
//               </p>

//               <div className="bg-orange-50 border-l-4 border-orange-400 px-6 py-4 rounded-lg mt-6 shadow-sm">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">
//                   Our Mission
//                 </h3>
//                 <p>
//                   To empower developers and builders across Nigeria with
//                   reliable, high-quality block and brick solutions that
//                   strengthen communities and stand the test of time.
//                 </p>
//               </div>

//               <div className="bg-orange-50 border-l-4 border-orange-400 px-6 py-4 rounded-lg mt-6 shadow-sm">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">
//                   Our Vision
//                 </h3>
//                 <p>
//                   To be the most trusted name in mobile block production —
//                   recognized for excellence, innovation, and a commitment to
//                   sustainable construction.
//                 </p>
//               </div>

//               <div className="bg-orange-50 border-l-4 border-orange-400 px-6 py-4 rounded-lg mt-6 shadow-sm">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">
//                   Why Choose Us
//                 </h3>
//                 <ul className="list-disc list-inside text-gray-700 space-y-2">
//                   <li>
//                     🚛 Mobile production at your site — fast, clean, and
//                     efficient.
//                   </li>
//                   <li>
//                     🧱 Consistent, high-quality output with minimal defects.
//                   </li>
//                   <li>
//                     ⚙️ Custom mold options to suit project specifications.
//                   </li>
//                   <li>
//                     🌍 Environmentally conscious and waste-efficient processes.
//                   </li>
//                   <li>
//                     👷 Experienced team ensuring smooth setup and operation.
//                   </li>
//                 </ul>
//               </div>
//             </motion.div>
//           </section>

//           {/* Services Section (Expanded + Animated + Responsive) */}
//           <section id="services" className="mb-20 text-center md:text-left">
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-4xl font-semibold mb-8 text-gray-800 text-center md:text-left"
//             >
//               Our Services
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-gray-700 leading-relaxed mb-10 max-w-4xl mx-auto"
//             >
//               At <strong>Block Boss</strong>, we go beyond traditional block
//               production — delivering precision, reliability, and convenience
//               right where your construction happens. Our services are tailored
//               to help developers, contractors, and homeowners achieve
//               top-quality results with speed and efficiency.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
//             >
//               {/* Service 1 */}
//               <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">
//                   🧱 On-Site Block Production
//                 </h3>
//                 <p className="text-gray-700">
//                   We bring our advanced mobile block-making machines directly to
//                   your construction site. Enjoy seamless, fast, and
//                   cost-effective production without the stress of transportation
//                   or breakage.
//                 </p>
//               </div>

//               {/* Service 2 */}
//               <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">
//                   ⚙️ Custom Designs & Molds
//                 </h3>
//                 <p className="text-gray-700">
//                   From solid and hollow blocks to interlocking and decorative
//                   designs, we offer a range of molds to match your structural
//                   and aesthetic preferences.
//                 </p>
//               </div>

//               {/* Service 3 */}
//               <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">
//                   🪣 Material Sourcing
//                 </h3>
//                 <p className="text-gray-700">
//                   We help you source top-quality cement, sand, and aggregates at
//                   competitive rates — ensuring your production process runs
//                   smoothly from start to finish.
//                 </p>
//               </div>

//               {/* Service 4 */}
//               <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">
//                   📏 Quality Testing & Control
//                 </h3>
//                 <p className="text-gray-700">
//                   Every batch is tested for uniformity, density, and strength —
//                   meeting both local and international building standards to
//                   ensure long-term reliability.
//                 </p>
//               </div>

//               {/* Service 5 */}
//               <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">
//                   🏗 Bulk & Commercial Production
//                 </h3>
//                 <p className="text-gray-700">
//                   Ideal for estates, schools, industrial facilities, and major
//                   developments. Our machines are built for high-volume output
//                   without compromising quality or precision.
//                 </p>
//               </div>

//               {/* Service 6 */}
//               <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">
//                   🔧 Maintenance & Technical Support
//                 </h3>
//                 <p className="text-gray-700">
//                   We provide expert technicians to monitor production, maintain
//                   machinery, and ensure uninterrupted operation throughout your
//                   project duration.
//                 </p>
//               </div>
//             </motion.div>
//           </section>

//           {/* Product Carousels */}
//           <section className="mb-20">
//             <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
//               Our Products
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//               {/* Blocks Carousel */}
//               <div className="text-center">
//                 <h3 className="text-2xl font-semibold mb-4 text-gray-700">
//                   Blocks
//                 </h3>
//                 <div className="relative w-full h-72">
//                   <Slider {...settings}>
//                     {[
//                       "block-10.jpg",
//                       "block-11.jpg",
//                       "brick-13.jpg",
//                       "interlocking.jpg",
//                     ].map((img, i) => (
//                       <div
//                         key={i}
//                         className="relative w-full h-72 rounded-xl overflow-hidden shadow-md"
//                       >
//                         <Image
//                           src={`/block-boss/${img}`}
//                           alt={`Block image ${i + 1}`}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                     ))}
//                   </Slider>
//                 </div>
//               </div>

//               {/* Bricks Carousel */}
//               <div className="text-center">
//                 <h3 className="text-2xl font-semibold mb-4 text-gray-700">
//                   Bricks
//                 </h3>
//                 <div className="relative w-full h-72">
//                   <Slider {...settings}>
//                     {[
//                       "brick-4.jpg",
//                       "brick.jpg",
//                       "brick-2.jpg",
//                       "brick-3.jpg",
//                     ].map((img, i) => (
//                       <div
//                         key={i}
//                         className="relative w-full h-72 rounded-xl overflow-hidden shadow-md"
//                       >
//                         <Image
//                           src={`/block-boss/${img}`}
//                           alt={`Brick image ${i + 1}`}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                     ))}
//                   </Slider>
//                 </div>
//               </div>

//               {/* Interlocking Blocks Carousel */}
//               <div className="text-center">
//                 <h3 className="text-2xl font-semibold mb-4 text-gray-700">
//                   Interlocking Blocks
//                 </h3>
//                 <div className="relative w-full h-72">
//                   <Slider {...settings}>
//                     {[
//                       "interlocking-8.jpg",
//                       "interlocking-9.jpg",
//                       "interlocking-10.jpg",
//                       "interlocking-6.jpg",
//                       "interlocking-5.jpg",
//                       "interlocking-2.jpg",
//                     ].map((img, i) => (
//                       <div
//                         key={i}
//                         className="relative w-full h-72 rounded-xl overflow-hidden shadow-md"
//                       >
//                         <Image
//                           src={`/block-boss/${img}`}
//                           alt={`Interlocking block image ${i + 1}`}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                     ))}
//                   </Slider>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* 🧱 Customer Reviews Section */}
//           {/* 🧱 Customer Reviews Section (New) */}
//           <section className="mb-24 text-center">
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-3xl font-semibold mb-10 text-gray-800"
//             >
//               What Our Clients Are Saying
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-gray-600 max-w-2xl mx-auto mb-10"
//             >
//               Our commitment to quality speaks for itself. Here’s what our
//               satisfied clients have to say about their experience with{" "}
//               <strong>Block Boss</strong>.
//             </motion.p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//               {[
//                 {
//                   name: "Emmanuel Chinedu",
//                   img: "/avatars/pfp-7.jpg",
//                   text: "I’m impressed by the speed and precision of their on-site block machine. Every block was perfectly molded and ready in no time.",
//                   rating: 5,
//                 },
//                 {
//                   name: "Grace Adeyemi",
//                   img: "/avatars/pfp-5.jpg",
//                   text: "The team handled everything professionally from setup to cleanup. Our project timeline improved drastically thanks to Block Boss.",
//                   rating: 5,
//                 },
//                 {
//                   name: "Ayo Builders Ltd",
//                   img: "/avatars/pfp-6.jpg",
//                   text: "Their interlocking blocks are top-notch — durable, clean finish, and very consistent in shape. Highly recommended!",
//                   rating: 4,
//                 },
//                 {
//                   name: "Mrs. Okafor",
//                   img: "/avatars/pfp-3.jpg",
//                   text: "We used their services for our new estate and were blown away by how efficient and friendly the crew was. Great experience overall.",
//                   rating: 5,
//                 },
//                 {
//                   name: "Daniel U.",
//                   img: "/avatars/pfp.jpg",
//                   text: "I’ve used different block suppliers before, but none match Block Boss in quality and reliability. Worth every naira.",
//                   rating: 5,
//                 },
//                 {
//                   name: "Faith & Co Developers",
//                   img: "/avatars/pfp-2.jpg",
//                   text: "Booking the mobile block machine was seamless, and production was faster than we expected. Definitely using them again.",
//                   rating: 5,
//                 },
//               ].map((review, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: i * 0.1 }}
//                   viewport={{ once: true }}
//                   className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center transition-all duration-300"
//                 >
//                   <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-orange-500">
//                     <Image
//                       src={review.img}
//                       alt={review.name}
//                       width={64}
//                       height={64}
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                   <p className="text-gray-700 italic mb-4 leading-relaxed">
//                     “{review.text}”
//                   </p>
//                   <div className="flex justify-center mb-2">
//                     {Array.from({ length: review.rating }).map((_, index) => (
//                       <span key={index} className="text-yellow-400 text-lg">
//                         ★
//                       </span>
//                     ))}
//                     {Array.from({ length: 5 - review.rating }).map(
//                       (_, index) => (
//                         <span key={index} className="text-gray-300 text-lg">
//                           ★
//                         </span>
//                       )
//                     )}
//                   </div>
//                   <h4 className="font-semibold text-orange-600">
//                     {review.name}
//                   </h4>
//                 </motion.div>
//               ))}
//             </div>
//           </section>

//           {/* Booking Section */}
//           <section
//             id="booking"
//             className="bg-orange-50 px-4 py-8 sm:p-8 rounded-2xl shadow-md max-w-4xl mx-auto"
//           >
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//               Ready to Get Started?
//             </h2>
//             <p className="text-gray-600 mb-6 text-center">
//               Choose your preferred start date and share your project details.
//               Our team will reach out to confirm logistics and finalize your
//               booking.
//             </p>

//             <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="text"
//                 placeholder="Project Location"
//                 className="border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-orange-400"
//               />

//               <div className="sm:col-span-2 w-full">
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   placeholderText="Preferred Start Date"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
//                 />
//               </div>

//               <textarea
//                 placeholder="Tell us about your project"
//                 rows={4}
//                 className="sm:col-span-2 border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-orange-400 resize-none"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="sm:col-span-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 font-medium transition w-full"
//               >
//                 Submit Booking Request
//               </button>
//             </form>
//           </section>
//         </div>
//       </main>

//       <div className="z-50 relative">
//         <Footer />
//       </div>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Nav from "@/components/block-boss/nav";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function BlockBoss() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [filter, setFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      type: "block",
      img: "/block-boss/block-10.jpg",
      name: "Solid Blocks",
      specs: "6-inch, 450x225x150mm, 20N/mm²",
    },
    {
      type: "block",
      img: "/services/blocks.jpg",
      name: "Solid Blocks",
      specs: "6-inch, 450x225x150mm, 20N/mm²",
    },
    {
      type: "brick",
      img: "/services/bricks.jpg",
      name: "Solid Bricks",
      specs: "6-inch, 450x225x150mm, 20N/mm²",
    },
    {
      type: "brick",
      img: "/block-boss/brick-13.jpg",
      name: "Hollow Bricks",
      specs: "200x100x60mm, 30N/mm²",
    },
    {
      type: "block",
      img: "/block-boss/block-11.jpg",
      name: "Solid Block",
      specs: "9-inch, 450x225x225mm, 25N/mm²",
    },
    {
      type: "interlocking",
      img: "/block-boss/interlocking-8.jpg",
      name: "Interlocking Blocks",
      specs: "200x100x60mm, 30N/mm²",
    },
    {
      type: "interlocking",
      img: "/block-boss/interlocking-9.jpg",
      name: "Interlocking Blocks",
      specs: "200x100x60mm, 30N/mm²",
    },
    {
      type: "interlocking",
      img: "/block-boss/interlocking-10.jpg",
      name: "Interlocking Blocks",
      specs: "200x100x60mm, 30N/mm²",
    },
    {
      type: "interlocking",
      img: "/block-boss/interlocking-2.jpg",
      name: "Interlocking Blocks",
      specs: "200x100x60mm, 30N/mm²",
    },
    {
      type: "interlocking",
      img: "/block-boss/interlocking-5.jpg",
      name: "Interlocking Blocks",
      specs: "200x100x60mm, 30N/mm²",
    },
    {
      type: "interlocking",
      img: "/block-boss/interlocking-6.jpg",
      name: "Interlocking Blocks",
      specs: "200x100x60mm, 30N/mm²",
    },
    {
      type: "block",
      img: "/block-boss/brick-2.jpg",
      name: "Thin Blocks",
      specs: "200x100x60mm, 30N/mm²",
    },
    {
      type: "block",
      img: "/block-boss/brick-3.jpg",
      name: "Hollow Blocks",
      specs: "200x100x60mm, 30N/mm²",
    },
    {
      type: "brick",
      img: "/block-boss/brick-4.jpg",
      name: "Interlocking Bricks",
      specs: "200x100x60mm, 30N/mm²",
    },

    {
      type: "brick",
      img: "/block-boss/interlocking.jpg",
      name: "Interlocking Bricks",
      specs: "200x100x60mm, 30N/mm²",
    },
  ];

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.type === filter);

  return (
    <>
      <Head>
        <title>Block Boss | Precision Mobile Block Production in Nigeria</title>
        <meta
          name="description"
          content="Block Boss offers industrial-grade, mobile block manufacturing for construction projects across Nigeria. High-quality blocks, custom molds, and on-site production."
        />
        <meta
          name="keywords"
          content="block production, mobile block machine, construction Nigeria, interlocking blocks, brick production"
        />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Block Boss",
              description:
                "A subsidiary of Stable Homes Construction Ltd, providing mobile block production services across Nigeria.",
              url: "https://yourwebsite.com/block-boss",
              logo: "/block-boss/logo.png",
            }),
          }}
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        `}
      </Script>

      <Nav />

      <main className="relative overflow-x-hidden min-h-screen">
        {/* Background Layer */}
        <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
          <Image
            src="/block-boss/interlocking-8.jpg"
            alt="Block Boss background"
            fill
            loading="lazy"
            sizes="100vw"
            quality={100}
            className="object-cover object-center"
          />
        </div>

        {/* Dark Overlay */}
        <div className="fixed top-0 left-0 w-full h-screen bg-black/70 z-[0]"></div>

        {/* Hero Section */}
        <section
          id="home"
          className="relative flex flex-col justify-center items-center text-center h-screen z-10 px-6 sm:px-10 bg-white/10 backdrop-blur-sm"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-[-1]"
          >
            <source src="/block-boss/hero-video.mp4" type="video/mp4" />
            <Image
              src="/block-boss/interlocking-8.jpg"
              alt="Fallback background"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </video>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl pt-20 font-bold text-white leading-snug max-w-3xl"
          >
            Powering Construction with{" "}
            <span className="text-orange-400">Precision Block Production</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 text-gray-200 text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            Industrial-grade, mobile block manufacturing — built to deliver
            strength, precision, and efficiency wherever you build.
          </motion.p>
          <div className="mt-8 flex gap-4">
            <a href="#booking">
              <button
                aria-label="Book mobile block machine"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Book Our Mobile Machine
              </button>
            </a>
            {/* <a href="#services">
              <button
                aria-label="Learn more about our services"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Learn More
              </button>
            </a> */}
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
            {isVisible && (
              <>
                <div>
                  <CountUp end={120} duration={2.5} suffix="+" />
                  <p>Projects Completed</p>
                </div>
                <div>
                  <CountUp end={50000} duration={2.5} suffix="+" />
                  <p>Blocks Produced</p>
                </div>
                <div>
                  <CountUp end={10} duration={2.5} suffix="+" />
                  <p>Cities Served</p>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Content Section */}
        <div className="pt-20 pb-20 px-6 sm:px-10 md:px-16 relative z-10 bg-white/85 backdrop-blur-sm">
          {/* About Section */}
          <section id="about" className="mb-20 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold mb-6 text-gray-800 text-center md:text-left"
            >
              About Block Boss
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-5 text-gray-700 leading-relaxed max-w-5xl mx-auto"
            >
              <p>
                <strong>Block Boss</strong> is a proud subsidiary of{" "}
                <strong>Stable Homes Construction Ltd</strong>, established with
                a clear vision — to redefine block and brick production in
                Nigeria. Our operations merge innovation, precision, and
                sustainability to ensure that every block produced meets
                international construction standards.
              </p>
              <p>
                With our{" "}
                <strong>state-of-the-art mobile block-making technology</strong>
                , we bring production directly to your site — eliminating
                transportation costs, minimizing waste, and ensuring your
                project stays on schedule. From small-scale developments to
                large estate projects, our system is designed to deliver
                consistency and durability at every stage.
              </p>
              <p>
                At Block Boss, we believe that great buildings start with a
                strong foundation. That’s why we prioritize{" "}
                <strong>quality control</strong> at every production stage,
                using high-grade materials and advanced equipment to ensure
                uniform strength and finish. Whether you need hollow blocks,
                interlocking pavers, or custom brick designs, our machines and
                expert team are equipped to meet your exact needs.
              </p>
              <p>
                Our mobile production service is supported by a professional
                crew that manages setup, calibration, curing, and delivery right
                on your project site. We also assist with sourcing of raw
                materials such as cement, sand, and aggregates — helping you
                focus on what matters most:{" "}
                <strong>building with confidence</strong>.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-400 px-6 py-4 rounded-lg mt-6 shadow-sm">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  Our Mission
                </h3>
                <p>
                  To empower developers and builders across Nigeria with
                  reliable, high-quality block and brick solutions that
                  strengthen communities and stand the test of time.
                </p>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-400 px-6 py-4 rounded-lg mt-6 shadow-sm">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  Our Vision
                </h3>
                <p>
                  To be the most trusted name in mobile block production —
                  recognized for excellence, innovation, and a commitment to
                  sustainable construction.
                </p>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-400 px-6 py-4 rounded-lg mt-6 shadow-sm">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  Why Choose Us
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
                  <li className="">
                    🚛 Mobile production at your site — fast, clean, and
                    efficient.
                  </li>
                  <li>
                    🧱 Consistent, high-quality output with minimal defects.
                  </li>
                  <li>
                    ⚙️ Custom mold options to suit project specifications.
                  </li>
                  <li>
                    🌍 Environmentally conscious and waste-efficient processes.
                  </li>
                  <li>
                    👷 Experienced team ensuring smooth setup and operation.
                  </li>
                </ul>
              </div>
            </motion.div>
          </section>

          {/* Team Section */}
          <section id="team" className="mb-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold mb-8 text-gray-800"
            >
              Meet Our Team
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { name: "Mr. Jide", role: "CEO", img: "/avatars/pfp-2.jpg" },
                {
                  name: "Jane Smith",
                  role: "Operations Manager",
                  img: "/avatars/pfp-3.jpg",
                },
                {
                  name: "Mike Okon",
                  role: "Lead Engineer",
                  img: "/avatars/pfp-7.jpg",
                },
                {
                  name: "Ada Eze",
                  role: "Quality Control",
                  img: "/avatars/pfp-5.jpg",
                },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white shadow-md rounded-2xl p-6 border border-gray-100"
                >
                  <Image
                    src={member.img}
                    alt={`Team member ${member.name}`}
                    width={150}
                    height={150}
                    loading="lazy"
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-orange-600">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="mb-20 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold mb-8 text-gray-800 text-center md:text-left"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed mb-10 max-w-4xl mx-auto"
            >
              At <strong>Block Boss</strong>, we go beyond traditional block
              production — delivering precision, reliability, and convenience
              right where your construction happens. Our services are tailored
              to help developers, contractors, and homeowners achieve
              top-quality results with speed and efficiency.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {[
                {
                  title: "🧱 On-Site Block Production",
                  desc: "We bring our advanced mobile block-making machines directly to your construction site. Enjoy seamless, fast, and cost-effective production without the stress of transportation or breakage.",
                },
                {
                  title: "⚙️ Custom Designs & Molds",
                  desc: "From solid and hollow blocks to interlocking and decorative designs, we offer a range of molds to match your structural and aesthetic preferences.",
                },
                {
                  title: "🪣 Material Sourcing",
                  desc: "We help you source top-quality cement, sand, and aggregates at competitive rates — ensuring your production process runs smoothly from start to finish.",
                },
                {
                  title: "📏 Quality Testing & Control",
                  desc: "Every batch is tested for uniformity, density, and strength — meeting both local and international building standards to ensure long-term reliability.",
                },
                {
                  title: "🏗 Bulk & Commercial Production",
                  desc: "Ideal for estates, schools, industrial facilities, and major developments. Our machines are built for high-volume output without compromising quality or precision.",
                },
                {
                  title: "🔧 Maintenance & Technical Support",
                  desc: "We provide expert technicians to monitor production, maintain machinery, and ensure uninterrupted operation throughout your project duration.",
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.desc}</p>
                  <a
                    href="#booking"
                    className="mt-4 inline-block text-orange-500 hover:underline"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Service Packages Section */}
          {/* <section id="packages" className="mb-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold mb-8 text-gray-800"
            >
              Our Service Packages
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Basic Package",
                  features: [
                    "On-Site Production",
                    "Standard Blocks",
                    "1-Week Support",
                  ],
                  price: "Contact for Pricing",
                },
                {
                  title: "Pro Package",
                  features: [
                    "On-Site Production",
                    "Custom Molds",
                    "Material Sourcing",
                    "2-Week Support",
                  ],
                  price: "Contact for Pricing",
                },
                {
                  title: "Enterprise Package",
                  features: [
                    "High-Volume Production",
                    "Custom Molds",
                    "Material Sourcing",
                    "Quality Testing",
                    "Ongoing Support",
                  ],
                  price: "Contact for Pricing",
                },
              ].map((pkg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">
                    {pkg.title}
                  </h3>
                  <ul className="text-gray-700 list-disc list-inside mb-4">
                    {pkg.features.map((feature, j) => (
                      <li key={j}>{feature}</li>
                    ))}
                  </ul>
                  <p className="text-gray-600 font-semibold">{pkg.price}</p>
                  <a
                    href="#booking"
                    className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                    aria-label={`Get started with ${pkg.title}`}
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </section> */}

          {/* Case Studies Section */}
          <section id="case-studies" className="mb-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold mb-8 text-gray-800"
            >
              Our Success Stories
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Lekki Estate Project",
                  img: "/services/construction.jpg",
                  desc: "Delivered 10,000 interlocking blocks for a 50-unit housing estate, completed 15% ahead of schedule.",
                },
                {
                  title: "Abuja School Complex",
                  img: "/services/renovation.jpg",
                  desc: "Provided custom molds and on-site production for a school, ensuring zero transportation damage.",
                },
                {
                  title: "Lagos Commercial Hub",
                  img: "/services/crafting.jpg",
                  desc: "Supplied high-strength blocks for a commercial plaza, meeting strict quality standards.",
                },
              ].map((caseStudy, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white shadow-md rounded-2xl p-6 border border-gray-100"
                >
                  <Image
                    src={caseStudy.img}
                    alt={caseStudy.title}
                    width={300}
                    height={200}
                    loading="lazy"
                    className="rounded-lg mb-4 h-52  object-cover"
                  />
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-700">{caseStudy.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Product Gallery Section */}
          <section id="products" className="mb-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold mb-8 text-gray-800"
            >
              Our Products
            </motion.h2>
            <div className="mb-6 flex justify-center gap-4">
              {["all", "block", "brick", "interlocking"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-lg ${
                    filter === type
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } hover:bg-orange-400 hover:text-white transition`}
                  aria-label={`Filter by ${type}`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white shadow-md rounded-2xl p-6 border border-gray-100"
                  >
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-orange-600 mt-4">
                      {product.name}
                    </h3>
                    {/* <p className="text-gray-700">{product.specs}</p> */}
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-700">
                  No products found for this category.
                </p>
              )}
            </div>
            <a
              href="/block-boss/catalog.pdf"
              download
              className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
              aria-label="Download product catalog"
            >
              Download Product Catalog
            </a>
          </section>

          {/* Customer Reviews Section */}
          <section id="reviews" className="mb-24 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold mb-10 text-gray-800"
            >
              What Our Clients Are Saying
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto mb-10"
            >
              Our commitment to quality speaks for itself. Here’s what our
              satisfied clients have to say about their experience with{" "}
              <strong>Block Boss</strong>.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Emmanuel Chinedu",
                  img: "/avatars/pfp-7.jpg",
                  text: "I’m impressed by the speed and precision of their on-site block machine. Every block was perfectly molded and ready in no time.",
                  rating: 5,
                },
                {
                  name: "Grace Adeyemi",
                  img: "/avatars/pfp-5.jpg",
                  text: "The team handled everything professionally from setup to cleanup. Our project timeline improved drastically thanks to Block Boss.",
                  rating: 5,
                },
                {
                  name: "Ayo Builders Ltd",
                  img: "/avatars/pfp-6.jpg",
                  text: "Their interlocking blocks are top-notch — durable, clean finish, and very consistent in shape. Highly recommended!",
                  rating: 4,
                },
                {
                  name: "Mrs. Okafor",
                  img: "/avatars/pfp-3.jpg",
                  text: "We used their services for our new estate and were blown away by how efficient and friendly the crew was. Great experience overall.",
                  rating: 5,
                },
                {
                  name: "Daniel U.",
                  img: "/avatars/pfp.jpg",
                  text: "I’ve used different block suppliers before, but none match Block Boss in quality and reliability. Worth every naira.",
                  rating: 5,
                },
                {
                  name: "Faith & Co Developers",
                  img: "/avatars/pfp-2.jpg",
                  text: "Booking the mobile block machine was seamless, and production was faster than we expected. Definitely using them again.",
                  rating: 5,
                },
              ].map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-orange-500">
                    <Image
                      src={review.img}
                      alt={`Review by ${review.name}`}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-gray-700 italic mb-4 leading-relaxed">
                    “{review.text}”
                  </p>
                  <div className="flex justify-center mb-2">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <span
                        key={index}
                        className="text-yellow-400 text-lg"
                        aria-label="Star rating"
                      >
                        ★
                      </span>
                    ))}
                    {Array.from({ length: 5 - review.rating }).map(
                      (_, index) => (
                        <span
                          key={index}
                          className="text-gray-300 text-lg"
                          aria-label="Empty star"
                        >
                          ★
                        </span>
                      )
                    )}
                  </div>
                  <h4 className="font-semibold text-orange-600">
                    {review.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold mb-8 text-gray-800"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  question: "How does on-site block production work?",
                  answer:
                    "Our mobile block-making machines are transported to your site, where our team sets up and produces blocks using locally sourced or provided materials. This eliminates transportation costs and ensures fresh, high-quality blocks.",
                },
                {
                  question: "What types of blocks can you produce?",
                  answer:
                    "We produce hollow blocks, solid blocks, interlocking pavers, and custom designs based on your project requirements.",
                },
                {
                  question: "How long does it take to start production?",
                  answer:
                    "Once booked, we can set up and begin production within 48-72 hours, depending on your location and project scale.",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 text-left"
                >
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Blog Preview Section */}
          <section id="blog" className="mb-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold mb-8 text-gray-800"
            >
              Latest Insights
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Benefits of Mobile Block Production",
                  img: "/block-boss/interlocking-8.jpg",
                  excerpt:
                    "Learn how on-site block production can save time and costs for your construction project.",
                  url: "/blog-1/",
                },
                {
                  title: "Choosing the Right Block Type",
                  img: "/block-boss/brick-3.jpg",
                  excerpt:
                    "Explore the differences between hollow, solid, and interlocking blocks for your needs.",
                  url: "/blog-2/",
                },
                {
                  title: "Sustainable Construction Practices",
                  img: "/block-boss/brick.jpg",
                  excerpt:
                    "Discover how Block Boss minimizes waste and promotes eco-friendly building.",
                  url: "/blog-3/",
                },
              ].map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white shadow-md rounded-2xl p-6 border flex  flex-col justify-between border-gray-100"
                >
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={300}
                    height={200}
                    loading="lazy"
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-700">{post.excerpt}</p>
                  <a
                    href={post.url}
                    className="mt-4 inline-block text-orange-500 hover:underline"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                  </a>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Booking Section */}
          <section
            id="booking"
            className="bg-orange-50 px-4 py-8 sm:p-8 rounded-2xl shadow-md max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Choose your preferred start date and share your project details.
              Our team will reach out to confirm logistics and finalize your
              booking.
            </p>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                aria-label="Phone Number"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="text"
                placeholder="Project Location"
                aria-label="Project Location"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-orange-400"
              />
              <div className="sm:col-span-2 w-full">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Preferred Start Date"
                  aria-label="Preferred Start Date"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                aria-label="Project Details"
                className="sm:col-span-2 border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              ></textarea>
              <button
                type="submit"
                className="sm:col-span-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 font-medium transition w-full"
                aria-label="Submit booking request"
              >
                Submit Booking Request
              </button>
            </form>
          </section>
        </div>
      </main>

      <div className="z-50 relative">
        <Footer />
      </div>
    </>
  );
}
