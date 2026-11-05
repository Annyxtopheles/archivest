import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCheckout } from "@/hooks/use-checkout";
import { 
  Flame, 
  Leaf, 
  Volume2, 
  Layers, 
  Download, 
  CheckCircle2, 
  Compass, 
  ArrowUpRight, 
  ShieldCheck, 
  Cpu, 
  FileText,
  Calculator
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { SpecSheetModal } from "./SpecSheetModal";
import BimVaultModal from "./BimVaultModal";

interface MaterialSpec {
  id: string;
  code: string;
  name: string;
  subTitle: string;
  embodiedCarbon: number; // kgCO2e/m2 (A1-A3)
  benchmarkComparison: string; // e.g. "-74% vs Portland OPC"
  baselineCarbon: number;
  baselineName: string;
  fireRating: string; // ASTM E84 / EN 13501-1
  acousticNRC: number; // 0.0 - 1.0
  rValue: number; // Thermal resistance per 100mm
  tensileStrength: string;
  leadTime: string;
  density: string;
  epdVerified: boolean;
  provenance: string;
  layers: { name: string; depth: string; hatchType: "concrete" | "earth" | "timber" | "glass" | "insulation"; color: string }[];
  description: string;
}

const MATERIAL_PRESETS: MaterialSpec[] = [
  {
    id: "mat-01",
    code: "STR-CON-08",
    name: "Pozzolanic Basalt Concrete",
    subTitle: "Geopolymer hydraulic cement with 65% calcined clay & volcanic basalt aggregate",
    embodiedCarbon: 82,
    benchmarkComparison: "-76% vs Standard Portland OPC",
    baselineCarbon: 340,
    baselineName: "Standard Portland OPC Concrete",
    fireRating: "Class A (0 Flame / 0 Smoke)",
    acousticNRC: 0.15,
    rValue: 1.4,
    tensileStrength: "48.5 MPa",
    leadTime: "3.5 Weeks",
    density: "2,240 kg/m³",
    epdVerified: true,
    provenance: "Eifel Volcanic Basin, Rhineland Quarry #04",
    layers: [
      { name: "Silicate Weatherproofing Sealant", depth: "2mm", hatchType: "insulation", color: "#C85A32" },
      { name: "Pozzolanic Basalt Slag Matrix", depth: "120mm", hatchType: "concrete", color: "#948D7A" },
      { name: "Basalt Fiber Reinforcing Rebar Grid", depth: "10mm", hatchType: "earth", color: "#6E6857" },
      { name: "Aerated Cellular Backing Substrate", depth: "68mm", hatchType: "concrete", color: "#4D483A" },
    ],
    description: "Cold-cured geopolymer structural panel utilizing alkali-activated volcanic pozzolan. Eliminates high-heat limestone calcination, slashing embodied carbon while maintaining high compressive performance."
  },
  {
    id: "mat-02",
    code: "STR-HMP-14",
    name: "Compressed Hempcrete Block",
    subTitle: "Industrial hemp shiv with carbon-sequestering hydraulic lime binder",
    embodiedCarbon: -18, // Carbon negative sequestering
    benchmarkComparison: "Net Carbon Sequestering (-18 kg CO₂e)",
    baselineCarbon: 115,
    baselineName: "Aerated Concrete Block + XPS Insulation",
    fireRating: "Class B-s1, d0 (2-Hr Fire Barrier)",
    acousticNRC: 0.85,
    rValue: 3.8,
    tensileStrength: "1.2 MPa (Monolithic Infill)",
    leadTime: "2 Weeks",
    density: "340 kg/m³",
    epdVerified: true,
    provenance: "Champagne-Ardenne Agro-Cooperative, France",
    layers: [
      { name: "Vapor-Permeable Potassium Silicate Render", depth: "8mm", hatchType: "earth", color: "#EAE7DF" },
      { name: "Compressed Industrial Hemp Shiv Core", depth: "240mm", hatchType: "timber", color: "#2E6F5E" },
      { name: "Internal Lime Plaster Breathable Finish", depth: "12mm", hatchType: "insulation", color: "#C85A32" },
    ],
    description: "Vapor-permeable monolithic envelope block that sequesters more atmospheric carbon during agricultural growth than is released across manufacturing and regional logistics."
  },
  {
    id: "mat-03",
    code: "STR-TIM-22",
    name: "Charred Shou Sugi Ban Cedar",
    subTitle: "Yakisugi fire-preserved Japanese cypress cladding with natural tung oil cure",
    embodiedCarbon: 14,
    benchmarkComparison: "-89% vs Anodized Aluminum Siding",
    baselineCarbon: 130,
    baselineName: "Anodized Aluminum Siding Panels",
    fireRating: "Class B (Ignition Retarded by Charring)",
    acousticNRC: 0.55,
    rValue: 2.1,
    tensileStrength: "42.0 MPa (Parallel)",
    leadTime: "4 Weeks",
    density: "490 kg/m³",
    epdVerified: true,
    provenance: "FSC-Certified Yoshino Forest Basin, Nara",
    layers: [
      { name: "Pyrolyzed Carbon Crust (Flame Hardened)", depth: "3mm", hatchType: "concrete", color: "#181816" },
      { name: "Cold-Pressed Polymerized Tung Oil Seal", depth: "1mm", hatchType: "insulation", color: "#C85A32" },
      { name: "Heartwood Cryptomeria Japonica Timber", depth: "22mm", hatchType: "timber", color: "#6E6857" },
      { name: "Rear Ventilated Rain-screen Cavity", depth: "35mm", hatchType: "earth", color: "#2A2720" },
    ],
    description: "Traditional 800-year-old surface pyrolysis technique that renders architectural timber impervious to rot, insects, and UV breakdown without toxic chemical biocide treatments."
  },
  {
    id: "mat-04",
    code: "STR-GLS-39",
    name: "Recycled Kiln-Cast Glass Slab",
    subTitle: "100% post-consumer architectural cullet fired at low-thermal eutectic threshold",
    embodiedCarbon: 34,
    benchmarkComparison: "-62% vs Virgin Float Glass",
    baselineCarbon: 90,
    baselineName: "Virgin Float Glass Curtain Wall",
    fireRating: "Class A1 Non-Combustible",
    acousticNRC: 0.10,
    rValue: 1.1,
    tensileStrength: "65.0 MPa (Flexural)",
    leadTime: "6 Weeks",
    density: "2,510 kg/m³",
    epdVerified: true,
    provenance: "Murano Cullet Reclamation Facility, Veneto",
    layers: [
      { name: "Hydrophobic Nanoscale Sol-Gel Coating", depth: "0.2mm", hatchType: "insulation", color: "#2E6F5E" },
      { name: "Cast Sintered Cullet Matrix (Textured Core)", depth: "40mm", hatchType: "glass", color: "#5FA996" },
      { name: "Structural Stainless Steel Anchor Kerfs", depth: "12mm", hatchType: "concrete", color: "#B8B19F" },
    ],
    description: "Heavy structural translucent cladding formed entirely from reclaimed building demolition float glass, melted in low-emission electric kilns powered by grid-tied renewables."
  }
];

const Hero = () => {
  const [selectedMat, setSelectedMat] = useState<MaterialSpec>(MATERIAL_PRESETS[0]);
  const [activeLayerHover, setActiveLayerHover] = useState<number | null>(null);
  const [specModalOpen, setSpecModalOpen] = useState(false);
  const [bimVaultOpen, setBimVaultOpen] = useState(false);
  const [projectAreaM2, setProjectAreaM2] = useState<number>(4500);
  const { startCheckout, isLoading } = useCheckout();

  const deltaPerM2 = selectedMat.baselineCarbon - selectedMat.embodiedCarbon;
  const totalCarbonTonnes = ((selectedMat.embodiedCarbon * projectAreaM2) / 1000).toFixed(1);
  const totalSavedTonnes = ((deltaPerM2 * projectAreaM2) / 1000).toFixed(1);

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-20 bg-[#181816] text-[#F6F5F0]">
      {/* Precision CAD grid background */}
      <div className="absolute inset-0 cad-grid-dark opacity-40 pointer-events-none" />
      
      {/* Subtle Warm Vignette Glow */}
      <div className="absolute top-12 left-1/3 -translate-x-1/2 w-[500px] h-[300px] bg-[#C85A32]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Hero Title & Intro */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans font-medium text-[#C85A32] bg-[#C85A32]/10 border border-[#C85A32]/25 mb-6">
            <Compass className="w-3.5 h-3.5" />
            Material Specification Workbench
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#F6F5F0] leading-[1.12]">
            Specify with tectonic truth. <br />
            <span className="text-[#C85A32]">Audit carbon to the millimeter.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#EAE7DF]/75 font-sans leading-relaxed max-w-2xl">
            A verified material specification library for architects and structural engineers. Compare physical assemblies, audit lifecycle carbon, and export BIM-ready parameter sheets.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Button
              size="lg"
              asChild
              className="bg-[#C85A32] text-white hover:bg-[#A64522] font-sans text-sm font-medium px-6 py-3 rounded-lg shadow-sm transition-all"
            >
              <a href="#spec-sandbox">Explore Materials</a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-[#EAE7DF]/20 text-[#EAE7DF] hover:bg-white/5 hover:text-white font-sans text-sm font-normal px-6 py-3 rounded-lg"
            >
              <a href="#pricing">Pricing &amp; Access</a>
            </Button>
          </div>
        </div>

        {/* =========================================================================
            LIVE MATERIAL SPEC SANDBOX (Interactive Architectural Model)
           ========================================================================= */}
        <div id="spec-sandbox" className="scroll-mt-28 rounded-2xl border border-[#EAE7DF]/15 bg-[#1C1B18]/95 backdrop-blur-xl shadow-2xl p-6 sm:p-8 md:p-10 mb-8">
          {/* Sandbox Top Control Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EAE7DF]/10">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#F6F5F0]">
                Assembly Inspector
              </h2>
              <p className="text-xs sm:text-sm text-[#B8B19F] mt-1 font-sans">
                Interactive physical strata, thermal conductivity, and verified EPD carbon metrics.
              </p>
            </div>

            {/* Material Selector Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#141412] rounded-xl border border-white/5">
              {MATERIAL_PRESETS.map((mat) => {
                const isActive = mat.id === selectedMat.id;
                return (
                  <button
                    key={mat.id}
                    onClick={() => setSelectedMat(mat)}
                    className={`px-3.5 py-2 rounded-lg font-sans text-xs transition-all ${
                      isActive
                        ? "bg-[#C85A32] text-white font-medium shadow-sm"
                        : "text-[#EAE7DF]/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {mat.name.split(" ")[0]} {mat.name.split(" ")[1]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sandbox Main Workbench Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Left Column: Interactive CAD Cross-Section Schematic (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-[#141412] border border-[#EAE7DF]/10 p-6 relative">
              <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs">
                <span className="text-[#C85A32] font-mono font-medium">{selectedMat.code}</span>
                <span className="text-[#B8B19F]/70 font-mono">Scale 1:5</span>
              </div>

              {/* Physical Strata Layers */}
              <div className="my-6 space-y-2.5">
                {selectedMat.layers.map((layer, idx) => {
                  const isHovered = activeLayerHover === idx;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setActiveLayerHover(idx)}
                      onMouseLeave={() => setActiveLayerHover(null)}
                      className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                        isHovered 
                          ? "border-[#C85A32] bg-[#C85A32]/10" 
                          : "border-white/5 bg-[#1F1E1B] hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-sans">
                        <div className="flex items-center gap-2.5">
                          <span 
                            className="w-3.5 h-3.5 rounded-xs shrink-0 border border-white/10" 
                            style={{ backgroundColor: layer.color }}
                          />
                          <span className="text-[#F6F5F0] font-medium">{layer.name}</span>
                        </div>
                        <span className="text-[#EAE7DF]/70 font-mono text-[11px]">
                          {layer.depth}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-white/5 text-xs text-[#B8B19F]/70 font-sans flex items-center justify-between">
                <span>Origin:</span>
                <span className="text-[#EAE7DF]">{selectedMat.provenance.split(",")[0]}</span>
              </div>
            </div>

            {/* Right Column: Verified Performance Metrics (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Material Title & EPD Badge */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F6F5F0]">
                    {selectedMat.name}
                  </h3>
                  {selectedMat.epdVerified && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#2E6F5E]/15 text-[#2E6F5E] border border-[#2E6F5E]/30 text-xs font-sans font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      EPD Verified
                    </span>
                  )}
                </div>
                <p className="text-sm font-sans text-[#EAE7DF]/75 leading-relaxed">
                  {selectedMat.subTitle}
                </p>
              </div>

              {/* Carbon Metric Block */}
              <div className="p-5 rounded-xl bg-[#141412] border border-[#EAE7DF]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-sans text-[#B8B19F] block">Cradle-to-Gate Embodied Carbon (A1–A3)</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-[#F6F5F0]">
                      {selectedMat.embodiedCarbon}
                    </span>
                    <span className="text-xs text-[#EAE7DF]/70 font-sans">kg CO₂e / m²</span>
                  </div>
                </div>

                <div className="px-3.5 py-2 rounded-lg bg-[#2E6F5E]/15 border border-[#2E6F5E]/25 text-left sm:text-right">
                  <span className="text-xs font-sans font-semibold text-[#2E6F5E] block">
                    {selectedMat.benchmarkComparison}
                  </span>
                  <span className="text-[11px] text-[#B8B19F]/70 font-sans">vs Conventional Baseline</span>
                </div>
              </div>

              {/* Physical Properties (2x2 Grid) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-lg bg-[#141412] border border-white/5">
                  <span className="text-xs text-[#B8B19F] block font-sans">Fire Rating</span>
                  <div className="text-base font-serif font-bold text-[#F6F5F0] mt-1">{selectedMat.fireRating.split(" ")[0]}</div>
                  <div className="text-[10px] text-[#B8B19F]/70 truncate mt-0.5">ASTM E84</div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#141412] border border-white/5">
                  <span className="text-xs text-[#B8B19F] block font-sans">Acoustic</span>
                  <div className="text-base font-serif font-bold text-[#F6F5F0] mt-1">{selectedMat.acousticNRC} NRC</div>
                  <div className="text-[10px] text-[#B8B19F]/70 mt-0.5">ISO 354</div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#141412] border border-white/5">
                  <span className="text-xs text-[#B8B19F] block font-sans">Thermal</span>
                  <div className="text-base font-serif font-bold text-[#F6F5F0] mt-1">R-{selectedMat.rValue}</div>
                  <div className="text-[10px] text-[#B8B19F]/70 mt-0.5">m²·K/W per 100mm</div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#141412] border border-white/5">
                  <span className="text-xs text-[#B8B19F] block font-sans">Compressive</span>
                  <div className="text-base font-serif font-bold text-[#F6F5F0] mt-1">{selectedMat.tensileStrength.split(" ")[0]}</div>
                  <div className="text-[10px] text-[#B8B19F]/70 truncate mt-0.5">{selectedMat.density}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  size="sm"
                  onClick={() => setSpecModalOpen(true)}
                  className="bg-[#C85A32] hover:bg-[#A64522] text-white font-sans text-xs font-medium px-4 py-2.5 rounded-lg shadow-sm transition-all"
                >
                  <FileText className="w-3.5 h-3.5 mr-2" />
                  Inspect 3-Part CSI Spec
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setBimVaultOpen(true)}
                  className="border-[#EAE7DF]/20 text-[#EAE7DF] hover:bg-white/5 hover:text-white font-sans text-xs font-normal px-4 py-2.5 rounded-lg transition-all"
                >
                  <Download className="w-3.5 h-3.5 mr-2" />
                  Export BIM Package
                </Button>
              </div>

            </div>
          </div>
        </div>

        {/* =========================================================================
            WHOLE-BUILDING CARBON AUDIT CALCULATOR (Spacious Dedicated Card)
           ========================================================================= */}
        <div className="rounded-2xl border border-[#EAE7DF]/15 bg-[#1C1B18]/95 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EAE7DF]/10">
            <div>
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#C85A32]" />
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#F6F5F0]">
                  Whole-Building Carbon Audit
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#B8B19F] mt-1 font-sans">
                Simulate embodied carbon savings across your project floor area compared to conventional baselines.
              </p>
            </div>
            <div className="text-left md:text-right">
              <span className="text-xs font-sans text-[#B8B19F] block">Project Envelope Area</span>
              <span className="text-xl font-serif font-bold text-[#F6F5F0]">{projectAreaM2.toLocaleString()} m²</span>
            </div>
          </div>

          <div className="py-6 max-w-2xl">
            <Slider
              value={[projectAreaM2]}
              min={500}
              max={20000}
              step={250}
              onValueChange={(val) => setProjectAreaM2(val[0])}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-[#B8B19F]/60 font-sans mt-2">
              <span>500 m² (Pavilion)</span>
              <span>10,000 m² (Mid-Rise)</span>
              <span>20,000 m² (Campus)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
            <div className="p-4 rounded-xl bg-[#141412] border border-white/5">
              <span className="text-xs text-[#B8B19F] block font-sans">Conventional Baseline</span>
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#EAE7DF] mt-1">
                {((selectedMat.baselineCarbon * projectAreaM2) / 1000).toFixed(1)} t
              </div>
              <span className="text-[11px] text-[#B8B19F]/70 font-sans block mt-1">{selectedMat.baselineName}</span>
            </div>

            <div className="p-4 rounded-xl bg-[#141412] border border-white/5">
              <span className="text-xs text-[#B8B19F] block font-sans">STRATA Specified</span>
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#F6F5F0] mt-1">
                {totalCarbonTonnes} t
              </div>
              <span className="text-[11px] text-[#C85A32] font-sans block mt-1">{selectedMat.name}</span>
            </div>

            <div className="p-4 rounded-xl bg-[#2E6F5E]/10 border border-[#2E6F5E]/20">
              <span className="text-xs text-[#2E6F5E] font-medium block font-sans">Net Carbon Averted</span>
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#2E6F5E] mt-1">
                {totalSavedTonnes} Metric Tons
              </div>
              <span className="text-[11px] text-[#EAE7DF]/75 font-sans block mt-1">
                ~{Math.round(Number(totalSavedTonnes) * 0.22)} cars removed / year
              </span>
            </div>
          </div>
        </div>

        {/* 3-Part CSI MasterFormat Specification Sheet Modal */}
        <SpecSheetModal
          open={specModalOpen}
          onOpenChange={setSpecModalOpen}
          material={selectedMat}
        />

        {/* Central BIM Vault Modal */}
        <BimVaultModal
          open={bimVaultOpen}
          onOpenChange={setBimVaultOpen}
        />

      </div>
    </section>
  );
};

export default Hero;
