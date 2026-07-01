import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Full Stack Development</p>
          <p>Flutter Development</p>
          <p>QA & Software Tester</p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <p>Open to Software Engineer & Full Stack Developer Opportunities</p>
          <a
            href="https://www.linkedin.com/in/jeni-g-hannah1110/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1"
          >
            Let's Connect
          </a>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <p>Full-Time <span className="text-[#ff2a2a]">.</span> Internship <span className="text-[#ff2a2a] font-bold">.</span> Freelance</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>
       <div className="border-b border-white/10 pb-10 mb-16"></div>
      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[14vw] md:text-[12vw] leading-none font-sans font-bold tracking-tighter uppercase select-none text-[#e5e5e5] w-full text-center">
          JENI G HANNAH
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Let's Build Together <span className="text-[#ff2a2a]"> →</span></a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Jeni G Hannah <span className="text-[#ff2a2a] font-bold">|</span> Crafted with React, Tailwind CSS , Framer Motion , AOS & Vite
          </p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:jenihannah1110@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">jenihannah1110@gmail.com</a>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
            <a
    href="https://github.com/jeni-g"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-white transition-colors underline-offset-4 decoration-1"
  >
    GitHub
  </a>
          <a href="https://www.linkedin.com/in/jeni-g-hannah1110/" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
