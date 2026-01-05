

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
  const [imageError, setImageError] = useState(false);
  
  // Generate a random pastel color for the category badge
  const getCategoryColor = (category) => {
    const colorMap = {
      'Frontend': 'bg-blue-100 text-blue-700 border-blue-200',
      'Backend': 'bg-green-100 text-green-700 border-green-200',
      'Fullstack': 'bg-purple-100 text-purple-700 border-purple-200',
      'Mobile': 'bg-orange-100 text-orange-700 border-orange-200',
      'UI/UX': 'bg-pink-100 text-pink-700 border-pink-200',
      'AI/ML': 'bg-indigo-100 text-indigo-700 border-indigo-200'
    };
    
    return colorMap[category] || 'bg-slate-100 text-slate-700 border-slate-200';
  };
  
  // Create array of tools from comma-separated string
  const toolsArray = tools.split(',').map(tool => tool.trim());
  
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative group h-full flex flex-col border border-slate-100"
      style={{
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category badge */}
      {category && (
        <div className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(category)} backdrop-blur-sm`}>
          {category}
        </div>
      )}
      
      {/* Image container with overlay */}
      <div className="relative overflow-hidden h-48 sm:h-52 lg:h-56 flex-shrink-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4"
        >
          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{title}</h3>
        </div>
        {imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
            <div className="text-center">
              <Code size={32} className="mx-auto text-slate-400 mb-2" />
              <p className="text-slate-500 text-sm font-medium">{title}</p>
            </div>
          </div>
        ) : (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            onError={() => setImageError(true)}
          />
        )}
      </div>
      
      {/* Content area */}
      <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        
        <p className="text-slate-600 mb-4 text-sm sm:text-base leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>
        
        {/* Tools tags */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {toolsArray.slice(0, 4).map((tool, index) => (
              <span 
                key={index} 
                className="inline-block bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md text-xs font-medium text-slate-700 transition-colors"
              >
                {tool}
              </span>
            ))}
            {toolsArray.length > 4 && (
              <span className="inline-block bg-slate-100 px-2 py-1 rounded-md text-xs font-medium text-slate-500">
                +{toolsArray.length - 4} more
              </span>
            )}
          </div>
        </div>
        
        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Users size={14} className="text-slate-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-slate-600 truncate">{role}</span>
          </div>
          
          {date && (
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-slate-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-slate-600">{date}</span>
            </div>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <button className="relative overflow-hidden group/btn inline-flex items-center gap-1 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
            <span className="relative z-10">View Details</span>
            <ExternalLink size={12} className="relative z-10 transition-transform group-hover/btn:translate-x-0.5" />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/btn:w-full transition-all duration-300"></span>
          </button>
          
          <div className="flex gap-2">
            {codeLink && (
              <a 
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 hover:scale-105 transition-all duration-200"
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
                className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 hover:scale-105 transition-all duration-200"
                aria-label="View live demo"
              >
                <ExternalLink size={16} className="text-blue-600" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;