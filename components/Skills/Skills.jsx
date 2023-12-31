"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import Skill from "./Skill/Skill";

const skills = [
  { title: "Next JS", stars: 4.5 },
  { title: "React JS", stars: 5 },
  { title: "Javascript", stars: 5 },
  { title: "Typescript", stars: 2.5 },
  { title: "Webpack", stars: 3.5 },
  { title: "HTML", stars: 5 },
  { title: "CSS", stars: 5 },
  { title: "Sass", stars: 5 },
  { title: "Tailwind", stars: 4.5 },
  { title: "Bootstrap", stars: 5 },
  { title: "MUI", stars: 4.5 },
  { title: "Formik", stars: 5 },
  { title: "Next-auth", stars: 4 },
  { title: "mongo db", stars: 3 },
  { title: "Redux", stars: 5 },
  { title: "Context", stars: 5 },
];

const Skills = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <section id="skills">
      <h2 className="font-bold dark:text-white text-slate-600 text-3xl font-sans text-center drop-shadow-2xl mb-10 ">
        My Skills
      </h2>
      <div className="grid grid-cols-12 lg:grid-cols-10  gap-x-6 gap-y-6 py-4">
        {skills.map(({ title, stars }) => {
          return <Skill title={title} stars={stars} key={title} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
