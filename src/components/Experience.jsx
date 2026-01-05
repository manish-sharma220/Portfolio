import React, { useState, useEffect, useRef } from 'react';
import { 
  Plane, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Code, 
  Rocket, 
  Target,
  BookOpen,
  Trophy,
  Users,
  Briefcase
} from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [planePosition, setPlanePosition] = useState(0);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Animate airplane along the path
    if (isVisible) {
      const interval = setInterval(() => {
        setPlanePosition(prev => (prev + 1) % 100);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const journeySteps = [
    {
      id: 'education',
      title: 'Educational Foundation',
      subtitle: 'Building Strong Fundamentals',
      date: '2019 - Present',
      location: 'Academic Journey',
      icon: <GraduationCap size={24} />,
      color: 'blue',
      description: 'Completed B.Sc. Physics (Hons.) and currently pursuing MCA at MANIT Bhopal. Built strong analytical and problem-solving skills.',
      achievements: [
        'B.Sc. Physics (Hons.) - CGPA 7.74',
        'MCA at MANIT Bhopal - CGPA 7.8',
        'Strong foundation in Mathematics & Logic'
      ]
    },
    {
      id: 'learning',
      title: 'Self-Learning Phase',
      subtitle: 'Discovering Programming Passion',
      date: '2023 - 2024',
      location: 'Self-Directed Learning',
      icon: <Code size={24} />,
      color: 'green',
      description: 'Discovered passion for programming and web development. Dedicated countless hours to learning modern technologies.',
      achievements: [
        'Mastered React, Node.js, MongoDB',
        'Completed 250+ coding problems',
        'Built multiple full-stack projects'
      ]
    },
    {
      id: 'projects',
      title: 'Project Development',
      subtitle: 'Applying Knowledge Practically',
      date: '2024',
      location: 'Hands-on Experience',
      icon: <Rocket size={24} />,
      color: 'purple',
      description: 'Transformed learning into practical applications by building real-world projects and gaining hands-on experience.',
      achievements: [
        'E-Learning Platform with full authentication',
        'Live Polling System with real-time features',
        'Campus Notes sharing platform'
      ]
    },
    {
      id: 'future',
      title: 'Ready for Takeoff',
      subtitle: 'Seeking First Opportunity',
      date: '2025 & Beyond',
      location: 'Professional Journey Begins',
      icon: <Target size={24} />,
      color: 'orange',
      description: 'Ready to contribute to a dynamic team and grow professionally. Eager to apply skills in a real-world environment.',
      achievements: [
        'Strong technical foundation',
        'Portfolio of practical projects',
        'Passion for continuous learning'
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        icon: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
        accent: 'text-blue-600 dark:text-blue-400'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800',
        icon: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
        accent: 'text-green-600 dark:text-green-400'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        icon: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
        accent: 'text-purple-600 dark:text-purple-400'
      },
      orange: {
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        border: 'border-orange-200 dark:border-orange-800',
        icon: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
        accent: 'text-orange-600 dark:text-orange-400'
      }
    };
    return colorMap[color];
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 via-blue-50/30 to-indigo-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-indigo-200 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-400 rounded-full text-sm font-medium mb-4">
            Professional Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4 lg:mb-6">
            Experience & Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed px-4">
            From academic foundations to practical applications - my journey as a fresher ready to take flight in the tech industry
          </p>
        </div>

        {/* Fresher Status Card */}
        <div className="mb-12 lg:mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <Plane size={120} className="transform rotate-12" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">Fresher Status</h3>
                  <p className="text-blue-100">Ready for Professional Journey</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold mb-1">0</div>
                  <div className="text-blue-100 text-sm">Years Professional Experience</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold mb-1">6+</div>
                  <div className="text-blue-100 text-sm">Personal Projects Completed</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold mb-1">250+</div>
                  <div className="text-blue-100 text-sm">Coding Problems Solved</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Timeline with Airplane */}
        <div className="relative">
          {/* Flight Path */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-300 via-blue-400 to-indigo-500 transform -translate-x-1/2 opacity-30"></div>
          
          {/* Animated Airplane */}
          <div 
            className="hidden lg:block absolute left-1/2 w-8 h-8 transform -translate-x-1/2 z-20 transition-all duration-100"
            style={{ 
              top: `${planePosition}%`,
              transform: `translateX(-50%) rotate(${planePosition > 50 ? '15deg' : '-15deg'})` 
            }}
          >
            <div className="bg-sky-500 text-white p-2 rounded-full shadow-lg">
              <Plane size={16} />
            </div>
          </div>

          {/* Journey Steps */}
          <div className="space-y-8 lg:space-y-16">
            {journeySteps.map((step, index) => {
              const colors = getColorClasses(step.color);
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={step.id}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Content Card */}
                  <div className={`flex-1 p-6 sm:p-8 rounded-2xl border ${colors.bg} ${colors.border} shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${colors.icon} flex-shrink-0`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-1">
                          {step.title}
                        </h3>
                        <p className={`font-medium ${colors.accent} mb-2`}>
                          {step.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{step.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{step.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {step.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <Trophy size={12} className={`mt-1 flex-shrink-0 ${colors.accent}`} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Dot (Mobile) */}
                  <div className="lg:hidden w-4 h-4 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 flex-shrink-0"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-gray-700">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">Ready to Contribute</h3>
                <p className="text-slate-600 dark:text-slate-300">Seeking opportunities to grow and make an impact</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              As a passionate fresher with strong technical foundations and a portfolio of practical projects, 
              I'm excited to bring fresh perspectives and dedication to your team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Rocket size={18} />
                Let's Connect
              </a>
              <a 
                href="#resume" 
                className="inline-flex items-center gap-2 bg-slate-100 dark:bg-gray-700 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-gray-600 transition-all duration-300"
              >
                <BookOpen size={18} />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;