import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Cpu, Database, Network, Shield } from 'lucide-react';

// Lazy-load GeometricBackground to avoid adding to initial bundle
const GeometricBackground = lazy(() =>
  import('@/components/ui/geometric-background').then((m) => ({ default: m.GeometricBackground }))
)

export function Technology() {
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

  const technologies = [
    {
      category: 'AI & Machine Learning',
      icon: Cpu,
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'OpenAI GPT', 'LangChain'],
    },
    {
      category: 'Data & Analytics',
      icon: Database,
      tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Apache Spark', 'Snowflake', 'BigQuery'],
    },
    {
      category: 'Cloud & Infrastructure',
      icon: Network,
      tools: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      tools: ['SOC 2', 'GDPR', 'HIPAA', 'Zero Trust', 'End-to-End Encryption'],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business needs and define the AI strategy that aligns with your goals.',
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our experts build custom AI models and integrate them seamlessly into your systems.',
    },
    {
      step: '03',
      title: 'Testing & Optimization',
      description: 'Rigorous testing and continuous optimization ensure peak performance and accuracy.',
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support to ensure long-term success.',
    },
  ];

  return (
    <section id="technology" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 -z-20"></div>
      {/* Animated geometric background (behind content, above base gradient) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Render background only after section becomes visible to avoid work and visual popping */}
        {isVisible && (
          <Suspense fallback={null}>
            <GeometricBackground
              className="w-full h-full"
              shapes={[
                { id: 'bg-1', type: 'circle', delay: 0.2, width: 700, height: 180, rotate: 10, gradient: 'from-indigo-500/[0.14]', className: 'left-[-12%] md:left-[-6%] top-[12%] md:top-[18%]', speed: 12 },
                { id: 'bg-2', type: 'triangle', delay: 0.5, width: 420, height: 220, rotate: -12, gradient: 'from-rose-500/[0.12]', className: 'right-[-6%] md:right-[0%] top-[68%] md:top-[74%]', speed: 14 },
                { id: 'bg-3', type: 'square', delay: 0.35, width: 340, height: 160, rotate: -6, gradient: 'from-violet-500/[0.12]', className: 'left-[6%] md:left-[12%] bottom-[6%] md:bottom-[12%]', speed: 10 },
                { id: 'bg-4', type: 'icon', delay: 0.65, width: 220, height: 120, rotate: 18, gradient: 'from-amber-500/[0.12]', className: 'right-[18%] md:right-[22%] top-[8%] md:top-[14%]', speed: 9, icon: Cpu },
                { id: 'bg-5', type: 'circle', delay: 0.75, width: 160, height: 48, rotate: -22, gradient: 'from-cyan-500/[0.14]', className: 'left-[22%] md:left-[28%] top-[6%] md:top-[12%]', speed: 12 },
              ]}
            />
          </Suspense>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Technology <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to deliver robust, scalable AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-xl w-fit mb-4">
                <tech.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-4">{tech.category}</h3>
              <div className="space-y-2">
                {tech.tools.map((tool, i) => (
                  <div key={i} className="text-sm text-slate-400 flex items-center">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Process</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-colors duration-300">
                  <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>

                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
