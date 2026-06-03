import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router";

const articles = [
  {
    id: 1,
    title: "House Construction Cost in Varanasi (2025 Guide)",
    date: "10 Mar 2025",
    category: "Cost Guide",
    image: "https://images.unsplash.com/photo-1541888081622-12caa6cbce6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Understand the local rates for basic, standard, and premium construction in Varanasi and surrounding regions."
  },
  {
    id: 2,
    title: "Epoxy Flooring vs Tiles: Which is better?",
    date: "05 Mar 2025",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1581850518616-bcb8077a2336?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "A deep dive comparing the durability, maintenance, and aesthetics of modern epoxy floors over traditional tiles."
  },
  {
    id: 3,
    title: "Latest False Ceiling Trends for Indian Homes",
    date: "28 Feb 2025",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1600566753086-00f18efc2297?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt: "Discover the most popular gypsum and PVC ceiling designs that enhance lighting and room acoustics."
  }
];

export function BlogSection() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold heading-font text-brand-900 mb-4">
              Knowledge Hub
            </h2>
            <p className="text-lg text-slate-600">
              Expert insights, cost guides, and design trends to help you make informed decisions for your dream home.
            </p>
          </div>
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-brand-accent font-bold hover:text-brand-accent-hover transition-colors whitespace-nowrap group"
          >
            Read All Articles
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 group cursor-pointer border border-slate-100 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-accent/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-bold text-white tracking-wide uppercase">
                  {article.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-4">
                  <Calendar size={14} />
                  {article.date}
                </div>
                <h3 className="text-xl font-bold heading-font text-brand-900 group-hover:text-brand-accent transition-colors mb-3">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {article.excerpt}
                </p>
                <div className="mt-auto text-brand-900 font-bold text-sm flex items-center gap-2 group-hover:text-brand-accent transition-colors">
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
