import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Shield, ArrowUpRight } from "lucide-react";

const certificates = [
  {
    id: 1,
    number: "01",
    category: "FULL STACK",
    title: "Python Full Stack Development",
    issuer: "TCEDS Computer Education",
    year: "2026",
    link: "https://drive.google.com/file/d/1wjmRXdZvHBdF4urUzlPZ5cNM0kCIuQK6/view?usp=sharing",
  },
  {
    id: 2,
    number: "02",
    category: "SEMINAR",
    title: "Flutter Cross Platform Development",
    issuer: "Dr. Sivanthi Aditanar College",
    year: "2026",
    link: "https://drive.google.com/file/d/1HXL4wkrlLXPBj5X4TglykCYEO_Y62Cgt/view?usp=sharing",
  },
  {
    id: 3,
    number: "03",
    category: "ACHIEVEMENT",
    title: "Paper Presentation - First Prize",
    issuer: "Tech Vista National Symposium",
    year: "2026",
    link: "https://drive.google.com/file/d/1gx7C2tmtOwgkPooaSFAm9OrisODF83iw/view?usp=sharing",
  },
  {
    id: 4,
    number: "04",
    category: "AWARD",
    title: "Bug Finder Award",
    issuer: "Eson Infotech Pvt. Ltd.",
    year: "2026",
    link: "https://drive.google.com/file/d/16QORBHMFC-ch3Dzmod8QxmTyke7NAP3r/view?usp=sharing",
  },
  {
    id: 5,
    number: "05",
    category: "MASTERCLASS",
    title: "30 Days Full Stack Development",
    issuer: "NoviTech R&D Pvt. Ltd.",
    year: "2024",
    link: "https://drive.google.com/file/d/1I5QnhTHI097c7ToXVBJE0yuW3kYYISRE/view?usp=sharing",
  },
  {
    id: 6,
    number: "06",
    category: "AI",
    title: "Building Applications using ChatGPT",
    issuer: "GUVI",
    year: "2024",
    link: "https://drive.google.com/file/d/1iApNrmAHjPkXfOIBRo2Kqazv348uUwfD/view?usp=sharing",
  },
];

// duplicated only so the strip has enough length to drift/loop smoothly —
// the caption still reports the real, unique count.
const DECK = [...certificates, ...certificates];

const CARD_WIDTH = 300;
const CARD_GAP = 34;
const STEP = CARD_WIDTH + CARD_GAP;

