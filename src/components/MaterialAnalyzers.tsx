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
  Sparkles,
  Thermometer,
  Droplets,
  Check
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

interface SpecimenLca {
  id: string;
  name: string;
  totalGwp: string;
  a1a3: { val: number; pct: number; color: string };
  a4a5: { val: number; pct: number; color: string };
  c1c4: { val: number; pct: number; color: string };
  isNegative?: boolean;
}

const LCA_SPECIMENS: SpecimenLca[] = [
  {
    id: "hemp",
    name: "Hempcrete Monolith",
    totalGwp: "-18 kgCO₂e/m²",
    a1a3: { val: -28, pct: 75, color: "#2E6F5E" },
    a4a5: { val: 6, pct: 15, color: "#B8B19F" },
    c1c4: { val: 4, pct: 10, color: "#C85A32" },
    isNegative: true,
  },
  {
    id: "basalt",
    name: "Pozzolanic Basalt",
    totalGwp: "82 kgCO₂e/m²",
    a1a3: { val: 56, pct: 68, color: "#C85A32" },
    a4a5: { val: 16, pct: 20, color: "#B8B19F" },
    c1c4: { val: 10, pct: 12, color: "#2E6F5E" },
  },
  {
    id: "cedar",
    name: "Charred Sugi Ban",
    totalGwp: "14 kgCO₂e/m²",
    a1a3: { val: 8, pct: 57, color: "#2E6F5E" },
    a4a5: { val: 4, pct: 29, color: "#B8B19F" },
    c1c4: { val: 2, pct: 14, color: "#C85A32" },
  },
];

