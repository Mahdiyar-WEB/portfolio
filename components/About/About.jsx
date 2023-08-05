import React from "react";

const About = () => {

  const yearsOfExperience = new Date().getFullYear() - new Date("2020-03-18").getFullYear();

  return (
    <section className="text-justify mt-10">
      <p className="md:w-96 mx-auto text-justify px-6 text-lg border rounded-md py-4 shadow-md shadow-yellow-800 border-yellow-600">
      My passion for technology led me to pursue this career, and I continue to seek growth and learning with enthusiasm. I have over {yearsOfExperience} years of experience in this field.
      </p>
    </section>
  );
};

export default About;
