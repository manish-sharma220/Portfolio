import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Linkedin, Instagram, Code, Trophy } from 'lucide-react';

const SocialLinks = () => {
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

    const section = document.getElementById('social-links');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const socialProfiles = [
    {
      id: 1,
      name: 'GitHub',
      username: '@manish-sharma220',
      description: 'Check out my code repositories, open source contributions, and development projects.',
      url: 'https://github.com/manish-sharma220',
      icon: <Github size={28} />,
      color: 'from-gray-700 to-gray-900',
      hoverColor: 'hover:from-gray-800 hover:to-black',
      bgColor: 'bg-gray-50 dark:bg-gray-800',
      stats: 'Repositories & Projects'
    },
    {
      id: 2,
      name: 'LeetCode',
      username: '@Manish_Sharma07',
      description: 'Follow my coding journey and problem-solving progress on LeetCode.',
      url: 'https://leetcode.com/u/Manish_Sharma07/',
      icon: <Code size={28} />,
      color: 'from-orange-500 to-yellow-600',
      hoverColor: 'hover:from-orange-600 hover:to-yellow-700',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      stats: 'Problem Solving'
    },
    {
      id: 3,
      name: 'GeeksforGeeks',
      username: '@sharmamaniskq8l',
      description: 'Explore my coding practice, articles, and competitive programming activities.',
      url: 'https://www.geeksforgeeks.org/profile/sharmamaniskq8l?tab=activity',
      icon: <Trophy size={28} />,
      color: 'from-green-500 to-emerald-600',
      hoverColor: 'hover:from-green-600 hover:to-emerald-700',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      stats: 'Coding Practice'
    },
    {
      id: 4,
      name: 'LinkedIn',
      username: '@manish-kumar-sharma',
      description: 'Connect with me professionally and stay updated with my career journey.',
      url: 'https://www.linkedin.com/in/manish-kumar-sharma-a29312288/',
      icon: <Linkedin size={28} />,
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-700 hover:to-blue-900',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      stats: 'Professional Network'
    },
    {
      id: 5,
      name: 'Instagram',
      username: '@manish_sharma_4_10_2001',
      description: 'Get a glimpse into my personal life, interests, and behind-the-scenes moments.',
      url: 'https://www.instagram.com/manish_sharma_4_10_2001?igsh=MTZpZm02eGprYTRvdw==',
      icon: <Instagram size={28} />,
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      stats: 'Personal Updates'
    }
  ];

  return (
    <section
      id="social-links"
      className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background decorations */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-200 opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-200 opacity-30 blur-3xl"></div>

      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-bold text-slate-800 dark:text-white mb-4 relative">
            Connect With Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Follow my journey across different platforms. Let's connect, collaborate, and grow together!
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialProfiles.map((profile, index) => (
            <a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${profile.bgColor} backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 dark:border-gray-700/50 ${
                isVisible ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${profile.color} ${profile.hoverColor} text-white transition-all duration-300 group-hover:scale-110`}>
                  {profile.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
                    {profile.username}
                  </p>
                </div>
                <ExternalLink 
                  size={20} 
                  className="text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 group-hover:translate-x-1" 
                />
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {profile.description}
              </p>

              {/* Stats/Category */}
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${profile.color} text-white`}>
                  {profile.stats}
                </span>
                <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm">
                  <span>Visit Profile</span>
                  <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                Let's Build Something Amazing Together!
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Feel free to reach out on any platform. I'm always open to new opportunities and collaborations.
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;