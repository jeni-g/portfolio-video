import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);

  // React Form State tracking
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission logic
 const handleSubmit = async (e) => {
  e.preventDefault();

  const form = new FormData();

  form.append("access_key",  import.meta.env.VITE_WEB3FORMS_KEY);

  form.append("first_name", formData.firstName);
  form.append("last_name", formData.lastName);
  form.append("email", formData.email);
  form.append("message", formData.message);

  // Email subject
  form.append(
    "subject",
    `New Portfolio Contact from ${formData.firstName} ${formData.lastName}`
  );

  // Reply button goes to sender
  form.append("replyto", formData.email);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: form,
  });

  const data = await response.json();

  if (data.success) {
    alert("Message sent successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      permission: false,
    });
  } else {
    alert("Something went wrong!");
    console.log(data);
  }
};
  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">

      {/* Huge Background Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >CONTACT
        </h1>
      </motion.div>

      {/* Form Card Overlay (Upgraded from AOS to Framer Motion built-in viewport engine) */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-6 uppercase opacity-90">
            Get In Touch
          </div>
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Open to Opportunities
            </h2>

            <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
              I'm a Computer Science Engineering graduate passionate about Full Stack Development, Mobile App Development, and AI-powered solutions. Currently seeking Software Engineer and Full Stack Developer opportunities.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">

              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    required
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-6">
{/* Send Button */}
<div className="order-1 md:order-3 w-full md:w-auto flex justify-center md:justify-end">
  <button
    type="submit"
    className="px-8 py-3 rounded-full bg-white text-[#ff2a2a] font-bold flex items-center gap-3 hover:scale-105 transition-all duration-300"
  >
    Send Message
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </button>
</div>

{/* Icons + Contact Info */}
<div className="order-2 md:order-1 flex flex-col md:flex-row items-center gap-8">

  {/* Social Icons */}
  <div className="flex items-center gap-4">
    <a
      href="https://github.com/jeni-g"
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 hover:scale-110"
    >
      <FaGithub size={22} />
    </a>

    <a
      href="https://www.linkedin.com/in/jeni-g-hannah1110"
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 hover:scale-110"
    >
      <FaLinkedin size={22} />
    </a>

    <a
      href="mailto:jenihannah1110@gmail.com"
      className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 hover:scale-110"
    >
      <FaEnvelope size={22} />
    </a>
    <a
      href="https://maps.google.com/?q=Thoothukudi,Tamil+Nadu,India"
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 hover:scale-110"
    >
      <FaMapMarkerAlt size={22} />
    </a>

  </div>

</div>
    
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;