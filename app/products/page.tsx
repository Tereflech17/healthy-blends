"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Pine Tea Classic",
      description: "Our signature blend of fresh pineapple and natural herbs",
      price: "GH₵50",
      image: "/IMG_7702.JPG",
      features: ["Weight Loss", "Energy Boost", "Natural Ingredients"],
    },
    {
      id: 2,
      name: "Pine Tea Premium",
      description: "Enhanced formula with additional health benefits",
      price: "GH₵75",
      image: "/IMG_7702.JPG",
      features: ["Advanced Formula", "Extra Strength", "Premium Quality"],
    },
    {
      id: 3,
      name: "Pine Tea Family Pack",
      description: "Perfect for the whole family's wellness journey",
      price: "GH₵200",
      image: "/IMG_7702.JPG",
      features: ["4 Bottles", "Bulk Savings", "Family Wellness"],
    },
    {
      id: 4,
      name: "Pine Tea Starter Kit",
      description: "Begin your wellness journey with our starter pack",
      price: "GH₵120",
      image: "/IMG_7702.JPG",
      features: ["2 Bottles", "Guide Book", "Free Shaker"],
    },
  ];

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
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Healthy Blends Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link
                  href="/"
                  className="text-[#2d5a27] hover:text-[#1e3d1a] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-[#2d5a27] hover:text-[#1e3d1a] transition-colors font-semibold"
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

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#2d5a27] mb-4">
              Our Products
            </h1>
            <p className="text-xl text-[#2d5a27]/80 max-w-2xl mx-auto">
              Discover our range of premium pine tea products, carefully crafted
              to support your health and wellness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d5a27]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2d5a27] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[#2d5a27]/80 mb-4">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-[#2d5a27]/10 text-[#2d5a27] text-sm px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#2d5a27]">
                      {product.price}
                    </span>
                    <button className="bg-[#2d5a27] text-white px-6 py-2 rounded-full hover:bg-[#1e3d1a] transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
