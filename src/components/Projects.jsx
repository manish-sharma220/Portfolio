// // Projects.jsx
// import React from 'react';
// import ProjectCard from './ProjectCard';

// const Projects = () => {
//   const projects = [
//     {
//         title: "Campus Notes Pro – Student Resource Platform",
//         image: "/api/placeholder/600/400", // Replace with actual image path if available
//         description: "Developed a full-stack platform for students to upload, manage, and access academic notes easily.",
//         tools: "React, Node.js, Express, MongoDB, Redux",
//         role: "Full-Stack Developer"
//       },
//       {
//         title: "Event Management Platform",
//         image: "/api/placeholder/600/400", // Replace with actual image path if available
//         description: "Built a platform to streamline event creation, registrations, and real-time updates for users and organizers.",
//         tools: "React, Node.js, Express, MongoDB, Tailwind CSS",
//         role: "Full-Stack Developer"
//       },
//       {
//         title: "Weather Forecast App",
//         image: "/api/placeholder/600/400", // Replace with actual image if available
//         description: "Developed a responsive app that provides real-time weather updates, forecasts, and alerts based on user location.",
//         tools: "HTML, CSS, JavaScript, OpenWeatherMap API",
//         role: "Frontend Developer"
//       }
//   ];

//   return (
//     <section id="projects" className="py-20 px-4 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-medium mb-12 text-center text-slate-700">Selected Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



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
      title: "Campus Notes Pro – Student Resource Platform",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Developed a full-stack platform for students to upload, manage, and access academic notes easily. Implemented user authentication, file management, and search functionality.",
      tools: "React, Node.js, Express, MongoDB, Redux",
      role: "Full-Stack Developer",
      category: "Fullstack",
      demoLink: "https://campus-notes-pro.example.com",
      codeLink: "https://github.com/username/campus-notes-pro",
      date: "2024",
      featured: true
    },
    {
      title: "Event Management Platform",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Built a platform to streamline event creation, registrations, and real-time updates for users and organizers. Integrated payment gateway and email notification system.",
      tools: "React, Node.js, Express, MongoDB, Tailwind CSS",
      role: "Full-Stack Developer",
      category: "Fullstack",
      demoLink: "https://event-platform.example.com",
      codeLink: "https://github.com/username/event-platform",
      date: "2023",
      featured: true
    },
    {
      title: "Weather Forecast App",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Developed a responsive app that provides real-time weather updates, forecasts, and alerts based on user location. Implemented geolocation services and interactive weather maps.",
      tools: "HTML, CSS, JavaScript, OpenWeatherMap API",
      role: "Frontend Developer",
      category: "Frontend",
      demoLink: "https://weather-app.example.com",
      codeLink: "https://github.com/username/weather-app",
      date: "2023"
    },
    {
      title: "Personal Finance Tracker",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Created an application to help users track expenses, set budgets, and visualize spending patterns. Implemented data visualization and export functionality.",
      tools: "React, Firebase, Chart.js, Material UI",
      role: "Frontend Developer",
      category: "Frontend",
      demoLink: "https://finance-tracker.example.com",
      codeLink: "https://github.com/username/finance-tracker",
      date: "2022"
    },
    {
      title: "Task Management API",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Designed and implemented a RESTful API for task management with features like user authentication, task CRUD operations, and team collaboration.",
      tools: "Node.js, Express, MongoDB, JWT, Jest",
      role: "Backend Developer",
      category: "Backend",
      codeLink: "https://github.com/username/task-api",
      date: "2022"
    },
    {
      title: "E-commerce Mobile App",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Developed a cross-platform mobile application for an e-commerce store with features like product browsing, cart management, and secure checkout.",
      tools: "React Native, Redux, Firebase, Stripe",
      role: "Mobile Developer",
      category: "Mobile",
      demoLink: "https://ecommerce-app.example.com",
      date: "2023"
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
      className="py-24 px-6 bg-slate-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header with featured projects badge */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Selected Projects</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Explore some of my recent work across various domains of web and mobile development
          </p>
        </div>
        
        {/* Filters and search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full whitespace-nowrap mr-2 transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            {searchQuery && (
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                onClick={() => setSearchQuery('')}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Featured projects (horizontal scrollable) */}
        <div className="relative mb-12">
          <h3 className="text-xl font-medium text-slate-700 mb-6 flex items-center">
            <span className="inline-block w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
            Featured Projects
          </h3>
          
          <div className="relative group">
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 bg-white rounded-full p-2 shadow-lg text-slate-700 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={scrollToPrev}
            >
              <ChevronLeft size={20} />
            </button>
            
            <div 
              id="projects-container"
              className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
            >
              {projects
                .filter(project => project.featured)
                .map((project, index) => (
                  <div key={index} className="min-w-[350px] snap-start">
                    <ProjectCard {...project} />
                  </div>
                ))}
            </div>
            
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 bg-white rounded-full p-2 shadow-lg text-slate-700 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={scrollToNext}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        {/* All filtered projects */}
        <div>
          <h3 className="text-xl font-medium text-slate-700 mb-6 flex items-center">
            <span className="inline-block w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
            {activeFilter === 'All' ? 'All Projects' : `${activeFilter} Projects`}
            <span className="ml-3 bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-sm">
              {visibleProjects.length}
            </span>
          </h3>
          
          {visibleProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProjects.map((project, index) => (
                <div 
                  key={index} 
                  className={`transition-all duration-700 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg border border-slate-100">
              <Filter size={48} className="mx-auto text-slate-300 mb-4" />
              <h4 className="text-xl font-medium text-slate-700 mb-2">No projects found</h4>
              <p className="text-slate-500">
                Try adjusting your filters or search query
              </p>
              <button 
                className="mt-4 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
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