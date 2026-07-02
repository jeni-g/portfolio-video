import React from "react";

const INTERNSHIP = [
  {
    eyebrow: "FULL STACK DEVELOPMENT",
    title: "Software Development Intern",
    company: "DOOZY Info Software Solutions",
    duration: "July 2025",
    description:
      "Contributed to live web and mobile projects by testing application workflows, identifying bugs, validating features, and supporting development activities. Worked with Postman, REST APIs, Flutter, and Android Studio, and developed mini projects including a video streaming application.",
    tags: ["Flutter", "Postman", "REST APIs", "Bug Analysis", "QA Testing"],
    certificate:
      "https://drive.google.com/file/d/16la2_Xucqi43ZUgI4BlzkuLCqhktnXpL/view?usp=sharing",
  },

  {
    eyebrow: "FULL STACK DEVELOPMENT",
    title: "Full Stack Web Development Intern",
    company: "Future Interns",
    duration: "August 2025",
    description:
      "Developed and deployed a personal portfolio website and a mini e-commerce application (Pawfect Store). Gained hands-on experience in frontend development, responsive design, GitHub deployment, and full-stack web technologies.",
    tags: ["React", "HTML", "CSS", "GitHub"],
    certificate:
      "https://drive.google.com/file/d/1Ps9zSJTeqA3oNXvqABbul_pfh_0zRFYO/view?usp=sharing",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function InternshipCard({ internship }) {
  const { eyebrow, title, company, duration, description, tags } = internship;
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered ? "#ffffff" : "#f6f5f3",
        borderRadius: "28px",
        padding: "28px",
        overflow: "hidden",

        border: "1px solid",
        borderColor: hovered ? "#ff6b6b" : "#e5e7eb",

        transform: hovered
          ? "translateY(-10px) scale(1.015)"
          : "translateY(0) scale(1)",

        boxShadow: hovered
          ? "0 18px 60px rgba(15,23,42,.12), 0 8px 20px rgba(255,90,90,.12)"
          : "0 6px 18px rgba(15,23,42,.05)",

        transition:
          "transform .55s cubic-bezier(.22,1,.36,1), box-shadow .45s ease, border-color .35s ease, background .35s ease",
      }}
    >
      {/* Premium Glow Border */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "28px",
          pointerEvents: "none",
          opacity: hovered ? 1 : 0,
          transition: "opacity .35s ease",
          boxShadow: "inset 0 0 0 1px rgba(255,90,90,.18)",
        }}
      />
      {/* LEFT RED ANIMATION BAR */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: hovered ? "6px" : "2px",
          opacity: hovered ? 1 : 0.35,
          height: "100%",
          background: "#ff5a5a",
          transition: "width .35s ease, opacity .35s ease",
        }}
      />

      <div
        style={{
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.06em",
          color: "#e2503f",
          marginBottom: "10px",
        }}
      >
        {eyebrow}
      </div>

      <h3
        style={{
          fontSize: "24px",
          fontWeight: 800,
          color: hovered ? "#ff5a5a" : "#16181d",
          margin: "0 0 12px",
          lineHeight: 1.25,
          transition: "color .35s ease, transform .35s ease",

          transform: hovered ? "translateX(4px)" : "translateX(0)",
        }}
      >
        {title}
      </h3>
      <h4
        style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "#444",
          marginBottom: "4px",
        }}
      >
        {company}
      </h4>

      <p
        style={{
          fontSize: "13px",
          color: "#888",
          marginBottom: "14px",
        }}
      >
        {duration}
      </p>

      <p
        style={{
          fontSize: "14.5px",
          lineHeight: 1.6,
          color: "#6b6f76",
          margin: "0 0 22px",
          flexGrow: 1,
        }}
      >
        {description}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "18px",
        }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "12.5px",
              fontWeight: 600,
              color: "#2c2f36",
              background: hovered ? "#fff5f5" : "#ffffff",

              border: hovered ? "1px solid #ffd4d4" : "1px solid #e3e1dc",
              borderRadius: "8px",
              padding: "6px 12px",
              transition:
                "transform .3s ease, background .3s ease, border-color .3s ease",

              transform: hovered ? "translateY(-2px)" : "translateY(0)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        style={{
          borderTop: "1px solid #e3e1dc",
          paddingTop: "14px",
        }}
      >
        <a
          href={internship.certificate}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "14px",
            fontWeight: 700,
            color: hovered ? "#ff5a5a" : "#16181d",
            textDecoration: "underline",
            transition: "all 0.3s ease",
            transform: hovered ? "translateX(8px)" : "translateX(0px)",
            letterSpacing: hovered ? ".02em" : "0",
          }}
        >
          View Certificate <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
}

export default function InternshipSection() {
  return (
    <section
      id="internship"
      style={{
        fontFamily:
          "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        background: "#ffffff",
        padding: "80px 24px",
        backgroundImage:
          "linear-gradient(to right, #f1efec 1px, transparent 1px), linear-gradient(to bottom, #f1efec 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "13px",
            fontWeight: 700,
            color: "#3a3d44",
            background: "#fff",
            border: "1px solid #e3e1dc",
            borderRadius: "999px",
            padding: "8px 18px",
            marginBottom: "28px",
          }}
        >
          Internship Experience
        </span>

        <h2
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#15171c",
            lineHeight: 1.08,
            margin: "0 0 28px",
            maxWidth: "780px",
          }}
        >
          My Internship
          <br />
          <span style={{ position: "relative", display: "inline-block" }}>
            Journey
            <svg
              viewBox="0 0 220 14"
              style={{
                position: "absolute",
                left: 0,
                bottom: "-10px",
                width: "100%",
                height: "14px",
              }}
              preserveAspectRatio="none"
            >
              <path
                d="M2 8 C 60 2, 160 2, 218 8"
                stroke="#f0a8a0"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#6b6f76",
            maxWidth: "640px",
            lineHeight: 1.6,
            margin: "0 0 56px",
          }}
        >
          Gained practical industry experience through internships in Software
          Development and Full Stack Web Development, working on real-world
          projects, mobile applications, API integration, and modern web
          technologies.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
            gap: "28px",
          }}
        >
          {INTERNSHIP.map((internship) => (
            <InternshipCard key={internship.title} internship={internship} />
          ))}
        </div>
      </div>
    </section>
  );
}
