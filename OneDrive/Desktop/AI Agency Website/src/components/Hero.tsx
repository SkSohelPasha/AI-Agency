import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import LightningBackground, { ElasticHueSlider } from './ui/LightningBackground';

interface HeroProps {
  onHueChange: (hue: number) => void;
  hue: number;
}

export function Hero({ onHueChange, hue }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <LightningBackground hue={hue} />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-4 mb-8">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-slate-300">Leading AI Innovation Agency</span>
            </div>
            <div className="flex justify-center">
              <ElasticHueSlider
                value={hue}
                onChange={onHueChange}
                label="Adjust Lightning Effect"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              With AI Power
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto">
            We build cutting-edge AI solutions that revolutionize how businesses operate,
            automate processes, and unlock unprecedented growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Start Your AI Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="px-8 py-4 rounded-lg font-semibold text-lg border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300"
            >
              View Our Work
            </a>
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
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
