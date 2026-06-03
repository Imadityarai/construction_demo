import { motion } from "motion/react";
import { ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white border-b border-zinc-100">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 grayscale mix-blend-multiply">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
          alt="Modern Luxury Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-brand-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            Varanasi's Leading PropTech Builder
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-[5rem] font-light text-brand-900 leading-[0.9] tracking-tight mb-8"
          >
            Build Your <br/>Dream Home <br/><span className="font-black italic text-brand-accent pr-4">Transparently.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-500 mb-10 leading-relaxed max-w-md"
          >
            Architectural design, construction, and luxury interiors. All managed through a single digital platform for total peace of mind.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/calculator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-white hover:bg-brand-accent-hover text-[11px] font-bold uppercase tracking-wider rounded-sm transition-all shadow-lg shadow-brand-accent/20 group"
            >
              Get Free Cost Estimate
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-900 text-[11px] font-bold uppercase tracking-wider border border-zinc-200 hover:bg-zinc-50 rounded-sm transition-all"
            >
              Book Site Visit
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
