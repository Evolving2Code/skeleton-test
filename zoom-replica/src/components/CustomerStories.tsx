"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const STORIES = [
  {
    company: "Major League Baseball™",
    title:
      "Major League Baseball™ and Zoom expand the employee-fan experience",
    quote:
      "Zoom has allowed us to continue a tradition of really being a technology-focused company and making sure that we are using cutting-edge technology not only to advance our business but also for our fans.",
    author: "Noah Garden",
    role: "Chief Revenue Officer",
    image:
      "https://images.unsplash.com/photo-1566577739112-5180d4bf9391?w=800&h=500&fit=crop",
    logo: "MLB",
  },
  {
    company: "TheShareCo",
    title:
      "Advancing mental wellness through TheShareCo's journey with Zoom Video SDK",
    quote:
      "Zoom Video SDKs full flexibility in layout customization allowed us to achieve a real-life experience within the limited real estate presented by a phone or smart device.",
    author: "Tan Han Sing",
    role: "Founder and CEO, TheShareCo",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop",
    logo: "TheShareCo",
  },
  {
    company: "Cricut",
    title: "Cricut slashed call abandonment rates by 90% with Zoom",
    quote:
      "Before Zoom, we juggled 10-plus tabs to handle calls. Now, everything is integrated into one clean platform, from CRM connections to video transitions. It is a dream workflow.",
    author: "Taylor Nelson",
    role: "Member Care QA Specialist",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    logo: "Cricut",
  },
  {
    company: "Capital One",
    title:
      "A connected, collaborative workforce drives innovation at Capital One",
    quote:
      "We are highly collaborative, we are people-centered, we are interested in moving ourselves and our goals to the next level. Zoom is, I believe, the ideal tool to suit the culture that we are and that we strive to be at Capital One.",
    author: "Nikita Steals",
    role: "VP, Tech Talent Acquisition, Capital One",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
    logo: "Capital One",
  },
];

export default function CustomerStories() {
  const [activeStory, setActiveStory] = useState(0);
  const story = STORIES[activeStory];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-zoom-blue mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-zoom-blue" />
            Customer stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-zoom-navy leading-tight">
            Businesses achieve more with Zoom
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_120px] gap-6">
          {/* Main story card */}
          <div className="relative rounded-2xl overflow-hidden min-h-[400px] group">
            <Image
              src={story.image}
              alt={story.company}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <div className="mb-4">
                <span className="text-white/80 text-sm font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  {story.logo}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-white mb-4 max-w-[600px] leading-tight">
                {story.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-[600px] mb-4">
                &ldquo;{story.quote}&rdquo;
              </p>
              <p className="text-white/60 text-sm">
                — {story.author}, {story.role}
              </p>
              <a
                href="#"
                className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-zoom-blue flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                aria-label="Read more"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Thumbnail navigation */}
          <div className="hidden lg:flex flex-col gap-3">
            {STORIES.map((s, i) => (
              <button
                key={s.company}
                onClick={() => setActiveStory(i)}
                className={`relative rounded-xl overflow-hidden aspect-[3/4] transition-all ${
                  activeStory === i
                    ? "ring-2 ring-zoom-blue ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.company}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile dots */}
        <div className="flex lg:hidden justify-center gap-2 mt-6">
          {STORIES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStory(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                activeStory === i ? "bg-zoom-blue" : "bg-gray-300"
              }`}
              aria-label={`Go to story ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
