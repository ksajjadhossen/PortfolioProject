"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Projects", "Blogs", "Contact"];

  // স্ক্রলিং হ্যান্ডেল করার ফাংশন
  const handleScroll = (id) => {
    setActive(id);
    setIsOpen(false); // মোবাইল মেনু বন্ধ করার জন্য
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 lg:px-12 bg-[#1B1B1B]/80 backdrop-blur-md border-white/5">
      <div className="max-w-360 mx-auto flex items-center justify-between">
        {/* --- Logo Section --- */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("Home");
          }}
        >
          <div className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center bg-white/5">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <span className="text-white text-xl font-semibold tracking-tight uppercase">
            SAJJAD
          </span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <div className="hidden lg:flex items-center border border-white/5 rounded-full p-1 shadow-2xl bg-black/10">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleScroll(link)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active === link
                      ? "bg-[#1d212b] text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Right Section --- */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleScroll("Contact")}
            className="hidden sm:block bg-white text-black px-7 py-2.5 rounded-full font-bold text-sm hover:bg-gray-200 transition-all shadow-lg"
          >
            Download CV
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-3xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#1B1B1B] border-t border-white/5 p-6 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleScroll(link)}
                  className={`w-full text-left py-3 px-4 rounded-xl text-lg font-medium transition-all ${
                    active === link
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
            <li className="pt-4 border-t border-white/5">
              <button
                onClick={() => handleScroll("Contact")}
                className="block w-full text-center bg-white text-black py-4 rounded-xl font-bold transition-all active:scale-95"
              >
                Download CV
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
