'use client'
import Link from "next/link";
import { BiLogoGmail, BiLogoLinkedin, BiLogoTelegram } from "react-icons/bi";
import { BsWhatsapp, BsGithub } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

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
          <Link
            data-tooltip-id="telegram-tooltip"
            data-tooltip-content="Telegram"
            data-tooltip-delay-show={500}
            href="https://t.me/mahdiyarMN"
            target="_blank"
            className="duration-150 active:scale-[.98] hover:scale-[1.03] p-2 rounded-full bg-slate-800 shadow-slate-900 shadow-md gap-2 "
          >
            <BiLogoTelegram size={20} />
          </Link>
          <Tooltip id="telegram-tooltip" place="bottom" variant="dark" className="font-semibold tracking-wide" />
          <Link
           data-tooltip-id="whatsapp-tooltip"
           data-tooltip-content="Whatsapp"
           data-tooltip-delay-show={500}
            href="https://wa.me/989152506383"
            target="_blank"
            className="duration-150 active:scale-[.98] hover:scale-[1.03] p-2 rounded-full bg-slate-800 shadow-slate-900 shadow-md gap-2 "
          >
            <BsWhatsapp size={20} />
          </Link>
          <Tooltip id="whatsapp-tooltip" place="bottom" variant="dark" className="font-semibold tracking-wide" />

          <Link
           data-tooltip-id="email-tooltip"
           data-tooltip-content="Email"
           data-tooltip-delay-show={500}
            href="mailto:mahdiyar472@gmail.com"
            target="_blank"
            className="duration-150 active:scale.98] hover:scale-[1.03] p-2 rounded-full bg-slate-800 shadow-slate-900 shadow-md gap-2 "
          >
            <BiLogoGmail size={20} />
          </Link>
          <Tooltip id="email-tooltip" place="bottom" variant="dark" className="font-semibold tracking-wide" />
          <Link
           data-tooltip-id="linkedin-tooltip"
           data-tooltip-content="LinkedIn"
           data-tooltip-delay-show={500}
            href="https://www.linkedin.com/in/mahdiyar-marvi-web/"
            target="_blank"
            className="duration-150 active:scale-.98] hover:scale-[1.03] p-2 rounded-full bg-slate-800 shadow-slate-900 shadow-md gap-2 "
          >
            <BiLogoLinkedin size={20} />
          </Link>
          <Tooltip id="linkedin-tooltip" place="bottom" variant="dark" className="font-semibold tracking-wide" />
          <Link
           data-tooltip-id="github-tooltip"
           data-tooltip-content="Github"
           data-tooltip-delay-show={500}
            href="https://github.com/Mahdiyar-WEB"
            target="_blank"
            className="duration-150 active:scale-.98] hover:scale-[1.03] p-2 rounded-full bg-slate-800 shadow-slate-900 shadow-md gap-2 "
          >
            <BsGithub size={20} />
          </Link>
          <Tooltip id="github-tooltip" place="bottom" variant="dark" className="font-semibold tracking-wide" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
