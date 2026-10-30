import { Layers, FileSpreadsheet, Download, CheckCircle2, SlidersHorizontal } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    step: "01",
    title: "Tectonic Material Indexing",
    titleSub: "Raw Specimen Ingestion",
    description: "Search 4,000+ low-carbon specimens by cradle-to-gate GWP, mineral classification, and structural compressive tolerance.",
  },
  {
    icon: SlidersHorizontal,
    step: "02",
    title: "Parametric Hygrothermal Modeling",
    titleSub: "Acoustic & Fire Stress Test",
    description: "Simulate composite wall cross-sections under ASTM E84 flame spread and ISO 354 reverberation damping algorithms.",
  },
  {
    icon: FileSpreadsheet,
    step: "03",
    title: "CSI MasterFormat Integration",
    titleSub: "Revit & ArchiCAD Export",
    description: "Compile verified environmental product declarations (EPD) into ready-to-bind Division 03, 06, and 09 architectural project manuals.",
  },
  {
    icon: Download,
    step: "04",
    title: "Verifiable EPD Ledger",
    titleSub: "LEED / BREEAM Audit Trail",
    description: "Generate immutable compliance dossiers with 3rd-party certifier stamps directly ingestible by municipal building authorities.",
  },
];

const JourneyPillars = () => {
  return (
    <div className="max-w-6xl mx-auto mb-16" id="workflow">
      <div className="text-center mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C85A32] font-semibold">
          PHYSICAL SAMPLE BOARD TO BIM WORKFLOW
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#F6F5F0] mt-1">
          Four Stages of Precision Material Governance
        </h2>
      </div>

      <div className="rounded-2xl border border-[#EAE7DF]/15 bg-gradient-to-r from-[#1F1E1B]/90 via-[#252420]/80 to-[#1F1E1B]/90 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.5)] px-4 sm:px-6 md:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`flex flex-col items-start gap-3.5 ${
                  index > 0 ? "md:pl-6 md:border-l md:border-[#EAE7DF]/15" : ""
                } md:pr-6`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="w-11 h-11 rounded-lg bg-[#C85A32]/10 border border-[#C85A32]/30 flex items-center justify-center text-[#C85A32]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#B8B19F]/60">
                    STAGE {pillar.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-serif font-bold text-[#F6F5F0] leading-snug">
                    {pillar.title}
                  </h3>
                  <div className="text-[11px] font-mono text-[#C85A32] mt-0.5">
                    {pillar.titleSub}
                  </div>
                  <p className="mt-2 text-xs text-[#EAE7DF]/70 font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JourneyPillars;
