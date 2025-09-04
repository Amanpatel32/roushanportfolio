import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';

const Layout = () => {
  const [isDark, setIsDark] = useState(() => {
    // Initialize theme from localStorage or default to false
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        toggleTheme={toggleTheme}
        isDark={isDark}
      />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
