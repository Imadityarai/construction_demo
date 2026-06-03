import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Paintbrush, LayoutDashboard, Grid, ArrowRight, Check } from "lucide-react";
import { cn } from "../../lib/utils";

const servicesList = [
  { id: "painting", name: "Painting", icon: Paintbrush, priceRange: "â¹ 12 - â¹ 30 / sqft" },
  { id: "false_ceiling", name: "False Ceiling", icon: LayoutDashboard, priceRange: "â¹ 65 - â¹ 120 / sqft" },
  { id: "flooring", name: "Wooden Flooring", icon: Grid, priceRange: "â¹ 70 - â¹ 150 / sqft" },
  { id: "epoxy", name: "Epoxy Flooring", icon: Grid, priceRange: "â¹ 80 - â¹ 200 / sqft" },
  { id: "pvc", name: "PVC Panels", icon: LayoutDashboard, priceRange: "â¹ 40 - â¹ 80 / sqft" },
];

export function ServiceQuote() {
  const [activeService, setActiveService] = useState(servicesList[0].id);
  const [area, setArea] = useState<number | "">("");
  const [isCalculated, setIsCalculated] = useState(false);

  const curService = servicesList.find(s => s.id === activeService);

  const calculateServiceCost = (e: React.FormEvent) => {
    e.preventDefault();
    if (area) setIsCalculated(true);
  };

  return (
    <section className="py-24 bg-white border-b border-zinc-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-light leading-tight tracking-tight text-brand-900 mb-6">
              Instant Service <span className="font-black italic text-brand-accent">Quotes.</span>
            </h2>
            <p className="text-lg text-zinc-500 mb-10">
              Not looking for a complete build? Estimate the cost for individual services like painting, ceiling, or flooring instantly.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {servicesList.map(s => (
                <button
                  key={s.id}
                  onClick={() => { setActiveService(s.id); setIsCalculated(false); }}
                  className={cn(
                    "px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center gap-2",
                    activeService === s.id
                      ? "bg-brand-900 text-white"
                      : "bg-zinc-50 text-zinc-500 border border-zinc-200 hover:text-brand-900 hover:border-zinc-300"
                  )}
                >
                  <s.icon size={14} />
                  {s.name}
                </button>
              ))}
            </div>
            
            <form onSubmit={calculateServiceCost} className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 mb-6">
              <div className="flex flex-col sm:flex-row gap-4 items-end">
                <div className="w-full">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Area (Sq.Ft)</label>
                  <input
                    type="number"
                    min="50"
                    placeholder="e.g. 500"
                    value={area}
                    onChange={(e) => { setArea(Number(e.target.value)); setIsCalculated(false); }}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:border-brand-accent font-bold text-brand-900"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-brand-accent/20"
                >
                  Estimate Price
                </button>
              </div>
            </form>

            <AnimatePresence mode="wait">
              {isCalculated && curService && area && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
                >
                  <h4 className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1">Estimated Range for {curService.name}</h4>
                  <div className="flex items-end gap-3">
                    <div className="text-3xl font-black text-white mt-1">
                      {curService.priceRange.replace('sqft', `sqft Ã\x97 ${area}`)}
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500 mt-3">*Final price depends on material brand, complexity, and site condition.</p>
                  
                  <button className="mt-6 flex items-center gap-2 text-[11px] text-brand-accent tracking-wider uppercase font-bold hover:text-white transition-colors">
                    Request Site Inspection <ArrowRight size={14} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          <div className="w-full md:w-1/2 relative">
             <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-100 shadow-sm relative">
                <img 
                  src="https://images.unsplash.com/photo-1581850518616-bcb8077a2336?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Interior services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                   <div className="bg-white text-zinc-900 text-[10px] font-black px-3 py-1 rounded-sm w-max mb-3 uppercase tracking-widest">Premium Finish</div>
                   <h3 className="text-2xl font-light tracking-tight mb-2">Transform Your Space.</h3>
                   <p className="text-zinc-300 text-sm">From false ceilings to wooden flooring, we bring perfection to every millimeter.</p>
                </div>
             </div>
             
             {/* Floating badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl border border-zinc-200 shadow-lg flex items-center gap-4">
                <div className="bg-zinc-100 p-3 rounded-full text-brand-900">
                   <Check size={20} />
                </div>
                <div>
                   <p className="text-xs font-black uppercase tracking-widest text-brand-900">100% Genuine</p>
                   <p className="text-xs text-zinc-500">Branded Materials</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
