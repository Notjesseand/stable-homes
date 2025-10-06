// // app/block-boss/page.tsx
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Nav from "@/components/nav";
// import Footer from "@/components/footer";
// import { motion } from "framer-motion";
// import Slider from "react-slick";

// export default function BlockBoss() {
//   const [startDate, setStartDate] = useState<Date | null>(null);

//   // Slider settings
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

//       <main className="relative">
//         {/* Fixed Background Layer */}
//         <div
//           className="fixed top-0 left-0 w-full h-screen bg-[url('/block-boss/interlocking-8.jpg')] bg-cover bg-center bg-fixed"
//           style={{ zIndex: -1 }}
//         ></div>

//         {/* Optional Dark Overlay */}
//         <div className="fixed top-0 left-0 w-full h-screen bg-black/40 z-[0]"></div>

//         {/* Content Layer */}
//         <div className="pt-36 pb-20 px-6 md:px-16 relative z-10 bg-white/80 backdrop-blur-m">
//           {/* Hero Section */}
//           <section className="text-center md:text-left mb-16">
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-4xl md:text-6xl font-bold text-gray-800"
//             >
//               Powering Construction with{" "}
//               <span className="text-orange-500">
//                 Precision Block Production
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9 }}
//               className="mt-6 text-gray-700 md:w-3/4 leading-relaxed"
//             >
//               At Block Boss, we bring industrial-scale block manufacturing
//               directly to your site — combining power, precision, and mobility.
//               Whether you’re building homes, schools, or estates, every block we
//               produce meets the highest standards of strength and consistency.
//             </motion.p>

//             <a href="#booking">
//               <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
//                 Book Our Mobile Machine
//               </button>
//             </a>
//           </section>

//           {/* About Section */}
//           <section className="mb-16">
//             <h2 className="text-3xl font-semibold mb-4 text-gray-800">
//               About Block Boss
//             </h2>
//             <p className="text-gray-700 leading-relaxed">
//               Block Boss is a subsidiary of{" "}
//               <strong>Stable Homes Construction Ltd</strong>, created to
//               revolutionize block and brick production across Nigeria. We
//               specialize in on-site, large-volume manufacturing — saving clients
//               the stress and cost of transporting heavy materials. Our
//               state-of-the-art mobile block-making unit produces solid, hollow,
//               and interlocking blocks of exceptional quality — engineered for
//               durability and uniformity.
//             </p>
//           </section>

//           {/* Services Section */}
//           <section className="mb-16">
//             <h2 className="text-3xl font-semibold mb-6 text-gray-800">
//               Our Services
//             </h2>
//             <ul className="space-y-3 text-gray-700">
//               <li>
//                 🧱 Mobile Block Production — We produce directly on your site.
//               </li>
//               <li>
//                 ⚙️ Custom Block Designs — Standard and interlocking molds
//                 available.
//               </li>
//               <li>
//                 🪣 Material Sourcing — Cement, sand, and aggregates supplied on
//                 demand.
//               </li>
//               <li>
//                 📏 Quality Testing — Each batch verified for strength and
//                 consistency.
//               </li>
//               <li>
//                 🏗 Bulk Production Contracts — Ideal for estates and large
//                 developments.
//               </li>
//             </ul>
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
//                       "interlocking-11.jpg",
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

//           {/* Booking Section */}
//           <section
//             id="booking"
//             className="bg-orange-50 p-8 rounded-2xl shadow-md"
//           >
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//               Ready to Get Started?
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Choose your preferred start date and share your project details —
//               our team will reach out to confirm logistics and finalize your
//               booking.
//             </p>

//             <form className="grid gap-4 md:grid-cols-2">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="text"
//                 placeholder="Project Location"
//                 className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
//               />

//               <div className="col-span-2">
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   placeholderText="Preferred Start Date"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
//                 />
//               </div>

//               <textarea
//                 placeholder="Tell us a bit about your project"
//                 rows={4}
//                 className="col-span-2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="col-span-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 font-medium transition"
//               >
//                 Submit Booking Request
//               </button>
//             </form>
//           </section>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }

// app/block-boss/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Slider from "react-slick";

