import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import BeamsBackground from '@/components/ui/beams-background';

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 bg-slate-950 relative overflow-hidden">
      {/* animated beams background (absolute, behind content) */}
      <BeamsBackground intensity="medium" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Email</div>
                    <div className="font-semibold">hello@rapidx.ai</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Phone</div>
                    <div className="font-semibold">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Location</div>
                    <div className="font-semibold">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors duration-300"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; 2024 RapidX. All rights reserved. Building the future with AI.</p>
        </div>
      </div>
    </section>
  );
}
