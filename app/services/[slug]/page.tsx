// // app/services/[slug]/page.tsx
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Nav from "@/app/quote/nav";
// import Footer from "@/components/footer";
// import { services } from "../serviceData";
// import ServiceCarousel from "@/components/serviceCarousel";
// import { useToast } from "@/components/ui/use-toast"; // optional toast if you use shadcn

// export default function ServicePage({ params }: { params: { slug: string } }) {
//   const service = services.find((s) => s.slug === params.slug);
//   const { toast } = useToast();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     message: "",
//   });

//   const [startDate, setStartDate] = useState<Date | null>(null);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // You can later connect this to an API route or backend
//     toast({
//       title: "Booking request sent!",
//       description: "We'll get back to you to confirm your project details.",
//     });
//     setFormData({ name: "", email: "", phone: "", date: "", message: "" });
//   };

//   if (!service) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600">
//         <p>Service not found.</p>
//       </div>
//     );
//   }

//   const otherServices = services.filter((s) => s.slug !== params.slug);
//   const images =
//     service.images && service.images.length > 0
//       ? service.images
//       : service.images
//       ? [service.images]
//       : [];

//   return (
//     <>
//       <Nav />

//       <main className="min-h-screen bg-white px-6 md:px-16 py-16 pt-36">
//         {/* Service Details */}
//         <section className="grid md:grid-cols-2 gap-10 items-center">
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
//             {service.title}
//           </h1>
//           {images.length > 1 ? (
//             // @ts-ignore
//             <ServiceCarousel images={images} title={service.title} />
//           ) : (
//             <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
//               <Image
//                 // @ts-ignore
//                 src={images[0] || "/placeholder.jpg"}
//                 alt={service.title}
//                 fill
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           )}

//           <div>
//             {/* <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
//               {service.title}
//             </h1> */}
//             <p className="mt-4 text-gray-600 leading-relaxed">
//               {service.description}
//             </p>
//             <ul className="mt-6 space-y-2">
//               {service.features?.map((feature, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center text-gray-700 text-sm md:text-base"
//                 >
//                   ✅ <span className="ml-2">{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>

//         {/* Booking Section */}
//         <section className="mt-20 bg-orange-50 rounded-3xl px-4 py-8 md:p-12 shadow-inner">
//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
//             Book This Service
//           </h2>
//           <p className="text-gray-600 mb-8">
//             Ready to get started? Choose your preferred start date and share a
//             few details — our team will reach out to confirm everything.
//           </p>

//           <form
//             onSubmit={handleSubmit}
//             className="grid md:grid-cols-2 gap-6 max-w-3xl"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
//             />
//             {/* <input
//               type="date"
//               name="date"
//               placeholder="Preferred Start Date"
//               value={formData.date}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
//             /> */}

//             <DatePicker
//               selected={startDate}
//               onChange={(date) => setStartDate(date)}
//               placeholderText="Preferred Start Date"
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none font-montserrat"
//             />

//             <textarea
//               name="message"
//               placeholder="Tell us a bit about your project"
//               value={formData.message}
//               onChange={handleChange}
//               rows={4}
//               className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
//             />
//             <button
//               type="submit"
//               className="md:col-span-2 bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition"
//             >
//               Submit Booking Request
//             </button>
//           </form>
//         </section>

//         {/* Other Services */}
//         <section className="mt-20">
//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
//             Explore Other Services
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {otherServices.map((s) => {
//               const previewImage =
//                 s.images && s.images.length > 0 ? s.images[0] : s.images;
//               return (
//                 <Link
//                   key={s.slug}
//                   href={`/services/${s.slug}`}
//                   className="block bg-[#f9f9f9] hover:bg-orange-50 rounded-xl shadow p-6 transition"
//                 >
//                   <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
//                     <Image
//                       // @ts-ignore
//                       src={previewImage || "/placeholder.jpg"}
//                       alt={s.title}
//                       fill
//                       sizes="(max-width: 768px) 100vw, 33vw"
//                       className="object-cover"
//                     />
//                   </div>
//                   <h3 className="text-lg font-semibold mt-4">{s.title}</h3>
//                   <p className="text-gray-600 text-sm mt-2 line-clamp-3">
//                     {s.description}
//                   </p>
//                   <p className="text-orange-500 text-sm font-medium mt-3">
//                     Learn More →
//                   </p>
//                 </Link>
//               );
//             })}
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }

// app/services/[slug]/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Nav from "@/app/quote/nav";
import Footer from "@/components/footer";
import { services } from "../serviceData";
import ServiceCarousel from "@/components/serviceCarousel";
import { useToast } from "@/components/ui/use-toast";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking request sent!",
      description: "We'll get back to you to confirm your project details.",
    });
    setFormData({ name: "", email: "", phone: "", date: "", message: "" });
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Service not found.</p>
      </div>
    );
  }

  const otherServices = services.filter((s) => s.slug !== params.slug);
  const images =
    service.images && service.images.length > 0
      ? service.images
      : service.images
      ? [service.images]
      : [];

  return (
    <>
      <Nav />

      <main className="min-h-screen bg-white px-6 md:px-16 py-16 pt-36">
        {/* Service Details */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            {service.title}
          </h1>
          {images.length > 1 ? (
            // @ts-ignore
            <ServiceCarousel images={images} title={service.title} />
          ) : (
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                // @ts-ignore
                src={images[0] || "/placeholder.jpg"}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          )}

          <div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {service.description}
            </p>
            <ul className="mt-6 space-y-2">
              {service.features?.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 text-sm md:text-base"
                >
                  ✅ <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>

            {/* ✅ Block Boss Button (only for block-industry) */}
            {service.slug === "block-industry" && (
              <div className="mt-8 justify-center flex sm:justify-start">
                <Link
                  href="/block-boss"
                  className="inline-flex items-center  bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                  Visit Block Boss{" "}
                  <IoArrowForwardCircleOutline className="ml-3 text-lg sm:text-xl shake-horizontal" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Booking Section */}
        <section className="mt-20 bg-orange-50 rounded-3xl px-4 py-8 md:p-12 shadow-inner">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Book This Service
          </h2>
          <p className="text-gray-600 mb-8">
            Ready to get started? Choose your preferred start date and share a
            few details — our team will reach out to confirm everything.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6 max-w-3xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none w-full"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none w-full"
            />

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Preferred Start Date"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none font-montserrat"
            />

            <textarea
              name="message"
              placeholder="Tell us a bit about your project"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none w-full"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition w-full"
            >
              Submit Booking Request
            </button>
          </form>
        </section>

        {/* Other Services */}
        <section className="mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            Explore Other Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {otherServices.map((s) => {
              const previewImage =
                s.images && s.images.length > 0 ? s.images[0] : s.images;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block bg-[#f9f9f9] hover:bg-orange-50 rounded-xl shadow p-6 transition"
                >
                  <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
                    <Image
                      // @ts-ignore
                      src={previewImage || "/placeholder.jpg"}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mt-4">{s.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {s.description}
                  </p>
                  <p className="text-orange-500 text-sm font-medium mt-3 flex items-center">
                    Learn More{" "}
                    <IoArrowForwardCircleOutline className="ml-1 text-lg sm:text-xl " />
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