export default function BlockBoss() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <>
      <Nav />

      <main className="relative overflow-x-hidden">
        {/* Background Layer */}
        <div
          className="fixed top-0 left-0 w-full h-screen bg-[url('/block-boss/interlocking-8.jpg')] bg-cover bg-center bg-fixed"
          style={{ zIndex: -1 }}
        ></div>

        {/* Dark Overlay */}
        <div className="fixed top-0 left-0 w-full h-screen bg-black/40 z-[0]"></div>

        {/* HERO SECTION */}
        <section className="relative flex flex-col justify-center items-center text-center h-screen z-10 px-6 sm:px-10 bg-white/10 backdrop-blur-sm">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-snug max-w-3xl"
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

          <a href="#booking">
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              Book Our Mobile Machine
            </button>
          </a>
        </section>

        {/* CONTENT SECTION */}
        <div className="pt-20 pb-20 px-6 sm:px-10 md:px-16 relative z-10 bg-white/85 backdrop-blur-sm">
          {/* About Section */}
          <section className="mb-16 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              About Block Boss
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Block Boss is a subsidiary of{" "}
              <strong>Stable Homes Construction Ltd</strong>, dedicated to
              transforming block and brick production in Nigeria. We manufacture
              high-quality building blocks and interlocking materials using
              cutting-edge mobile technology — producing directly on your site
              to save cost, time, and logistics effort.
            </p>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
              Our Services
            </h2>
            <ul className="space-y-3 text-gray-700 text-center md:text-left">
              <li>
                🧱 On-site Block Production — Directly at your construction
                site.
              </li>
              <li>
                ⚙️ Custom Designs — Standard, hollow, and interlocking molds.
              </li>
              <li>
                🪣 Material Sourcing — Cement, sand, and aggregates available.
              </li>
              <li>
                📏 Quality Testing — Consistency and strength ensured every
                time.
              </li>
              <li>
                🏗 Bulk Production — Perfect for estates, schools, and major
                projects.
              </li>
            </ul>
          </section>

          {/* Product Carousels */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
              Our Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Blocks Carousel */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                  Blocks
                </h3>
                <div className="relative w-full h-72">
                  <Slider {...settings}>
                    {[
                      "block-10.jpg",
                      "block-11.jpg",
                      "brick-13.jpg",
                      "interlocking.jpg",
                    ].map((img, i) => (
                      <div
                        key={i}
                        className="relative w-full h-72 rounded-xl overflow-hidden shadow-md"
                      >
                        <Image
                          src={`/block-boss/${img}`}
                          alt={`Block image ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              {/* Bricks Carousel */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                  Bricks
                </h3>
                <div className="relative w-full h-72">
                  <Slider {...settings}>
                    {[
                      "brick-4.jpg",
                      "brick.jpg",
                      "brick-2.jpg",
                      "brick-3.jpg",
                    ].map((img, i) => (
                      <div
                        key={i}
                        className="relative w-full h-72 rounded-xl overflow-hidden shadow-md"
                      >
                        <Image
                          src={`/block-boss/${img}`}
                          alt={`Brick image ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              {/* Interlocking Blocks Carousel */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                  Interlocking Blocks
                </h3>
                <div className="relative w-full h-72">
                  <Slider {...settings}>
                    {[
                      "interlocking-8.jpg",
                      "interlocking-9.jpg",
                      "interlocking-10.jpg",
                      "interlocking-6.jpg",
                      "interlocking-5.jpg",
                      "interlocking-2.jpg",
                    ].map((img, i) => (
                      <div
                        key={i}
                        className="relative w-full h-72 rounded-xl overflow-hidden shadow-md"
                      >
                        <Image
                          src={`/block-boss/${img}`}
                          alt={`Interlocking block image ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </section>

          {/* Booking Section */}
          <section
            id="booking"
            className="bg-orange-50 p-6 sm:p-8 rounded-2xl shadow-md max-w-4xl mx-auto"
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
                className="border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="text"
                placeholder="Project Location"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-orange-400"
              />

              <div className="sm:col-span-2 w-full">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Preferred Start Date"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="sm:col-span-2 border border-gray-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              ></textarea>

              <button
                type="submit"
                className="sm:col-span-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 font-medium transition w-full"
              >
                Submit Booking Request
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
