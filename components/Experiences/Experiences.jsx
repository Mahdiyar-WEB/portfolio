import React from "react";
import Experience from "./Experience/Experience";

const experiences = [
  {
    id: 1,
    title: "Irancell",
    website: "https://www.irancell.ir/",
    image: "/images/tecnotree.png",
    imageW: "350px",
    from: "08-12-2025",
    to: "Present",
    jobTitle: "CRM Engineer",
    description:
      "I am responsible for front-end development and resolving CRM-related issues to ensure a stable and efficient user experience. I investigate and fix customer concerns related to system performance and subscriber issues, identifying root causes and implementing effective solutions. Additionally, I analyze requirements and contribute to the investigation and development of new system changes to improve functionality and overall system performance.",
  },
  {
    id: 2,
    title: "Irancell",
    website: "https://www.irancell.ir/",
    image: "/images/tecnotree.png",
    imageW: "350px",
    from: "12-18-2024",
    to: "08-12-2025",
    jobTitle: "Billing and service activation operations engineer",
    description:
      "I handle customer support and technical troubleshooting, primarily working with SQL databases and Linux systems. My responsibilities include performing database modifications, resolving system-level issues, and maintaining stable, reliable daily operations."
  },
  {
    id: 3,
    title: "Tecnotree",
    website: "https://www.tecnotree.com/",
    image: "/images/tecnotree.png",
    imageW: "350px",
    from: "08-28-2024",
    to: "12-18-2024",
    jobTitle: "Technical support",
    description:
      "I'm responsible for customer support and troubleshooting using SQL and Linux. My tasks include database changes, fixing system issues, and ensuring smooth operations. I also investigate complex technical problems, analyze logs and system performance, and collaborate with the development team to prevent recurring issues and improve overall system stability.",
  },
    {
    id: 4,
    title: "Tecnotree",
    website: "https://www.tecnotree.com/",
    image: "/images/tecnotree.png",
    imageW: "350px",
    from: "02-20-2024",
    to: "08-28-2024",
    jobTitle: "Lead Front-End Developer",
    description:
      "I started working at this company as a mid-level front-end developer, and now I have been promoted to Lead Front-End Developer. Our focus is on designing and delivering high-level new features for the project. In addition to leading the front-end team, I also contribute as a Node.js developer, developing and maintaining back-end APIs for the project."
  },
  {
    id: 5,
    title: "Tecnotree",
    website: "https://www.tecnotree.com/",
    image: "/images/tecnotree.png",
    imageW: "350px",
    from: "11-30-2022",
    to: "02-20-2024",
    jobTitle: "Front-end developer",
    description:
      "I started working as a mid-level front-end developer in this company, and our focus is on developing high-level new features for the project, i also working as node js developer to developing some back-end API's for project."
  },
  {
    id: 6,
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