function Card({ item, index }) {
  return (
    <div className="pc-card">
      <div className="pc-hole" />
      {index < DECK.length - 1 && <div className="pc-connector" />}
      <div className="pc-card-inner">
        {/* front */}
        <div className="pc-face pc-front">
          <div className="pc-front-top">
            <span className="pc-badge-label">{item.category}</span>
            <span className="pc-badge-index">{item.number}</span>
          </div>
          <div className="pc-front-title">{item.title}</div>
          <div className="pc-front-bottom">
            <div className="pc-issued-label">Issued System Node</div>
            <div className="pc-issued-name">{item.issuer}</div>
            <div className="pc-issued-year">{item.year}</div>
          </div>
        </div>
        {/* back */}
        <div className="pc-face pc-back">
          <div className="pc-back-top">
            <div className="pc-shield">
              <Shield size={14} strokeWidth={2.2} color="#f3494c" />
            </div>
            <span className="pc-secured">Secured Node</span>
          </div>
          <div className="pc-back-mid">
            <span className="pc-verify-label">Verification Object</span>
            <div className="pc-back-title">{item.title}</div>
            <a
              className="pc-pdf-btn"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF Certificate
              <ArrowUpRight size={13} strokeWidth={2.4} />
            </a>
          </div>
          <div className="pc-back-bottom">
            <span className="pc-sys-id">SYS ID: #{item.number}</span>
            <span className="pc-verified">VERIFIED</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProfessionalCredentials() {
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const trackRef = useRef(null);

  useEffect(() => {
    let raf;
    const speed = 1;
    const tick = () => {
      const track = trackRef.current;
      if (track) {
        const loopWidth = track.scrollWidth / 2;
        if (!pausedRef.current) {
          posRef.current += speed;
          if (posRef.current >= loopWidth) posRef.current -= loopWidth;
          if (posRef.current < 0) posRef.current += loopWidth;
        }
        track.style.transform = `translateX(${-posRef.current}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const nudge = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const loopWidth = track.scrollWidth / 2;
    posRef.current += dir * STEP;
    if (posRef.current < 0) posRef.current += loopWidth;
    if (posRef.current >= loopWidth) posRef.current -= loopWidth;
  };

  return (
    <section id="certifications" className="pc-root">
      <style>{`
        .pc-root{
          --ink:#15161a; --muted:#9aa0aa; --muted-2:#c7cad1;
          --accent:#f3494c; --accent-soft:#ffb3ab; --line:#e9e9ec;
          --card-bg:#ffffff; --back-bg:#131318; --back-bg-2:#1c1c24; --page-bg:#fbfbfc;
          font-family:'Inter',sans-serif;
          background:
            radial-gradient(circle, #eceef2 1px, transparent 1px) 0 0/28px 28px,
            var(--page-bg);
          color:var(--ink);
          padding:56px 32px 72px;
        }
        .pc-section{max-width:1400px;margin:0 auto;}
        .pc-head{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:48px;flex-wrap:wrap;gap:20px;}
        .pc-eyebrow{display:inline-block;font-size:13px;font-weight:600;color:#5b5d66;background:#fff;border:1px solid var(--line);padding:7px 16px;border-radius:999px;margin-bottom:18px;}
        .pc-title-wrap{position:relative;}
        .pc-title{font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(30px,4vw,48px);letter-spacing:-.02em;line-height:1.05;margin:0;position:relative;display:inline-block;}
        .pc-underline{position:absolute;left:2px;bottom:-14px;width:100%;height:14px;overflow:visible;}
        .pc-arrows{display:flex;gap:12px;}
        .pc-arrow-btn{width:52px;height:52px;border-radius:50%;border:1px solid var(--line);background:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,border-color .2s,transform .15s;}
        .pc-arrow-btn:hover{background:var(--ink);border-color:var(--ink);}
        .pc-arrow-btn:hover svg{color:#fff;}
        .pc-arrow-btn:active{transform:scale(.94);}
        .pc-arrow-btn svg{color:var(--ink);transition:color .2s;}
        .pc-viewport{overflow:hidden;position:relative;padding-top:34px;}
        .pc-track{display:flex;gap:${CARD_GAP}px;will-change:transform;}
        .pc-card{position:relative;flex:0 0 ${CARD_WIDTH}px;height:300px;perspective:1400px;}
        .pc-hole{position:absolute;top:-16px;left:50%;transform:translateX(-50%);width:22px;height:22px;border-radius:50%;background:radial-gradient(circle at 35% 30%, #ffffff, #d7d9de 70%, #c3c5cc 100%);border:1px solid #d3d5db;box-shadow:inset 0 2px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.05);z-index:3;}
        .pc-connector{position:absolute;top:-6px;left:100%;width:${CARD_GAP}px;height:0;border-top:2px dashed #d7d9df;z-index:1;}
        .pc-card-inner{position:relative;width:100%;height:100%;transition:transform .7s cubic-bezier(.4,.2,.2,1);transform-style:preserve-3d;}
        .pc-card:hover .pc-card-inner{transform:rotateY(180deg);}
        .pc-face{position:absolute;inset:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:18px;display:flex;flex-direction:column;overflow:hidden;}
        .pc-front{background:var(--card-bg);border:1px solid var(--line);box-shadow:0 1px 2px rgba(20,20,30,.03);padding:26px 24px 22px;justify-content:space-between;}
        .pc-front-top{display:flex;align-items:center;justify-content:space-between;}
        .pc-badge-label{font-size:12px;font-weight:700;letter-spacing:.04em;color:var(--accent);text-transform:uppercase;}
        .pc-badge-index{font-size:13px;color:var(--muted-2);font-style:italic;font-weight:600;}
        .pc-front-title{font-family:'Poppins',sans-serif;font-weight:600;font-size:19px;line-height:1.32;margin-top:14px;}
        .pc-front-bottom{border-top:1px solid var(--line);padding-top:14px;margin-top:14px;}
        .pc-issued-label{font-size:10.5px;font-weight:700;letter-spacing:.08em;color:var(--muted);text-transform:uppercase;margin-bottom:5px;}
        .pc-issued-name{font-size:15px;font-weight:700;}
        .pc-issued-year{font-size:12px;font-weight:500;color:var(--muted);margin-top:2px;}
        .pc-back{background:linear-gradient(160deg, var(--back-bg-2), var(--back-bg));transform:rotateY(180deg);padding:22px 22px 18px;justify-content:space-between;color:#fff;border:1px solid #232329;}
        .pc-back-top{display:flex;align-items:center;justify-content:space-between;}
        .pc-shield{width:30px;height:30px;border-radius:9px;background:rgba(243,73,76,.14);border:1px solid rgba(243,73,76,.35);display:flex;align-items:center;justify-content:center;}
        .pc-secured{font-size:10.5px;font-weight:700;letter-spacing:.1em;color:var(--accent-soft);text-transform:uppercase;}
        .pc-back-mid{text-align:center;display:flex;flex-direction:column;align-items:center;gap:10px;}
        .pc-verify-label{font-size:10px;font-weight:700;letter-spacing:.16em;color:#8b8c96;text-transform:uppercase;}
        .pc-back-title{font-family:'Poppins',sans-serif;font-weight:600;font-size:16.5px;line-height:1.3;max-width:230px;}
        .pc-pdf-btn{margin-top:4px;display:inline-flex;align-items:center;gap:8px;background:var(--accent);color:#fff;border:none;border-radius:999px;padding:10px 18px;font-size:12.5px;font-weight:700;cursor:pointer;font-family:'Inter',sans-serif;box-shadow:0 8px 18px -6px rgba(243,73,76,.55);text-decoration:none;}
        .pc-back-bottom{border-top:1px solid rgba(255,255,255,.1);padding-top:12px;display:flex;align-items:center;justify-content:space-between;}
        .pc-sys-id{font-size:11px;color:#75767f;font-weight:600;}
        .pc-verified{font-size:11px;color:var(--accent);font-weight:700;letter-spacing:.06em;}
        .pc-caption{text-align:center;margin-top:48px;font-family:'Caveat',cursive;font-size:26px;color:#a9abb3;}
        @media (max-width:640px){
          .pc-root{padding:40px 18px 56px;}
          .pc-head{flex-direction:column;align-items:flex-start;}
          .pc-card{flex:0 0 250px;height:270px;}
        }
      `}</style>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=Caveat:wght@600&display=swap"
      />

      <div className="pc-section">
        <div className="pc-head">
          <div>
            <span className="pc-eyebrow">System Badges</span>
            <div className="pc-title-wrap">
              <h2 className="pc-title">Professional Credentials</h2>
              <svg
                className="pc-underline"
                viewBox="0 0 460 14"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 C 40 2, 80 12, 120 7 C 160 2, 200 12, 240 7 C 280 2, 320 12, 360 7 C 390 3, 420 10, 458 6"
                  fill="none"
                  stroke="#ffb3ab"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p
              style={{
                color: "#9aa0aa",
                fontSize: "15px",
                lineHeight: 1.6,
                maxWidth: "520px",
                marginTop: "18px",
              }}
            >
              Certifications, awards and recognitions earned across Full Stack
              Development, Mobile Applications, Software Testing and Artificial
              Intelligence.
            </p>
          </div>
          <div className="pc-arrows">
            <button
              className="pc-arrow-btn"
              onClick={() => nudge(-1)}
              aria-label="Previous"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button
              className="pc-arrow-btn"
              onClick={() => nudge(1)}
              aria-label="Next"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>

        <div
          className="pc-viewport"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div className="pc-track" ref={trackRef}>
            {DECK.map((item, i) => (
              <Card key={`${item.id}-${i}`} item={item} index={i} />
            ))}
          </div>
        </div>

        <p className="pc-caption">
          Hover a card to flip and verify &bull; Total of {certificates.length}{" "}
          certificates running.
        </p>
      </div>
    </section>
  );
}
