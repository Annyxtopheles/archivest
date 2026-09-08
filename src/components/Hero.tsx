import { Button } from "@/components/ui/button";
import StarsBackdrop from "@/components/ui/stars-backdrop";
import { useCheckout } from "@/hooks/use-checkout";
import { Reg } from "@/components/ui/trademark";

import heroAsset from "@/assets/hero-writing-studio.webp.asset.json";
const heroImage = heroAsset.url;

const SIMONE_PRICE_ID = import.meta.env.VITE_SIMONE_ONETIME_PRICE as string;

const Hero = () => {
  const { startCheckout, isLoading } = useCheckout();

  return (
    <section className="relative overflow-hidden pt-36 md:pt-44 pb-8 bg-[#081813]">
      {/* Background image */}
      <img
        src={heroImage}
        alt="A cozy writer's studio with a laptop showing the Archivest novelist app"
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
            Unravel the case.<br />Inscribe the ruins of Revachol.
          </h1>
          <p className="mt-5 text-xl sm:text-2xl md:text-3xl font-medium text-[#36FF9B] leading-snug">
            Cerebral apparatus for hardboiled authors.<br />
            The Pale encroaches. You inscribe every line.
          </p>
          <p className="mt-6 text-base sm:text-lg text-white/85 max-w-xl leading-relaxed">
            Archivest is your private <strong className="font-semibold text-white">Thought Cabinet &amp; Authorship Station</strong>—an immersive ideational atelier engineered directly into the gloom of Martinaise. Interrogate instincts, assemble your case file, orchestrate scenes, and audit structure alongside <strong className="font-semibold text-white">three cerebral faculties</strong> calibrated for the exhaustive life of a literary epic.
          </p>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-[#36FF9B] leading-snug">
            INLAND EMPIRE: [Medium: Success] — The words already exist in the static. Pull them through.
          </p>
          <p className="mt-4 text-base sm:text-lg text-white/85 max-w-xl leading-relaxed">
            Trained on raw dialectics and post-revolutionary melancholia. Human authorship inviolable. Zero synthetic hallucinations over your prose.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
            <Button
              size="lg"
              onClick={() => startCheckout(SIMONE_PRICE_ID)}
              disabled={isLoading(SIMONE_PRICE_ID)}
              className="w-full sm:w-auto h-auto transition-all duration-300 hover:scale-105 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_0_30px_rgba(54,255,155,0.6)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_0_40px_rgba(54,255,155,0.8)] border-2 border-[#36FF9B]/60 bg-gradient-to-r from-[#36FF9B] to-[#10B981] hover:from-[#10B981] hover:to-[#36FF9B] text-[#081813] rounded-full px-8 py-4 text-base md:text-lg font-bold"
            >
              {isLoading(SIMONE_PRICE_ID) ? "Redirecting…" : (<span>Internalize SimoneAI<Reg /> for $7</span>)}
            </Button>

          </div>
          </div>
        </div>

      </div>


    </section>
  );
};

export default Hero;
