"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  Globe,
  ChevronDown,
  Sparkles,
  Grid3x3,
  Menu,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Products", hasDropdown: true },
  { label: "AI", hasDropdown: true, hasSparkle: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[64px]">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src={
                scrolled
                  ? "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/logo-zoom@2x.png"
                  : "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/logo-zoom-white@2x.png"
              }
              alt="Zoom"
              width={88}
              height={20}
              className="h-5 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 ml-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  scrolled
                    ? "text-zoom-dark hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.hasSparkle && (
                  <Sparkles className="w-3.5 h-3.5 text-zoom-blue" />
                )}
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-1">
            <button
              className={`p-2 rounded-md transition-colors ${
                scrolled
                  ? "text-zoom-dark hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`p-2 rounded-md transition-colors ${
                scrolled
                  ? "text-zoom-dark hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled
                  ? "text-zoom-dark hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Meet
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>
            <a
              href="#"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                scrolled ? "text-zoom-dark" : "text-white"
              }`}
            >
              Sign In
            </a>
            <a
              href="#"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                scrolled ? "text-zoom-dark" : "text-white"
              }`}
            >
              Support
            </a>
            <a
              href="#"
              className={`ml-2 px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                scrolled
                  ? "text-zoom-blue border-zoom-blue hover:bg-blue-50"
                  : "text-white border-white/40 hover:bg-white/10"
              }`}
            >
              Contact Sales
            </a>
            <a
              href="#"
              className="ml-2 px-4 py-2 text-sm font-medium rounded-lg bg-zoom-blue text-white hover:bg-blue-700 transition-colors"
            >
              Sign Up Free
            </a>
            <button
              className={`ml-1 p-2 rounded-md transition-colors ${
                scrolled
                  ? "text-zoom-dark hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="App menu"
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 ${
              scrolled ? "text-zoom-dark" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href="#"
                className="block px-3 py-2 text-sm font-medium text-zoom-dark hover:bg-gray-50 rounded-md"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t space-y-2">
              <a
                href="#"
                className="block w-full text-center px-4 py-2 text-sm font-medium rounded-lg border border-zoom-blue text-zoom-blue"
              >
                Contact Sales
              </a>
              <a
                href="#"
                className="block w-full text-center px-4 py-2 text-sm font-medium rounded-lg bg-zoom-blue text-white"
              >
                Sign Up Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
