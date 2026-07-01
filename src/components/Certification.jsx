import React, { useState, useRef ,useEffect } from "react";
import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";
import PythonFullStack from "../assets/certificates/pythonframework.jpeg";
import FlutterSeminar from "../assets/certificates/seminarcertificate.jpeg";
import AchievementCertificate from "../assets/certificates/acheivementcertificate.jpeg";
import BugFinderCertificate from "../assets/certificates/bugfindercertificate.jpeg";
import NovitechCertificate from "../assets/certificates/novitech.jpg";
import GuviCertificate from "../assets/certificates/guvicertificate.jpg";

const certificates = [
  {
    id: 1,
    number: "01",
    category: "FULL STACK",
    title: "Python Full Stack Development",
    issuer: "TCEDS Computer Education",
    year: "2026",
    image: PythonFullStack,
  },
  {
    id: 2,
    number: "02",
    category: "SEMINAR",
    title: "Flutter Cross Platform Development",
    issuer: "Dr. Sivanthi Aditanar College",
    year: "2026",
    image: FlutterSeminar,
  },
 {
    id: 3,
    number: "03",
    category: "ACHIEVEMENT",
    title: "Paper Presentation - First Prize",
    issuer: "Tech Vista National Symposium",
    year: "2026",
    image: AchievementCertificate,
  },

  {
    id: 4,
    number: "04",
    category: "AWARD",
    title: "Bug Finder Award",
    issuer: "Eson Infotech Pvt. Ltd.",
    year: "2026",
    image: BugFinderCertificate,
  },

  {
    id: 5,
    number: "05",
    category: "MASTERCLASS",
    title: "30 Days Full Stack Development",
    issuer: "NoviTech R&D Pvt. Ltd.",
    year: "2024",
    image: NovitechCertificate,
  },

  {
    id: 6,
    number: "06",
    category: "AI",
    title: "Building Applications using ChatGPT",
    issuer: "GUVI",
    year: "2024",
    image: GuviCertificate,
  },
];

const Certifications = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const scrollRef = React.useRef(null);
   
    const [paused, setPaused] = useState(false);
useEffect(() => {
  const container = scrollRef.current;

  if (!container) return;

  const interval = setInterval(() => {
    if (paused) return;

    if (
      container.scrollLeft >=
      container.scrollWidth - container.clientWidth - 2
    ) {
      container.scrollLeft = 0;
    } else {
      container.scrollLeft += 1;
    }
  }, 18);

  return () => clearInterval(interval);
}, [paused]);
    useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSelectedCertificate(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);

  return (
    <section
  id="certifications"
  className="
    relative
    py-24
    bg-white
    overflow-hidden
    bg-[linear-gradient(to_right,#ececec_1px,transparent_1px),linear-gradient(to_bottom,#ececec_1px,transparent_1px)]
    bg-[size:80px_80px]
"
>
  <div className="absolute top-20 left-20 w-72 h-72 bg-red-100 blur-[120px] opacity-30 rounded-full"></div>

<div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-100 blur-[130px] opacity-20 rounded-full"></div>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
<div className="mb-16">
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm mb-6">
  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
  <span className="text-xs font-semibold tracking-wider uppercase text-gray-600">
    System Badges
  </span>
</div>

  {/* Left Side */}
  <div>

   <div className="relative inline-block">

  <h2 className="text-[42px] md:text-[58px] lg:text-[68px] font-black leading-none tracking-tight text-[#111827]">
    Professional Credentials
  </h2>

  <svg
    viewBox="0 0 220 14"
    className="absolute -bottom-3 left-0 w-[42%] h-4"
    preserveAspectRatio="none"
  >
    <path
      d="M2 8 C 60 2,160 2,218 8"
      stroke="#f0a8a0"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
  </svg>

</div>

<p className="mt-5 text-lg text-gray-500 max-w-2xl leading-8">
Professional certifications, awards and industry-recognized credentials
that validate my skills in Full Stack Development, Mobile Applications,
Software Testing and Artificial Intelligence.
</p>

  </div>



</div>

        {/* Certificate Cards */}
<div className="relative mt-20">

{/* Timeline Background */}
<div className="absolute top-0 left-0 w-full h-[70px] z-0 pointer-events-none">

  <svg
    className="w-full h-full"
    viewBox="0 0 1600 70"
    preserveAspectRatio="none"
  >

    {/* Animated Line */}
    <motion.line
    x1="0"
    y1="35"
    x2="1600"
    y2="35"
    stroke="#d7dde6"
    strokeWidth="2"
    strokeDasharray="8 8"
    initial={{
        pathLength: 0,
        opacity: 0
    }}
    whileInView={{
        pathLength: 1,
        opacity: 1
    }}
    viewport={{ once: true }}
    transition={{
        duration: 2.5,
        ease: "easeInOut"
    }}
/>
    {/* Timeline Nodes */}
    {[160, 480, 800, 1120, 1440].map((x, i) => (
      <motion.g
        key={i}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          delay: i * 0.25,
          duration: 0.4,
        }}
      >
        <circle
          cx={x}
          cy="35"
          r="9"
          fill="white"
          stroke="#cfd6df"
          strokeWidth="2"
        />

        <circle
          cx={x}
          cy="35"
          r="3.5"
          fill="#b7bec9"
        />

        {/* Connector */}
        <line
          x1={x}
          y1="35"
          x2={x}
          y2="63"
          stroke="#d7dde6"
          strokeWidth="2"
        />
      </motion.g>
    ))}

  </svg>

</div>

  {/* Left Fade */}
  <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

  {/* Right Fade */}
  <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

  <div
    ref={scrollRef}
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
    className="overflow-x-auto overflow-y-hidden relative scrollbar-hide"
    style={{
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    }}
  >
    <div className="flex gap-8 w-max pt-16 pb-4 relative z-10">

      {[...certificates, ...certificates].map((certificate, index) => (
        <CertificateCard
          key={index}
          item={certificate}
          onView={setSelectedCertificate}
        />
      ))}

    </div>
  </div>

</div>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      viewport={{ once: true }}
      className="mt-12 text-center text-gray-400 text-lg tracking-wide"
    >
      Hover a card to flip and verify • Click to view the original certificate.
    </motion.p>

      </div>
   {selectedCertificate && (
  <div
    className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[9999] flex items-center justify-center p-6"
    onClick={() => setSelectedCertificate(null)}
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="relative"
      onClick={(e) => e.stopPropagation()}
    >

      {/* Download Button */}
      <a
        href={selectedCertificate}
        download
        className="absolute top-4 left-4 px-5 py-2 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition z-20"
      >
        ⬇ Download
      </a>

      {/* Close Button */}
      <button
        onClick={() => setSelectedCertificate(null)}
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white text-black text-3xl hover:bg-red-500 hover:text-white transition z-20"
      >
        ×
      </button>

      {/* Certificate */}
      <img
        src={selectedCertificate}
        alt="Certificate"
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.6)]"
      />

    </motion.div>
  </div>
)}
      
    </section>
  );
};

export default Certifications;