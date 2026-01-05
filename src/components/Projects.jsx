


import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { Search, Filter, X, ChevronRight, ChevronLeft } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const projects = [
    {
      title: "E-Learning Platform",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      description: "Comprehensive e-learning platform with course management, user authentication, progress tracking, and interactive learning modules. Built with modern web technologies for seamless educational experience.",
      tools: "React, Node.js, Express, MongoDB, JWT Authentication",
      role: "Full-Stack Developer",
      category: "Fullstack",
      demoLink: "https://e-learning-platform.example.com",
      codeLink: "https://github.com/manish-sharma220/E-Learning",
      date: "2024",
      featured: true
    },
    {
      title: "Live Polling System",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80",
      description: "Real-time polling application with live vote counting, user authentication, poll creation and management. Features WebSocket integration for instant updates and responsive design for all devices.",
      tools: "React, Node.js, Socket.io, Express, MongoDB",
      role: "Full-Stack Developer",
      category: "Fullstack",
      demoLink: "https://live-polling-system.example.com",
      codeLink: "https://github.com/manish-sharma220/live-polling-system",
      date: "2024",
      featured: true
    },
    {
      title: "Campus Notes Platform",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Comprehensive platform for students to upload, manage, and access academic notes easily. Features user authentication, file management, search functionality, and collaborative note sharing system.",
      tools: "React, Node.js, Express, MongoDB, File Upload",
      role: "Full-Stack Developer",
      category: "Fullstack",
      demoLink: "https://campus-notes.example.com",
      codeLink: "https://github.com/manish-sharma220/CampusNotes",
      date: "2024",
      featured: true
    },
    {
      title: "Event Management Website",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      description: "Developed a responsive event management website for planning, managing, and booking events. Features vendor search by city, service type, budget, and ratings with dynamic vendor details.",
      tools: "React, Express.js, MySQL, JWT Authentication",
      role: "Full-Stack Developer",
      category: "Fullstack",
      demoLink: "https://event-management.example.com",
      codeLink: "https://github.com/manish-sharma220/Project-Event-Managemet",
      date: "2024",
      featured: false
    },
    {
      title: "Weather Forecast App",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Responsive weather application providing real-time weather updates, forecasts, and location-based weather information. Integrated with OpenWeatherMap API for accurate weather data.",
      tools: "HTML5, CSS3, JavaScript, OpenWeatherMap API",
      role: "Frontend Developer",
      category: "Frontend",
      demoLink: "https://weather-app.example.com",
      codeLink: "https://github.com/manish-sharma220/Whether-App-",
      date: "2024",
      featured: false
    },
    {
      title: "Amazon Homepage Clone",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Pixel-perfect replica of Amazon's homepage with responsive design, interactive navigation, product showcase, and modern UI components. Built with pure HTML and CSS.",
      tools: "HTML5, CSS3, Responsive Design",
      role: "Frontend Developer",
      category: "Frontend",
      demoLink: "https://amazon-clone.example.com",
      codeLink: "https://github.com/manish-sharma220/amazon-clone",
      date: "2024",
      featured: false
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Fullstack', 'Mobile'];
  
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

  useEffect(() => {
    // Filter projects based on category and search query
    let filtered = projects;
    
    if (activeFilter !== 'All') {
      filtered = filtered.filter(project => project.category === activeFilter);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        project => 
          project.title.toLowerCase().includes(query) || 
          project.description.toLowerCase().includes(query) ||
          project.tools.toLowerCase().includes(query)
      );
    }
    
    setVisibleProjects(filtered);
  }, [activeFilter, searchQuery]);

  const scrollToNext = () => {
    const container = document.getElementById('projects-container');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollToPrev = () => {
    const container = document.getElementById('projects-container');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-blue-200 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header with featured projects badge */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 lg:mb-6">Selected Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed px-4">
            Explore my recent work across various domains of web development, from full-stack applications to responsive frontend designs
          </p>
        </div>
        
        {/* Filters and search */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-4">
          <div className="w-full lg:w-auto">
            <div className="flex overflow-x-auto pb-2 scrollbar-hide gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="relative w-full lg:w-80">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 py-3 w-full rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            {searchQuery && (
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                onClick={() => setSearchQuery('')}
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Featured projects (horizontal scrollable) */}
        <div className="relative mb-12">
          <h3 className="text-xl font-semibold text-slate-700 mb-6 flex items-center">
            <span className="inline-block w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-3"></span>
            Featured Projects
          </h3>
          
          <div className="relative group">
            {/* Desktop navigation buttons */}
            <button 
              className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg text-slate-700 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              onClick={scrollToPrev}
            >
              <ChevronLeft size={20} />
            </button>
            
            <div 
              id="projects-container"
              className="flex overflow-x-auto gap-4 lg:gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
            >
              {projects
                .filter(project => project.featured)
                .map((project, index) => (
                  <div key={index} className="min-w-[280px] sm:min-w-[320px] lg:min-w-[380px] snap-start flex-shrink-0">
                    <ProjectCard {...project} />
                  </div>
                ))}
            </div>
            
            <button 
              className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg text-slate-700 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              onClick={scrollToNext}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Mobile scroll indicator */}
          <div className="lg:hidden flex justify-center mt-4">
            <div className="flex gap-2">
              {projects
                .filter(project => project.featured)
                .map((_, index) => (
                  <div key={index} className="w-2 h-2 bg-slate-300 rounded-full"></div>
                ))}
            </div>
          </div>
        </div>
        
        {/* All filtered projects */}
        <div>
          <h3 className="text-xl font-semibold text-slate-700 mb-6 flex items-center flex-wrap gap-2">
            <span className="inline-block w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-3"></span>
            <span className="flex-shrink-0">
              {activeFilter === 'All' ? 'All Projects' : `${activeFilter} Projects`}
            </span>
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
              {visibleProjects.length}
            </span>
          </h3>
          
          {visibleProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {visibleProjects.map((project, index) => (
                <div 
                  key={index} 
                  className={`transition-all duration-700 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl border border-slate-100 shadow-sm">
              <Filter size={48} className="mx-auto text-slate-300 mb-4" />
              <h4 className="text-xl font-semibold text-slate-700 mb-2">No projects found</h4>
              <p className="text-slate-500 mb-6 px-4">
                Try adjusting your filters or search query to find what you're looking for
              </p>
              <button 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                onClick={() => {
                  setActiveFilter('All');
                  setSearchQuery('');
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;