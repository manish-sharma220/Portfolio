// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="font-inter text-slate-700">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer className="bg-gray-50 py-6 text-center text-slate-600">
        <p>© 2025 Jane Doe. Designed with ♥</p>
      </footer>
    </div>
  );
};

export default App;