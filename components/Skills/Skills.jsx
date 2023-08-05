"use client";
import React, { useEffect } from "react";
import Aos from "aos";

const skills = [
  "Next JS",
  "React JS",
  "Javascript",
  "Typescript",
  "Webpack",
  "HTML",
  "CSS",
  "Sass",
  "Redux & Context",
  "Tailwind",
  "Bootstrap",
  "MUI",
  "Formik & YUP",
  "Next-auth",
  "mongoDB",
];

const Skills = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <section className="mt-10" id="skills">
      <h2 className="font-bold text-3xl font-sans text-center drop-shadow-2xl mb-10 ">
        My Skills
      </h2>

      <div className="flex flex-wrap gap-y-3 gap-x-2 justify-center px-2 py-4 ">
        {skills.map((skill, index) => {
          return (
            <span
              data-aos="fade-up"
              className="py-1 px-3 bg-gray-800 w-fit font-semibold rounded-lg duration-150 hover:bg-gray-700"
              key={index}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
