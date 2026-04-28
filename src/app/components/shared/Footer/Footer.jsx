import React from "react";
import Image from "next/image";
import Link from "next/link";
// react-icons থেকে আইকন ইমপোর্ট
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const username = "ksajjadhossen";

  return (
    <footer className="bg-[#1B1B1B] text-white py-12 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-360 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="flex items-center gap-3">
            <div className=" h-10 w-10 border  rounded-xl flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-semibold tracking-tight">Sajjad</span>
          </div>

          <ul className="flex items-center gap-6 text-gray-400 font-medium">
            <li>
              <Link href="#home" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#blogs"
                className="hover:text-white transition-colors"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

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
