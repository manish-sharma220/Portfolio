

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
  ArrowUpRight
} from 'lucide-react';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('education');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [skillsView, setSkillsView] = useState('visual'); // 'visual' or 'list'
  
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
        <span className="text-slate-700 font-medium">{name}</span>
        <span className="text-slate-500">{level}%</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
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
      <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-blue-500 -translate-x-1/2 z-10"></div>
      
      <h4 className="text-xl font-medium text-slate-800">{title}</h4>
      <p className="text-slate-600 font-medium">{subtitle}</p>
      
      <div className="flex flex-wrap gap-4 mt-1 mb-3 text-sm text-slate-500">
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
      subtitle={<span className="text-blue-600">{technologies}</span>}
      date={date}
      location={location}
      index={index}
    >
      <ul className="mt-2 space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex gap-2">
            <ChevronRight size={18} className="flex-shrink-0 text-blue-500 mt-1" />
            <span 
              className="text-slate-600"
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
      className="py-24 px-6 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Professional Journey
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Resume & Experience</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my educational background, project experience, and technical expertise
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                <nav className="flex flex-col">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      className={`flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors ${
                        activeSection === section.id ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-700 font-medium' : 'text-slate-600'
                      }`}
                      onClick={() => setActiveSection(section.id)}
                    >
                      <span className={`${activeSection === section.id ? 'text-blue-600' : 'text-slate-400'}`}>
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
                    href="/resume.pdf" 
                    download
                    className="flex items-center justify-center gap-2 bg-white text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors"
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
            <div className={`bg-white rounded-2xl shadow-lg p-8 mb-8 transition-opacity duration-300 ${activeSection === 'education' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Education</h3>
              </div>
              
              <div className="space-y-8">
                <TimelineItem 
                  title="Master of Computer Applications (MCA)"
                  subtitle="Maulana Azad National Institute of Technology, Bhopal"
                  date="2023 - 2026"
                  index={0}
                >
                  <div className="mt-2 p-3 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 font-medium">CGPA</span>
                      <span className="text-blue-600 font-bold">7.8</span>
                    </div>
                  </div>
                </TimelineItem>
                
                <TimelineItem 
                  title="B.Sc. (Physics Hons.)"
                  subtitle="LaxmiNarayan College, Jharsuguda"
                  date="2019 - 2022"
                  index={1}
                >
                  <div className="mt-2 p-3 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 font-medium">CGPA</span>
                      <span className="text-blue-600 font-bold">7.74</span>
                    </div>
                  </div>
                </TimelineItem>
              </div>
            </div>
            
            {/* Projects Section */}
            <div className={`bg-white rounded-2xl shadow-lg p-8 mb-8 transition-opacity duration-300 ${activeSection === 'projects' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Code size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Projects</h3>
              </div>
              
              <div className="space-y-2">
                <ProjectItem 
                  title="Event Management Website"
                  technologies="React, Express.js, MySQL"
                  date="Nov 2024"
                  location="Bhopal, Madhya Pradesh"
                  index={0}
                  points={[
                    "Developed a responsive event management website for planning, managing, and booking events",
                    "<strong>Vendor Search</strong>: Search vendors by city, service type, budget, and ratings",
                    "<strong>Active Venues</strong>: Displays a list of active venues with details",
                    "<strong>Dynamic Vendor Details</strong>: View detailed vendor information by clicking on the venue"
                  ]}
                />
                
                <ProjectItem 
                  title="Weather App"
                  technologies="HTML5, CSS3, JavaScript, OpenWeatherMap API"
                  date="May 2024"
                  index={1}
                  points={[
                    "Created a web app providing real-time weather updates",
                    "<strong>Search Functionality</strong>: Users can search for temperature information by city",
                    "<strong>Real-time Updates</strong>: Temperature data fetched from OpenWeatherMap API and displayed dynamically"
                  ]}
                />
                
                <ProjectItem 
                  title="Amazon Frontpage Replica"
                  technologies="HTML, CSS"
                  date="2024"
                  index={2}
                  points={[
                    "Built a replica of Amazon's homepage layout and functionality",
                    "<strong>User-friendly Navigation</strong>: Easy-to-navigate layout similar to Amazon's homepage"
                  ]}
                />
              </div>
            </div>
            
            {/* Skills Section */}
            <div className={`bg-white rounded-2xl shadow-lg p-8 mb-8 transition-opacity duration-300 ${activeSection === 'skills' ? 'block' : 'hidden'}`}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <Server size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Technical Skills</h3>
                </div>
                
                <div className="flex bg-slate-100 rounded-lg p-1">
                  <button 
                    className={`px-3 py-1 text-sm rounded ${skillsView === 'visual' ? 'bg-white shadow text-blue-600' : 'text-slate-600'}`}
                    onClick={() => setSkillsView('visual')}
                  >
                    <BarChart size={16} className="inline mr-1" />
                    Visual
                  </button>
                  <button 
                    className={`px-3 py-1 text-sm rounded ${skillsView === 'list' ? 'bg-white shadow text-blue-600' : 'text-slate-600'}`}
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
                    <h4 className="text-lg font-medium text-slate-700 mb-4">Programming Languages</h4>
                    <div>
                      {languageSkills.map((skill, index) => (
                        <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-slate-700 mb-4">Technologies & Frameworks</h4>
                    <div>
                      {frameworkSkills.map((skill, index) => (
                        <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-slate-700 mb-4">Developer Tools</h4>
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
                  <div className="bg-slate-50 p-5 rounded-xl">
                    <h4 className="text-lg font-medium text-slate-700 mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {languageSkills.map((skill, index) => (
                        <span key={skill.name} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-xl">
                    <h4 className="text-lg font-medium text-slate-700 mb-3">Technologies/Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      {frameworkSkills.map((skill, index) => (
                        <span key={skill.name} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-xl md:col-span-2">
                    <h4 className="text-lg font-medium text-slate-700 mb-3">Developer Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {['GitHub', 'VS Code', 'PyCharm'].map((tool) => (
                        <span key={tool} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Certifications Section */}
            <div className={`bg-white rounded-2xl shadow-lg p-8 mb-8 transition-opacity duration-300 ${activeSection === 'certifications' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Fundamentals of Java Programming",
                    platform: "Coursera",
                    icon: <BookOpen size={24} />
                  },
                  {
                    title: "Python",
                    platform: "Coursera",
                    icon: <Code size={24} />
                  },
                  {
                    title: "Git and GitHub",
                    platform: "Coursera",
                    icon: <Server size={24} />
                  }
                ].map((cert, index) => (
                  <div 
                    key={index}
                    className={`bg-slate-50 p-6 rounded-xl border border-slate-100 transition-all duration-700 hover:shadow-lg hover:translate-y-[-4px] group ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={getAnimationDelay(index)}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                      {cert.icon}
                    </div>
                    <h4 className="text-lg font-medium text-slate-800 mb-2">{cert.title}</h4>
                    <p className="text-slate-600 flex items-center">
                      {cert.platform}
                      <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Coding Activity Section */}
            <div className={`bg-white rounded-2xl shadow-lg p-8 mb-8 transition-opacity duration-300 ${activeSection === 'coding' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Monitor size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Coding Activity</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={getAnimationDelay(0)}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Code size={24} />
                    </div>
                    <h4 className="text-xl font-medium">Problem Solving</h4>
                  </div>
                  <p className="text-blue-50 mb-4">Solved 300+ Data Structures & Algorithms problems</p>
                  <div className="flex gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">LeetCode</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">GeeksforGeeks</span>
                  </div>
                </div>
                
                <div className={`bg-white border border-slate-100 p-6 rounded-xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={getAnimationDelay(1)}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      <Star size={24} />
                    </div>
                    <h4 className="text-xl font-medium text-slate-800">HackerRank</h4>
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-slate-700">C Programming:</span>
                    <div className="flex">
                      {[1, 2, 3, 4].map((_, index) => (
                        <Star key={index} size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                      <Star size={16} className="text-slate-200" />
                    </div>
                    <span className="text-slate-600 text-sm">(4-star)</span>
                  </div>
                  <p className="text-slate-600">Achieved expert-level proficiency in C programming challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Download button (mobile only) */}
        <div className="text-center mt-8 lg:hidden">
          <a 
            href="/resume.pdf" 
            download
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