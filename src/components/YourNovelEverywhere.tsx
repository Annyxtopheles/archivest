import novelistTrainImageAsset from "@/assets/novelist-train-window.png.asset.json";
import { Button } from "@/components/ui/button";
import { useCheckout } from "@/hooks/use-checkout";
import { Reg } from "@/components/ui/trademark";

const NovelistTrainImage = novelistTrainImageAsset.url;
const SIMONE_PRICE_ID = import.meta.env.VITE_SIMONE_ONETIME_PRICE as string;

const YourNovelEverywhere = () => {
  const { startCheckout, isLoading } = useCheckout();

  return (
    <section className="bg-[#081813] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-left order-2 md:order-1">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              The Ledger Travels.<br />Even Across the Pale.
            </h3>
            <p className="text-lg sm:text-xl text-[#36FF9B] leading-snug mb-8">
              Do not wait for sobriety or fair weather in the delta.<br />
              Your case dossier, cognitive faculties, and typewriter follow you onto every railcar and ferry.
            </p>

            <Button
              size="lg"
              onClick={() => startCheckout(SIMONE_PRICE_ID)}
              disabled={isLoading(SIMONE_PRICE_ID)}
              className="w-full sm:w-auto h-auto transition-all duration-300 hover:scale-105 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_0_30px_rgba(54,255,155,0.6)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_0_40px_rgba(54,255,155,0.8)] border-2 border-[#36FF9B]/60 bg-gradient-to-r from-[#36FF9B] to-[#10B981] hover:from-[#10B981] hover:to-[#36FF9B] text-[#081813] rounded-full px-8 py-4 text-base md:text-lg font-bold"
            >
              {isLoading(SIMONE_PRICE_ID) ? "Redirecting…" : (<span>Internalize SimoneAI<Reg /> for $7</span>)}
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={NovelistTrainImage}
              alt="Novelist writing on a laptop by a train window with mountains in view"
              loading="lazy"
              decoding="async"
              width={1280}
              height={960}
              className="w-full h-auto rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourNovelEverywhere;
