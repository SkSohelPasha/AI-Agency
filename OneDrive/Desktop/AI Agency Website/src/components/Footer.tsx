import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';
import AnoAI from '@/components/ui/animated-shader-background';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Pricing', href: '#' },
        { label: 'Case Studies', href: '#work' },
        { label: 'Documentation', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Guide', href: '#' },
        { label: 'Tutorials', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Community', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 border-t border-slate-800">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                RapidX
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Transforming businesses through cutting-edge AI solutions. We build intelligent systems that drive growth and innovation.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>hello@rapidx.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-500 text-sm mb-6 md:mb-0">
              &copy; {currentYear} RapidX. All rights reserved. Building the future with AI.
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        
      </div>

      <div className="absolute inset-0 z-0">
        <AnoAI />
      </div>
    </footer>
  );
}
