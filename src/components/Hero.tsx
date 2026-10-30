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
  Cpu
} from "lucide-react";

interface MaterialSpec {
  id: string;
  code: string;
  name: string;
  subTitle: string;
  embodiedCarbon: number; // kgCO2e/m2 (A1-A3)
  benchmarkComparison: string; // e.g. "-74% vs Portland OPC"
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
  const { startCheckout, isLoading } = useCheckout();

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 bg-[#181816] text-[#F6F5F0]">
      {/* Precision CAD grid background with isometric coordinate markers */}
      <div className="absolute inset-0 cad-grid-dark opacity-60 pointer-events-none" />
      
      {/* Architectural Vignette Glows */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[550px] h-[350px] bg-[#C85A32]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-[#2E6F5E]/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Top Tectonic Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-[#EAE7DF]/15 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#EAE7DF]/70">
            <span className="w-2 h-2 rounded-full bg-[#2E6F5E] animate-pulse" />
            <span>ISO 14025 / EN 15804+A2 COMPLIANT SPECIFICATION REPOSITORY</span>
          </div>
          <div className="flex items-center gap-4 text-[#B8B19F]/80">
            <span>DATABASE: 4,120 LOW-CARBON PHYSICAL SPECIMENS</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline text-[#C85A32]">STANDARDS: ASTM · DIN · BREEAM · LEED v4.1</span>
          </div>
        </div>

        {/* Hero Title & Subtext */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-[#C85A32]/10 text-[#C85A32] border border-[#C85A32]/30 mb-5">
            <Compass className="w-3.5 h-3.5" />
            Tactile Architectural Material Specification Platform
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-serif font-bold tracking-tight text-[#F6F5F0] leading-[1.08]">
            Specify with tectonic truth. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F5F0] via-[#EAE7DF] to-[#C85A32]">
              Audit carbon to the millimeter.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#EAE7DF]/80 font-sans leading-relaxed max-w-3xl">
            STRATA replaces ambiguous marketing PDFs with an interactive, verified engineering library. 
            Compare physical material assemblies, audit cradle-to-gate <span className="text-[#C85A32] font-mono font-medium">A1–A3 GWP</span> carbon curves, inspect structural cross-sections, and export parametric CSI MasterFormat spec sheets in one frictionless studio workbench.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Button
              size="lg"
              onClick={() => startCheckout("starter-dossier")}
              disabled={isLoading("starter-dossier")}
              className="bg-[#C85A32] text-white hover:bg-[#A64522] border border-[#C85A32] font-mono text-xs uppercase tracking-wider font-semibold px-7 py-6 rounded-md shadow-[0_0_30px_rgba(200,90,50,0.4)] transition-all duration-300"
            >
              {isLoading("starter-dossier") ? "Accessing Spec Vault..." : "Launch Material Library ($7 Preview Pass)"}
            </Button>

            <a
              href="#spec-sandbox"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-[#EAE7DF]/20 text-[#EAE7DF] hover:text-white hover:border-[#EAE7DF]/50 bg-[#181816]/70 backdrop-blur-md font-mono text-xs uppercase tracking-wider transition-all"
            >
              <Layers className="w-4 h-4 text-[#C85A32]" />
              Interact With Spec Sandbox
            </a>
          </div>
        </div>

        {/* =========================================================================
            LIVE MATERIAL SPEC SANDBOX (Interactive Architectural Model)
           ========================================================================= */}
        <div id="spec-sandbox" className="scroll-mt-32 rounded-2xl border border-[#EAE7DF]/20 bg-[#1F1E1B]/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] p-4 sm:p-6 md:p-8">
          {/* Sandbox Top Control Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#EAE7DF]/15">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#C85A32]" />
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#F6F5F0]">
                  Live Assembly Inspector &amp; Dynamic Cross-Section
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#B8B19F] mt-1 font-sans">
                Select an architectural assembly to inspect parametric structural strata, thermal properties, and verified EPD carbon footprints.
              </p>
            </div>

            {/* Material Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {MATERIAL_PRESETS.map((mat, idx) => {
                const isActive = mat.id === selectedMat.id;
                return (
                  <button
                    key={mat.id}
                    onClick={() => setSelectedMat(mat)}
                    className={`px-3.5 py-2 rounded font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 border ${
                      isActive
                        ? "bg-[#C85A32] text-white border-[#C85A32] shadow-[0_0_15px_rgba(200,90,50,0.4)] font-bold"
                        : "bg-[#181816] text-[#EAE7DF]/70 border-[#EAE7DF]/15 hover:border-[#EAE7DF]/40 hover:text-white"
                    }`}
                  >
                    <span className="opacity-60 text-[10px]">0{idx + 1}.</span>
                    <span>{mat.name.split(" ")[0]} {mat.name.split(" ")[1]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sandbox Main Workbench Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
            
            {/* Left Column: Interactive CAD Cross-Section Schematic (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-[#181816] border border-[#EAE7DF]/15 p-5 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE7DF]/10 text-xs font-mono">
                <span className="text-[#C85A32] font-semibold">{selectedMat.code} // SECTION A-A'</span>
                <span className="text-[#B8B19F]">SCALE 1:5 [mm]</span>
              </div>

              {/* Physical Strata Visualizer SVG */}
              <div className="my-6 relative py-4">
                <div className="text-[11px] font-mono text-[#B8B19F]/60 mb-2 flex justify-between">
                  <span>EXTERIOR WEATHER FACE</span>
                  <span>INTERIOR DATUM</span>
                </div>

                <div className="space-y-2">
                  {selectedMat.layers.map((layer, idx) => {
                    const isHovered = activeLayerHover === idx;
                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setActiveLayerHover(idx)}
                        onMouseLeave={() => setActiveLayerHover(null)}
                        className={`group relative p-3.5 rounded border transition-all cursor-pointer ${
                          isHovered 
                            ? "border-[#C85A32] bg-[#C85A32]/10 shadow-[0_0_20px_rgba(200,90,50,0.2)]" 
                            : "border-[#EAE7DF]/15 bg-[#252420]"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <span 
                              className="w-3 h-3 rounded-sm border border-white/20 shrink-0" 
                              style={{ backgroundColor: layer.color }}
                            />
                            <span className="font-medium text-[#F6F5F0]">{layer.name}</span>
                          </div>
                          <span className="text-[#C85A32] font-mono text-[11px] bg-[#181816] px-2 py-0.5 rounded border border-[#EAE7DF]/10">
                            {layer.depth}
                          </span>
                        </div>

                        {/* Architectural CAD Hatch Texture Bar */}
                        <div 
                          className="mt-2.5 h-3 rounded-sm w-full opacity-60 border border-white/10"
                          style={{
                            background: layer.hatchType === "concrete" 
                              ? "radial-gradient(#C85A32 1px, transparent 0)"
                              : layer.hatchType === "timber"
                              ? "repeating-linear-gradient(45deg, #2E6F5E, #2E6F5E 3px, transparent 3px, transparent 6px)"
                              : layer.hatchType === "earth"
                              ? "repeating-linear-gradient(0deg, #948D7A, #948D7A 2px, transparent 2px, transparent 5px)"
                              : "repeating-linear-gradient(-45deg, #5FA996, #5FA996 2px, transparent 2px, transparent 6px)",
                            backgroundSize: "6px 6px"
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Provenance Footer */}
              <div className="pt-3 border-t border-[#EAE7DF]/10 text-[11px] font-mono text-[#B8B19F] flex items-center justify-between">
                <span>QUARRY PROVENANCE:</span>
                <span className="text-[#EAE7DF]">{selectedMat.provenance}</span>
              </div>
            </div>

            {/* Right Column: Verified Physics, Fire, Acoustic & Carbon Matrix (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Material Title & EPD Badge */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F6F5F0]">
                    {selectedMat.name}
                  </h3>
                  {selectedMat.epdVerified && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#2E6F5E]/20 text-[#2E6F5E] border border-[#2E6F5E]/40 font-mono text-xs font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      EPD 3rd-Party Verified (EN 15804)
                    </span>
                  )}
                </div>
                <p className="text-sm font-sans text-[#EAE7DF]/75 leading-relaxed">
                  {selectedMat.subTitle}
                </p>
                <p className="text-xs font-sans text-[#B8B19F] mt-2 italic">
                  "{selectedMat.description}"
                </p>
              </div>

              {/* Carbon Benchmark Highlight Card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#181816] to-[#252420] border border-[#EAE7DF]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8B19F]">Cradle-to-Gate Carbon (Modules A1–A3)</span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-[#F6F5F0]">
                      {selectedMat.embodiedCarbon}
                    </span>
                    <span className="text-xs font-mono text-[#EAE7DF]/70">kg CO₂e / m²</span>
                  </div>
                </div>

                <div className="px-3.5 py-2 rounded-lg bg-[#2E6F5E]/15 border border-[#2E6F5E]/30 text-right">
                  <span className="text-xs font-mono font-bold text-[#2E6F5E] block">
                    {selectedMat.benchmarkComparison}
                  </span>
                  <span className="text-[10px] font-mono text-[#EAE7DF]/60">Baseline Embodied Carbon Delta</span>
                </div>
              </div>

              {/* Parametric Engineering Metric Matrix (4 Tiles) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* 1. Fire Resistance */}
                <div className="p-3.5 rounded-lg bg-[#181816] border border-[#EAE7DF]/15">
                  <div className="flex items-center gap-1.5 text-[#C85A32] text-xs font-mono mb-1">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Fire Rating</span>
                  </div>
                  <div className="text-sm font-bold text-[#F6F5F0] font-mono">{selectedMat.fireRating.split(" ")[0]}</div>
                  <div className="text-[10px] text-[#B8B19F] font-sans truncate">{selectedMat.fireRating}</div>
                </div>

                {/* 2. Acoustic NRC */}
                <div className="p-3.5 rounded-lg bg-[#181816] border border-[#EAE7DF]/15">
                  <div className="flex items-center gap-1.5 text-[#2E6F5E] text-xs font-mono mb-1">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Acoustic NRC</span>
                  </div>
                  <div className="text-sm font-bold text-[#F6F5F0] font-mono">{selectedMat.acousticNRC}</div>
                  <div className="text-[10px] text-[#B8B19F] font-sans">ASTM C423 / ISO 354</div>
                </div>

                {/* 3. Thermal R-Value */}
                <div className="p-3.5 rounded-lg bg-[#181816] border border-[#EAE7DF]/15">
                  <div className="flex items-center gap-1.5 text-[#EAE7DF] text-xs font-mono mb-1">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Thermal R-Val</span>
                  </div>
                  <div className="text-sm font-bold text-[#F6F5F0] font-mono">R-{selectedMat.rValue}</div>
                  <div className="text-[10px] text-[#B8B19F] font-sans">m²·K/W per 100mm</div>
                </div>

                {/* 4. Structural Tensile / Density */}
                <div className="p-3.5 rounded-lg bg-[#181816] border border-[#EAE7DF]/15">
                  <div className="flex items-center gap-1.5 text-[#B8B19F] text-xs font-mono mb-1">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Strength</span>
                  </div>
                  <div className="text-sm font-bold text-[#F6F5F0] font-mono">{selectedMat.tensileStrength.split(" ")[0]}</div>
                  <div className="text-[10px] text-[#B8B19F] font-sans truncate">{selectedMat.density}</div>
                </div>
              </div>

              {/* Action Strip: Export Revit / Spec Sheet Preview */}
              <div className="pt-4 border-t border-[#EAE7DF]/15 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-xs font-mono text-[#B8B19F]">
                  <span>LEAD TIME: <strong className="text-[#F6F5F0]">{selectedMat.leadTime}</strong></span>
                  <span>•</span>
                  <span>FORMAT: <strong className="text-[#C85A32]">CSI DIV 03 / 06 / 09</strong></span>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    onClick={() => startCheckout(selectedMat.id)}
                    className="bg-[#2E6F5E] hover:bg-[#24594B] text-white font-mono text-xs uppercase tracking-wider transition-all"
                  >
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    Requisition BIM Package
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
