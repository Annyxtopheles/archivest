import Header from "../components/Header";
import Hero from "../components/Hero";
import MaterialAnalyzers, { MaterialAnalyzersIntro } from "../components/MaterialAnalyzers";
import JourneyPillars from "../components/JourneyPillars";
import HowItWorks from "../components/HowItWorks";
import HowItWorksBanner from "../components/HowItWorksBanner";
import MaterialCatalogExplorer from "../components/MaterialCatalogExplorer";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import TectonicDisciplineBanner from "../components/TectonicDisciplineBanner";
import TectonicMatrixSection from "../components/TectonicMatrixSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#181816] text-[#F6F5F0]">
      <Header />
      <Hero />
      <section className="relative bg-[#181816] pt-12 pb-16 overflow-hidden border-t border-[#EAE7DF]/15">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <JourneyPillars />
          <div className="mb-10">
            <MaterialAnalyzersIntro />
          </div>
          <MaterialAnalyzers />
        </div>
      </section>
      <HowItWorksBanner />
      <HowItWorks />
      <MaterialCatalogExplorer />
      <TectonicMatrixSection />
      <Pricing />
      <TectonicDisciplineBanner />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
