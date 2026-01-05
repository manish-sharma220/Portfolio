

import React, { useState, useEffect, useRef } from 'react';
import { 
  Download, 
  GraduationCap, 
  Code, 
  Award, 
  Server, 
  ChevronRight, 
  Calendar, 
  MapPin,
  BarChart,
  Monitor,
  BookOpen,
  Star,
  Trophy,
  ArrowUpRight,
  Loader
} from 'lucide-react';
import { useCodingStats } from '../hooks/useCodingStats';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('education');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [skillsView, setSkillsView] = useState('visual'); // 'visual' or 'list'
  
  // Get live coding statistics
  const codingStats = useCodingStats();
  
  // Skill proficiency data
  const languageSkills = [
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'Java', level: 75 },
    { name: 'SQL', level: 80 }
  ];
  
  const frameworkSkills = [
    { name: 'React', level: 88 },
    { name: 'Express', level: 82 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'MongoDB', level: 78 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 92 }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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
  
  const sections = [
    { id: 'education', icon: <GraduationCap size={20} />, label: 'Education' },
    { id: 'projects', icon: <Code size={20} />, label: 'Projects' },
    { id: 'skills', icon: <Server size={20} />, label: 'Skills' },
    { id: 'certifications', icon: <Award size={20} />, label: 'Certifications' },
    { id: 'coding', icon: <Monitor size={20} />, label: 'Coding Activity' }
  ];
  
  // Animation delay helper
  const getAnimationDelay = (index) => {
    return { transitionDelay: `${(index + 1) * 100}ms` };
  };
  
  // Skill Bar Component
  const SkillBar = ({ name, level, index }) => (
    <div className="mb-4" style={getAnimationDelay(index)}>
      <div className="flex justify-between mb-1">
        <span className="text-slate-700 dark:text-slate-300 font-medium">{name}</span>
        <span className="text-slate-500 dark:text-slate-400">{level}%</span>
      </div>
      <div className="h-2 bg-slate-100 dark:bg-gray-600 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000"
          style={{ 
            width: isVisible ? `${level}%` : '0%',
            transition: 'width 1s ease-out',
            transitionDelay: `${index * 150 + 300}ms`
          }}
        ></div>
      </div>
    </div>
  );
  
  // Timeline Item Component
  const TimelineItem = ({ title, subtitle, date, location, children, index }) => (
    <div 
      className={`relative pl-8 pb-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`} 
      style={getAnimationDelay(index)}
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-gray-600"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400 -translate-x-1/2 z-10"></div>
      
      <h4 className="text-lg sm:text-xl font-medium text-slate-800 dark:text-white">{title}</h4>
      <p className="text-slate-600 dark:text-slate-300 font-medium">{subtitle}</p>
      
      <div className="flex flex-wrap gap-4 mt-1 mb-3 text-sm text-slate-500 dark:text-slate-400">
        {date && (
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        )}
        
        {location && (
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        )}
      </div>
      
      {children}
    </div>
  );
  
  // Project Item Component
  const ProjectItem = ({ title, technologies, date, location, points, index }) => (
    <TimelineItem 
      title={title}
      subtitle={<span className="text-blue-600 dark:text-blue-400">{technologies}</span>}
      date={date}
      location={location}
      index={index}
    >
      <ul className="mt-2 space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex gap-2">
            <ChevronRight size={16} className="flex-shrink-0 text-blue-500 dark:text-blue-400 mt-1" />
            <span 
              className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: point }}
            />
          </li>
        ))}
      </ul>
    </TimelineItem>
  );

  return (
    <section 
      id="resume" 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
            Professional Journey
          </div>
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Resume & Experience</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my educational background, project experience, and technical expertise
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-6">
                <nav className="flex flex-col">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      className={`flex items-center gap-3 p-4 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors ${
                        activeSection === section.id ? 'bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 text-blue-700 dark:text-blue-400 font-medium' : 'text-slate-600 dark:text-slate-300'
                      }`}
                      onClick={() => setActiveSection(section.id)}
                    >
                      <span className={`${activeSection === section.id ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`}>
                        {section.icon}
                      </span>
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
              
              <div className="hidden lg:block bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="font-medium mb-3">Ready to collaborate?</h3>
                <p className="text-blue-50 text-sm mb-4">Download my full resume or get in touch to discuss opportunities.</p>
                <div className="flex flex-col gap-2">
                  <a 
                    href="https://drive.google.com/uc?export=download&id=1pkIutJS4RR3ATnv6hO1EgPhi5ShpkfX8" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Download size={16} />
                    Download CV
                  </a>
                  <a 
                    href="#contact" 
                    className="flex items-center justify-center gap-2 bg-blue-400/30 text-white border border-white/20 py-2 px-4 rounded-lg font-medium hover:bg-blue-400/50 transition-colors"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            {/* Education Section */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 transition-opacity duration-300 ${activeSection === 'education' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Education</h3>
              </div>
              
              <div className="space-y-8">
                <TimelineItem 
                  title="Master of Computer Applications (MCA)"
                  subtitle="Maulana Azad National Institute of Technology, Bhopal"
                  date="2023 - 2026"
                  index={0}
                >
                  <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">CGPA</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">7.8</span>
                    </div>
                  </div>
                </TimelineItem>
                
                <TimelineItem 
                  title="B.Sc. (Physics Hons.)"
                  subtitle="LaxmiNarayan College, Jharsuguda"
                  date="2019 - 2022"
                  index={1}
                >
                  <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">CGPA</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">7.74</span>
                    </div>
                  </div>
                </TimelineItem>
              </div>
            </div>
            
            {/* Projects Section */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 transition-opacity duration-300 ${activeSection === 'projects' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                  <Code size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">Projects</h3>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <ProjectItem 
                  title="Campus Notes Platform"
                  technologies="React, Node.js, Express, MongoDB, File Upload"
                  date="2024"
                  location="Educational Platform"
                  index={0}
                  points={[
                    "Student resource platform for uploading, managing, and accessing academic notes",
                    "<strong>File Management</strong>: Upload, organize, and categorize academic documents",
                    "<strong>Search Functionality</strong>: Advanced search and filtering for easy note discovery",
                    "<strong>Collaborative Sharing</strong>: Share notes with classmates and study groups",
                    "<strong>User Profiles</strong>: Personalized dashboards for students and educators"
                  ]}
                />
                
                <ProjectItem 
                  title="Event Management Website"
                  technologies="React, Express.js, MySQL, JWT Authentication"
                  date="2024"
                  location="Business Application"
                  index={1}
                  points={[
                    "Comprehensive event planning and booking platform with vendor management",
                    "<strong>Vendor Search</strong>: Advanced filtering by city, service type, budget, and ratings",
                    "<strong>Venue Management</strong>: Display active venues with detailed information",
                    "<strong>Dynamic Details</strong>: Interactive vendor profiles with booking capabilities",
                    "<strong>Event Planning</strong>: End-to-end event management and coordination tools"
                  ]}
                />

                <ProjectItem 
                  title="E-Learning Platform"
                  technologies="React, Node.js, Express, MongoDB, JWT Authentication"
                  date="2024"
                  location="Full-Stack Development"
                  index={2}
                  points={[
                    "Comprehensive e-learning platform with course management and user authentication",
                    "<strong>Course Management</strong>: Create, edit, and organize educational content",
                    "<strong>Progress Tracking</strong>: Monitor student learning progress and achievements",
                    "<strong>Interactive Modules</strong>: Engaging learning experiences with modern UI/UX",
                    "<strong>Secure Authentication</strong>: JWT-based user authentication and authorization"
                  ]}
                />
              </div>
            </div>
            
            {/* Skills Section */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 transition-opacity duration-300 ${activeSection === 'skills' ? 'block' : 'hidden'}`}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                    <Server size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Technical Skills</h3>
                </div>
                
                <div className="flex bg-slate-100 dark:bg-gray-700 rounded-lg p-1">
                  <button 
                    className={`px-3 py-1 text-sm rounded ${skillsView === 'visual' ? 'bg-white dark:bg-gray-600 shadow text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'}`}
                    onClick={() => setSkillsView('visual')}
                  >
                    <BarChart size={16} className="inline mr-1" />
                    Visual
                  </button>
                  <button 
                    className={`px-3 py-1 text-sm rounded ${skillsView === 'list' ? 'bg-white dark:bg-gray-600 shadow text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'}`}
                    onClick={() => setSkillsView('list')}
                  >
                    <Server size={16} className="inline mr-1" />
                    List
                  </button>
                </div>
              </div>
              
              {skillsView === 'visual' ? (
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">Programming Languages</h4>
                    <div>
                      {languageSkills.map((skill, index) => (
                        <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">Technologies & Frameworks</h4>
                    <div>
                      {frameworkSkills.map((skill, index) => (
                        <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">Developer Tools</h4>
                    <div className="flex flex-wrap gap-3">
                      {['GitHub', 'VS Code', 'PyCharm'].map((tool, index) => (
                        <div 
                          key={tool}
                          className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-700 ${
                            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                          }`}
                          style={getAnimationDelay(index)}
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 dark:bg-gray-700 p-5 rounded-xl">
                    <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {languageSkills.map((skill, index) => (
                        <span key={skill.name} className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-gray-700 p-5 rounded-xl">
                    <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-3">Technologies/Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      {frameworkSkills.map((skill, index) => (
                        <span key={skill.name} className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-gray-700 p-5 rounded-xl md:col-span-2">
                    <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-3">Developer Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {['GitHub', 'VS Code', 'PyCharm'].map((tool) => (
                        <span key={tool} className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Certifications Section */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 transition-opacity duration-300 ${activeSection === 'certifications' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "IBM SkillsBuild Front-end Web Development",
                    platform: "IBM SkillsBuild",
                    icon: <BookOpen size={24} />,
                    link: "https://drive.google.com/file/d/1qpsuOtCUpThtnfDTBnYAhkS6UcY1g3kZ/view?usp=drivesdk",
                    color: "blue"
                  },
                  {
                    title: "Fundamentals of Java Programming",
                    platform: "Coursera",
                    icon: <Code size={24} />,
                    link: "https://drive.google.com/file/d/1rH3tgeoWepbwPtrAk32mjB8WEjAR7IdF/view?usp=drivesdk",
                    color: "orange"
                  },
                  {
                    title: "Python Crash Course",
                    platform: "Google",
                    icon: <Server size={24} />,
                    link: "https://drive.google.com/file/d/1ZwlwoWD0a9BxCWtFHTvdP01kBdM1Goxe/view?usp=drivesdk",
                    color: "green"
                  },
                  {
                    title: "Git & GitHub",
                    platform: "Google",
                    icon: <Award size={24} />,
                    link: "https://drive.google.com/file/d/1Qj6JssS2IRPKsLJjJfWlcKkTRwQzE-On/view?usp=drivesdk",
                    color: "purple"
                  }
                ].map((cert, index) => (
                  <a 
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-6 rounded-xl border transition-all duration-700 hover:shadow-lg hover:translate-y-[-4px] group cursor-pointer ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    } ${
                      cert.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700' :
                      cert.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700' :
                      cert.color === 'green' ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700' :
                      'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700'
                    }`}
                    style={getAnimationDelay(index)}
                  >
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                      cert.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' :
                      cert.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400' :
                      cert.color === 'green' ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' :
                      'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
                    }`}>
                      {cert.icon}
                    </div>
                    <h4 className="text-lg font-medium text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300 flex items-center justify-between">
                      <span>{cert.platform}</span>
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                    </p>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Coding Activity Section */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 transition-opacity duration-300 ${activeSection === 'coding' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                  <Monitor size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Coding Activity</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* LeetCode */}
                <div className={`text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl border border-orange-200 dark:border-orange-800 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={getAnimationDelay(0)}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 mx-auto mb-4">
                    <Code size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">LeetCode</h4>
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">{codingStats.leetcode.totalSolved}+</div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Problems Solved</p>
                </div>

                {/* GeeksforGeeks */}
                <div className={`text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={getAnimationDelay(1)}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 mx-auto mb-4">
                    <Trophy size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">GeeksforGeeks</h4>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">100+</div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Problems Solved</p>
                </div>

                {/* CodeChef */}
                <div className={`text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={getAnimationDelay(2)}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 mx-auto mb-4">
                    <Award size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">CodeChef</h4>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">50+</div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Problems Solved</p>
                </div>
              </div>

              {/* Overall Summary */}
              <div className="mt-8 text-center p-6 bg-slate-50 dark:bg-gray-700 rounded-xl">
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Total Coding Activity</h4>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{codingStats.leetcode.totalSolved + 100 + 50}+</div>
                <p className="text-slate-600 dark:text-slate-400">Problems Solved Across All Platforms</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Download button (mobile only) */}
        <div className="text-center mt-8 lg:hidden">
          <a 
            href="https://drive.google.com/uc?export=download&id=1pkIutJS4RR3ATnv6hO1EgPhi5ShpkfX8" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            <Download size={18} />
            Download PDF Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;