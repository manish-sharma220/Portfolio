// App.jsx
import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { usePageTitle, updatePageTitle } from './hooks/usePageTitle';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import SocialLinks from './components/SocialLinks';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App = () => {
  // Set the default page title
  usePageTitle();

  useEffect(() => {
    // Function to update title based on current section
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'certificates', 'social-links', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            updatePageTitle(sectionId);
            break;
          }
        }
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="font-inter text-slate-700 dark:text-slate-300 bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Home />
          <About />
          <Projects />
          <Certificates />
          <SocialLinks />
          <Resume />
          <Contact />
        </main>
        <footer className="bg-gray-50 dark:bg-gray-800 py-6 text-center text-slate-600 dark:text-slate-400 transition-colors duration-300">
          <p>© 2025 Manish Kumar Sharma. Designed with ♥</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;