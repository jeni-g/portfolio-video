import React, { useState } from 'react';
import stackImage from '../assets/about/stack.jpeg';
import reactImage from '../assets/about/react.png';
import dartImage from '../assets/about/dart.png';
import pythonImage from '../assets/about/python.png';
import djangoImage from '../assets/about/django.png';
import javascriptImage from '../assets/about/javascript.png';
import typescriptImage from '../assets/about/typescript.png';
import htmlImage from '../assets/about/html.png';
import cssImage from '../assets/about/css.png';
import tailwindcssImage from '../assets/about/tailwindcss.png';
import bootstrapImage from '../assets/about/bootstrap.png';
import sqlImage from '../assets/about/sql.png';
import mysqlImage from '../assets/about/mysql.png';
import sqliteImage from '../assets/about/sqlite.png';
import firebaseImage from '../assets/about/firebase.png';
import restapiImage from '../assets/about/restapi.png';
import gitImage from '../assets/about/git.png';
import githubImage from '../assets/about/github.png';
import vsImage from '../assets/about/vs.png';
import flutterImage from '../assets/about/flutter.png';
import postmanImage from '../assets/about/postman.png';
const About = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const handleIconClick = (icon) => {
  setActiveIcon(icon);

  setTimeout(() => {
    setActiveIcon(null);
  }, 1000); // 1 second
};
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">

          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img
                  src={stackImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">

          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">About Me</h2>
          <p className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50">
            Hi, I'm <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">Jeni G Hannah</span>, a Computer Science Engineering graduate and aspiring Software Engineer
            passionate about building web and mobile applications using Python, Django, Flutter, React, and modern development tools.
          </p>

          {/* Tech Stack Logos */}

          <div className="mt-10 space-y-4">

            <div className="flex flex-wrap justify-center gap-4">

             <div onClick={() => handleIconClick("react")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={reactImage} alt="React" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "react" ? "scale-110 -translate-y-1": "scale-100" }`} />
              </div>

              <div onClick={() => handleIconClick("python")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={pythonImage} alt="Python" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "python" ? "scale-110 -translate-y-1": "scale-100" }`} />
              </div>

              <div onClick={() => handleIconClick("django")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={djangoImage} alt="Django" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "django" ? "scale-110 -translate-y-1": "scale-100" }`} />
              </div>

              <div onClick={() => handleIconClick("dart")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={dartImage} alt="Dart" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "dart" ? "scale-110 -translate-y-1" : "scale-100" }`} />
              </div>

              <div  onClick={() => handleIconClick("javascript")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={javascriptImage} alt="JavaScript" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "javascript" ? "scale-110 -translate-y-1" : "scale-100" }`} />
              </div>

              <div  onClick={() => handleIconClick("html")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={htmlImage} alt="HTML" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "html" ? "scale-110 -translate-y-1": "scale-100" }`} />
              </div>

              <div onClick={() => handleIconClick("css")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={cssImage} alt="CSS" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "css" ? "scale-110 -translate-y-1": "scale-100" }`} />
              </div>

              <div onClick={() => handleIconClick("bootstrap")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={bootstrapImage} alt="Bootstrap" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "bootstrap" ? "scale-110 -translate-y-1": "scale-100" }`} />
              </div>

              <div onClick={() => handleIconClick("tailwindcss")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={tailwindcssImage} alt="Tailwindcss" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "tailwindcss" ?"scale-110 -translate-y-1" : "scale-100" }`} />
              </div>

              <div  onClick={() => handleIconClick("flutter")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={flutterImage} alt="Flutter" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "flutter" ? "scale-110 -translate-y-1": "scale-100" }`} />
              </div>

            </div>

            <div className="flex flex-wrap justify-center gap-4">

              <div onClick={() => handleIconClick("mysql")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={mysqlImage} alt="MySQL" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "mysql" ?"scale-110 -translate-y-1" : "scale-100" }`} />
              </div>

              <div onClick={() => handleIconClick("sqlite")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={sqliteImage} alt="SQLite" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "sqlite" ? "scale-110 -translate-y-1": "scale-100" }`} />
              </div>

             <div onClick={() => handleIconClick("firebase")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={firebaseImage} alt="Firebase" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "firebase" ?"scale-110 -translate-y-1" : "scale-100" }`} />
              </div>

             <div onClick={() => handleIconClick("git")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={gitImage} alt="Git" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "git" ? "scale-110 -translate-y-1" : "scale-100" }`} />
              </div>

              <div onClick={() => handleIconClick("github")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={githubImage} alt="GitHub"className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "github" ? "scale-110 -translate-y-1": "scale-100" }`} />
              </div>

              <div onClick={() => handleIconClick("vs")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={vsImage} alt="VS Code" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "vs" ? "scale-110 -translate-y-1": "scale-100" }`} />
              </div>

              <div onClick={() => handleIconClick("postman")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={postmanImage} alt="Postman" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "postman" ?"scale-110 -translate-y-1" : "scale-100" }`} />
              </div>

              <div onClick={() => handleIconClick("restapi")} className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 `} >
                <img src={restapiImage} alt="REST API" className={ `w-8 h-8 transition-all duration-300 ${ activeIcon === "restapi" ? "scale-110 -translate-y-1": "scale-100" }`} />
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
    </section>
  );
};

export default About;
