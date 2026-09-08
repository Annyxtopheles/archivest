"use client";

import { m } from "framer-motion";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import StarsBackdrop from "./ui/stars-backdrop";
import { useCheckout } from "@/hooks/use-checkout";
import { Reg } from "./ui/trademark";

const SIMONE_PRICE_ID = import.meta.env.VITE_SIMONE_ONETIME_PRICE as string;

const FinalCTA = () => {
  const { startCheckout, isLoading } = useCheckout();

  return (
    <section className="relative bg-[#081813] py-10 md:py-16 overflow-hidden">
      <StarsBackdrop />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#36FF9B]/20 blur-[100px] rounded-full" />


      <m.div
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 text-center px-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 px-4">
          <span className="text-gray-300">The city of Revachol has a tragedy to tell.</span>
          <br />
          <span className="text-[#36FF9B]">Your typewriter is the only witness.</span>
        </h2>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
          COMMUNAL LOGIC: [Trivial: Success] — Clear the smoke from the precinct room. Begin the interrogation with SimoneAI<Reg /> today.
        </p>

        <Button
          size="lg"
          onClick={() => startCheckout(SIMONE_PRICE_ID)}
          disabled={isLoading(SIMONE_PRICE_ID)}
          className="w-full sm:w-auto bg-gradient-to-r from-[#36FF9B] to-[#10B981] hover:from-[#10B981] hover:to-[#36FF9B] text-[#081813] font-semibold py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 text-sm sm:text-base md:text-lg rounded-full shadow-[0_0_25px_rgba(54,255,155,0.4)] transition-all duration-300"
        >
          {isLoading(SIMONE_PRICE_ID) ? "Redirecting…" : (
            <>
              Commence Premise Interrogation for Only $7
              <Sparkles className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </>
          )}
        </Button>
      </m.div>
    </section>
  );
};

export default FinalCTA;
