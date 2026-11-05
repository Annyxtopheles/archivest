import { Compass } from "lucide-react";

const TectonicDisciplineBanner = () => {
  return (
    <section className="relative overflow-hidden py-16 bg-[#181816] border-y border-[#EAE7DF]/15 flex items-center justify-center text-[#F6F5F0] text-center" id="carbon-benchmarks">
      {/* Subtle CAD grid */}
      <div className="absolute inset-0 cad-grid-dark opacity-35 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans uppercase tracking-widest text-[#C85A32] bg-[#C85A32]/10 border border-[#C85A32]/25 mb-4">
          <Compass className="w-3.5 h-3.5" />
          Tectonic Discipline
        </div>
        <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-snug text-[#F6F5F0]">
          Architecture is physical reality quantified in stone, clay, timber, and glass. 
          STRATA gives modern practices the unsparing empirical rigor to build monuments that outlive carbon debt.
        </p>
      </div>
    </section>
  );
};

export default TectonicDisciplineBanner;
