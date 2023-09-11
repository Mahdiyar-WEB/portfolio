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
  { title: "Formik & YUP", stars: 5 },
  { title: "Next-auth", stars: 4 },
  { title: "mongoDB", stars: 3 },
  { title: "Redux & Context", stars: 5 }
];

const Skills = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <section id="skills">
      <h2 className="font-bold text-3xl font-sans text-center drop-shadow-2xl mb-10 ">
        My Skills
      </h2>

      <div className="flex align-middle flex-wrap justify-center  gap-y-8 px-2 py-4 ">
        {skills.map(({title,stars}) => {
          return <Skill title={title} stars={stars} key={title} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
