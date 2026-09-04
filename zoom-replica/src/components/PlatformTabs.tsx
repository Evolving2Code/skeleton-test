"use client";

import { useState } from "react";
import Image from "next/image";

const TABS = [
  "Collaboration",
  "Customer support",
  "Marketing",
  "Sales",
  "Employee engagement",
];

const TAB_CONTENT: Record<
  string,
  { bullets: { title: string; text: string }[]; image: string }
> = {
  Collaboration: {
    bullets: [
      {
        title: "Support hybrid and remote work",
        text: "Keep global teams engaged with reliable video, chat, documents, and more.",
      },
      {
        title: "Seamless communication",
        text: "Save time and cut costs with Meetings, Phone, Chat, and more, in one UCaaS platform.",
      },
      {
        title: "Keep workflows moving",
        text: "From brainstorms to documents, Zoom helps teams cut friction and avoid stalls.",
      },
      {
        title: "Do more with AI",
        text: "Built-in AI summarizes meetings and automates next steps, while ZoomMate goes further and generates quality assets like decks and docs.",
      },
    ],
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/collaboration.webp",
  },
  "Customer support": {
    bullets: [
      {
        title: "One platform, full context",
        text: "Phone, chat, email, SMS, social, and video unified in a single view.",
      },
      {
        title: "Smarter automation",
        text: "Virtual Agent handles multi-intent questions, so human agents can focus on high-value cases.",
      },
      {
        title: "Better self-service",
        text: "Instant answers and proactive resolutions cut friction and drive loyalty.",
      },
      {
        title: "AI-powered support",
        text: "Real-time suggestions, key action highlights, and task automation keep agents sharp.",
      },
    ],
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/contact-center.jpg",
  },
  Marketing: {
    bullets: [
      {
        title: "Keep audiences engaged",
        text: "Capture leads with branded webinars and events that build pipeline.",
      },
      {
        title: "Deliver stand-out experiences",
        text: "Host polished, interactive events that reflect your brand.",
      },
      {
        title: "Broader reach and richer insights",
        text: "Extend every event with virtual and hybrid options.",
      },
      {
        title: "Put busywork on auto-pilot with AI",
        text: "Automate content, personalize outreach, and analyze performance faster.",
      },
    ],
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/web.jpg",
  },
  Sales: {
    bullets: [
      {
        title: "Make selling easier",
        text: "Eliminate admin work so reps can focus on building relationships.",
      },
      {
        title: "Boost productivity and win rates",
        text: "Auto-summarized meetings, suggested follow-ups, and deal insights keep cycles short.",
      },
      {
        title: "Give RevOps deeper visibility",
        text: "See pipeline insights and competitor trends for confident forecasting.",
      },
      {
        title: "Close with confidence",
        text: "Agentic AI flags risks, coaches reps, and automates next steps.",
      },
    ],
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/phone.jpg",
  },
  "Employee engagement": {
    bullets: [
      {
        title: "Foster community in hybrid teams",
        text: "Get company-wide updates, recognition, and social feeds that connect remote employees.",
      },
      {
        title: "Create immersive experiences",
        text: "Host interactive all-hands, learning sessions, and celebrations teams love.",
      },
      {
        title: "Communicate on your schedule",
        text: "Share video updates asynchronously — no extra meetings.",
      },
      {
        title: "Reinforce culture and recognition",
        text: "Celebrate wins, milestones, and initiatives with rich media and live events.",
      },
    ],
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/workvivo_hp_card.webp",
  },
};

export default function PlatformTabs() {
  const [activeTab, setActiveTab] = useState("Collaboration");
  const content = TAB_CONTENT[activeTab];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-center text-zoom-navy mb-10 leading-tight">
          One platform. Endless ways to work together.
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all ${
                activeTab === tab
                  ? "bg-white text-zoom-dark border-2 border-zoom-dark shadow-sm"
                  : "text-zoom-gray hover:text-zoom-dark"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {content.bullets.map((bullet) => (
              <div key={bullet.title} className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zoom-blue mt-2.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-zoom-dark">
                    {bullet.title}:{" "}
                    <span className="font-normal text-zoom-gray">
                      {bullet.text}
                    </span>
                  </p>
                </div>
              </div>
            ))}
            <a
              href="#"
              className="inline-block mt-4 px-6 py-3 text-sm font-medium rounded-lg bg-zoom-blue text-white hover:bg-blue-700 transition-colors"
            >
              Explore products
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
            <Image
              src={content.image}
              alt={activeTab}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