const MaterialAnalyzers = () => {
  const { startCheckout, isLoading } = useCheckout();
  
  // Interactive Simulator States
  const [thicknessMm, setThicknessMm] = useState<number>(140);
  const [activePhysicsTab, setActivePhysicsTab] = useState<"thermal" | "acoustic">("thermal");
  const [activeLcaSpecimen, setActiveLcaSpecimen] = useState<string>("hemp");
  const [activeProvenanceTab, setActiveProvenanceTab] = useState<"chain" | "voc" | "quarry">("chain");

  const currentLca = LCA_SPECIMENS.find((s) => s.id === activeLcaSpecimen) || LCA_SPECIMENS[0];

  // Dynamic calculations based on thickness
  const calculatedRValue = (thicknessMm * 0.026).toFixed(2);
  const rTot = parseFloat(calculatedRValue) + 0.17;
  const calculatedUValue = (1 / rTot).toFixed(2);
  const calculatedDampingDb = Math.round(28 + (thicknessMm * 0.12));
  
  // Glaser surface & core temperatures (°C) based on indoor (+21°C) and outdoor (-5°C)
  const tSi = (21 - (0.13 / rTot) * 26).toFixed(1);
  const tSe = (-5 + (0.04 / rTot) * 26).toFixed(1);
  const tCore = (((parseFloat(tSi) + parseFloat(tSe)) / 2)).toFixed(1);

  // Dynamic acoustic absorption spectrum (125Hz to 4000Hz)
  const acousticFrequencies = [
    { freq: "125 Hz", alpha: Math.min(0.65, 0.15 + (thicknessMm - 50) * 0.0018).toFixed(2) },
    { freq: "250 Hz", alpha: Math.min(0.85, 0.35 + (thicknessMm - 50) * 0.0019).toFixed(2) },
    { freq: "500 Hz", alpha: Math.min(0.98, 0.65 + (thicknessMm - 50) * 0.0013).toFixed(2) },
    { freq: "1000 Hz", alpha: Math.min(0.99, 0.82 + (thicknessMm - 50) * 0.0007).toFixed(2) },
    { freq: "2000 Hz", alpha: Math.min(0.96, 0.88 + (thicknessMm - 50) * 0.0003).toFixed(2) },
    { freq: "4000 Hz", alpha: Math.min(0.94, 0.85 + (thicknessMm - 50) * 0.0003).toFixed(2) },
  ];
  const calculatedNrc = (
    (parseFloat(acousticFrequencies[1].alpha) +
      parseFloat(acousticFrequencies[2].alpha) +
      parseFloat(acousticFrequencies[3].alpha) +
      parseFloat(acousticFrequencies[4].alpha)) /
    4
  ).toFixed(2);

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

          {/* Specimen Switcher */}
          <div className="flex gap-1.5 p-1 bg-[#181816] rounded-lg border border-[#EAE7DF]/10 mb-4">
            {LCA_SPECIMENS.map((spec) => (
              <button
                key={spec.id}
                onClick={() => setActiveLcaSpecimen(spec.id)}
                className={`flex-1 py-1.5 text-[10px] font-mono uppercase tracking-wider rounded transition-colors ${
                  activeLcaSpecimen === spec.id
                    ? "bg-[#C85A32] text-white font-bold"
                    : "text-[#B8B19F] hover:text-[#F6F5F0]"
                }`}
              >
                {spec.name.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Interactive Visual Breakdown Chart */}
          <div className="p-4 rounded-xl bg-[#181816] border border-[#EAE7DF]/10 space-y-3.5 my-2">
            <div className="text-[11px] font-mono text-[#B8B19F] flex justify-between items-center">
              <span className="truncate pr-2">{currentLca.name.toUpperCase()}</span>
              <span className={currentLca.isNegative ? "text-[#2E6F5E] font-bold" : "text-[#C85A32] font-bold"}>
                {currentLca.totalGwp}
              </span>
            </div>

            {/* A1-A3 Raw Extraction */}
            <div>
              <div className="flex justify-between text-[10px] font-mono mb-1">
                <span className="text-[#EAE7DF]">A1–A3 Production &amp; Milling</span>
                <span className={currentLca.a1a3.val < 0 ? "text-[#2E6F5E] font-bold" : "text-[#C85A32] font-bold"}>
                  {currentLca.a1a3.val} kg ({currentLca.a1a3.pct}%)
                </span>
              </div>
              <div className="h-2 w-full bg-[#2A2720] rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500" 
                  style={{ width: `${currentLca.a1a3.pct}%`, backgroundColor: currentLca.a1a3.color }} 
                />
              </div>
            </div>

            {/* A4-A5 Logistics */}
            <div>
              <div className="flex justify-between text-[10px] font-mono mb-1">
                <span className="text-[#EAE7DF]">A4–A5 Transit &amp; Site Erection</span>
                <span className="text-[#EAE7DF]/80 font-bold">{currentLca.a4a5.val} kg ({currentLca.a4a5.pct}%)</span>
              </div>
              <div className="h-2 w-full bg-[#2A2720] rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500" 
                  style={{ width: `${currentLca.a4a5.pct}%`, backgroundColor: currentLca.a4a5.color }} 
                />
              </div>
            </div>

            {/* C1-C4 Circular Recovery */}
            <div>
              <div className="flex justify-between text-[10px] font-mono mb-1">
                <span className="text-[#EAE7DF]">C1–C4 Deconstruction &amp; Reclaim</span>
                <span className="text-[#2E6F5E] font-bold">{currentLca.c1c4.val} kg ({currentLca.c1c4.pct}%)</span>
              </div>
              <div className="h-2 w-full bg-[#2A2720] rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500" 
                  style={{ width: `${currentLca.c1c4.pct}%`, backgroundColor: currentLca.c1c4.color }} 
                />
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
          MODULE 02: Acoustic & Hygrothermal Simulator (Interactive Sliders + Glaser Curve)
         ========================================================================= */}
      <div className="flex flex-col justify-between rounded-2xl border-2 border-[#C85A32] bg-[#1F1E1B]/95 p-6 shadow-[0_12px_40px_rgba(200,90,50,0.15)] relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C85A32] text-white text-[10px] font-mono uppercase tracking-widest font-bold px-3 py-0.5 rounded-full shadow-md">
          INTERACTIVE SIMULATOR
        </div>

        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[#EAE7DF]/10 text-xs font-mono">
            <span className="text-[#C85A32] font-semibold">MODULE 02 // PHYSICS</span>
            <span className="text-[#B8B19F]/60">ISO 13788 / ISO 6946</span>
          </div>

          <div className="my-5">
            <div className="w-10 h-10 rounded-lg bg-[#C85A32]/10 border border-[#C85A32]/30 flex items-center justify-center text-[#C85A32] mb-3">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#F6F5F0]">Acoustic &amp; Hygrothermal Engine</h3>
            <p className="text-xs font-sans text-[#EAE7DF]/70 mt-1">
              Dynamic Glaser dew-point gradient and acoustic absorption curve computed from physical substrate thickness.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex gap-1.5 p-1 bg-[#181816] rounded-lg border border-[#EAE7DF]/10 mb-3">
            <button
              onClick={() => setActivePhysicsTab("thermal")}
              className={`flex-1 py-1 text-[10px] font-mono uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 ${
                activePhysicsTab === "thermal"
                  ? "bg-[#C85A32] text-white font-bold"
                  : "text-[#B8B19F] hover:text-[#F6F5F0]"
              }`}
            >
              <Thermometer className="w-3 h-3" />
              Glaser Gradient
            </button>
            <button
              onClick={() => setActivePhysicsTab("acoustic")}
              className={`flex-1 py-1 text-[10px] font-mono uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 ${
                activePhysicsTab === "acoustic"
                  ? "bg-[#C85A32] text-white font-bold"
                  : "text-[#B8B19F] hover:text-[#F6F5F0]"
              }`}
            >
              <Volume2 className="w-3 h-3" />
              Acoustic NRC
            </button>
          </div>

          {/* Interactive Thickness Slider */}
          <div className="p-3.5 rounded-xl bg-[#181816] border border-[#EAE7DF]/10 space-y-3 mb-3">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
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
                <span>300mm (Monolith)</span>
              </div>
            </div>

            {/* Dynamic Visual Curves */}
            {activePhysicsTab === "thermal" ? (
              <div className="space-y-2 pt-1 border-t border-[#EAE7DF]/10">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#EAE7DF]">GLASER DEW-POINT PROFILE</span>
                  <span className="text-[#2E6F5E] flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3 h-3" /> NO CONDENSATION
                  </span>
                </div>

                {/* Dynamic SVG Thermal Cross-Section */}
                <div className="w-full bg-[#121210] rounded-lg p-2 border border-white/5">
                  <svg viewBox="0 0 320 86" className="w-full h-auto overflow-visible font-mono text-[8px]">
                    {/* Background boundary guides */}
                    <rect x="10" y="8" width="60" height="70" fill="#252420" rx="3" opacity="0.5" />
                    <rect x="70" y="8" width={Math.min(180, 80 + (thicknessMm - 50) * 0.4)} height="70" fill="#2E6F5E" fillOpacity="0.12" stroke="#2E6F5E" strokeWidth="0.8" strokeDasharray="2 2" rx="3" />
                    <rect x={70 + Math.min(180, 80 + (thicknessMm - 50) * 0.4)} y="8" width="50" height="70" fill="#181816" rx="3" opacity="0.6" />

                    {/* Zone labels */}
                    <text x="18" y="20" fill="#B8B19F" fontSize="7">INDOOR +21°C</text>
                    <text x="80" y="20" fill="#EAE7DF" fontSize="7">SUBSTRATE ({thicknessMm}mm)</text>
                    <text x={75 + Math.min(180, 80 + (thicknessMm - 50) * 0.4)} y="20" fill="#75716B" fontSize="7">OUTDOOR -5°C</text>

                    {/* Temperature Line (Amber/Red) */}
                    <path
                      d={`M 15 28 L 70 32 L ${70 + Math.min(180, 80 + (thicknessMm - 50) * 0.4)} 68 L 305 72`}
                      fill="none"
                      stroke="#C85A32"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Dew Point Curve (Cyan/Teal dashed) */}
                    <path
                      d={`M 15 50 C 60 52, 90 56, ${70 + Math.min(180, 80 + (thicknessMm - 50) * 0.4)} 76 L 305 78`}
                      fill="none"
                      stroke="#2E6F5E"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />

                    {/* Node points */}
                    <circle cx="70" cy="32" r="3" fill="#C85A32" />
                    <text x="74" y="30" fill="#F6F5F0" fontSize="7">Tsi: {tSi}°C</text>

                    <circle cx={70 + Math.min(180, 80 + (thicknessMm - 50) * 0.4) / 2} cy="50" r="3" fill="#C85A32" />
                    <text x={70 + Math.min(180, 80 + (thicknessMm - 50) * 0.4) / 2 - 12} y="44" fill="#EAE7DF" fontSize="7">Tcore: {tCore}°C</text>

                    <circle cx={70 + Math.min(180, 80 + (thicknessMm - 50) * 0.4)} cy="68" r="3" fill="#C85A32" />
                    <text x={70 + Math.min(180, 80 + (thicknessMm - 50) * 0.4) - 22} y="64" fill="#75716B" fontSize="7">Tse: {tSe}°C</text>
                  </svg>
                </div>
              </div>
            ) : (
              <div className="space-y-2 pt-1 border-t border-[#EAE7DF]/10">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#EAE7DF]">OCTAVE ABSORPTION SPECTRUM (α)</span>
                  <span className="text-[#C85A32] font-semibold">NRC RATING: {calculatedNrc}</span>
                </div>

                {/* Dynamic Acoustic Spectrum Bars */}
                <div className="grid grid-cols-6 gap-1 bg-[#121210] p-2 rounded-lg border border-white/5">
                  {acousticFrequencies.map((f) => {
                    const heightPct = Math.round(parseFloat(f.alpha) * 100);
                    return (
                      <div key={f.freq} className="flex flex-col items-center gap-1">
                        <span className="text-[8px] font-mono text-[#EAE7DF]">{f.alpha}</span>
                        <div className="h-14 w-full bg-[#252420] rounded-sm flex items-end p-0.5">
                          <div
                            className="w-full bg-[#C85A32] rounded-xs transition-all duration-300"
                            style={{ height: `${heightPct}%` }}
                          />
                        </div>
                        <span className="text-[7px] font-mono text-[#B8B19F]/60 truncate">{f.freq}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Calculated Output Matrix */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#EAE7DF]/10">
              <div className="p-2 rounded bg-[#252420] border border-white/5">
                <span className="text-[9px] font-mono text-[#B8B19F] block">R-VALUE</span>
                <span className="text-base font-mono font-bold text-[#F6F5F0]">R-{calculatedRValue}</span>
                <span className="text-[8px] text-[#2E6F5E] block font-mono">m²·K/W</span>
              </div>
              <div className="p-2 rounded bg-[#252420] border border-white/5">
                <span className="text-[9px] font-mono text-[#B8B19F] block">U-VALUE</span>
                <span className="text-base font-mono font-bold text-[#F6F5F0]">{calculatedUValue}</span>
                <span className="text-[8px] text-[#B8B19F] block font-mono">W/m²·K</span>
              </div>
              <div className="p-2 rounded bg-[#252420] border border-white/5">
                <span className="text-[9px] font-mono text-[#B8B19F] block">ACOUSTIC</span>
                <span className="text-base font-mono font-bold text-[#F6F5F0]">{calculatedDampingDb} dB</span>
                <span className="text-[8px] text-[#C85A32] block font-mono">Rw Damping</span>
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

          {/* Ledger Navigation Tabs */}
          <div className="flex gap-1.5 p-1 bg-[#181816] rounded-lg border border-[#EAE7DF]/10 mb-4">
            <button
              onClick={() => setActiveProvenanceTab("chain")}
              className={`flex-1 py-1 text-[10px] font-mono uppercase tracking-wider rounded transition-colors ${
                activeProvenanceTab === "chain"
                  ? "bg-[#2E6F5E] text-white font-bold"
                  : "text-[#B8B19F] hover:text-[#F6F5F0]"
              }`}
            >
              Custody
            </button>
            <button
              onClick={() => setActiveProvenanceTab("voc")}
              className={`flex-1 py-1 text-[10px] font-mono uppercase tracking-wider rounded transition-colors ${
                activeProvenanceTab === "voc"
                  ? "bg-[#2E6F5E] text-white font-bold"
                  : "text-[#B8B19F] hover:text-[#F6F5F0]"
              }`}
            >
              VOC Lab
            </button>
            <button
              onClick={() => setActiveProvenanceTab("quarry")}
              className={`flex-1 py-1 text-[10px] font-mono uppercase tracking-wider rounded transition-colors ${
                activeProvenanceTab === "quarry"
                  ? "bg-[#2E6F5E] text-white font-bold"
                  : "text-[#B8B19F] hover:text-[#F6F5F0]"
              }`}
            >
              Origin
            </button>
          </div>

          {/* Provenance Verification Checklist Content */}
          <div className="p-4 rounded-xl bg-[#181816] border border-[#EAE7DF]/10 space-y-2.5 my-2">
            {activeProvenanceTab === "chain" && (
              <>
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">FSC / PEFC CERTIFIED:</span>
                  <span className="text-[#2E6F5E] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% VERIFIED
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">CERTIFICATE CODE:</span>
                  <span className="text-[#F6F5F0] font-mono">FSC-C149821</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">CRADLE TO CRADLE:</span>
                  <span className="text-[#C85A32] font-bold">GOLD TIER 2026</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B8B19F]">DEFORESTATION-FREE:</span>
                  <span className="text-[#2E6F5E] font-bold">EUDR COMPLIANT</span>
                </div>
              </>
            )}

            {activeProvenanceTab === "voc" && (
              <>
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">TOTAL VOC EMISSIONS:</span>
                  <span className="text-[#2E6F5E] font-bold">&lt; 0.05 g/L</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">FORMALDEHYDE:</span>
                  <span className="text-[#F6F5F0] font-mono">&lt; 0.002 ppm (Zero)</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">FRENCH VOC RATING:</span>
                  <span className="text-[#2E6F5E] font-bold">ÉMISSIONS A+</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B8B19F]">CDPH STANDARD v1.2:</span>
                  <span className="text-[#2E6F5E] font-bold">CLASSROOM &amp; OFFICE PASS</span>
                </div>
              </>
            )}

            {activeProvenanceTab === "quarry" && (
              <>
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">EXTRACTION GEO-GPS:</span>
                  <span className="text-[#F6F5F0] font-mono">45°28&apos;N 09°11&apos;E</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">TRANSIT FREIGHT:</span>
                  <span className="text-[#EAE7DF] font-bold">Electric Freight Rail</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">REGIONAL RADIAL:</span>
                  <span className="text-[#2E6F5E] font-bold">&lt; 300 km (LEED MRc3)</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B8B19F]">DISPATCH LEAD TIME:</span>
                  <span className="text-[#EAE7DF] font-bold">Guaranteed 2–4 Wks</span>
                </div>
              </>
            )}
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
