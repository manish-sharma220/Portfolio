// App.jsx
import React from 'react';
<<<<<<< HEAD
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import SocialLinks from './components/SocialLinks';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App = () => {
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
=======


const App = () => {
  return (
     <h1>hii</h1>
>>>>>>> 7d04d835c3f6e0c0fc6be2af422f2c5aa99162e0
  );
};

export default App;