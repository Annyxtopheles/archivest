import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileSpreadsheet, 
  ExternalLink, 
  CheckCircle2, 
  Sliders, 
  ShieldCheck, 
  Flame, 
  Volume2, 
  Layers,
  ArrowRight,
  Download
} from "lucide-react";
import { useCheckout } from "@/hooks/use-checkout";

interface WorkflowStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  cadSvg: React.ReactNode;
  specs: { label: string; value: string }[];
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Tactile Sample Ingestion & Mineral Profiling",
    subtitle: "From Geological Field Extract to Calibrated Digital Twin",
    badge: "STAGE 01 // MATERIAL INGESTION",
    description: "Every stone quarry, timber basin, and agricultural kiln specimen is indexed with micro-CT porosity scans, density matrices, and legal extraction certifications before entering the central library.",
    cadSvg: (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#181816] rounded-xl border border-[#EAE7DF]/15 font-mono text-xs">
        <div className="w-full flex justify-between text-[10px] text-[#B8B19F] pb-2 border-b border-white/10 mb-4">
          <span>SPECIMEN ID: GEO-Q-8921</span>
          <span className="text-[#C85A32]">RAW INGESTION OK</span>
        </div>
        {/* Procedural CAD Grid Specimen */}
        <div className="w-36 h-36 border-2 border-dashed border-[#C85A32]/60 rounded-lg flex items-center justify-center relative bg-[#252420]">
          <div className="absolute inset-2 border border-[#EAE7DF]/20 flex items-center justify-center">
            <span className="text-[#C85A32] font-mono font-bold text-center text-[10px]">
              CALCINED CLAY<br/>SUBSTRATE<br/>48 MPa
            </span>
          </div>
          <div className="absolute -top-2 -right-2 bg-[#2E6F5E] text-white text-[8px] px-1.5 py-0.5 rounded">
            99.4% PURITY
          </div>
        </div>
        <div className="w-full mt-4 text-[10px] text-[#EAE7DF]/70 flex justify-between">
          <span>DENSITY: 2,180 kg/m³</span>
          <span>POROSITY: 4.2%</span>
        </div>
      </div>
    ),
    specs: [
      { label: "Extraction Basin", value: "Eifel Rhineland Basin" },
      { label: "Mineral Composition", value: "Alkali-Activated Pozzolan" },
      { label: "Legal Chain of Custody", value: "Verified Non-Conflict EU" }
    ]
  },
  {
    step: "02",
    title: "Parametric Hygrothermal & Acoustic Simulation",
    subtitle: "Multi-Layered Wall Envelope Stress Modeling",
    badge: "STAGE 02 // PERFORMANCE AUDIT",
    description: "Combine discrete interior finishes, insulation batts, and rain-screen cladding into an integrated composite assembly. Verify condensation dew-points (Glaser method) and ISO 354 reverberation damping before commissioning fabrication.",
    cadSvg: (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#181816] rounded-xl border border-[#EAE7DF]/15 font-mono text-xs">
        <div className="w-full flex justify-between text-[10px] text-[#B8B19F] pb-2 border-b border-white/10 mb-4">
          <span>GLASER DEW-POINT ANALYSIS</span>
          <span className="text-[#2E6F5E]">ZERO INTERSTITIAL CONDENSATION</span>
        </div>
        {/* Dynamic Thermal Curve SVG */}
        <svg viewBox="0 0 200 100" className="w-full h-32 stroke-current">
          <line x1="10" y1="90" x2="190" y2="90" stroke="rgba(234,231,223,0.2)" strokeWidth="1"/>
          <line x1="10" y1="10" x2="10" y2="90" stroke="rgba(234,231,223,0.2)" strokeWidth="1"/>
          {/* Temperature gradient drop across envelope */}
          <path d="M 20 20 Q 80 25, 110 55 T 180 85" fill="none" stroke="#C85A32" strokeWidth="2.5"/>
          {/* Saturation pressure boundary */}
          <path d="M 20 35 Q 80 40, 110 70 T 180 92" fill="none" stroke="#2E6F5E" strokeWidth="1.5" strokeDasharray="3 3"/>
        </svg>
        <div className="w-full mt-2 text-[10px] text-[#EAE7DF]/70 flex justify-between">
          <span className="text-[#C85A32]">— Ext: -5°C</span>
          <span className="text-[#2E6F5E]">--- Vapor Safe Limit</span>
          <span className="text-[#EAE7DF]">+ Int: +21°C</span>
        </div>
      </div>
    ),
    specs: [
      { label: "Calculated R-Value", value: "R-4.8 m²·K/W" },
      { label: "Acoustic Attenuation", value: "Rw + Ctr = 52 dB" },
      { label: "ASTM E84 Fire Index", value: "Flame 0 / Smoke 5 (Class A)" }
    ]
  },
  {
    step: "03",
    title: "Automated CSI MasterFormat & Revit BIM Export",
    subtitle: "Parametric Schedule Bindings for Tender Packages",
    badge: "STAGE 03 // TENDER EXPORT",
    description: "Export clean, immutable IFC files, Autodesk Revit material parameters, and formatted Word/PDF project specification sheets formatted to CSI MasterFormat Divisions 03, 04, 06, and 09.",
    cadSvg: (
      <div className="w-full h-full flex flex-col justify-between p-5 bg-[#181816] rounded-xl border border-[#EAE7DF]/15 font-mono text-xs">
        <div className="flex justify-between items-center text-[10px] text-[#B8B19F] pb-2 border-b border-white/10">
          <span>PROJECT_SPEC_MANUAL.CSI</span>
          <span className="bg-[#2E6F5E]/20 text-[#2E6F5E] px-1.5 py-0.5 rounded">REVIT 2026 READY</span>
        </div>
        <div className="space-y-1.5 my-3 text-[11px] text-[#EAE7DF]/90 font-mono">
          <div className="text-[#C85A32] font-bold">SECTION 03 30 53 - GEOPOLYMER LOW-CARBON CONCRETE</div>
          <div className="pl-3 text-[10px] text-[#B8B19F]">PART 2 - PRODUCTS</div>
          <div className="pl-6 text-[10px] text-[#EAE7DF]/70">2.1 MANUFACTURER: MatterLab STRATA Certified #892</div>
          <div className="pl-6 text-[10px] text-[#2E6F5E]">2.2 GWP LIMIT: Max 95 kgCO2e/m3 (Verified EPD)</div>
          <div className="pl-6 text-[10px] text-[#EAE7DF]/70">2.3 COMPLIANCE: ACI 318-19 / ASTM C1157</div>
        </div>
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#C85A32]">
          <span>OUTPUT: IFC4 / RVT / PDF SPEC</span>
          <span className="text-[#2E6F5E]">PASSED QA AUDIT</span>
        </div>
      </div>
    ),
    specs: [
      { label: "BIM Classification", value: "OmniClass Table 23 / IFC4" },
      { label: "CSI Divisions", value: "Div 03 / Div 06 / Div 09" },
      { label: "Export Formats", value: "Revit (.rvt), IFC, ArchiCAD, PDF" }
    ]
  }
];

