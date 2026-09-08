import { Lightbulb, Users, PenLine, FileEdit } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Visual Calculus",
    titleSub: "Reconstruct the Premise",
    description: "Interrogate the psychic spark. Synthesize a premise hard enough to survive Martinaise winter.",
  },
  {
    icon: Users,
    title: "Drama & Logic",
    titleSub: "The Dramatis Personae",
    description: "Map character neuroses, ideological schisms, and structural beats into a ledger of high intrigue.",
  },
  {
    icon: PenLine,
    title: "Conceptualization",
    titleSub: "Inscribe the Prose",
    description: "Commit typewriter hammers to paper. Pure human prose under constant psychic interrogation.",
  },
  {
    icon: FileEdit,
    title: "Interfacing",
    titleSub: "The Post-Mortem Audit",
    description: "Global forensic autopsy of every scene, beat, and setup before sending files to the coalition.",
  },
];

const JourneyPillars = () => {
  return (
    <div className="max-w-6xl mx-auto mb-10 md:mb-14">
      <div className="rounded-2xl border border-[#36FF9B]/20 bg-gradient-to-r from-[#0A241C]/80 via-[#0D2A20]/70 to-[#0A241C]/80 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] px-4 sm:px-6 md:px-8 py-5 md:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-0">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`flex items-start gap-4 animate-fade-in ${
                  index > 0 ? "md:pl-5 md:border-l md:border-[#36FF9B]/15" : ""
                } md:pr-5`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#36FF9B]/10 ring-1 ring-[#36FF9B]/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#36FF9B]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-[#36FF9B] leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/75 leading-relaxed">
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
