export function Footer() {
  return (
    <footer className="bg-brand-900 border-t border-brand-800 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-brand-800 pb-16">
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 mb-6 group">
               <div className="w-8 h-8 bg-brand-accent rounded-sm flex items-center justify-center font-bold text-white">
                 V
               </div>
               <span className="text-xl font-black tracking-tighter uppercase text-white">
                 Nirmaan<span className="text-brand-accent underline decoration-2 underline-offset-4">VNS</span>
               </span>
             </div>
             <p className="text-xs mb-6 max-w-sm leading-relaxed">
               Bringing modern construction and architectural design to Varanasi. Transparency, quality, and style built into every project.
             </p>
          </div>

          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-6">Services</h4>
             <ul className="space-y-4 text-sm font-medium">
                <li className="hover:text-brand-accent cursor-pointer transition-colors">Architectural Design</li>
                <li className="hover:text-brand-accent cursor-pointer transition-colors">House Construction</li>
                <li className="hover:text-brand-accent cursor-pointer transition-colors">Interior Design</li>
                <li className="hover:text-brand-accent cursor-pointer transition-colors">Renovation</li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-6">Company</h4>
             <ul className="space-y-4 text-sm font-medium">
                <li className="hover:text-brand-accent cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-brand-accent cursor-pointer transition-colors">Our Projects</li>
                <li className="hover:text-brand-accent cursor-pointer transition-colors">Cost Calculator</li>
                <li className="hover:text-brand-accent cursor-pointer transition-colors">Contact</li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-6">Contact</h4>
             <ul className="space-y-4 text-sm font-medium">
                <li>Bhelupur, Varanasi, UP 221010</li>
                <li>hello@nirmaanvns.com</li>
                <li>+91 98765 43210</li>
             </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-zinc-500">
          <p>&copy; {new Date().getFullYear()} NirmaanVNS. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
