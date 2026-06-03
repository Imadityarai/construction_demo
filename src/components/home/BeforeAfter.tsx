import { useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleDrag(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) handleDrag(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-zinc-100 text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Transformation Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-brand-900 leading-[0.9] tracking-tight mb-6">
            Real <span className="font-black italic text-brand-accent">Transformations.</span>
          </h2>
          <p className="text-lg text-zinc-500">
            Slide to see the incredible difference our renovation and interior teams bring to outdated spaces.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            ref={containerRef}
            className="relative h-[400px] md:h-[600px] w-full rounded-none overflow-hidden cursor-ew-resize select-none border border-zinc-200 group"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleDrag(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleDrag(e.touches[0].clientX);
            }}
          >
            {/* After Image (Background) */}
            <img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="After Renovation"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-brand-accent text-white font-bold px-3 py-1 text-[10px] uppercase tracking-widest z-10 shadow-sm">
              AFTER
            </div>

            {/* Before Image (Foreground, clipped) */}
            <div 
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Before Renovation"
                className="absolute inset-0 w-[100vw] max-w-[100vw] h-[400px] md:h-[600px] object-cover grayscale opacity-80"
                style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}
              />
              <div className="absolute top-4 left-4 bg-zinc-900 text-white font-bold px-3 py-1 text-[10px] uppercase tracking-widest shadow-sm z-10">
                BEFORE
              </div>
            </div>

            {/* Drag Handle */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize group-hover:bg-brand-accent transition-colors left-1/2"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-accent rounded-sm shadow-md flex items-center justify-center text-white pointer-events-none">
                <MoveHorizontal size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
