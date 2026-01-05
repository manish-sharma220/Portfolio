import React, { useState, useEffect } from 'react';
import { ExternalLink, Award, Calendar, Building } from 'lucide-react';

const Certificates = () => {
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

    const section = document.getElementById('certificates');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const certificates = [
    {
      id: 1,
      title: 'IBM SkillsBuild Front end Web Development',
      issuer: 'IBM SkillsBuild',
      date: 'Summer 2024',
      description: 'Comprehensive front-end web development certification covering modern web technologies and best practices.',
      link: 'https://drive.google.com/file/d/1qpsuOtCUpThtnfDTBnYAhkS6UcY1g3kZ/view?usp=drivesdk',
      color: 'from-blue-500 to-indigo-600',
      icon: <Building size={24} />
    },
    {
      id: 2,
      title: 'Java Programming Certification',
      issuer: 'Google',
      date: '2024',
      description: 'Advanced Java programming concepts, object-oriented programming, and software development principles.',
      link: 'https://drive.google.com/file/d/1rH3tgeoWepbwPtrAk32mjB8WEjAR7IdF/view?usp=drivesdk',
      color: 'from-orange-500 to-red-600',
      icon: <Award size={24} />
    },
    {
      id: 3,
      title: 'Python Crash Course',
      issuer: 'Google',
      date: '2024',
      description: 'Intensive Python programming course covering fundamentals, data structures, and practical applications.',
      link: 'https://drive.google.com/file/d/1ZwlwoWD0a9BxCWtFHTvdP01kBdM1Goxe/view?usp=drivesdk',
      color: 'from-green-500 to-teal-600',
      icon: <Award size={24} />
    },
    {
      id: 4,
      title: 'Git & GitHub',
      issuer: 'Google',
      date: '2024',
      description: 'Version control systems, collaborative development, and project management using Git and GitHub.',
      link: 'https://drive.google.com/file/d/1Qj6JssS2IRPKsLJjJfWlcKkTRwQzE-On/view?usp=drivesdk',
      color: 'from-purple-500 to-pink-600',
      icon: <Award size={24} />
    }
  ];

  return (
    <section
      id="certificates"
      className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background decorations */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-indigo-200 opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-200 opacity-30 blur-3xl"></div>

      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-bold text-slate-800 dark:text-white mb-4 relative">
            Certificates & Achievements
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-indigo-400 to-cyan-500 rounded-full"></span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Professional certifications and achievements that showcase my commitment to continuous learning and skill development.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 ${
                isVisible ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Header */}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="p-6">
                {/* Certificate Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} text-white flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Building size={16} />
                        <span>{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* View Certificate Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                >
                  <span>View Certificate</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
            <Award className="text-indigo-600 dark:text-indigo-400" size={20} />
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              Continuously expanding my skill set through professional development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;