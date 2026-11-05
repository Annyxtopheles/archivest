import { Layers, Compass, CheckCircle2, FileCode2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCheckout } from "@/hooks/use-checkout";

const YourNovelEverywhere = () => {
  const { startCheckout, isLoading } = useCheckout();

  return (
    <section className="bg-[#1F1E1B] py-20 border-t border-[#EAE7DF]/15 text-[#F6F5F0]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono uppercase tracking-wider bg-[#2E6F5E]/15 text-[#2E6F5E] border border-[#2E6F5E]/30">
              <Compass className="w-3.5 h-3.5" />
              Unified Spatial Assembly Matrix
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F6F5F0] leading-tight">
              From Site Datum <br />
              <span className="text-[#C85A32]">to Fabrication Kerf.</span>
            </h3>

            <p className="text-base sm:text-lg text-[#EAE7DF]/80 font-sans leading-relaxed">
              Whether you are detailing a mass-timber civic pavilion or an off-grid rammed earth residential retreat, STRATA synchronizes material performance data across all project stages:
            </p>

            <ul className="space-y-3 font-mono text-xs text-[#EAE7DF]/90">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E6F5E] shrink-0 mt-0.5" />
                <span>Synchronous live bidirectional binding with Revit, Rhino &amp; Grasshopper</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E6F5E] shrink-0 mt-0.5" />
                <span>Zero off-gassing Red List chemical audit verification for WELL Building v2</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E6F5E] shrink-0 mt-0.5" />
                <span>Automated EPD delta recalculation upon material thickness adjustments</span>
              </li>
            </ul>

            <div className="pt-2">
              <Button
                size="lg"
                onClick={() => startCheckout("practice-plan")}
                disabled={isLoading("practice-plan")}
                className="bg-[#C85A32] text-white hover:bg-[#A64522] font-mono text-xs uppercase tracking-wider font-semibold px-7 py-5 rounded shadow-[0_0_25px_rgba(200,90,50,0.4)]"
              >
                Explore Practice Licensing
              </Button>
            </div>
          </div>

          {/* Right Architectural Assembly Matrix Graphic (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-[#EAE7DF]/20 bg-[#181816] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.6)] font-mono text-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#EAE7DF]/10">
                <span className="text-[#C85A32] font-bold">TECTONIC MATRIX SPEC // WALL ASSEMBLY-04B</span>
                <span className="text-[10px] bg-[#2E6F5E]/20 text-[#2E6F5E] px-2 py-0.5 rounded">A1–A3 GWP AUDIT OK</span>
              </div>

              {/* Layer Stack Representation */}
              <div className="my-5 space-y-2.5">
                <div className="p-3 rounded bg-[#252420] border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#B8B19F] block">EXTERIOR RAINSCREEN (22mm)</span>
                    <span className="text-[#F6F5F0] font-bold">Charred Shou Sugi Ban Larch</span>
                  </div>
                  <span className="text-xs text-[#2E6F5E] font-bold">-12 kg CO₂e</span>
                </div>

                <div className="p-3 rounded bg-[#252420] border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#B8B19F] block">VENTILATED CAVITY (38mm)</span>
                    <span className="text-[#F6F5F0] font-bold">Thermally Broken Anodized Aluminum Brackets</span>
                  </div>
                  <span className="text-xs text-[#EAE7DF]/70">+4 kg CO₂e</span>
                </div>

                <div className="p-3 rounded bg-[#252420] border border-[#C85A32]/40 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#C85A32] block">THERMAL INSULATION (140mm)</span>
                    <span className="text-[#F6F5F0] font-bold">Wood Fiber Batt (R-4.2)</span>
                  </div>
                  <span className="text-xs text-[#2E6F5E] font-bold">-22 kg CO₂e</span>
                </div>

                <div className="p-3 rounded bg-[#252420] border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#B8B19F] block">PRIMARY LOADBEARING (120mm)</span>
                    <span className="text-[#F6F5F0] font-bold">Cross-Laminated Timber (CLT 5-Ply)</span>
                  </div>
                  <span className="text-xs text-[#2E6F5E] font-bold">-64 kg CO₂e</span>
                </div>
              </div>

              {/* Total Assembly Carbon Net */}
              <div className="pt-3 border-t border-[#EAE7DF]/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#B8B19F] block">NET MONOLITHIC EMBODIED CARBON:</span>
                  <span className="text-base font-bold text-[#2E6F5E]">-94 kg CO₂e / m² (Net Sequestering)</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#B8B19F] block">FIRE COMPLIANCE:</span>
                  <span className="text-xs font-bold text-[#F6F5F0]">REI 90 Min (EN 13501)</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default YourNovelEverywhere;
