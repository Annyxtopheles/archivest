"use client";

import { m } from "framer-motion";
import { Button } from "./ui/button";
import { Compass, Download } from "lucide-react";
import { useCheckout } from "@/hooks/use-checkout";

const FinalCTA = () => {
  const { startCheckout, isLoading } = useCheckout();

  return (
    <section className="relative bg-[#1F1E1B] py-16 md:py-24 overflow-hidden border-t border-[#EAE7DF]/15 text-[#F6F5F0]">
      {/* Subtle CAD grid */}
      <div className="absolute inset-0 cad-grid-dark opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#C85A32]/15 blur-[110px] rounded-full pointer-events-none" />

      <m.div
        initial={{ opacity: 0.5, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-[#C85A32]/15 text-[#C85A32] border border-[#C85A32]/30 mb-5">
          <Compass className="w-3.5 h-3.5" />
          Tectonic Rigor · Zero Carbon Guesswork
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-5 leading-tight">
          <span className="text-[#EAE7DF]">Every building is a material ledger.</span>
          <br />
          <span className="text-[#C85A32]">Specify it with empirical truth.</span>
        </h2>

        <p className="text-[#B8B19F] text-base sm:text-lg max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
          Commission your studio's STRATA workbench today. Inspect 4,000+ low-carbon specimens, simulate hygrothermal envelopes, and export CSI MasterFormat tender packages.
        </p>

        <Button
          size="lg"
          onClick={() => startCheckout("starter-dossier")}
          disabled={isLoading("starter-dossier")}
          className="w-full sm:w-auto bg-[#C85A32] hover:bg-[#A64522] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold py-6 px-8 rounded shadow-[0_0_30px_rgba(200,90,50,0.4)] transition-all duration-300"
        >
          {isLoading("starter-dossier") ? (
            "Compiling Specification Package..."
          ) : (
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Requisition Single Assembly Dossier ($7)
            </span>
          )}
        </Button>
      </m.div>
    </section>
  );
};

export default FinalCTA;
