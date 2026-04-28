"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const username = "ksajjadhossen";

  return (
    <footer className="bg-[#1B1B1B] text-white py-12 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Link href="#Home" className="flex items-center gap-3">
              <div className="h-10 w-10 border border-white/10 rounded-xl flex items-center justify-center bg-white/5">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                Sajjad
              </span>
            </Link>
          </div>

          {/* Navigation Links - Exactly like your UI */}
          <ul className="flex items-center gap-6 text-gray-400 font-medium">
            <li>
              <Link href="#Home" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#Projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#Blogs"
                className="hover:text-white transition-colors"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="#Contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-xl text-gray-400">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              className="hover:text-white transition-all transform hover:-translate-y-1"
            >
              <FaGithub />
            </a>
            <a
              href={`https://twitter.com/${username}`}
              target="_blank"
              className="hover:text-white transition-all transform hover:-translate-y-1"
            >
              <FaTwitter />
            </a>
            <a
              href={`https://linkedin.com/in/${username}`}
              target="_blank"
              className="hover:text-white transition-all transform hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>
            <a
              href={`https://facebook.com/${username}`}
              target="_blank"
              className="hover:text-white transition-all transform hover:-translate-y-1"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm tracking-wide">
            © {new Date().getFullYear()} Khandaker Sajjad Hossen. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
