import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Diploma in Computer Science and Application (DCSA)",
      institution: "Bangladesh Open University",
      duration: "Running",
      gpa: "Ongoing",
      group: "Science",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Kapasia College",
      duration: "2020 - 2022",
      gpa: "3.50 out of 5.00",
      group: "Arts",
    },
  ];

  return (
    <section id="education" className="bg-[#1B1B1B] py-20 px-6 text-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
            Background
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
        </div>

        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-[#1B1B1B] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                    <GraduationCap className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="text-lg font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                    <div className="flex gap-4 pt-1">
                      <p className="text-[12px] text-gray-500">
                        <span className="text-gray-400">GPA:</span> {edu.gpa}
                      </p>
                      <p className="text-[12px] text-gray-500">
                        <span className="text-gray-400">Group:</span>{" "}
                        {edu.group}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-gray-500 text-[12px] font-medium bg-white/5 px-3 py-1 rounded-full self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
