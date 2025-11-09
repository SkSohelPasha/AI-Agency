import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function CaseStudies() {
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

  const caseStudies = [
    {
      title: 'E-Commerce Revenue Optimization',
      client: 'Global Retail Chain',
      description: 'Implemented AI-powered recommendation engine that increased conversion rates and average order value.',
      results: [
        { label: 'Revenue Increase', value: '45%' },
        { label: 'Customer Retention', value: '68%' },
      ],
      tags: ['Machine Learning', 'Recommendation System', 'E-Commerce'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Intelligent Customer Support',
      client: 'FinTech Startup',
      description: 'Deployed advanced chatbot system that handles 80% of customer inquiries with natural conversations.',
      results: [
        { label: 'Response Time', value: '-92%' },
        { label: 'Cost Reduction', value: '60%' },
      ],
      tags: ['NLP', 'Chatbot', 'Automation'],
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Predictive Maintenance System',
      client: 'Manufacturing Enterprise',
      description: 'Built ML models to predict equipment failures, reducing downtime and maintenance costs significantly.',
      results: [
        { label: 'Downtime Reduction', value: '75%' },
        { label: 'Cost Savings', value: '$2.4M' },
      ],
      tags: ['Predictive Analytics', 'IoT', 'Manufacturing'],
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="work" ref={sectionRef} className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Success <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real results from real clients. See how we've transformed businesses with AI innovation.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="text-sm text-slate-500 mb-2">{study.client}</div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800 text-cyan-400 rounded-full text-sm border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center space-x-2 text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col justify-center space-y-6">
                  {study.results.map((result, i) => (
                    <div
                      key={i}
                      className={`bg-gradient-to-r ${study.gradient} p-6 rounded-xl`}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-white" />
                        <div className="text-sm text-white/80">{result.label}</div>
                      </div>
                      <div className="text-4xl font-bold text-white">{result.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 border border-slate-700"
          >
            <span>See All Projects</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
