import { Consultation } from "../components/home/Consultation";

export function Contact() {
  return (
    <div className="pt-24 min-h-[70vh]">
      <div className="py-12 max-w-7xl mx-auto px-4 text-center">
         <h1 className="text-5xl font-bold heading-font text-brand-900 mb-4">Contact Us</h1>
         <p className="text-lg text-slate-600">Our office is located in Sigra, Varanasi. Reach out for any questions.</p>
      </div>
      <Consultation />
    </div>
  );
}
