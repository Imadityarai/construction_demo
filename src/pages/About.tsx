import { Trust } from "../components/home/Trust";

export function About() {
  return (
    <div className="pt-32 pb-24 min-h-[70vh] max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold heading-font text-brand-900 mb-6">About Nirmaan</h1>
        <p className="text-xl text-slate-600 leading-relaxed gap-6">
          Founded in Varanasi, Nirmaan was created to bring transparency, quality, and modern technology to the traditional construction industry in Eastern UP. 
          We believe building your dream home shouldn't involve chasing contractors or worrying about hidden costs.
        </p>
      </div>
      <Trust />
    </div>
  );
}
