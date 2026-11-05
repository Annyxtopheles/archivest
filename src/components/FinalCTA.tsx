"use client";

import { m } from "framer-motion";
import { Button } from "./ui/button";
import { Compass, ArrowRight } from "lucide-react";
import { useCheckout } from "@/hooks/use-checkout";

const FinalCTA = () => {
  const { startCheckout, isLoading } = useCheckout();

  return (
    <section className="relative bg-[#141412] py-24 md:py-28 overflow-hidden border-t border-[#EAE7DF]/15 text-[#F6F5F0]">
      {/* Subtle CAD grid */}
      <div className="absolute inset-0 cad-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#C85A32]/10 blur-[130px] rounded-full pointer-events-none" />

      <m.div
        initial={{ opacity: 0.5, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        <span className="text-xs font-sans uppercase tracking-widest text-[#C85A32] font-semibold mb-3 block">
          Get Started
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4 leading-tight">
          Every building is a material ledger. <br />
          <span className="text-[#C85A32]">Specify it with empirical truth.</span>
        </h2>

        <p className="text-[#B8B19F] text-base max-w-xl mx-auto mb-8 font-sans leading-relaxed">
          Inspect verified low-carbon assemblies, simulate hygrothermal physics, and export BIM-ready parameter packages.
        </p>

        <Button
          size="lg"
          onClick={() => startCheckout("practice-plan")}
          disabled={isLoading("practice-plan")}
          className="bg-[#C85A32] hover:bg-[#A64522] text-white font-sans text-sm font-medium py-3.5 px-8 rounded-lg shadow-sm transition-all"
        >
          {isLoading("practice-plan") ? (
            "Accessing Workbench..."
          ) : (
            <span className="flex items-center gap-2">
              Start 14-Day Free Trial (No Card Required)
              <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </Button>
      </m.div>
    </section>
  );
};

export default FinalCTA;
