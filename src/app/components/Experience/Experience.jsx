import React from "react";

const Experience = () => {
  const experiences = [
    {
      date: "Jan 2025 - Present",
      role: "Jr. Fullstack Developer",
      company: "DeveloperLook",
      description:
        "Primarily focused on backend development and API integration while also contributing to frontend features. Responsible for designing and maintaining scalable APIs, integrating third-party services, and ensuring seamless data flow between frontend and backend systems.",
    },
    // for new experience, just add a new object to the array with date, role, company, and description. The component will automatically render it in the timeline.
    /*
    {
      date: "June 2024 - Dec 2024",
      role: "Frontend Intern",
      company: "Tech-Bio",
      description: "Worked on building responsive UI components using React and Tailwind CSS.",
    },
    */
  ];

  return (
    <section
      id="experience"
      className="bg-[#1B1B1B] py-24 px-6 lg:px-12 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Work Experience
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
            My professional journey in software engineering and technology
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:left-1/2">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute left-[-6.5px] top-1.5 w-3 h-3 bg-white rounded-full border-2 border-[#1B1B1B]"></div>

              <div className="ml-8 md:ml-0 md:grid md:grid-cols-2 gap-12 items-start">
                <div className="md:text-right md:pr-12 text-gray-500 text-sm font-medium pt-1">
                  {exp.date}
                </div>

                <div className="md:pl-12 space-y-2 mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-white leading-none">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
