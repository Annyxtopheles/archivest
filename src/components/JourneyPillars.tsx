import { ShieldCheck, SlidersHorizontal, FileSpreadsheet } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Verified EPD Datasets",
    description: "Third-party certified lifecycle carbon metrics conforming strictly to ISO 14044 and EN 15804 standards.",
  },
  {
    icon: SlidersHorizontal,
    title: "Hygrothermal Physics",
    description: "Real-time Glaser dew-point condensation modeling and ISO 354 reverberation acoustic simulations.",
  },
  {
    icon: FileSpreadsheet,
    title: "BIM & CSI Integration",
    description: "Instant export to 3-part CSI MasterFormat manuals and native IFC4 / Revit schedule parameter bindings.",
  },
];

const JourneyPillars = () => {
  return (
    <div className="max-w-6xl mx-auto mb-20" id="workflow">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F6F5F0]">
          Engineering Rigor in Three Pillars
        </h2>
        <p className="mt-2 text-sm text-[#EAE7DF]/75 font-sans">
          Built for architectural studios and facade engineers requiring uncompromised technical validity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="p-8 rounded-2xl border border-[#EAE7DF]/15 bg-[#1C1B18]/90 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#C85A32]/10 border border-[#C85A32]/25 flex items-center justify-center text-[#C85A32] mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#F6F5F0]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-[#EAE7DF]/70 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneyPillars;
