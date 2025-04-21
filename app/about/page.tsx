"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[#f4f6e6]">
      {/* Top Banner */}
      <div className="bg-[#2d5a27] text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 relative z-10">
            <div className="flex items-center gap-2 animate-pulse">
              <span className="text-xl">🔥</span>
              <p className="text-sm md:text-base">
                Special Offer: Free Delivery on Orders Above GH₵100
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#"
                className="text-sm hover:text-[#ffd700] transition-colors"
              >
                Track Order
              </a>
              <span className="text-white/30">|</span>
              <a
                href="#"
                className="text-sm hover:text-[#ffd700] transition-colors"
              >
                Find a Store
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <Image
                src="/logo.png"
                alt="Healthy Blends Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div className="hidden md:flex items-center gap-6">
                <Link
                  href="/"
                  className="text-[#2d5a27] hover:text-[#1e3d1a] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-[#2d5a27] hover:text-[#1e3d1a] transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  className="text-[#2d5a27] hover:text-[#1e3d1a] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-[#2d5a27] hover:text-[#1e3d1a] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-[#2d5a27] text-white px-4 py-2 rounded-full hover:bg-[#1e3d1a] transition-colors text-sm">
                Order Now
              </button>
              <button className="md:hidden text-[#2d5a27]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* About Us Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2d5a27] text-center mb-12">
              About Healthy Blends
            </h1>

            <div className="space-y-12">
              {/* Our Story */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-[#2d5a27] mb-4">
                  Our Story
                </h2>
                <p className="text-[#2d5a27] text-lg">
                  Healthy Blends was born from a passion for natural wellness
                  and a commitment to providing high-quality health drinks.
                  Founded in 2023, we started with a simple mission: to create
                  premium, natural beverages that support healthy living and
                  weight management.
                </p>
              </div>

              {/* Our Mission */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-[#2d5a27] mb-4">
                  Our Mission
                </h2>
                <p className="text-[#2d5a27] text-lg">
                  We are dedicated to crafting premium health drinks using only
                  the finest natural ingredients. Our goal is to help people
                  achieve their wellness goals through delicious, nutritious
                  beverages that support weight management and overall health.
                </p>
              </div>

              {/* Our Values */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-[#2d5a27] mb-4">
                  Our Values
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Quality",
                      description:
                        "We use only premium, natural ingredients in our products.",
                    },
                    {
                      title: "Health",
                      description:
                        "Our products are designed to support your wellness journey.",
                    },
                    {
                      title: "Sustainability",
                      description:
                        "We are committed to eco-friendly practices and packaging.",
                    },
                    {
                      title: "Customer Satisfaction",
                      description:
                        "Your health and satisfaction are our top priorities.",
                    },
                  ].map((value) => (
                    <div
                      key={value.title}
                      className="bg-[#f4f6e6] p-4 rounded-lg"
                    >
                      <h3 className="font-semibold text-[#2d5a27] mb-2">
                        {value.title}
                      </h3>
                      <p className="text-[#2d5a27]/80">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d5a27] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-lg font-medium">
                &ldquo;Each sip is healthy&rdquo;
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="tel:+233542357318"
                className="hover:opacity-80 transition-opacity"
              >
                +233 542 357 318
              </a>
              <a
                href="https://instagram.com/healthyblendsgh"
                className="hover:opacity-80 transition-opacity"
              >
                @healthyblendsgh
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
