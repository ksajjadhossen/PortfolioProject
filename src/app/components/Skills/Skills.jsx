import React from "react";
// react-icons থেকে সব প্রয়োজনীয় আইকন ইমপোর্ট করা হয়েছে
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  const skillsData = [
    { name: "JavaScript", Icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "Node.js", Icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "Express.js", Icon: SiExpress, color: "text-white" },
    { name: "React.js", Icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "text-[#38B2AC]" },
    { name: "Git", Icon: SiGit, color: "text-[#F05032]" },
    { name: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
  ];

  return (
    <section
      id="expertise"
      className="bg-[#1B1B1B] py-24 px-6 lg:px-12 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1B1B1B] border border-white/5 rounded-2xl p-6 w-full max-w-[170px] flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-white/10 hover:bg-[#161a23] group cursor-pointer shadow-xl hover:-translate-y-1"
            >
              <div
                className={`text-5xl transition-all duration-300 ${skill.color} opacity-80 group-hover:opacity-100`}
              >
                <skill.Icon />
              </div>

              <span className="text-sm font-medium text-gray-300 tracking-wide text-center group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
