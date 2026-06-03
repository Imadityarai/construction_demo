import { motion } from "motion/react";
import { CheckCircle2, Users, HardHat, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

const metrics = [
  { id: 1, label: "Projects Completed", value: 100, suffix: "+", icon: HardHat },
  { id: 2, label: "Happy Clients", value: 50, suffix: "+", icon: Users },
  { id: 3, label: "Years Experience", value: 10, suffix: "+", icon: ShieldCheck },
  { id: 4, label: "Turnkey Solutions", value: 100, suffix: "%", icon: CheckCircle2 },
];

function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function Trust() {
  return (
    <section className="py-16 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          
          <div className="flex gap-12 flex-wrap justify-center w-full md:w-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="text-4xl lg:text-[2.5rem] font-black text-brand-900 leading-none">
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mt-2">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-xl flex items-center gap-6 w-full md:w-auto min-w-[300px]">
             <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Live From WhatsApp</p>
                <p className="font-medium text-brand-900">Chat with a construction expert</p>
             </div>
             <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0 hover:scale-105 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
             </a>
          </div>

        </div>
      </div>
    </section>
  );
}
