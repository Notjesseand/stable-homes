// // app/services/[slug]/page.tsx
// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Nav from "@/app/quote/nav";
// import Footer from "@/components/footer";
// import { services } from "../serviceData";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import Autoplay from "embla-carousel-autoplay"; // 👈 import autoplay

// export default function ServicePage({ params }: { params: { slug: string } }) {
//   const service = services.find((s) => s.slug === params.slug);

//   if (!service) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600">
//         <p>Service not found.</p>
//       </div>
//     );
//   }

//   const otherServices = services.filter((s) => s.slug !== params.slug);

//   // ✅ Normalize images
//   const images =
//     service.images && service.images.length > 0
//       ? service.images
//       : service.images
//       ? [service.images]
//       : [];

//   return (
//     <>
//       <Nav />

//       <div className="min-h-screen bg-white px-6 md:px-16 py-16 pt-36">
//         {/* Main Service Section */}
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           {images.length > 1 ? (
//             <Carousel
//               className="w-full max-w-lg"
//               opts={{
//                 loop: true, // ✅ infinite loop
//               }}
//               plugins={[
//                 Autoplay({
//                   delay: 3000, // ✅ 3 seconds
//                 }),
//               ]}
//             >
//               <CarouselContent>
//                 {images.map((img: any, index: number) => (
//                   <CarouselItem key={index}>
//                     <Image
//                       src={img}
//                       alt={`${service.title} ${index + 1}`}
//                       width={600}
//                       height={400}
//                       className="rounded-2xl shadow-md object-cover w-full h-[400px]"
//                     />
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//               <CarouselPrevious />
//               <CarouselNext />
//             </Carousel>
//           ) : images.length === 1 ? (
//             <Image
//               // @ts-ignore
//               src={images[0]}
//               alt={service.title}
//               width={600}
//               height={400}
//               className="rounded-2xl shadow-md object-cover"
//             />
//           ) : (
//             <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-2xl">
//               <span className="text-gray-500">No image available</span>
//             </div>
//           )}

//           <div>
//             <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
//               {service.title}
//             </h1>
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
//         </div>

//         {/* Other Services */}
//         <div className="mt-20">
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
//                   {previewImage ? (
//                     <img
//                       // @ts-ignore
//                       src={previewImage}
//                       alt={s.title}
//                       width={400}
//                       height={250}
//                       className="rounded-lg object-cover max-h-72"
//                     />
//                   ) : (
//                     <div className="w-full h-[250px] flex items-center justify-center bg-gray-100 rounded-lg">
//                       <span className="text-gray-400">No image</span>
//                     </div>
//                   )}
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
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import Nav from "@/app/quote/nav";
import Footer from "@/components/footer";
import { services } from "../serviceData";
import ServiceCarousel from "@/components/serviceCarousel";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

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
        <section className="grid md:grid-cols-2 gap-10 items-center">
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
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
              {service.title}
            </h1>
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
          </div>
        </section>

        {/* other services */}
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
                  <p className="text-orange-500 text-sm font-medium mt-3">
                    Learn More →
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
