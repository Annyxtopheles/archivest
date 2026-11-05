import Header from "../components/Header";
import Footer from "../components/Footer";
import { Compass } from "lucide-react";

const EarlyAccessTerms = () => {
  return (
    <div className="min-h-screen bg-[#181816] text-[#F6F5F0]">
      <Header />
      <main className="container mx-auto px-4 pt-28 md:pt-36 pb-20 max-w-4xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono uppercase tracking-wider bg-[#C85A32]/15 text-[#C85A32] border border-[#C85A32]/30 mb-3">
            <Compass className="w-3.5 h-3.5" />
            Experimental Computational Modules
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-[#F6F5F0]">
            Applied Lab Beta &amp; Pre-Release Terms
          </h1>
          <p className="text-xs font-mono text-[#B8B19F] mt-2">
            MatterLab Applied Sciences LLC · Computational Tectonics Division
          </p>
        </div>

        <div className="space-y-6 bg-[#1F1E1B] p-6 sm:p-8 rounded-2xl border border-[#EAE7DF]/15 font-sans text-sm text-[#EAE7DF]/85 leading-relaxed">
          <section>
            <h2 className="text-lg font-serif font-normal text-[#F6F5F0] mb-2">1. Experimental Material Simulators</h2>
            <p>
              Certain experimental modules inside STRATA—including 3D finite-element thermal bridge solvers, biogenic mycelium creep estimators, and automated Grasshopper/Rhino C# script generators—are provided under Applied Lab Beta access.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-normal text-[#F6F5F0] mb-2">2. Verification Protocol</h2>
            <p>
              Beta simulation outputs should be cross-checked against standard ISO 6946 / EN 15804 calculation tables prior to municipal structural filing. We welcome empirical calibration feedback from partner engineering practices at <a href="mailto:specs@matterlab-strata.io" className="text-[#C85A32] hover:underline font-mono">specs@matterlab-strata.io</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EarlyAccessTerms;
