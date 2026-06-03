import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

const aiStyles = [
  { id: "modern", name: "Modern Minimalist", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
  { id: "traditional", name: "Indian Traditional", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
  { id: "villa", name: "Luxury Villa", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
  { id: "duplex", name: "Contemporary Duplex", img: "https://images.unsplash.com/photo-1600566753086-00f18efc2297?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }
];

export function AIDemo() {
  const [activeStyle, setActiveStyle] = useState(aiStyles[0].id);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentImg, setCurrentImg] = useState(aiStyles[0].img);

  const handleGenerate = (styleId: string) => {
    setActiveStyle(styleId);
    setIsGenerating(true);
    setTimeout(() => {
      const selected = aiStyles.find(s => s.id === styleId);
      if (selected) setCurrentImg(selected.img);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <section className="py-24 bg-zinc-50 border-b border-zinc-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3">
            <div className="inline-block px-3 py-1 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              AI Design Inspiration
            </div>
            <h2 className="text-4xl font-light text-brand-900 leading-tight tracking-tight mb-6">
              Visualize Before <br/><span className="font-black italic text-brand-accent">You Build.</span>
            </h2>
            <p className="text-zinc-500 mb-8 leading-relaxed text-sm">
              Tell us your preferences and our AI will generate concept designs for your future home instantly.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {aiStyles.map(style => (
                <button
                  key={style.id}
                  onClick={() => handleGenerate(style.id)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors",
                    activeStyle === style.id
                      ? "bg-brand-900 text-white"
                      : "bg-white border border-zinc-200 text-zinc-500 hover:text-brand-900 hover:border-zinc-300"
                  )}
                >
                  {style.name}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/3 h-full">
             <div className="grid grid-cols-3 gap-3 h-[400px]">
                <div className="col-span-2 relative bg-zinc-200 rounded-xl overflow-hidden border border-zinc-200">
                    <AnimatePresence mode="wait">
                      {isGenerating ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50"
                        >
                          <div className="w-8 h-8 border-2 border-zinc-200 border-t-brand-accent rounded-full animate-spin mb-4" />
                          <p className="text-zinc-400 font-bold uppercase text-[10px] tracking-widest animate-pulse">Generating...</p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={currentImg}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8 }}
                          className="w-full h-full relative"
                        >
                           <img src={currentImg} className="w-full h-full object-cover" alt="AI Generated Concept" />
                           <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                              <p className="text-white text-[10px] font-bold tracking-widest uppercase">
                                 {aiStyles.find(s => s.id === activeStyle)?.name}
                              </p>
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                </div>
                
                <div className="flex flex-col gap-3">
                   <div className="flex-1 bg-zinc-800 rounded-xl overflow-hidden relative">
                      <img src={aiStyles[1].img} className="w-full h-full object-cover opacity-50 grayscale" />
                   </div>
                   <div className="flex-1 bg-white border-2 border-dashed border-zinc-200 rounded-xl flex items-center justify-center cursor-pointer hover:bg-zinc-50 hover:border-zinc-300 transition-colors">
                      <div className="text-center">
                        <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400">View More<br/>Design AI</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
