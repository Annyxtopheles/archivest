import { useState } from "react";
import { 
  BarChart3, 
  Activity, 
  Globe2, 
  Sliders, 
  CheckCircle2, 
  ShieldCheck,
  Thermometer,
  Volume2,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useCheckout } from "@/hooks/use-checkout";

export const MaterialAnalyzersIntro = () => (
  <div className="text-center max-w-3xl mx-auto px-4 mb-14" id="engineering-modules">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans font-medium text-[#2E6F5E] bg-[#2E6F5E]/10 border border-[#2E6F5E]/25 mb-4">
      <Activity className="w-3.5 h-3.5" />
      Engineering Engines
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#F6F5F0] leading-tight">
      Three Performance Simulators
    </h2>
    <p className="mt-3 text-base text-[#EAE7DF]/75 font-sans leading-relaxed">
      Subject candidate materials to lifecycle carbon diagnostics, hygrothermal dew-point simulations, and supply chain audits.
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
    name: "Charred Cedar",
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
  
  // Glaser surface & core temperatures (°C)
  const tSi = (21 - (0.13 / rTot) * 26).toFixed(1);
  const tSe = (-5 + (0.04 / rTot) * 26).toFixed(1);
  const tCore = (((parseFloat(tSi) + parseFloat(tSe)) / 2)).toFixed(1);

  // Dynamic acoustic absorption spectrum
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl w-full mx-auto">
      
      {/* =========================================================================
          MODULE 01: Lifecycle Carbon & EPD Analyzer
         ========================================================================= */}
      <div className="flex flex-col justify-between rounded-2xl border border-[#EAE7DF]/15 bg-[#1C1B18]/90 p-8 shadow-xl">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs">
            <span className="text-[#C85A32] font-mono font-medium">01 // LCA ANALYZER</span>
            <span className="text-[#B8B19F]/60">ISO 14044</span>
          </div>

          <div className="my-5">
            <div className="w-10 h-10 rounded-xl bg-[#C85A32]/10 border border-[#C85A32]/25 flex items-center justify-center text-[#C85A32] mb-3">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif font-normal text-[#F6F5F0]">Lifecycle Carbon</h3>
            <p className="text-xs font-sans text-[#EAE7DF]/70 mt-1">
              Deconstructs cradle-to-gate extraction and end-of-life circularity across EN 15804 modules.
            </p>
          </div>

          {/* Specimen Switcher */}
          <div className="flex gap-1 p-1 bg-[#141412] rounded-lg border border-white/5 mb-4">
            {LCA_SPECIMENS.map((spec) => (
              <button
                key={spec.id}
                onClick={() => setActiveLcaSpecimen(spec.id)}
                className={`flex-1 py-1 text-xs font-sans rounded transition-colors ${
                  activeLcaSpecimen === spec.id
                    ? "bg-[#C85A32] text-white font-medium"
                    : "text-[#B8B19F] hover:text-[#F6F5F0]"
                }`}
              >
                {spec.name.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Visual Breakdown */}
          <div className="p-4 rounded-xl bg-[#141412] border border-white/5 space-y-3.5 my-2">
            <div className="text-xs font-sans text-[#B8B19F] flex justify-between items-center">
              <span className="truncate pr-2">{currentLca.name}</span>
              <span className={currentLca.isNegative ? "text-[#2E6F5E] font-semibold" : "text-[#C85A32] font-semibold"}>
                {currentLca.totalGwp}
              </span>
            </div>

            {/* A1-A3 */}
            <div>
              <div className="flex justify-between text-xs font-sans mb-1">
                <span className="text-[#EAE7DF]">A1–A3 Production</span>
                <span className={currentLca.a1a3.val < 0 ? "text-[#2E6F5E] font-medium" : "text-[#C85A32] font-medium"}>
                  {currentLca.a1a3.val} kg ({currentLca.a1a3.pct}%)
                </span>
              </div>
              <div className="h-1.5 w-full bg-[#252420] rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-300" 
                  style={{ width: `${currentLca.a1a3.pct}%`, backgroundColor: currentLca.a1a3.color }} 
                />
              </div>
            </div>

            {/* A4-A5 */}
            <div>
              <div className="flex justify-between text-xs font-sans mb-1">
                <span className="text-[#EAE7DF]">A4–A5 Logistics</span>
                <span className="text-[#EAE7DF]/80 font-medium">{currentLca.a4a5.val} kg ({currentLca.a4a5.pct}%)</span>
              </div>
              <div className="h-1.5 w-full bg-[#252420] rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-300" 
                  style={{ width: `${currentLca.a4a5.pct}%`, backgroundColor: currentLca.a4a5.color }} 
                />
              </div>
            </div>

            {/* C1-C4 */}
            <div>
              <div className="flex justify-between text-xs font-sans mb-1">
                <span className="text-[#EAE7DF]">C1–C4 Reclaim</span>
                <span className="text-[#2E6F5E] font-medium">{currentLca.c1c4.val} kg ({currentLca.c1c4.pct}%)</span>
              </div>
              <div className="h-1.5 w-full bg-[#252420] rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-300" 
                  style={{ width: `${currentLca.c1c4.pct}%`, backgroundColor: currentLca.c1c4.color }} 
                />
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-[#B8B19F]">
              <span className="flex items-center gap-1 text-[#2E6F5E]">
                <ShieldCheck className="w-3.5 h-3.5" /> Type III Verified
              </span>
              <span>GWP-GHG 100a</span>
            </div>
          </div>
        </div>

        <div className="pt-5 border-t border-white/5">
          <Button
            size="sm"
            onClick={() => startCheckout("lca-analyzer")}
            disabled={isLoading("lca-analyzer")}
            className="w-full bg-[#141412] hover:bg-[#252420] border border-white/10 text-[#EAE7DF] font-sans text-xs py-2 rounded-lg"
          >
            Launch EPD Comparer
          </Button>
        </div>
      </div>

      {/* =========================================================================
          MODULE 02: Acoustic & Hygrothermal Simulator
         ========================================================================= */}
      <div className="flex flex-col justify-between rounded-2xl border border-[#EAE7DF]/15 bg-[#1C1B18]/90 p-8 shadow-xl">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs">
            <span className="text-[#C85A32] font-mono font-medium">02 // PHYSICS ENGINE</span>
            <span className="text-[#B8B19F]/60">ISO 13788</span>
          </div>

          <div className="my-5">
            <div className="w-10 h-10 rounded-xl bg-[#C85A32]/10 border border-[#C85A32]/25 flex items-center justify-center text-[#C85A32] mb-3">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif font-normal text-[#F6F5F0]">Hygrothermal &amp; Acoustics</h3>
            <p className="text-xs font-sans text-[#EAE7DF]/70 mt-1">
              Glaser dew-point gradient and acoustic absorption computed from substrate depth.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex gap-1 p-1 bg-[#141412] rounded-lg border border-white/5 mb-3">
            <button
              onClick={() => setActivePhysicsTab("thermal")}
              className={`flex-1 py-1 text-xs font-sans rounded transition-colors flex items-center justify-center gap-1.5 ${
                activePhysicsTab === "thermal"
                  ? "bg-[#C85A32] text-white font-medium"
                  : "text-[#B8B19F] hover:text-[#F6F5F0]"
              }`}
            >
              <Thermometer className="w-3.5 h-3.5" />
              Thermal &amp; Dew Point
            </button>
            <button
              onClick={() => setActivePhysicsTab("acoustic")}
              className={`flex-1 py-1 text-xs font-sans rounded transition-colors flex items-center justify-center gap-1.5 ${
                activePhysicsTab === "acoustic"
                  ? "bg-[#C85A32] text-white font-medium"
                  : "text-[#B8B19F] hover:text-[#F6F5F0]"
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              Acoustic NRC
            </button>
          </div>

          {/* Thickness Slider */}
          <div className="p-3.5 rounded-xl bg-[#141412] border border-white/5 space-y-3 mb-3">
            <div>
              <div className="flex justify-between text-xs font-sans mb-1.5">
                <span className="text-[#B8B19F]">Assembly Depth:</span>
                <span className="text-[#C85A32] font-semibold">{thicknessMm} mm</span>
              </div>
              <Slider
                value={[thicknessMm]}
                min={50}
                max={300}
                step={10}
                onValueChange={(vals) => setThicknessMm(vals[0])}
                className="py-1"
              />
              <div className="flex justify-between text-[10px] text-[#B8B19F]/60 font-sans mt-1">
                <span>50mm</span>
                <span>300mm</span>
              </div>
            </div>

            {/* Dynamic Curves */}
            {activePhysicsTab === "thermal" ? (
              <div className="space-y-2 pt-1 border-t border-white/5">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-[#EAE7DF]">Glaser Thermal Gradient</span>
                  <span className="text-[#2E6F5E] flex items-center gap-1 text-[11px] font-medium">
                    <CheckCircle2 className="w-3 h-3" /> Condensation Safe
                  </span>
                </div>

                {/* SVG Curve */}
                <div className="w-full bg-[#181816] rounded-lg p-2 border border-white/5">
                  <svg viewBox="0 0 320 80" className="w-full h-auto text-[9px] font-sans">
                    <path
                      d={`M 15 25 L 70 30 L ${70 + Math.min(180, 80 + (thicknessMm - 50) * 0.4)} 62 L 305 66`}
                      fill="none"
                      stroke="#C85A32"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d={`M 15 48 C 60 50, 90 54, ${70 + Math.min(180, 80 + (thicknessMm - 50) * 0.4)} 72 L 305 74`}
                      fill="none"
                      stroke="#2E6F5E"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    <circle cx="70" cy="30" r="3" fill="#C85A32" />
                    <text x="74" y="24" fill="#F6F5F0">Tsi: {tSi}°C</text>
                    <circle cx={70 + Math.min(180, 80 + (thicknessMm - 50) * 0.4)} cy="62" r="3" fill="#C85A32" />
                    <text x={70 + Math.min(180, 80 + (thicknessMm - 50) * 0.4) - 25} y="56" fill="#B8B19F">Tse: {tSe}°C</text>
                  </svg>
                </div>
              </div>
            ) : (
              <div className="space-y-2 pt-1 border-t border-white/5">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-[#EAE7DF]">Absorption Spectrum (α)</span>
                  <span className="text-[#C85A32] font-semibold">NRC: {calculatedNrc}</span>
                </div>

                <div className="grid grid-cols-6 gap-1 bg-[#181816] p-2 rounded-lg border border-white/5">
                  {acousticFrequencies.map((f) => {
                    const heightPct = Math.round(parseFloat(f.alpha) * 100);
                    return (
                      <div key={f.freq} className="flex flex-col items-center gap-1">
                        <span className="text-[9px] text-[#EAE7DF]">{f.alpha}</span>
                        <div className="h-12 w-full bg-[#252420] rounded-sm flex items-end p-0.5">
                          <div
                            className="w-full bg-[#C85A32] rounded-xs transition-all duration-300"
                            style={{ height: `${heightPct}%` }}
                          />
                        </div>
                        <span className="text-[8px] text-[#B8B19F]/60 truncate">{f.freq}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Calculated Output Matrix */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
              <div className="p-2 rounded bg-[#181816] border border-white/5">
                <span className="text-[10px] text-[#B8B19F] block">R-Value</span>
                <span className="text-sm font-semibold text-[#F6F5F0]">R-{calculatedRValue}</span>
              </div>
              <div className="p-2 rounded bg-[#181816] border border-white/5">
                <span className="text-[10px] text-[#B8B19F] block">U-Value</span>
                <span className="text-sm font-semibold text-[#F6F5F0]">{calculatedUValue}</span>
              </div>
              <div className="p-2 rounded bg-[#181816] border border-white/5">
                <span className="text-[10px] text-[#B8B19F] block">Damping</span>
                <span className="text-sm font-semibold text-[#F6F5F0]">{calculatedDampingDb} dB</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 border-t border-white/5">
          <Button
            size="sm"
            onClick={() => startCheckout("physics-simulator")}
            disabled={isLoading("physics-simulator")}
            className="w-full bg-[#C85A32] hover:bg-[#A64522] text-white font-sans text-xs py-2 rounded-lg"
          >
            Run Hygrothermal Profile
          </Button>
        </div>
      </div>

      {/* =========================================================================
          MODULE 03: Global Quarry & Mill Provenance Ledger
         ========================================================================= */}
      <div className="flex flex-col justify-between rounded-2xl border border-[#EAE7DF]/15 bg-[#1C1B18]/90 p-8 shadow-xl">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs">
            <span className="text-[#2E6F5E] font-mono font-medium">03 // PROVENANCE</span>
            <span className="text-[#B8B19F]/60">CHAIN OF CUSTODY</span>
          </div>

          <div className="my-5">
            <div className="w-10 h-10 rounded-xl bg-[#2E6F5E]/10 border border-[#2E6F5E]/25 flex items-center justify-center text-[#2E6F5E] mb-3">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif font-normal text-[#F6F5F0]">Provenance Ledger</h3>
            <p className="text-xs font-sans text-[#EAE7DF]/70 mt-1">
              Tracks quarry geolocation, legal chain of custody, FSC compliance, and low-VOC emissions.
            </p>
          </div>

          {/* Ledger Navigation Tabs */}
          <div className="flex gap-1 p-1 bg-[#141412] rounded-lg border border-white/5 mb-4">
            <button
              onClick={() => setActiveProvenanceTab("chain")}
              className={`flex-1 py-1 text-xs font-sans rounded transition-colors ${
                activeProvenanceTab === "chain"
                  ? "bg-[#2E6F5E] text-white font-medium"
                  : "text-[#B8B19F] hover:text-[#F6F5F0]"
              }`}
            >
              Custody
            </button>
            <button
              onClick={() => setActiveProvenanceTab("voc")}
              className={`flex-1 py-1 text-xs font-sans rounded transition-colors ${
                activeProvenanceTab === "voc"
                  ? "bg-[#2E6F5E] text-white font-medium"
                  : "text-[#B8B19F] hover:text-[#F6F5F0]"
              }`}
            >
              VOC Lab
            </button>
            <button
              onClick={() => setActiveProvenanceTab("quarry")}
              className={`flex-1 py-1 text-xs font-sans rounded transition-colors ${
                activeProvenanceTab === "quarry"
                  ? "bg-[#2E6F5E] text-white font-medium"
                  : "text-[#B8B19F] hover:text-[#F6F5F0]"
              }`}
            >
              Origin
            </button>
          </div>

          {/* Checklist */}
          <div className="p-4 rounded-xl bg-[#141412] border border-white/5 space-y-2.5 my-2">
            {activeProvenanceTab === "chain" && (
              <>
                <div className="flex items-center justify-between text-xs font-sans pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">FSC / PEFC Certified:</span>
                  <span className="text-[#2E6F5E] font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-sans pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">Certificate Code:</span>
                  <span className="text-[#F6F5F0] font-mono">FSC-C149821</span>
                </div>
                <div className="flex items-center justify-between text-xs font-sans pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">Cradle to Cradle:</span>
                  <span className="text-[#C85A32] font-medium">Gold Tier 2026</span>
                </div>
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-[#B8B19F]">Deforestation-Free:</span>
                  <span className="text-[#2E6F5E] font-medium">EUDR Compliant</span>
                </div>
              </>
            )}

            {activeProvenanceTab === "voc" && (
              <>
                <div className="flex items-center justify-between text-xs font-sans pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">Total VOC:</span>
                  <span className="text-[#2E6F5E] font-medium">&lt; 0.05 g/L</span>
                </div>
                <div className="flex items-center justify-between text-xs font-sans pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">Formaldehyde:</span>
                  <span className="text-[#F6F5F0] font-mono">&lt; 0.002 ppm</span>
                </div>
                <div className="flex items-center justify-between text-xs font-sans pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">French VOC:</span>
                  <span className="text-[#2E6F5E] font-medium">Émissions A+</span>
                </div>
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-[#B8B19F]">CDPH Standard:</span>
                  <span className="text-[#2E6F5E] font-medium">Pass (v1.2)</span>
                </div>
              </>
            )}

            {activeProvenanceTab === "quarry" && (
              <>
                <div className="flex items-center justify-between text-xs font-sans pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">Coordinates:</span>
                  <span className="text-[#F6F5F0] font-mono">45°28&apos;N 09°11&apos;E</span>
                </div>
                <div className="flex items-center justify-between text-xs font-sans pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">Freight Rail:</span>
                  <span className="text-[#EAE7DF]">Electric Rail</span>
                </div>
                <div className="flex items-center justify-between text-xs font-sans pb-2 border-b border-white/5">
                  <span className="text-[#B8B19F]">Regional Radius:</span>
                  <span className="text-[#2E6F5E] font-medium">&lt; 300 km (LEED)</span>
                </div>
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-[#B8B19F]">Lead Time:</span>
                  <span className="text-[#EAE7DF]">2–4 Weeks</span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="pt-5 border-t border-white/5">
          <Button
            size="sm"
            onClick={() => startCheckout("provenance-ledger")}
            disabled={isLoading("provenance-ledger")}
            className="w-full bg-[#141412] hover:bg-[#252420] border border-white/10 text-[#EAE7DF] font-sans text-xs py-2 rounded-lg"
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
