import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "The transparency in pricing and the fact that I could track everything from my phone made the whole construction process stress-free.",
    projectImg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Sneha Singh",
    role: "Villa Owner",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Their interior design team completely transformed our old bungalow. The false ceiling and premium epoxy flooring look fabulous.",
    projectImg: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold heading-font text-brand-900 mb-4">
            Hear From Our Clients
          </h2>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Here's what homeowners across Varanasi say about our work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative group"
            >
              <Quote size={40} className="absolute top-8 right-8 text-slate-200 group-hover:text-brand-accent/20 transition-colors" />
              
              <div className="flex gap-1 text-brand-accent mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
                <div className="ml-auto">
                   <img src={t.projectImg} alt="Project" className="w-16 h-12 object-cover rounded shadow-sm hidden sm:block" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
