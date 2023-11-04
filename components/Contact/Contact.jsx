"use client";
import Link from "next/link";
import { BiLogoGmail, BiLogoLinkedin, BiLogoTelegram } from "react-icons/bi";
import { BsWhatsapp, BsGithub } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

const socials = [
  {
    id: 1,
    tooltipID: "telegram-tooltip",
    tooltipContent: "Telegram",
    href: "https://t.me/mahdiyarMN",
    element: <BiLogoTelegram size={20} />,
  },
  {
    id: 2,
    tooltipID: "whatsapp-tooltip",
    tooltipContent: "WhatsApp",
    href: "https://wa.me/989152506383",
    element: <BsWhatsapp size={20} />,
  },
  {
    id: 3,
    tooltipID: "email-tooltip",
    tooltipContent: "Email",
    href: "mailto:mahdiyar472@gmail.com",
    element: <BiLogoGmail size={20} />,
  },
  {
    id: 4,
    tooltipID: "linkedin-tooltip",
    tooltipContent: "LinkedIn",
    href: "https://www.linkedin.com/in/mahdiyar-marvi-web/",
    element: <BiLogoLinkedin size={20} />,
  },
  {
    id: 5,
    tooltipID: "github-tooltip",
    tooltipContent: "Github",
    href: "https://github.com/Mahdiyar-WEB",
    element: <BsGithub size={20} />,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="mb-24">
      <h2 className="font-bold text-3xl font-sans dark:text-white text-slate-600 text-center drop-shadow-2xl mb-10">
        Contact Me
      </h2>
      <div className="sm:w-96 md:w-5/6 lg:w-3/5 mx-auto rounded-md flex flex-col gap-y-8 px-6 py-6 dark:text-white text-slate-800 relative shadow-md shadow-blue-600 border border-sky-500 ">
        <p className="text-justify text-lg leading-8">
          I love to explore new possibilities and work with others who share my
          passion for web development. If you want to get in touch with me, you
          can find me on my social media platforms.
        </p>
        <div className="flex justify-center gap-5 px-3 w-full">
          {socials.map(({ element, href, id, tooltipContent, tooltipID }) => {
            return (
              <div
                className="p-2 grid place-items-center duration-150 rounded-full text-white bg-zinc-500 shadow-sm shadow-slate-700 dark:bg-slate-800 dark:shadow-slate-900 dark:shadow-md"
                key={id}
              >
                <Link
                  data-tooltip-id={tooltipID}
                  data-tooltip-content={tooltipContent}
                  data-tooltip-delay-show={500}
                  href={href}
                  target="_blank"
                  className="w-full h-full"
                >
                  {element}
                </Link>
                <Tooltip
                  id={tooltipID}
                  place="bottom"
                  variant="dark"
                  className="font-semibold tracking-wide"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
