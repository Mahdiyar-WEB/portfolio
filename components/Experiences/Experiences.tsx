import React from "react";
import Experience from "./Experience/Experience";

const experiences = [
  {
    id: 1,
    title: "Irancell",
    borderColor: "#FFCC00",
    website: "https://www.irancell.ir/",
    logo: "/irancell.svg",
    imageW: "350px",
    from: "08-12-2025",
    to: "Present",
    jobTitle: "CRM Engineer",
    description:
      "I lead front-end development efforts within the CRM domain while also driving the investigation and resolution of complex production issues affecting subscriber experience and system reliability. My work involves analyzing business and technical requirements, identifying root causes across the application flow, and delivering stable, maintainable solutions that improve performance, usability, and operational efficiency. I also contribute to system enhancements and new change requests in close collaboration with cross-functional teams.",
  },
  {
    id: 2,
    title: "Irancell",
    borderColor: "#FFCC00",
    website: "https://www.irancell.ir/",
    logo: "/irancell.svg",
    imageW: "350px",
    from: "12-18-2024",
    to: "08-12-2025",
    jobTitle: "Technical operations engineer",
    description:
      "I was responsible for supporting critical operational systems, with a strong focus on troubleshooting, incident resolution, and day-to-day service stability. Working extensively with SQL databases and Linux environments, I handled database changes, investigated system-level issues, and ensured reliable execution of operational processes. This role strengthened my ability to work under pressure, diagnose issues quickly, and maintain consistency across business-critical services.",
  },
  {
    id: 3,
    title: "Tecnotree",
    website: "https://www.tecnotree.com/",
    logo: "/tecnotree.png",
    imageW: "350px",
    from: "08-28-2024",
    borderColor: "#00FFD1",
    to: "12-18-2024",
    jobTitle: "Technical support",
    description:
      "I supported production systems by handling technical issues, investigating service behavior, and resolving operational problems across SQL and Linux-based environments. My responsibilities included database updates, log analysis, issue triage, and close coordination with development teams to address root causes rather than temporary fixes. Through this role, I helped improve system stability, reduce recurring incidents, and maintain smooth daily operations.",
  },
  {
    id: 4,
    title: "Tecnotree",
    website: "https://www.tecnotree.com/",
    logo: "/tecnotree.png",
    imageW: "350px",
    from: "02-20-2024",
    borderColor: "#00FFD1",
    to: "08-28-2024",
    jobTitle: "Lead Front-End Developer",
    description:
      "I was promoted to Lead Front-End Developer to take greater ownership of the product's front-end direction, feature delivery, and development quality. In this role, I led the implementation of new user-facing features, coordinated front-end decisions, and helped align technical execution with product goals. Alongside front-end leadership, I also contributed on the back end with Node.js, building and maintaining APIs required to support product functionality end to end.",
  },
  {
    id: 5,
    title: "Tecnotree",
    website: "https://www.tecnotree.com/",
    logo: "/tecnotree.png",
    imageW: "350px",
    from: "11-30-2022",
    borderColor: "#00FFD1",
    to: "02-20-2024",
    jobTitle: "Front-end developer",
    description:
      "I worked on developing and improving core product features as part of the front-end team, with a focus on building reliable, scalable, and user-friendly interfaces. Beyond front-end implementation, I also contributed to back-end development using Node.js, where I helped create and maintain APIs needed by the product. This role expanded my full-stack experience and strengthened my ability to deliver features across multiple layers of the application.",
  },
  {
    id: 6,
    title: "Freelancing",
    website: "",
    imageW: "580px",
    from: "5-10-2019",
    borderColor: "#6b7280",
    to: "09-23-2022",
    jobTitle: "junior | mid-level front-end developer",
    description:
      "As a freelance front-end developer, I worked on a mix of client projects and self-driven builds that helped me strengthen both my technical foundation and practical delivery skills. During this period, I deepened my knowledge of modern front-end technologies, translated requirements into functional interfaces, and learned how to manage projects with greater independence, adaptability, and attention to real-world business needs.",
  },
];


const Experiences = () => {
  return (
    <section id="experiences">
      <h2 className="col-span-12 dark:text-white text-slate-600 font-bold text-3xl font-sans text-center drop-shadow-2xl mb-16 sm:mb-8">
        Experiences
      </h2>
      <div className="grid grid-cols-12 gap-6">
        {experiences.map((experience) => {
          return <Experience key={experience.id} {...experience} />;
        })}
      </div>
    </section>
  );
};

export default Experiences;
