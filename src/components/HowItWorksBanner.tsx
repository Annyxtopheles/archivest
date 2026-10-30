import { Layers, FileCheck, CheckCircle2, ArrowRight } from "lucide-react";

const HowItWorksBanner = () => {
  return (
    <section className="relative overflow-hidden py-16 bg-[#181816] border-y border-[#EAE7DF]/15 text-[#F6F5F0]">
      {/* Subtle CAD grid overlay */}
      <div className="absolute inset-0 cad-grid-dark opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#2E6F5E]/15 text-[#2E6F5E] border border-[#2E6F5E]/30 mb-4">
            <FileCheck className="w-3.5 h-3.5" />
            Zero Spec Ambiguity · ISO 14044 Audited
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-tight text-[#F6F5F0]">
            From Tactile Physical Specimen to verifiably low-carbon construction documents.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#EAE7DF]/80 font-sans">
            Eliminate guesswork in LEED, BREEAM, and RIBA 2030 climate challenge compliance. 
            STRATA provides verifiable manufacturer EPD datasets bound directly to your model's schedule keys.
          </p>

          <blockquote className="mt-8 mx-auto max-w-2xl rounded-xl border-l-4 border-[#C85A32] bg-[#1F1E1B] border border-[#EAE7DF]/10 px-6 py-4 text-left text-sm md:text-base leading-relaxed text-[#EAE7DF] italic shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            &ldquo;STRATA allowed our facade team to swap standard high-embodied concrete for pozzolanic basalt geopolymer across 14,000 m² of curtain wall, slashing project A1–A3 carbon by 71% without delaying tender delivery.&rdquo;
            <span className="block mt-2 font-mono text-xs not-italic text-[#C85A32] font-semibold">
              — Elena Rostova, Lead Facade Engineer, Zurich Tectonic Studio
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksBanner;
