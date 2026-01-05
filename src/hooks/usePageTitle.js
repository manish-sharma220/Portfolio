import { useEffect } from 'react';

export const usePageTitle = (title) => {
  useEffect(() => {
    const baseTitle = "Manish Kumar Sharma - Full Stack Developer";
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;
    
    return () => {
      document.title = baseTitle;
    };
  }, [title]);
};

export const updatePageTitle = (section) => {
  const baseTitle = "Manish Kumar Sharma - Full Stack Developer";
  const sectionTitles = {
    home: baseTitle,
    about: `About Me | ${baseTitle}`,
    experience: `Experience | ${baseTitle}`,
    projects: `Projects | ${baseTitle}`,
    certificates: `Certificates | ${baseTitle}`,
    'social-links': `Connect | ${baseTitle}`,
    resume: `Resume | ${baseTitle}`,
    contact: `Contact | ${baseTitle}`
  };
  
  document.title = sectionTitles[section] || baseTitle;
};