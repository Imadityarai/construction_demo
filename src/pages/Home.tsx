import { Hero } from "../components/home/Hero";
import { Trust } from "../components/home/Trust";
import { CostCalculator } from "../components/home/CalculatorWidget";
import { ServiceQuote } from "../components/home/ServiceQuote";
import { AIDemo } from "../components/home/AIDemo";
import { BeforeAfter } from "../components/home/BeforeAfter";
import { PortfolioPreview } from "../components/home/PortfolioPreview";
import { DashboardDemo } from "../components/home/DashboardDemo";
import { Testimonials } from "../components/home/Testimonials";
import { BlogSection } from "../components/home/BlogSection";
import { Consultation } from "../components/home/Consultation";

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Trust />
      <CostCalculator />
      <ServiceQuote />
      <AIDemo />
      <BeforeAfter />
      <PortfolioPreview />
      <DashboardDemo />
      <Testimonials />
      <BlogSection />
      <Consultation />
    </div>
  );
}

