
import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-50"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="text-xl">
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

export default DarkModeToggle;
