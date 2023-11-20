import React, { useState, useEffect } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);


  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-2 top-5  text-lg p-1 rounded-md"
      >
        {theme === 'dark' ? '🌙' : '🌞'}
      </button>
      <div className='bg:white  dark: bg-black'>
        <div >
          <NavBar />
          <Home />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
        </div>
      </div>



      <SocialLinks />
    </>


  );
}

export default App;