const HowItWorks = () => {
  const { startCheckout, isLoading } = useCheckout();

  return (
    <section className="bg-[#181816] relative overflow-hidden py-20 text-[#F6F5F0]">
      {/* Precision CAD grid */}
      <div className="absolute inset-0 cad-grid-dark opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C85A32] font-semibold">
            THE STRATA METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F6F5F0] mt-2">
            The Architect's Specification Workflow
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#EAE7DF]/75 font-sans leading-relaxed">
            A linear, verifiable pipeline connecting earth, computational physics, and BIM construction documentation.
          </p>
        </div>

        {/* 3 Step Deep Dive Cards */}
        <div className="max-w-6xl mx-auto space-y-10">
          {WORKFLOW_STEPS.map((stepItem, idx) => (
            <Card
              key={stepItem.step}
              className="bg-[#1F1E1B]/95 border-[#EAE7DF]/15 hover:border-[#C85A32]/40 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Specs & Copy Column (7 Cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#C85A32]/15 text-[#C85A32] border border-[#C85A32]/30">
                        {stepItem.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F6F5F0] leading-tight">
                      {stepItem.title}
                    </h3>

                    <p className="text-sm font-mono text-[#EAE7DF]/80">
                      {stepItem.subtitle}
                    </p>

                    <p className="text-sm font-sans text-[#B8B19F] leading-relaxed pt-1">
                      {stepItem.description}
                    </p>

                    {/* Spec Key-Value Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#EAE7DF]/10">
                      {stepItem.specs.map((s, i) => (
                        <div key={i} className="p-2.5 rounded bg-[#181816] border border-white/5 font-mono">
                          <span className="text-[10px] text-[#B8B19F] block">{s.label}</span>
                          <span className="text-xs font-semibold text-[#F6F5F0] block mt-0.5">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right CAD / Schematic Column (5 Cols) */}
                  <div className="lg:col-span-5 h-[280px]">
                    {stepItem.cadSvg}
                  </div>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Banner Trigger */}
        <div className="max-w-4xl mx-auto text-center mt-16 pt-10 border-t border-[#EAE7DF]/15">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F6F5F0] mb-4">
            Ready to audit your studio's active project schedules?
          </h3>
          <p className="text-sm sm:text-base text-[#EAE7DF]/75 font-sans mb-6">
            Access 4,000+ verified low-carbon physical assemblies and export verifiable CSI spec sheets today.
          </p>
          <Button
            size="lg"
            onClick={() => startCheckout("starter-dossier")}
            disabled={isLoading("starter-dossier")}
            className="bg-[#C85A32] text-white hover:bg-[#A64522] font-mono text-xs uppercase tracking-wider font-semibold px-8 py-5 rounded shadow-[0_0_25px_rgba(200,90,50,0.4)] transition-all"
          >
            Requisition Studio Access ($7 Preview Pass)
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
