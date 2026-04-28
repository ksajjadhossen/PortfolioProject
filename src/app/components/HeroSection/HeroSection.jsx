"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import ScrollingTicker from "../ScrollingTicker/ScrollingTicker";

const Hero = () => {
  const username = "ksajjadhossen";

  return (
    <div className="">
      <section
        id="home"
        className=" min-h-screen w-full bg-[#1B1B1B] flex items-center justify-center pt-24 pb-12 px-6 lg:px-12 overflow-hidden relative"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/10 rounded-full rotate-12"></div>
        </div>

        <div className=" max-w-4xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          <div className="flex flex-col gap-5 order-2 lg:order-1 text-left">
            {/* Status Badge */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 w-fit px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-gray-300 text-[10px] font-medium uppercase tracking-widest">
                Available for Work
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-white">Sajjad</span>
              </h1>
              <h2 className="text-lg lg:text-xl text-gray-400 font-medium">
                Software Developer
              </h2>
              <p className="text-gray-500 text-sm lg:text-base max-w-[320px] lg:max-w-md leading-relaxed">
                I craft beautiful, high-performance web applications using
                modern technologies. Passionate about creating intuitive user
                experiences.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <HiOutlineLocationMarker className="text-base" />
              <span>Dhaka, Bangladesh</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <Link
                href="#contact"
                className="bg-white text-black px-6 py-2.5 rounded-xl font-bold text-xs hover:bg-gray-200 transition-all shadow-lg"
              >
                Let's Work Together
              </Link>
              <Link
                href="#projects"
                className="bg-[#242424] text-white border border-white/5 px-6 py-2.5 rounded-xl font-bold text-xs hover:bg-white/5 transition-all"
              >
                View Projects
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-lg text-gray-500 mt-2">
              {[
                { Icon: FaGithub, href: `https://github.com/${username}` },
                { Icon: FaTwitter, href: `https://twitter.com/${username}` },
                {
                  Icon: FaLinkedin,
                  href: `https://linkedin.com/in/${username}`,
                },
                { Icon: FaFacebook, href: `https://facebook.com/${username}` },
                { Icon: FaEnvelope, href: `mailto:ksajjadhossen07@gmail.com` },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-60 h-70 lg:w-[320px] lg:h-95">
              {/* Background Decorative Box */}
              <div className="absolute inset-0 bg-linear-to-tr from-purple-500/10 to-blue-500/10 rounded-3xl border border-white/5 rotate-6"></div>

              {/* Image Container */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-[#1a1d24] shadow-2xl">
                <Image
                  src="/my-photo.jpg"
                  alt="Sajjad Hossen"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
