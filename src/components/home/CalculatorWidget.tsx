import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calculator, ArrowRight, Check } from "lucide-react";
import { cn } from "../../lib/utils";

const qualities = [
  { id: "basic", name: "Basic", pricePerSqft: 1500, desc: "Standard materials, simple finishes" },
  { id: "standard", name: "Standard", pricePerSqft: 1800, desc: "Quality materials, modern finishes" },
  { id: "premium", name: "Premium", pricePerSqft: 2200, desc: "Branded fittings, luxury tiles" },
  { id: "luxury", name: "Luxury", pricePerSqft: 3000, desc: "Imported materials, smart home ready" }
];

export function CostCalculator() {
  const [plotSize, setPlotSize] = useState<number | "">("");
  const [floors, setFloors] = useState<number>(1);
  const [quality, setQuality] = useState<string>("standard");
  const [showResult, setShowResult] = useState(false);

  const calculateCost = () => {
    if (!plotSize) return 0;
    const selectedQuality = qualities.find(q => q.id === quality);
    if (!selectedQuality) return 0;
    
    // Simple mock logic: assuming 80% coverage per floor
    const builtUpArea = (Number(plotSize) * 0.8) * floors;
    return builtUpArea * selectedQuality.pricePerSqft;
  };

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `â¹ ${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `â¹ ${(val / 100000).toFixed(2)} Lacs`;
    return `â¹ ${val.toLocaleString('en-IN')}`;
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (plotSize) {
      setShowResult(true);
    }
  };

  return (
    <section className="py-24 bg-zinc-50 border-b border-zinc-100 relative overflow-hidden">
      {/* Decorative BG element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-brand-900 leading-[0.9] tracking-tight mb-6">
            Construction Cost <span className="font-black italic text-brand-accent">Calculator.</span>
          </h2>
          <p className="text-lg text-zinc-500">
            Get an instant, transparent estimate for your dream home in Varanasi. 
            No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">Smart Cost Estimator</h3>
            </div>
            <form onSubmit={handleCalculate} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                    Plot Size (Sq.Ft)
                  </label>
                  <input
                    type="number"
                    min="500"
                    placeholder="e.g. 1000"
                    value={plotSize}
                    onChange={(e) => { setPlotSize(Number(e.target.value)); setShowResult(false); }}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 focus:outline-none focus:border-brand-accent transition-all font-bold text-zinc-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                    Number of Floors
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map(num => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => { setFloors(num); setShowResult(false); }}
                        className={cn(
                          "flex-1 px-4 py-3 rounded-lg border transition-all text-sm font-bold uppercase",
                          floors === num 
                            ? "bg-brand-900 border-brand-900 text-white" 
                            : "bg-zinc-50 border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-900"
                        )}
                      >
                        G+{num-1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">
                  Construction Quality
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  {qualities.map(q => (
                    <div
                      key={q.id}
                      onClick={() => { setQuality(q.id); setShowResult(false); }}
                      className={cn(
                        "cursor-pointer p-5 rounded-xl border transition-all relative",
                        quality === q.id
                          ? "border-brand-accent bg-brand-accent/5"
                          : "border-zinc-200 bg-zinc-50 hover:border-zinc-300"
                      )}
                    >
                      {quality === q.id && (
                        <div className="absolute top-4 right-4 text-brand-accent">
                          <Check size={20} />
                        </div>
                      )}
                      <h4 className="font-bold text-lg text-brand-900">{q.name}</h4>
                      <p className="text-xs text-zinc-500 mt-1 mb-3 leading-relaxed">{q.desc}</p>
                      <div className="text-brand-900 text-sm font-bold table-nums">
                        â¹ {q.pricePerSqft}/sqft
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {!showResult && (
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-accent hover:bg-brand-accent-hover text-white text-[11px] uppercase tracking-wider font-bold rounded-lg transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-brand-accent/20"
                >
                  <Calculator size={16} />
                  Calculate Cost
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </form>

            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-8 pt-8 border-t border-zinc-100"
                >
                  <div className="bg-brand-900 rounded-xl p-6 text-white flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-[100%] animate-[shimmer_2s_infinite]" />
                    
                    <div className="relative z-10 text-center md:text-left mb-4 md:mb-0">
                       <span className="text-[10px] opacity-60 uppercase font-bold tracking-widest text-zinc-400">Estimated Cost</span>
                       <div className="text-3xl md:text-4xl font-black mt-1 text-white">
                         {formatCurrency(calculateCost())}
                       </div>
                       <p className="text-zinc-500 text-[10px] uppercase font-bold mt-2">
                         Approximate for {plotSize} sqft, G+{floors-1}, {quality}
                       </p>
                    </div>
                    <button className="px-5 py-3 bg-brand-accent text-white text-[11px] font-bold uppercase rounded-md tracking-wider shadow-lg hover:bg-brand-accent-hover transition-colors whitespace-nowrap z-10 relative">
                       Get Details
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Lead Form - Appears prominently beside calculator */}
          <div className="lg:col-span-2 relative">
            <div className="sticky top-28 bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
              <div className="mb-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">Get Detailed Quotation</h3>
                <p className="text-zinc-500 text-sm">We will prepare a room-by-room breakdown for your specific requirements.</p>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 focus:outline-none focus:border-brand-accent transition-all text-sm font-medium" required />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 focus:outline-none focus:border-brand-accent transition-all text-sm font-medium" required />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 focus:outline-none focus:border-brand-accent transition-all text-sm font-medium" />
                </div>
                <button type="submit" className="w-full py-4 bg-brand-900 hover:bg-brand-800 text-white text-[11px] uppercase tracking-wider font-bold rounded-lg transition-colors">
                  Request Quote
                </button>
                <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 text-center mt-4">No spam. Only estimates.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
