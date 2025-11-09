import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  scrolled: boolean;
}

export function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Technology', href: '#technology' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              RapidX
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-slate-300 hover:text-white transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-lg font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
