import { motion } from "motion/react";
import { Clock, CheckCircle2, CircleDashed, Hammer, PaintBucket, Home as HomeIcon } from "lucide-react";
import { cn } from "../../lib/utils";

const milestones = [
  { id: 1, name: "Architectural & 3D Design", status: "completed", date: "12 May", icon: HomeIcon },
  { id: 2, name: "Foundation & Structure", status: "completed", date: "28 Jun", icon: Hammer },
  { id: 3, name: "Plumbing & Electrical", status: "ongoing", date: "In Progress", icon: CircleDashed },
  { id: 4, name: "Interior & Finishing", status: "pending", date: " upcoming", icon: PaintBucket },
];

export function DashboardDemo() {
  return (
    <section className="py-24 bg-white border-t border-zinc-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-block px-3 py-1 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Client Transparency
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-brand-900 mb-6 leading-tight tracking-tight">
              Track Your Home's Progress <span className="font-black italic text-brand-accent">In Real-Time</span>
            </h2>
            <p className="text-lg text-zinc-500 mb-8 leading-relaxed max-w-lg">
              Gone are the days of chasing contractors for updates. Our proprietary client dashboard gives you live updates, daily site photos, and financial tracking right on your phone.
            </p>
            <ul className="space-y-4 mb-8 text-zinc-600 font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-brand-accent" />
                Live CCTV feed & daily photo logs
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-brand-accent" />
                Milestone-based transparent billing
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-brand-accent" />
                Direct chat with your Project Manager
              </li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200"
            >
               <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-6">Client Transparency Hub</h3>
               
               <div className="flex items-start gap-4 mb-6">
                 <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-zinc-400 shrink-0">
                   S
                 </div>
                 <div className="flex-1">
                   <p className="font-bold text-brand-900 leading-none mb-1">
                     Sharma Residence <span className="text-[10px] font-normal text-zinc-400 ml-2">#VNS-402</span>
                   </p>
                   <div className="w-full bg-zinc-100 h-2 rounded-full mt-3 overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: '68%' }}
                       viewport={{ once: true }}
                       transition={{ duration: 1.5, delay: 0.5 }}
                       className="h-full bg-brand-accent"
                     />
                   </div>
                   <div className="flex justify-between mt-2 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                     <span>Progress: 68%</span>
                     <span>Plumbing & Electrical</span>
                   </div>
                 </div>
               </div>

               <div className="space-y-4 mt-8">
                  {milestones.map((milestone, idx) => (
                    <div key={milestone.id} className="flex items-center gap-3">
                      {milestone.status === 'completed' ? (
                        <div className="w-5 h-5 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center shrink-0">
                           <CheckCircle2 size={12} className="text-zinc-400" />
                        </div>
                      ) : milestone.status === 'ongoing' ? (
                        <div className="w-5 h-5 rounded-full border-2 border-brand-accent bg-white shrink-0" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-zinc-200 shrink-0" />
                      )}
                      
                      <span className={cn(
                        "text-xs font-bold",
                        milestone.status === 'completed' ? "text-zinc-400 line-through decoration-zinc-300" :
                        milestone.status === 'ongoing' ? "text-brand-900" : "text-zinc-300"
                      )}>
                        {milestone.name}
                      </span>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
