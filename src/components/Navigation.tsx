import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, HardHat } from "lucide-react";
import { cn } from "../lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Calculator", path: "/calculator" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-zinc-200 py-4"
          : "bg-white border-zinc-100 py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand-accent rounded-sm flex items-center justify-center font-bold text-white transition-transform group-hover:scale-105">
            V
          </div>
          <span className="text-xl font-black tracking-tighter uppercase text-brand-900">
            Savitri<span className="text-brand-accent underline decoration-2 underline-offset-4">VNS</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-[11px] font-bold uppercase tracking-widest transition-colors",
                  isActive
                    ? "text-brand-900 border-b-2 border-brand-accent pb-1"
                    : "text-zinc-500 hover:text-brand-900"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="flex gap-4 ml-4">
            <NavLink
              to="/contact"
               className="px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider border border-zinc-200 hover:bg-zinc-50 transition-colors text-brand-900"
            >
              Book Site Visit
            </NavLink>
            <NavLink
              to="/calculator"
              className="px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider bg-brand-accent text-white shadow-lg shadow-brand-accent/30 hover:bg-brand-accent-hover transition-colors"
            >
              Get Estimate
            </NavLink>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-zinc-200 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block font-bold text-[11px] uppercase tracking-widest py-3 border-b border-zinc-100",
                  isActive ? "text-brand-accent" : "text-zinc-500"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-5 py-3 text-[11px] font-bold uppercase tracking-wider border border-zinc-200 text-center text-brand-900"
            >
              Book Site Visit
            </NavLink>
            <NavLink
              to="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-5 py-3 text-[11px] font-bold uppercase tracking-wider bg-brand-accent text-white text-center"
            >
              Get Estimate
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
