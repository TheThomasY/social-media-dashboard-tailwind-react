import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Followers from './components/Followers';
import Overview from './components/Overview';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={
        'min-h-screen font-Inter transition-colors duration-500' +
        (darkMode ? ' dark bg-dk-bg' : '')
      }
    >
      <div className='w-4/5 max-w-[1120px] mx-auto pb-10 xl:pb-14'>
        <Header onToggleDarkMode={toggleDarkMode} colourMode={darkMode} />
        <Followers />
        <Overview />
      </div>
    </div>
  );
}

export default App;
