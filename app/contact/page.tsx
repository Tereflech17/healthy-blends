"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Construct the WhatsApp message
      const whatsappMessage = `New message from Healthy Blends website:
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // Create the WhatsApp API URL
      const whatsappUrl = `https://api.whatsapp.com/send?phone=233542357318&text=${encodedMessage}`;

      // Send the message
      const response = await fetch(whatsappUrl);

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2d5a27] text-center mb-12">
              Contact Us
            </h1>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-semibold text-[#2d5a27] mb-6">
                    Get in Touch
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#2d5a27]/10 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 text-[#2d5a27]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2d5a27]">
                          Phone & WhatsApp
                        </h3>
                        <a
                          href="https://wa.me/3474396347"
                          className="text-[#2d5a27]/80 hover:text-[#2d5a27] transition-colors"
                        >
                          +233 542 357 318
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#2d5a27]/10 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 text-[#2d5a27]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2d5a27]">Email</h3>
                        <a
                          href="mailto:info@healthyblends.com"
                          className="text-[#2d5a27]/80 hover:text-[#2d5a27] transition-colors"
                        >
                          info@healthyblends.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#2d5a27]/10 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 text-[#2d5a27]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2d5a27]">
                          Location
                        </h3>
                        <p className="text-[#2d5a27]/80">Accra, Ghana</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#2d5a27]/10 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 text-[#2d5a27]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2d5a27]">
                          Social Media
                        </h3>
                        <a
                          href="https://instagram.com/healthyblendsgh"
                          className="text-[#2d5a27]/80 hover:text-[#2d5a27] transition-colors"
                        >
                          @healthyblendsgh
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-[#2d5a27] mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#2d5a27] mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-[#2d5a27]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#2d5a27] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-[#2d5a27]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#2d5a27] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-[#2d5a27]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  {submitStatus === "success" && (
                    <div className="bg-green-100 text-green-800 p-4 rounded-lg">
                      Message sent successfully! We will get back to you soon.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="bg-red-100 text-red-800 p-4 rounded-lg">
                      Failed to send message. Please try again or contact us
                      directly.
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#2d5a27] text-white py-3 rounded-lg hover:bg-[#1e3d1a] transition-colors ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
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
