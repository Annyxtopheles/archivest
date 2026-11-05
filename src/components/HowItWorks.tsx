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
  description: string;
  cadSvg: React.ReactNode;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Sample Ingestion & Mineral Profiling",
    description: "Every quarry, kiln, and mill specimen is indexed with micro-CT scans, dry density matrices, and certified chain-of-custody documentation before entering the library.",
    cadSvg: (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#141412] rounded-xl border border-white/5 text-xs">
        <div className="w-full flex justify-between text-xs text-[#B8B19F] pb-3 border-b border-white/5 mb-4">
          <span className="font-mono">SPECIMEN // GEO-892</span>
          <span className="text-[#2E6F5E] font-medium">Verified EPD</span>
        </div>
        <div className="w-28 h-28 border border-[#C85A32]/40 rounded-xl flex items-center justify-center relative bg-[#1F1E1B]">
          <span className="text-[#F6F5F0] font-serif font-normal text-center text-xs">
            Pozzolanic<br />Basalt
          </span>
        </div>
        <div className="w-full mt-4 text-xs text-[#B8B19F]/80 flex justify-between font-mono">
          <span>2,180 kg/m³</span>
          <span>48.5 MPa</span>
        </div>
      </div>
    ),
  },
  {
    step: "02",
    title: "Hygrothermal & Acoustic Simulation",
    description: "Model composite wall assemblies under ASTM E84 flame spread, ISO 354 sound absorption, and Glaser condensation dew-point methods before tender release.",
    cadSvg: (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#141412] rounded-xl border border-white/5 text-xs">
        <div className="w-full flex justify-between text-xs text-[#B8B19F] pb-3 border-b border-white/5 mb-4">
          <span className="font-mono">GLASER ANALYSIS</span>
          <span className="text-[#2E6F5E] font-medium">Condensation-Safe</span>
        </div>
        <svg viewBox="0 0 200 90" className="w-full h-28 stroke-current">
          <path d="M 15 20 Q 80 25, 110 50 T 185 75" fill="none" stroke="#C85A32" strokeWidth="2.5" />
          <path d="M 15 45 Q 80 50, 110 68 T 185 82" fill="none" stroke="#2E6F5E" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
        <div className="w-full mt-2 text-xs text-[#B8B19F]/80 flex justify-between font-sans">
          <span className="text-[#C85A32]">Temp Gradient</span>
          <span className="text-[#2E6F5E]">Dew-Point Curve</span>
        </div>
      </div>
    ),
  },
  {
    step: "03",
    title: "Automated CSI & BIM Schedule Export",
    description: "Export clean IFC4 models, Autodesk Revit parameter bindings, and ready-to-bind 3-part CSI MasterFormat manuals with a single click.",
    cadSvg: (
      <div className="w-full h-full flex flex-col justify-between p-6 bg-[#141412] rounded-xl border border-white/5 text-xs">
        <div className="flex justify-between items-center text-xs text-[#B8B19F] pb-3 border-b border-white/5">
          <span className="font-mono">03 30 00 / CSI SPEC</span>
          <span className="text-[#2E6F5E] font-medium">Revit Ready</span>
        </div>
        <div className="space-y-2 my-3 text-xs text-[#EAE7DF]/90 font-mono">
          <div className="text-[#C85A32] font-semibold">PART 2 — PRODUCTS</div>
          <div className="pl-3 text-[#B8B19F]">2.1 Low-Carbon Geopolymer Concrete</div>
          <div className="pl-3 text-[#2E6F5E]">2.2 Max GWP: 82 kgCO₂e/m²</div>
        </div>
        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-[#B8B19F]">
          <span>IFC4 / RVT / PDF</span>
          <span className="text-[#2E6F5E] font-medium">100% Validated</span>
        </div>
      </div>
    ),
  },
];

const HowItWorks = () => {
  const { startCheckout, isLoading } = useCheckout();

  return (
    <section className="bg-[#181816] relative overflow-hidden py-24 text-[#F6F5F0]">
      {/* Precision CAD grid */}
      <div className="absolute inset-0 cad-grid-dark opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-sans uppercase tracking-widest text-[#C85A32] font-semibold">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#F6F5F0] mt-2">
            The Specification Pipeline
          </h2>
          <p className="mt-3 text-base text-[#EAE7DF]/75 font-sans leading-relaxed">
            Connecting physical mineral samples with computational physics and digital construction documentation.
          </p>
        </div>

        {/* 3 Step Deep Dive Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {WORKFLOW_STEPS.map((stepItem) => (
            <Card
              key={stepItem.step}
              className="bg-[#1C1B18]/90 border-[#EAE7DF]/15 shadow-xl overflow-hidden"
            >
              <CardContent className="p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Specs & Copy Column (7 Cols) */}
                  <div className="lg:col-span-7 space-y-3">
                    <span className="text-xs font-mono text-[#C85A32] font-semibold">
                      STEP {stepItem.step}
                    </span>

                    <h3 className="text-2xl font-serif font-normal text-[#F6F5F0] leading-tight">
                      {stepItem.title}
                    </h3>

                    <p className="text-sm font-sans text-[#EAE7DF]/75 leading-relaxed pt-1">
                      {stepItem.description}
                    </p>
                  </div>

                  {/* Right CAD / Schematic Column (5 Cols) */}
                  <div className="lg:col-span-5 h-[220px]">
                    {stepItem.cadSvg}
                  </div>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
