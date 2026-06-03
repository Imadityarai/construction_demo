import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    title: "Sharma Residence Villa",
    location: "Sarnath, Varanasi",
    category: "Full Construction",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Modern Minimalist Duplex",
    location: "Bhelupur, Varanasi",
    category: "Interior & Finishing",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Commercial Office Setup",
    location: "Lanka, Varanasi",
    category: "Turnkey Project",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

export function PortfolioPreview() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold heading-font text-brand-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600">
              Explore some of our finest work across Varanasi. From complete structural builds to premium interiors.
            </p>
          </div>
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 text-brand-accent font-bold hover:text-brand-accent-hover transition-colors whitespace-nowrap group"
          >
            View All Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-900 tracking-wide uppercase">
                  {project.category}
                </div>
              </div>
              <h3 className="text-xl font-bold heading-font text-brand-900 group-hover:text-brand-accent transition-colors mb-2">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <MapPin size={16} />
                {project.location}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
