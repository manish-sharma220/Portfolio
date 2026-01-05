


import React, { useState, useEffect } from "react";
import {
  Code,
  Coffee,
  Film,
  Heart,
  BookOpen,
  Users,
  Zap,
  Trophy,
  Database,
  Server,
  Globe,
  Smartphone,
  Palette,
  Target,
  Lightbulb,
  Star
} from "lucide-react";
import profileImage from "../assets/images/manishPassportSizePicture.jpeg";

const About = () => {
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState("story");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  const tabs = [
    { id: "story", label: "My Story" },
    { id: "skills", label: "Skills" },
    { id: "values", label: "Values" },
    { id: "fun", label: "Fun Facts" },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-slate-50 to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute -top-24 -right-24 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 rounded-full bg-rose-200 opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 sm:w-96 lg:w-128 h-64 sm:h-96 lg:h-128 rounded-full bg-blue-200 opacity-30 blur-3xl"></div>

      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4 relative">
            About Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-rose-400 to-blue-500 rounded-full"></span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed px-4">
            The story behind the code — who I am, what I value, and what drives me.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-start gap-8 lg:gap-12">
          {/* Profile Section */}
          <div className="w-full xl:w-1/3 xl:sticky xl:top-8 xl:self-start">
            <div className="group mb-8">
              {imageError ? (
                <div className="rounded-2xl w-full max-w-sm mx-auto aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-5xl shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  MS
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden shadow-xl group max-w-sm mx-auto">
                  <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                  <img
                    src={profileImage}
                    alt="Manish Kumar Sharma"
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={handleImageError}
                  />
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white text-center xl:text-left">Quick Overview</h3>
              <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto xl:max-w-none">
                <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                  <Code size={16} className="text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Developer</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                  <BookOpen size={16} className="text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Self-taught</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                  <Coffee size={16} className="text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Coffee Lover</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                  <Trophy size={16} className="text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Cricket Fan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full xl:w-2/3">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex overflow-x-auto mb-6 pb-2 scrollbar-hide gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-all duration-300 text-sm sm:text-base ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-md"
                        : "bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px] sm:min-h-[400px]">
                {activeTab === "story" && (
                  <div className="animate-fade-in space-y-4 sm:space-y-6">
                    <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      Hi there! I'm Manish Kumar Sharma, a dedicated and self-taught web
                      developer with a deep passion for building exceptional websites
                      and web applications.
                    </p>
                    <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      I'm currently focused on mastering Node.js, Express.js, and MongoDB,
                      and I'm truly excited about the limitless possibilities in web development.
                    </p>
                    <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      Beyond the frontend and backend, I have a strong foundation in Data Structures
                      and Algorithms (DSA), Database Management Systems (DBMS), Operating Systems, and
                      Computer Networking, which gives me a solid edge in both development and problem-solving.
                    </p>
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="animate-fade-in space-y-6">
                    {/* Technical Skills */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                        <Code size={20} className="text-blue-600" />
                        Technical Skills
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <h5 className="font-medium text-slate-700 dark:text-slate-300">Frontend</h5>
                          <div className="flex flex-wrap gap-2">
                            {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map((skill) => (
                              <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h5 className="font-medium text-slate-700 dark:text-slate-300">Backend</h5>
                          <div className="flex flex-wrap gap-2">
                            {['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs'].map((skill) => (
                              <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Programming Languages */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                        <Server size={20} className="text-purple-600" />
                        Programming Languages
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['JavaScript', 'Python', 'Java', 'C', 'SQL'].map((lang) => (
                          <span key={lang} className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tools & Technologies */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                        <Zap size={20} className="text-orange-600" />
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['Git', 'GitHub', 'VS Code', 'Vite', 'Vercel', 'Netlify'].map((tool) => (
                          <span key={tool} className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-sm">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "values" && (
                  <div className="animate-fade-in space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg text-blue-600 flex-shrink-0">
                        <Target size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white text-lg mb-2">Continuous Learning</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          I believe in constantly evolving and staying updated with the latest technologies. Every day is an opportunity to learn something new.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg text-green-600 flex-shrink-0">
                        <Users size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white text-lg mb-2">Collaboration</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          Great things happen when people work together. I value teamwork, open communication, and sharing knowledge with others.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg text-purple-600 flex-shrink-0">
                        <Lightbulb size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white text-lg mb-2">Innovation</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          I love finding creative solutions to complex problems and building applications that make a real difference in people's lives.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-lg text-orange-600 flex-shrink-0">
                        <Star size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white text-lg mb-2">Quality</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          I'm committed to writing clean, maintainable code and delivering high-quality solutions that exceed expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "fun" && (
                  <div className="animate-fade-in space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg text-blue-600 flex-shrink-0">
                        <Code size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white text-lg mb-2">Debugging Detective</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          I can spend hours debugging a bug... only to realize it was a missing semicolon or closing bracket! 🔍
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-red-100 dark:bg-red-900 p-3 rounded-lg text-red-600 flex-shrink-0">
                        <Film size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white text-lg mb-2">Movie Enthusiast</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          Movie buff who can quote entire scenes from memory and always has a film recommendation ready. 🎬
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg text-yellow-600 flex-shrink-0">
                        <Trophy size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white text-lg mb-2">Cricket Fanatic</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          Cricket fan who never misses an India match — even if it means checking the score during class or meetings! 🏏
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-lg text-amber-600 flex-shrink-0">
                        <Coffee size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white text-lg mb-2">Coffee Connoisseur</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          My coding productivity is directly proportional to my coffee consumption. No coffee, no code! ☕
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
