import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-500/30">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
