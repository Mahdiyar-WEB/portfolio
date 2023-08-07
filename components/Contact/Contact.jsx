const Contact = () => {
  return (
    <section id="contact">
      <h2 className="font-bold text-3xl font-sans text-center drop-shadow-2xl mb-14">
        Contact Me
      </h2>
      <form className="flex flex-col gap-4 text-gray-700 shadow-slate-950 shadow-xl px-5 py-10">
        <input type="text" className="px-3 py-2 rounded-md outline-none duration-200 transform-gpu focus:scale-[1.02]" placeholder="Full Name" />
        <input type="email" required className="px-3 py-2 rounded-md outline-none duration-200 transform-gpu focus:scale-[1.02]" placeholder="Email" />
        <input type="text" className="px-3 py-2 rounded-md outline-none duration-200 transform-gpu focus:scale-[1.02]" placeholder="Subject" />
        <textarea  placeholder="message" className="resize-none px-3 py-2 rounded-md outline-none duration-200 transform-gpu focus:scale-[1.02]"  rows={5}></textarea>
        <button type="submit" className="px-10 py-2 bg-blue-500 rounded-sm text-white font-semibold duration-150 active:scale-[.99]">Send</button>
      </form>
    </section>
  );
};

export default Contact;
