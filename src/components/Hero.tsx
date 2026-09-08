import { Button } from "@/components/ui/button";
import StarsBackdrop from "@/components/ui/stars-backdrop";
import { useCheckout } from "@/hooks/use-checkout";
import { Reg } from "@/components/ui/trademark";

import heroImage from "@/assets/hero-bg.jpg";

const SIMONE_PRICE_ID = import.meta.env.VITE_SIMONE_ONETIME_PRICE as string;

const Hero = () => {
  const { startCheckout, isLoading } = useCheckout();

  return (
    <section className="relative overflow-hidden pt-36 md:pt-44 pb-8 bg-[#081813]">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Revachol detective workstation with typewriter, dossier, and terminal"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        // @ts-ignore
        fetchpriority="high"
        width={1920}
        height={1080}
      />
      {/* Neutral readability gradient behind text column — stronger on mobile, softer on desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 md:from-black/70 md:via-black/35 md:to-transparent" />
      {/* Bottom fade into next section's navy */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent to-[#081813] z-[1]" />

      <StarsBackdrop />

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative max-w-2xl animate-fade-in text-left">
          {/* Soft spotlight cushion behind text for legibility over the laptop image */}
          <div aria-hidden className="pointer-events-none absolute -inset-6 md:-inset-8 bg-black/40 blur-2xl rounded-[2rem] z-0" />
          <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.1] text-white">
            Unravel the case.<br />Inscribe Revachol.
          </h1>
          <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-[#36FF9B] leading-snug">
            Cerebral apparatus for authors. You write every line.
          </p>
          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-xl leading-relaxed">
            Your private Thought Cabinet &amp; Authorship Station. Interrogate instincts, assemble case files, orchestrate scenes, and audit structure with three dialectical faculties. Zero synthetic slop over your prose.
          </p>
          <p className="mt-5 text-base sm:text-lg font-semibold text-[#36FF9B] leading-snug">
            INLAND EMPIRE: [Medium: Success] — The words exist in the static. Pull them through.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
            <Button
              size="lg"
              onClick={() => startCheckout(SIMONE_PRICE_ID)}
              disabled={isLoading(SIMONE_PRICE_ID)}
              className="w-full sm:w-auto h-auto transition-all duration-300 hover:scale-105 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_0_30px_rgba(54,255,155,0.6)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_0_40px_rgba(54,255,155,0.8)] border-2 border-[#36FF9B]/60 bg-gradient-to-r from-[#36FF9B] to-[#10B981] hover:from-[#10B981] hover:to-[#36FF9B] text-[#081813] rounded-full px-8 py-4 text-base md:text-lg font-bold"
            >
              {isLoading(SIMONE_PRICE_ID) ? "Redirecting…" : (<span>Deploy KitsuragiAI<Reg /> for $7</span>)}
            </Button>
          </div>
          </div>
        </div>

      </div>


    </section>
  );
};

export default Hero;
