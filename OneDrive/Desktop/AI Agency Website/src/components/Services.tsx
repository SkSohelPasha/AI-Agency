import { Brain, Bot, LineChart, Sparkles, Code, Workflow } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { SplineRobot } from '@/components/ui/robot3d';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
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

  const services = [
    {
      icon: Brain,
      title: 'Custom AI Models',
      description: 'Tailored machine learning models designed specifically for your business needs and data.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Bot,
      title: 'AI Chatbots & Assistants',
      description: 'Intelligent conversational AI that enhances customer experience and automates support.',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: LineChart,
      title: 'Predictive Analytics',
      description: 'Advanced data analysis and forecasting to drive informed business decisions.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Sparkles,
      title: 'Natural Language Processing',
      description: 'Extract insights from text, automate document processing, and enable semantic search.',
      gradient: 'from-pink-500 to-red-500',
    },
    {
      icon: Code,
      title: 'AI Integration Services',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and optimize workflows with intelligent automation.',
      gradient: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our AI <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive AI solutions to accelerate your digital transformation and stay ahead of the competition
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 gap-8 items-start">
          {/* Left: services list (spans 2 cols on large screens) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 hover:bg-slate-800/80 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Spline robot (visible on lg and up) */}
          <div
            className={`hidden lg:flex lg:flex-col lg:col-span-1 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Make robot cover the full right portion: larger responsive heights */}
            <div className="w-full h-[640px] lg:h-[6000px] xl:h-[700px] xl:w-[500px] rounded-2xl overflow-hidden border border-slate-700/40 bg-transparent">
              <SplineRobot className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '500+', label: 'AI Models Deployed' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '250+', label: 'Projects Completed' },
            { value: '50+', label: 'Enterprise Clients' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-slate-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Services };