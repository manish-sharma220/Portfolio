


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
} from "lucide-react";

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
      className="py-24 px-6 bg-gradient-to-br from-rose-50 via-slate-50 to-rose-50 relative overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-rose-200 opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-200 opacity-30 blur-3xl"></div>

      <div
        className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-bold text-slate-800 mb-4 relative">
            About Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-rose-400 to-blue-500 rounded-full"></span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The story behind the code — who I am, what I value, and what drives me.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/3 sticky top-8 self-start">
            <div className="group">
              {imageError ? (
                <div className="rounded-2xl w-full aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-5xl shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  MS
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQF8n-7QXixUIw/profile-displayphoto-shrink_400_400/B56ZUo.oPgHoAk-/0/1740149264022?e=1750291200&v=beta&t=-4cr3RI5kbQdcA4inr18gzaRnEdfgTCi5pKC1alsiRc"
                    alt="Manish Kumar Sharma"
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={handleImageError}
                  />
                </div>
              )}
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-medium text-slate-800">Quick Overview</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                  <Code size={18} className="text-blue-600" />
                  <span className="text-slate-700">Developer</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                  <BookOpen size={18} className="text-blue-600" />
                  <span className="text-slate-700">Self-taught</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                  <Coffee size={18} className="text-blue-600" />
                  <span className="text-slate-700">Coffee Lover</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                  <Trophy size={18} className="text-blue-600" />
                  <span className="text-slate-700">Cricket Fan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 overflow-hidden">
              <div className="flex overflow-x-auto mb-6 pb-2 scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2 rounded-full whitespace-nowrap mr-2 transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="min-h-64">
                {activeTab === "story" && (
                  <div className="animate-fade-in space-y-4">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Hi there! I'm Manish Kumar Sharma, a dedicated and self-taught web
                      developer with a deep passion for building exceptional websites
                      and web applications.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      I'm currently focused on mastering Node.js, Express.js, and MongoDB,
                      and I'm truly excited about the limitless possibilities in web development.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Beyond the frontend and backend, I have a strong foundation in Data Structures
                      and Algorithms (DSA), Database Management Systems (DBMS), Operating Systems, and
                      Computer Networking, which gives me a solid edge in both development and problem-solving.
                    </p>
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="animate-fade-in">
                    {/* Skills Grid */}
                    {/* ... (same content as your original) */}
                  </div>
                )}

                {activeTab === "values" && (
                  <div className="animate-fade-in">
                    {/* Values Section */}
                    {/* ... (same content as your original) */}
                  </div>
                )}

                {activeTab === "fun" && (
                  <div className="animate-fade-in space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                        <Code size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 text-lg mb-1">Debugging Detective</h4>
                        <p className="text-slate-600">
                          I can spend hours debugging a bug... only to realize it was a missing semicolon or closing bracket!
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                        <Film size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 text-lg mb-1">Movie Enthusiast</h4>
                        <p className="text-slate-600">
                          Movie buff who can quote entire scenes from memory and always has a film recommendation ready.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                        <Trophy size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 text-lg mb-1">Cricket Fanatic</h4>
                        <p className="text-slate-600">
                          Cricket fan who never misses an India match — even if it means checking the score during class or meetings! 😅
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                        <Coffee size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 text-lg mb-1">Coffee Connoisseur</h4>
                        <p className="text-slate-600">
                          My coding productivity is directly proportional to my coffee consumption. No coffee, no code!
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
