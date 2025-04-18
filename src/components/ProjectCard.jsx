// // ProjectCard.jsx
// import React from 'react';

// const ProjectCard = ({ title, image, description, tools, role }) => {
//   return (
//     <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//       <img src={image} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-6">
//         <h3 className="text-xl font-medium text-slate-700 mb-2">{title}</h3>
//         <p className="text-slate-600 mb-4">{description}</p>
//         <div className="mb-3">
//           <span className="text-sm font-medium text-slate-700">Tools: </span>
//           <span className="text-sm text-slate-600">{tools}</span>
//         </div>
//         <div className="mb-4">
//           <span className="text-sm font-medium text-slate-700">My Role: </span>
//           <span className="text-sm text-slate-600">{role}</span>
//         </div>
//         <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
//           View Case Study →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import React, { useState } from 'react';
import { Github, ExternalLink, Code, Users, Calendar } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  image, 
  description, 
  tools, 
  role, 
  demoLink, 
  codeLink, 
  date,
  category
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate a random pastel color for the category badge
  const getCategoryColor = (category) => {
    const colorMap = {
      'Frontend': 'bg-blue-100 text-blue-600',
      'Backend': 'bg-green-100 text-green-600',
      'Fullstack': 'bg-purple-100 text-purple-600',
      'Mobile': 'bg-orange-100 text-orange-600',
      'UI/UX': 'bg-pink-100 text-pink-600',
      'AI/ML': 'bg-indigo-100 text-indigo-600'
    };
    
    return colorMap[category] || 'bg-slate-100 text-slate-600';
  };
  
  // Create array of tools from comma-separated string
  const toolsArray = tools.split(',').map(tool => tool.trim());
  
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 relative group"
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 20px 30px -10px rgba(0, 0, 0, 0.1)' : '0 10px 15px -5px rgba(0, 0, 0, 0.05)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category badge */}
      {category && (
        <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
          {category}
        </div>
      )}
      
      {/* Image container with overlay */}
      <div className="relative overflow-hidden h-56">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4"
        >
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      
      {/* Content area */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-slate-600 mb-5 line-clamp-3">{description}</p>
        
        {/* Tools tags */}
        <div className="mb-5">
          <div className="flex flex-wrap gap-2">
            {toolsArray.map((tool, index) => (
              <span 
                key={index} 
                className="inline-block bg-slate-100 px-2 py-1 rounded text-xs font-medium text-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        {/* Info grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="flex items-center gap-2">
            <Users size={16} className="text-slate-400" />
            <span className="text-sm text-slate-600">{role}</span>
          </div>
          
          {date && (
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-slate-400" />
              <span className="text-sm text-slate-600">{date}</span>
            </div>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button className="relative overflow-hidden group/btn inline-flex items-center gap-1 text-blue-600 font-medium text-sm">
            <span className="relative z-10">View Case Study</span>
            <ExternalLink size={14} className="relative z-10 transition-transform group-hover/btn:translate-x-1" />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/btn:w-full transition-all duration-300"></span>
          </button>
          
          <div className="flex gap-2">
            {codeLink && (
              <a 
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                aria-label="View code"
              >
                <Github size={16} className="text-slate-600" />
              </a>
            )}
            
            {demoLink && (
              <a 
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink size={16} className="text-slate-600" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;