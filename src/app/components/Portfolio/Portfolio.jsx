"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Formcraft AI",
    description:
      "Enterprise-grade, full-stack AI-driven SaaS platform for instant interactive form generation using natural language processing, dynamic field configuration, and real-time response management.",
    image: "/formcraft.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Clerk",
      "Stripe",
    ],
    github: "https://github.com/ksajjadhossen/formcraft-ai",
    live: "https://formcraft-ai-k.vercel.app/",
  },
  {
    title: "Next Gear",
    description:
      "Premium full-stack e-commerce platform built with Next.js 15 App Router, featuring secure Clerk Authentication, Role-Based Access Control (RBAC), and an authorized Admin Dashboard with real-time CRUD controls.",
    image: "/nextGear.png",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "Clerk",
    ],
    github: "https://github.com/ksajjadhossen/NextGear",
    live: "https://next-gear-iota.vercel.app/",
  },
  {
    title: "/TaskFlow",
    description:
      "High-performance, production-ready Kanban task management board featuring a smooth 5-stage drag-and-drop workflow, multi-tab synchronization via BroadcastChannel API, and advanced undo/redo history.",
    image: "/taskflow.png",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "BroadcastChannel API"],
    github: "https://github.com/ksajjadhossen/taskflow",
    live: "https://taskflow-personal-app.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#1B1B1B] py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1B1B1B] border border-white/5 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300 w-full max-w-[380px]"
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <FiArrowUpRight size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                  {project.description}
                </p>

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
