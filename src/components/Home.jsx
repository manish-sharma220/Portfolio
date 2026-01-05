// // Home.jsx
// import React from 'react';

// const Home = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-blue-50 to-white">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-5xl md:text-6xl font-medium text-slate-700 mb-6 animate-fade-in-down">
//           Hi, I'm Manish — a curious mind who codes.
//         </h1>
//         <p className="text-xl text-slate-600 font-light mb-8 animate-fade-in-up">
//         Self-taught developer fueled by coffee, cricket, and the thrill of building something awesome
//         </p>
//         <a href="#projects" 
//            className="inline-block bg-blue-100 text-blue-600 px-8 py-3 rounded-full 
//                       font-medium hover:bg-blue-200 transition-colors duration-300">
//           View My Work
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Home;



import React, { useEffect, useState } from 'react';
import {
  Gamepad,
  Trophy,
  Code,
  Coffee,
  Award,
  ArrowRight
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-50 via-slate-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-300 dark:bg-blue-900 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-indigo-300 dark:bg-indigo-900 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="inline-block mb-4 px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
            Full-Stack Developer
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Manish</span> — 
            <br className="hidden md:block" /> a curious mind who codes.
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Self-taught developer crafting digital experiences with passion and precision.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-gray-800 px-4 py-2 rounded-full">
              <Coffee size={18} className="text-slate-700 dark:text-slate-300" />
              <span className="text-slate-700 dark:text-slate-300">Coffee Enthusiast</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-gray-800 px-4 py-2 rounded-full">
              <Trophy size={18} className="text-slate-700 dark:text-slate-300" /> {/* Replaced Cricket with Trophy */}
              <span className="text-slate-700 dark:text-slate-300">Cricket Fan</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-gray-800 px-4 py-2 rounded-full">
              <Code size={18} className="text-slate-700 dark:text-slate-300" />
              <span className="text-slate-700 dark:text-slate-300">Problem Solver</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects"
              className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            {/* <a 
              href="#contact" 
              className="px-6 py-3 border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-all duration-300"
            >
              Get in Touch
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
