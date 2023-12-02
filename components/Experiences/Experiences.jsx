import React from "react";
import Experience from "./Experience/Experience";

const experiences = [
  {
    id: 1,
    title: "Tecnotree",
    website: "https://www.tecnotree.com/",
    image: "/images/tecnotree.png",
    imageW: "350px",
    from: "11-30-2022",
    to: "Present",
    jobTitle: "Front-end developer",
    description:
      "I started working as a mid-level front-end developer in this company, and our focus is on developing high-level new features for the project, i also working as node js developer to developing some back-end API's for project.",
  },
  {
    id: 2,
    title: "Freelancing",
    website: "",
    image: "/images/freelancing.png",
    imageW: "580px",
    from: "5-10-2019",
    to: "09-23-2022",
    jobTitle: "junior | mid-level front-end developer",
    description:
      "during my time working as a freelance front-end developer, I primarily focused on learning new technologies and completing practice projects. Additionally, I worked on customer projects to enhance my skills and gain practical experience.",
  },
];

const Experiences = () => {
  return (
    <section id="experiences">
      <h2 className="col-span-12 dark:text-white text-slate-600 font-bold text-3xl font-sans text-center drop-shadow-2xl mb-16 sm:mb-8">
        Experiences
      </h2>
      <div className="grid grid-cols-6 gap-6">
        {experiences.map((experience) => {
          return (
            <div key={experience.id} className="col-span-6  md:col-span-3">
              <Experience {...experience} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experiences;
