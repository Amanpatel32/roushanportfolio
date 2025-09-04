import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  toggleTheme: () => void;
  isDark: boolean;
  onResumeDownload?: () => void;
}

export default function Navigation({ toggleTheme, isDark, onResumeDownload }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '/resume' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // Navigate to route for multi-page links
      window.location.href = href;
      setIsMobileMenuOpen(false);
      return;
    }
    if (href.startsWith('#')) {
      if (window.location.pathname === '/') {
        // On home page, scroll to section and update URL hash
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', href);
          setIsMobileMenuOpen(false);
        }
      } else {
        // Not on home page, navigate to home with hash
        window.location.href = '/' + href;
        setIsMobileMenuOpen(false);
      }
      return;
    }
  };

  const handleResumeClick = () => {
    if (onResumeDownload) {
      onResumeDownload();
    } else {
      // Fallback download method
      const link = document.createElement('a');
      link.href = '/Roushan_Kumar_Resume.pdf';
      link.download = 'Roushan_Kumar_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/95 border-b border-slate-700/30 shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold bg-gradient-to-r from-neural-400 to-data-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Roushan Kumar
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-neural-400 px-3 py-2 text-sm font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neural-400 to-data-400 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-neural-400/10"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleResumeClick}
              className="border-neural-400/30 hover:bg-neural-400/10"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 border-t border-slate-700/30">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-neural-400 hover:bg-neural-400/10 w-full text-left transition-colors"
            >
              {item.name}
            </button>
          ))}
          <div className="flex items-center justify-between px-3 py-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-neural-400/10"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleResumeClick}
              className="border-neural-400/30 hover:bg-neural-400/10"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
