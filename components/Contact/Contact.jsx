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
      <h2 className="font-bold text-3xl font-sans text-center drop-shadow-2xl mb-10">
        Contact Me
      </h2>
      <div className="md:w-96 mx-auto rounded-md flex flex-col gap-y-8 px-6 py-6 relative shadow-md shadow-blue-600 border border-sky-500 ">
        <p className="text-justify text-lg">
          I’m always open to new opportunities and collaborations, so feel free
          to reach out to me using my social media links
        </p>
        <div className="flex justify-center gap-6 w-full">
          {socials.map(({ element, href, id, tooltipContent, tooltipID }) => {
            return (
              <div className="p-2 grid place-items-center duration-150 rounded-full bg-slate-800 shadow-slate-900 shadow-md" key={id}>
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
