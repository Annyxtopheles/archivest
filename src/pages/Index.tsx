import Header from "../components/Header";
import Hero from "../components/Hero";
import AICoachCards, { AICoachIntro } from "../components/AIEditors";
import JourneyPillars from "../components/JourneyPillars";
import HowItWorks from "../components/HowItWorks";
import HowItWorksBanner from "../components/HowItWorksBanner";
import CoachTestimonials from "../components/CoachTestimonials";
import Pricing from "../components/Pricing";
import StarsBackdrop from "../components/ui/stars-backdrop";

import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import LiteraryRenaissanceBanner from "../components/LiteraryRenaissanceBanner";
import FeaturedTestimonials from "../components/FeaturedTestimonials";
import YourNovelEverywhere from "../components/YourNovelEverywhere";


const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <section className="relative bg-[#081813] pt-4 pb-6 overflow-hidden">
        <StarsBackdrop density="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <JourneyPillars />
          <div className="mb-10 md:mb-12">
            <AICoachIntro />
          </div>
          <AICoachCards />
        </div>
      </section>
      <HowItWorksBanner />
      <CoachTestimonials />
      <HowItWorks />
      <FeaturedTestimonials />
      <YourNovelEverywhere />
      <Pricing />
      <LiteraryRenaissanceBanner />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
