import { useState } from "react";
import { 
  BarChart3, 
  Activity, 
  Globe2, 
  Sliders, 
  CheckCircle2, 
  ArrowUpRight, 
  FileCheck2, 
  ShieldCheck,
  Flame,
  Volume2,
  Sparkles
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useCheckout } from "@/hooks/use-checkout";

export const MaterialAnalyzersIntro = () => (
  <div className="text-center max-w-4xl mx-auto px-4 mb-14" id="engineering-modules">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-[#2E6F5E]/15 text-[#2E6F5E] border border-[#2E6F5E]/30 mb-4">
      <Activity className="w-3.5 h-3.5" />
      Parametric Material Specification Engines
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#F6F5F0] leading-tight">
      Three Quantitative Engineering Analyzers
    </h2>
    <p className="mt-4 text-base sm:text-lg text-[#EAE7DF]/75 font-sans leading-relaxed max-w-2xl mx-auto">
      Subject candidate materials to unsparing lifecycle carbon diagnostics, acoustic absorption modeling, and international supply provenance audits.
    </p>
  </div>
);

export const AICoachIntro = MaterialAnalyzersIntro;

const MaterialAnalyzers = () => {
  const { startCheckout, isLoading } = useCheckout();
  
  // Interactive Simulator States
  const [thicknessMm, setThicknessMm] = useState<number>(140);
  const [selectedFreq, setSelectedFreq] = useState<string>("500Hz");

  // Dynamic calculations based on thickness
  const calculatedRValue = (thicknessMm * 0.026).toFixed(2);
  const calculatedDampingDb = Math.round(28 + (thicknessMm * 0.12));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl w-full mx-auto">
      
      {/* =========================================================================
          MODULE 01: Lifecycle Carbon & EPD Analyzer (A1–A3 vs C1–C4)
         ========================================================================= */}
      <div className="flex flex-col justify-between rounded-2xl border border-[#EAE7DF]/15 bg-[#1F1E1B]/95 p-6 shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:border-[#C85A32]/40 transition-all duration-300">
        <div>
          {/* Header Badge */}
          <div className="flex items-center justify-between pb-3 border-b border-[#EAE7DF]/10 text-xs font-mono">
            <span className="text-[#C85A32] font-semibold">MODULE 01 // LCA</span>
            <span className="text-[#B8B19F]/60">ISO 14044</span>
          </div>

          <div className="my-5">
            <div className="w-10 h-10 rounded-lg bg-[#C85A32]/10 border border-[#C85A32]/30 flex items-center justify-center text-[#C85A32] mb-3">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#F6F5F0]">Lifecycle Carbon &amp; EPD Analyzer</h3>
            <p className="text-xs font-sans text-[#EAE7DF]/70 mt-1">
              Deconstructs cradle-to-gate extraction versus end-of-life circularity across standard EN 15804 modules.
            </p>
          </div>

          {/* Interactive Visual Breakdown Chart */}
          <div className="p-4 rounded-xl bg-[#181816] border border-[#EAE7DF]/10 space-y-3.5 my-4">
            <div className="text-[11px] font-mono text-[#B8B19F] flex justify-between">
              <span>MODULE BREAKDOWN</span>
              <span className="text-[#2E6F5E]">TOTAL: 42 kgCO₂e/m²</span>
            </div>

            {/* A1-A3 Raw Extraction */}
            <div>
              <div className="flex justify-between text-[10px] font-mono mb-1">
                <span className="text-[#EAE7DF]">A1–A3 Production &amp; Milling</span>
                <span className="text-[#C85A32] font-bold">28 kg (66%)</span>
              </div>
              <div className="h-2 w-full bg-[#2A2720] rounded-full overflow-hidden">
                <div className="h-full bg-[#C85A32] rounded-full" style={{ width: "66%" }} />
              </div>
            </div>

            {/* A4-A5 Logistics */}
            <div>
              <div className="flex justify-between text-[10px] font-mono mb-1">
                <span className="text-[#EAE7DF]">A4–A5 Transit &amp; Site Erection</span>
                <span className="text-[#EAE7DF]/80 font-bold">9 kg (21%)</span>
              </div>
              <div className="h-2 w-full bg-[#2A2720] rounded-full overflow-hidden">
                <div className="h-full bg-[#B8B19F]" style={{ width: "21%" }} />
              </div>
            </div>

            {/* C1-C4 Circular Recovery */}
            <div>
              <div className="flex justify-between text-[10px] font-mono mb-1">
                <span className="text-[#EAE7DF]">C1–C4 Deconstruction &amp; Reclaim</span>
                <span className="text-[#2E6F5E] font-bold">5 kg (13%)</span>
              </div>
              <div className="h-2 w-full bg-[#2A2720] rounded-full overflow-hidden">
                <div className="h-full bg-[#2E6F5E] rounded-full" style={{ width: "13%" }} />
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#B8B19F]">
              <span className="flex items-center gap-1 text-[#2E6F5E]">
                <ShieldCheck className="w-3 h-3" /> EPD TYPE III VERIFIED
              </span>
              <span>GWP-GHG 100a</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[#EAE7DF]/10">
          <Button
            size="sm"
            onClick={() => startCheckout("lca-analyzer")}
            disabled={isLoading("lca-analyzer")}
            className="w-full bg-[#181816] hover:bg-[#252420] border border-[#EAE7DF]/20 text-[#EAE7DF] font-mono text-xs uppercase tracking-wider"
          >
            Launch EPD Comparer
          </Button>
        </div>
      </div>

      {/* =========================================================================
          MODULE 02: Acoustic & Hygrothermal Simulator (Interactive Sliders)
         ========================================================================= */}
      <div className="flex flex-col justify-between rounded-2xl border-2 border-[#C85A32] bg-[#1F1E1B]/95 p-6 shadow-[0_12px_40px_rgba(200,90,50,0.15)] relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C85A32] text-white text-[10px] font-mono uppercase tracking-widest font-bold px-3 py-0.5 rounded-full shadow-md">
          INTERACTIVE SIMULATOR
        </div>

        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[#EAE7DF]/10 text-xs font-mono">
            <span className="text-[#C85A32] font-semibold">MODULE 02 // PHYSICS</span>
            <span className="text-[#B8B19F]/60">ASTM C423 / ISO 6946</span>
          </div>

          <div className="my-5">
            <div className="w-10 h-10 rounded-lg bg-[#C85A32]/10 border border-[#C85A32]/30 flex items-center justify-center text-[#C85A32] mb-3">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#F6F5F0]">Acoustic &amp; Hygrothermal Engine</h3>
            <p className="text-xs font-sans text-[#EAE7DF]/70 mt-1">
              Adjust physical substrate depth to observe dynamic thermal R-value and airborne sound transmission damping in real time.
            </p>
          </div>

          {/* Interactive Thickness Slider */}
          <div className="p-4 rounded-xl bg-[#181816] border border-[#EAE7DF]/10 space-y-4 my-4">
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-[#B8B19F]">ASSEMBLY THICKNESS:</span>
                <span className="text-[#C85A32] font-bold">{thicknessMm} mm</span>
              </div>
              <Slider
                value={[thicknessMm]}
                min={50}
                max={300}
                step={10}
                onValueChange={(vals) => setThicknessMm(vals[0])}
                className="py-1"
              />
              <div className="flex justify-between text-[9px] font-mono text-[#B8B19F]/50 mt-1">
                <span>50mm (Veneer)</span>
                <span>300mm (Monolithic)</span>
              </div>
            </div>

            {/* Calculated Output Matrix */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#EAE7DF]/10">
              <div className="p-2.5 rounded bg-[#252420] border border-white/5">
                <span className="text-[10px] font-mono text-[#B8B19F] block">CALCULATED R-VALUE</span>
                <span className="text-lg font-mono font-bold text-[#F6F5F0]">R-{calculatedRValue}</span>
                <span className="text-[9px] text-[#2E6F5E] block font-mono">m²·K/W (Thermal)</span>
              </div>
              <div className="p-2.5 rounded bg-[#252420] border border-white/5">
                <span className="text-[10px] font-mono text-[#B8B19F] block">ACOUSTIC DAMPING</span>
                <span className="text-lg font-mono font-bold text-[#F6F5F0]">{calculatedDampingDb} dB</span>
                <span className="text-[9px] text-[#C85A32] block font-mono">Rw Sound Reduction</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[#EAE7DF]/10">
          <Button
            size="sm"
            onClick={() => startCheckout("physics-simulator")}
            disabled={isLoading("physics-simulator")}
            className="w-full bg-[#C85A32] hover:bg-[#A64522] text-white font-mono text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(200,90,50,0.3)]"
          >
            Run Hygrothermal Profile
          </Button>
        </div>
      </div>

      {/* =========================================================================
          MODULE 03: Global Quarry & Mill Provenance Ledger
         ========================================================================= */}
      <div className="flex flex-col justify-between rounded-2xl border border-[#EAE7DF]/15 bg-[#1F1E1B]/95 p-6 shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:border-[#2E6F5E]/40 transition-all duration-300">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[#EAE7DF]/10 text-xs font-mono">
            <span className="text-[#2E6F5E] font-semibold">MODULE 03 // SUPPLY CHAIN</span>
            <span className="text-[#B8B19F]/60">CHAIN OF CUSTODY</span>
          </div>

          <div className="my-5">
            <div className="w-10 h-10 rounded-lg bg-[#2E6F5E]/10 border border-[#2E6F5E]/30 flex items-center justify-center text-[#2E6F5E] mb-3">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#F6F5F0]">Quarry &amp; Mill Provenance Ledger</h3>
            <p className="text-xs font-sans text-[#EAE7DF]/70 mt-1">
              Tracks geopolitical quarry source, legal extraction chain of custody, FSC certification, and low-VOC emissions.
            </p>
          </div>

          {/* Provenance Verification Checklist */}
          <div className="p-4 rounded-xl bg-[#181816] border border-[#EAE7DF]/10 space-y-2.5 my-4">
            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/5">
              <span className="text-[#B8B19F]">FSC / PEFC CERTIFIED:</span>
              <span className="text-[#2E6F5E] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% VERIFIED
              </span>
            </div>

            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/5">
              <span className="text-[#B8B19F]">TOTAL VOC CONTENT:</span>
              <span className="text-[#F6F5F0] font-bold">&lt; 0.05 g/L (Zero-Offgas)</span>
            </div>

            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/5">
              <span className="text-[#B8B19F]">CRADLE TO CRADLE:</span>
              <span className="text-[#C85A32] font-bold">GOLD TIER 2026</span>
            </div>

            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#B8B19F]">LEAD TIME QUOTE:</span>
              <span className="text-[#EAE7DF] font-bold">Guaranteed 2–4 Wks</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[#EAE7DF]/10">
          <Button
            size="sm"
            onClick={() => startCheckout("provenance-ledger")}
            disabled={isLoading("provenance-ledger")}
            className="w-full bg-[#181816] hover:bg-[#252420] border border-[#EAE7DF]/20 text-[#EAE7DF] font-mono text-xs uppercase tracking-wider"
          >
            Audit Mill Supply Chain
          </Button>
        </div>
      </div>

    </div>
  );
};

export { MaterialAnalyzers as AICoachCards };
export default MaterialAnalyzers;
