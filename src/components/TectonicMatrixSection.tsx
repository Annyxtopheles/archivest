import { Compass, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCheckout } from "@/hooks/use-checkout";

const TectonicMatrixSection = () => {
  const { startCheckout, isLoading } = useCheckout();

  return (
    <section className="bg-[#181816] py-24 border-t border-[#EAE7DF]/15 text-[#F6F5F0]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-sans uppercase tracking-widest text-[#C85A32] font-semibold">
              Integration
            </span>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F6F5F0] leading-tight">
              From Site Datum <br />
              <span className="text-[#C85A32]">to Fabrication Kerf.</span>
            </h3>

            <p className="text-base text-[#EAE7DF]/75 font-sans leading-relaxed">
              Whether detailing a mass-timber civic pavilion or an off-grid rammed earth retreat, STRATA synchronizes material performance across every project phase:
            </p>

            <ul className="space-y-3 font-sans text-sm text-[#EAE7DF]/85">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#2E6F5E] shrink-0 mt-1" />
                <span>Live bidirectional parameter binding with Revit, Rhino &amp; Grasshopper</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#2E6F5E] shrink-0 mt-1" />
                <span>Red List chemical verification and zero off-gassing audits for WELL Building v2</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#2E6F5E] shrink-0 mt-1" />
                <span>Instant EPD recalculation when substrate depths or density layers adjust</span>
              </li>
            </ul>

            <div className="pt-2">
              <Button
                size="lg"
                onClick={() => startCheckout("practice-plan")}
                disabled={isLoading("practice-plan")}
                className="bg-[#C85A32] text-white hover:bg-[#A64522] font-sans text-xs font-medium px-6 py-3 rounded-lg shadow-sm transition-all"
              >
                Explore Practice Licensing
              </Button>
            </div>
          </div>

          {/* Right Architectural Assembly Matrix Graphic (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-[#EAE7DF]/15 bg-[#1C1B18] p-8 shadow-xl font-sans text-xs">
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <span className="text-[#F6F5F0] font-medium font-mono">WALL ASSEMBLY // COMPOSITE-04B</span>
                <span className="text-[11px] bg-[#2E6F5E]/15 text-[#2E6F5E] px-2.5 py-0.5 rounded-full font-medium">A1–A3 Validated</span>
              </div>

              {/* Layer Stack */}
              <div className="my-6 space-y-3">
                <div className="p-3.5 rounded-xl bg-[#141412] border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#B8B19F] block">Exterior Rainscreen (22mm)</span>
                    <span className="text-[#F6F5F0] font-medium">Charred Sugi Ban Larch</span>
                  </div>
                  <span className="text-xs text-[#2E6F5E] font-medium">-12 kg CO₂e</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141412] border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#B8B19F] block">Ventilated Cavity (38mm)</span>
                    <span className="text-[#F6F5F0] font-medium">Thermally Broken Aluminum Brackets</span>
                  </div>
                  <span className="text-xs text-[#EAE7DF]/70 font-medium">+4 kg CO₂e</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141412] border border-[#C85A32]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#C85A32] block">Thermal Insulation (140mm)</span>
                    <span className="text-[#F6F5F0] font-medium">Wood Fiber Batt (R-4.2)</span>
                  </div>
                  <span className="text-xs text-[#2E6F5E] font-medium">-22 kg CO₂e</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141412] border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#B8B19F] block">Loadbearing Structure (120mm)</span>
                    <span className="text-[#F6F5F0] font-medium">Cross-Laminated Timber (5-Ply)</span>
                  </div>
                  <span className="text-xs text-[#2E6F5E] font-medium">-64 kg CO₂e</span>
                </div>
              </div>

              {/* Net Carbon Total */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#B8B19F] block">Net Embodied Carbon:</span>
                  <span className="text-base font-serif font-bold text-[#2E6F5E]">-94 kg CO₂e / m² (Carbon Sink)</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#B8B19F] block">Fire Resistance:</span>
                  <span className="text-xs font-medium text-[#F6F5F0]">REI 90 Min (EN 13501)</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TectonicMatrixSection;
