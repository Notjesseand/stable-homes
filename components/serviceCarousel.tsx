// components/serviceCarousel.tsx
"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ServiceCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <Carousel
      className="w-full max-w-lg"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 3000 })]} // ✅ safe to use here
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full mx-auto h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={img}
                alt={`${title} ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-7" />
      <CarouselNext className="mr-7" />
    </Carousel>
  );
}
