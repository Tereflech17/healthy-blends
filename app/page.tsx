"use client";

import Image from "next/image";
import Link from "next/link";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f6e6]">
      <Chat />
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
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-[#ffd700] rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffd700] rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
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

      {/* Hero Banner */}
      <section className="relative h-[75vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero1.png"
            alt="Healthy Blends Hero"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2d5a27]/90 via-[#2d5a27]/70 to-transparent"></div>
        </div>

        <div className="relative h-full container mx-auto px-4">
          <div className="flex items-center h-full max-w-4xl">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm md:text-base">
                  🌟 Premium Quality Health Drinks
                </span>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Discover the Power of
                  <span className="block text-[#ffd700] mt-2">
                    Natural Pine Tea
                  </span>
                </h1>
              </div>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                Experience the perfect blend of nature&apos;s finest
                ingredients, carefully crafted to enhance your well-being.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-[#ffd700] text-[#2d5a27] px-8 py-4 rounded-full font-semibold hover:bg-white transition duration-300 transform hover:scale-105">
                  Shop Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition duration-300">
                  Learn More
                </button>
              </div>

              {/* Feature badges */}
              <div className="flex flex-wrap gap-4 pt-8">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full transform hover:translate-y-[-4px] transition duration-300">
                  <span className="text-[#ffd700]">✨</span> 100% Natural
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full transform hover:translate-y-[-4px] transition duration-300">
                  <span className="text-[#ffd700]">🌿</span> Cold Pressed
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full transform hover:translate-y-[-4px] transition duration-300">
                  <span className="text-[#ffd700]">💪</span> Premium Quality
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f4f6e6] to-transparent"></div>
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#ffd700] rounded-full opacity-10"></div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-[#f4f6e6]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Product Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden group">
                <Image
                  src="/IMG_7702.JPG"
                  alt="Healthy Blends Pine Tea"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d5a27]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#ffd700] rounded-full opacity-20 z-10"></div>
                <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-[#2d5a27] rounded-full opacity-20 z-10"></div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-[#2d5a27] font-bold text-xl">100%</div>
                  <div className="text-[#2d5a27]/80 text-sm">Natural</div>
                </div>
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-8">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2d5a27] relative">
                  Premium Pine Tea
                  <div className="absolute -right-6 -top-6 w-12 h-12 bg-[#ffd700] rounded-full opacity-20"></div>
                </h2>
              </div>

              <p className="text-xl text-[#2d5a27]/80">
                Experience the perfect blend of nature&apos;s finest
                ingredients, carefully crafted to enhance your well-being and
                support your weight loss journey.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-[#ffd700] text-2xl">⚡</span>
                    <div>
                      <h3 className="font-semibold text-[#2d5a27]">
                        Energy Boost
                      </h3>
                      <p className="text-sm text-[#2d5a27]/80">
                        Natural vitality
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-[#ffd700] text-2xl">💪</span>
                    <div>
                      <h3 className="font-semibold text-[#2d5a27]">
                        Weight Loss
                      </h3>
                      <p className="text-sm text-[#2d5a27]/80">
                        Up to 5kg in 14 days
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-[#ffd700] text-2xl">🌿</span>
                    <div>
                      <h3 className="font-semibold text-[#2d5a27]">Natural</h3>
                      <p className="text-sm text-[#2d5a27]/80">Cold pressed</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-[#ffd700] text-2xl">✨</span>
                    <div>
                      <h3 className="font-semibold text-[#2d5a27]">Premium</h3>
                      <p className="text-sm text-[#2d5a27]/80">
                        Quality ingredients
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-[#2d5a27] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1e3d1a] transition duration-300 transform hover:scale-105">
                  Order Now
                </button>
                <button className="border-2 border-[#2d5a27] text-[#2d5a27] px-8 py-4 rounded-full font-semibold hover:bg-[#2d5a27]/10 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know Section with Original Marketing Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#f4f6e6] rounded-3xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="space-y-8">
                  <div className="inline-block">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2d5a27] relative">
                      Did you know?
                      <div className="absolute -right-6 -top-6 w-12 h-12 bg-[#ffd700] rounded-full opacity-20"></div>
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
                      <h3 className="text-2xl font-semibold text-[#2d5a27] mb-2">
                        Weight Loss Journey
                      </h3>
                      <p className="text-xl text-[#2d5a27]">
                        You can lose up to{" "}
                        <span className="font-bold text-2xl">5kg</span> in just
                        14 days with pine juice
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 bg-white/30 backdrop-blur-sm rounded-lg p-4 transform hover:translate-x-2 transition-transform duration-300">
                        <span className="text-[#2d5a27] text-xl">🌿</span>
                        <p className="text-[#2d5a27]">
                          Natural fat-burning properties
                        </p>
                      </div>

                      <div className="flex items-center gap-3 bg-white/30 backdrop-blur-sm rounded-lg p-4 transform hover:translate-x-2 transition-transform duration-300">
                        <span className="text-[#2d5a27] text-xl">💪</span>
                        <p className="text-[#2d5a27]">
                          Boosts energy levels naturally
                        </p>
                      </div>

                      <div className="flex items-center gap-3 bg-white/30 backdrop-blur-sm rounded-lg p-4 transform hover:translate-x-2 transition-transform duration-300">
                        <span className="text-[#2d5a27] text-xl">⚡</span>
                        <p className="text-[#2d5a27]">Accelerates metabolism</p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-6 bg-[#2d5a27] text-white px-8 py-3 rounded-full hover:bg-[#1e3d1a] transition duration-300 flex items-center gap-2">
                    Start Your Journey
                    <span className="text-xl">→</span>
                  </button>
                </div>

                <div className="relative">
                  {/* Single image with adjusted size */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group h-full">
                    <Image
                      src="/woman_in_gym_clothes.png"
                      alt="Woman in Gym Clothes"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d5a27]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Floating achievement badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <div className="text-center">
                      <div className="text-[#2d5a27] font-bold text-xl">14</div>
                      <div className="text-[#2d5a27]/80 text-sm">Days</div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#2d5a27] rounded-full opacity-20 z-10"></div>
                  <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-[#ffd700] rounded-full opacity-20 z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#f4f6e6]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#2d5a27] text-center mb-12">
            Benefits of Pine Tea
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Ingredients",
                description:
                  "Our pine tea is crafted from carefully selected, organic ingredients. We combine fresh pineapple, ginger root, and natural herbs to create a powerful blend that supports your body's natural processes. Each ingredient is handpicked at peak freshness to ensure maximum nutritional benefits.",
                features: [
                  "100% Organic",
                  "No Artificial Additives",
                  "Fresh Local Ingredients",
                ],
              },
              {
                title: "Cold Pressed",
                description:
                  "Our unique cold-pressing technique preserves all the essential nutrients, enzymes, and vitamins that would otherwise be lost in traditional processing methods. This gentle extraction process ensures you get the maximum health benefits from every sip.",
                features: [
                  "Maximum Nutrient Retention",
                  "Fresh Taste",
                  "Longer Shelf Life",
                ],
              },
              {
                title: "Weight Management",
                description:
                  "Pine tea is a natural aid in your weight management journey. Rich in antioxidants and metabolism-boosting compounds, it helps suppress appetite, increase fat burning, and support healthy digestion. Regular consumption as part of a balanced diet can help you achieve your weight goals.",
                features: [
                  "Boosts Metabolism",
                  "Natural Appetite Control",
                  "Supports Fat Burning",
                ],
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#2d5a27] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[#2d5a27] opacity-80 mb-6">
                  {benefit.description}
                </p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-[#2d5a27] opacity-80"
                    >
                      <span className="mr-2 text-[#2d5a27]">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-[#f4f6e6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2d5a27] mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-[#2d5a27]/80 max-w-2xl mx-auto">
              Hear from our satisfied customers who have transformed their lives
              with our premium pine tea.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-[#ffd700]">{"★".repeat(5)}</div>
                <span className="ml-2 text-sm text-[#2d5a27]/60">
                  2 weeks ago
                </span>
              </div>
              <p className="text-[#2d5a27] mb-4">
                &ldquo;I&apos;ve lost 4kg in just 2 weeks! Pine Tea has become
                my morning ritual. Not only does it help with weight loss, but I
                feel more energetic throughout the day.&rdquo;
              </p>
              <div className="border-t border-[#2d5a27]/10 pt-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#2d5a27]/10 flex items-center justify-center text-[#2d5a27] font-bold">
                    KA
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-[#2d5a27]">
                      Kwame Adjei
                    </h4>
                    <p className="text-sm text-[#2d5a27]/60">
                      Lost 4kg in 2 weeks
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-[#ffd700]">{"★".repeat(5)}</div>
                <span className="ml-2 text-sm text-[#2d5a27]/60">
                  1 week ago
                </span>
              </div>
              <p className="text-[#2d5a27] mb-4">
                &ldquo;The energy boost is incredible! As a fitness enthusiast,
                I&apos;ve tried many supplements, but Pine Tea gives me natural
                energy without the crash. My workouts have never been
                better!&rdquo;
              </p>
              <div className="border-t border-[#2d5a27]/10 pt-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#2d5a27]/10 flex items-center justify-center text-[#2d5a27] font-bold">
                    AA
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-[#2d5a27]">
                      Abena Asante
                    </h4>
                    <p className="text-sm text-[#2d5a27]/60">
                      Fitness Enthusiast
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-[#ffd700]">{"★".repeat(5)}</div>
                <span className="ml-2 text-sm text-[#2d5a27]/60">
                  3 weeks ago
                </span>
              </div>
              <p className="text-[#2d5a27] mb-4">
                &ldquo;I was skeptical at first, but the results speak for
                themselves. Down 5kg and my metabolism has improved
                significantly. Plus, it tastes amazing! This is now a permanent
                part of my health routine.&rdquo;
              </p>
              <div className="border-t border-[#2d5a27]/10 pt-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#2d5a27]/10 flex items-center justify-center text-[#2d5a27] font-bold">
                    KO
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-[#2d5a27]">Kofi Osei</h4>
                    <p className="text-sm text-[#2d5a27]/60">
                      Lost 5kg in 3 weeks
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-[#ffd700]">{"★".repeat(5)}</div>
                <span className="ml-2 text-sm text-[#2d5a27]/60">
                  1 month ago
                </span>
              </div>
              <p className="text-[#2d5a27] mb-4">
                &ldquo;The natural ingredients make all the difference.
                I&apos;ve noticed improved digestion and better sleep quality
                since starting Pine Tea. Highly recommend!&rdquo;
              </p>
              <div className="border-t border-[#2d5a27]/10 pt-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#2d5a27]/10 flex items-center justify-center text-[#2d5a27] font-bold">
                    EM
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-[#2d5a27]">
                      Efua Mensah
                    </h4>
                    <p className="text-sm text-[#2d5a27]/60">
                      Health Conscious
                    </p>
                  </div>
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
