export function Consultation() {
  return (
    <section className="py-24 bg-brand-accent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            <div className="p-10 md:p-12 bg-brand-900 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold heading-font mb-4">
                Ready to build? Let's talk.
              </h2>
              <p className="text-slate-400 mb-8">
                Book a free site inspection and consultation with our expert architects and civil engineers today.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-brand-accent font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Free Site Visit</h4>
                    <p className="text-sm text-slate-400">We inspect your plot or property.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-brand-accent font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Custom 3D Design</h4>
                    <p className="text-sm text-slate-400">See it before we build it.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-brand-accent font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Transparent Quote</h4>
                    <p className="text-sm text-slate-400">No hidden costs, ever.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Book Consultation</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-accent/50 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-accent/50 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-accent/50 outline-none">
                    <option>Complete House Construction</option>
                    <option>Architectural Design & 3D</option>
                    <option>Interior Design</option>
                    <option>Renovation / Finishing</option>
                  </select>
                </div>
                <button className="w-full py-4 mt-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold rounded-xl transition-colors shadow-lg">
                  Submit Request
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
