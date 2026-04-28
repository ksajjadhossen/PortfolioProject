"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

const Portfolio = () => {
  const projects = [
    {
      title: "TechTips Hub",
      description:
        "Advanced blogging platform with premium content and user interactions.",
      image: "/nextGear.png",
      tech: ["Next.js", "Fake Data"],
      github: "https://github.com/ksajjadhossen/NextGear",
      live: "https://next-gear-iota.vercel.app/",
    },
    {
      title: "Artists Web",
      description:
        "Modern digital agency website showcasing creative portfolio highlights.",
      image: "/artists-web.png",
      tech: ["Next.js", "Tailwind"],
      github: "#",
      live: "#",
    },
    {
      title: "Luxe Maison",
      description:
        "Elegant e-commerce for luxury home decor with clean, smooth design.",
      image: "/luxe-maison.png",
      tech: ["Next.js", "TypeScript"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="portfolio" className="bg-[#1B1B1B] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
            Portfolio
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
            A selection of my open source projects and contributions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1B1B1B] border border-white/5 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <div className="p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-white group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                    <a
                      href={project.live}
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <FiArrowUpRight size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* টেকনোলজি ব্যাজ - ছোট এবং ক্লিন */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
