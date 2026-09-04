"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PRODUCTS = [
  {
    name: "Meetings",
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/meetings.jpg",
  },
  {
    name: "My Notes",
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/my-notes-hp-card.webp",
  },
  {
    name: "ZoomMate",
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/ZoomMate.webp",
  },
  {
    name: "AI Productivity Suite",
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/AI-suite.webp",
  },
  {
    name: "Phone",
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/phone.jpg",
  },
  {
    name: "Webinars",
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/web.jpg",
  },
  {
    name: "Bonsai",
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/bonsai_hp_card-new.webp",
  },
  {
    name: "Rooms",
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/zoom-rooms.jpg",
  },
  {
    name: "BrightHire",
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/brighthire_hp_card.webp",
  },
  {
    name: "Virtual Agent",
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/virtual.jpg",
  },
  {
    name: "Contact Center",
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/contact-center.jpg",
  },
  {
    name: "workvivo",
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/workvivo_hp_card.webp",
  },
];

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative bg-zoom-navy overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e2e] via-[#0f1545] to-[#1a1f5c]" />
      <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-gradient-radial from-zoom-blue/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-gradient-radial from-purple-600/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 pt-[64px]">
        {/* Hero text */}
        <div className="max-w-[900px] mx-auto text-center px-6 pt-16 pb-10">
          <h1 className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] text-white mb-6">
            Find out what&apos;s possible
            <br />
            when work connects
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-[600px] mx-auto mb-8 leading-relaxed">
            Bridge the gap between talking and doing with the AI-first work
            platform built for you.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#"
              className="px-6 py-3 text-sm font-medium rounded-lg bg-[#181819] text-white hover:bg-black transition-colors"
            >
              Explore products
            </a>
            <a
              href="#"
              className="px-6 py-3 text-sm font-medium rounded-lg bg-white text-zoom-dark hover:bg-gray-100 transition-colors"
            >
              Find your plan
            </a>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="relative pb-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <Swiper
              modules={[Navigation, Pagination]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1.5}
              spaceBetween={16}
              centeredSlides={false}
              pagination={{
                clickable: true,
                el: ".hero-pagination",
              }}
              breakpoints={{
                640: { slidesPerView: 2.5, spaceBetween: 16 },
                768: { slidesPerView: 3.5, spaceBetween: 20 },
                1024: { slidesPerView: 5, spaceBetween: 20 },
                1280: { slidesPerView: 6, spaceBetween: 20 },
              }}
              className="!overflow-visible"
            >
              {PRODUCTS.map((product) => (
                <SwiperSlide key={product.name}>
                  <div className="group cursor-pointer">
                    <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-white/5">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 200px, 280px"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-white text-sm font-medium drop-shadow-lg">
                          {product.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="hero-pagination flex gap-2" />
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
