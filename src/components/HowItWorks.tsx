import { ReactNode, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import HeroVideoModal from "./HeroVideoModal";
import { ModernBackgroundPaths } from "@/components/ui/modern-background-paths";
import { Reg, TM, BrandName } from "@/components/ui/trademark";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import KitsuragiAvatar from "@/assets/kitsuragi-avatar.jpg";
import VolitionAvatar from "@/assets/volition-avatar.jpg";
import LogicAvatar from "@/assets/logic-avatar.jpg";
import SimoneScreenshot from "@/assets/Simone_AI_side_image_v5.png";
import OliviaScreenshot from "@/assets/Olivia_AI_side_image_v2.png";
import EllisScreenshot from "@/assets/Ellis_AI_side_image.png";

const HowItWorks = () => {
  const aiCompanions = [
    {
      name: "KitsuragiAI®",
      title: "Interrogation of the Idea // Shivers & Logic",
      microcopy: "From a hazy barroom apparition to a razor-sharp narrative indictment.",
      description: (
        <>
          A concept haunts your skull? Kitsuragi subjects the phantom to relentless Socratic inquiry.
          <br /><br />
          Twenty cross-examinations dissect motive, stakes, and narrative tension, synthesizing your <strong className="text-white font-semibold">Case Dossier Report</strong>—with opening scene breakdowns and an verified route toward Chapter One.
        </>
      ),
      avatar: KitsuragiAvatar,
      image: SimoneScreenshot,
      imageOnRight: false,
      blurImage: false,
    },
    {
      name: "VolitionAI®",
      title: "The Master Ledger // Encyclopedia & Drama",
      microcopy: "Transform drunken post-revolutionary mania into an ironclad literary timeline.",
      description: (
        <>
          Real-time dialectics to regiment chaotic notes into a formidable Story Bible.
          <br /><br />
          Tracks character moralities, psychological baggage, factional tensions, and chapter pacing. Structure is the only bulwark holding back the Pale.
        </>
      ),
      avatar: VolitionAvatar,
      image: OliviaScreenshot,
      imageOnRight: true,
      blurImage: false,
    },
    {
      name: "LogicAI®",
      title: "The Manuscript Coroner // Visual Calculus",
      microcopy: "Forensic developmental autopsy of your completed manuscript.",
      description: (
        <>
          When the manuscript is laid out on the zinc table, Logic conducts an exhaustive post-mortem.
          <br /><br />
          A Global Editorial Letter inspecting structural fissures, dialogue cadence, dramatic tension, and subtextual rot across every chapter.
        </>
      ),
      avatar: LogicAvatar,
      image: EllisScreenshot,
      imageOnRight: false,
      blurImage: false,
    },
  ];

  const [videoOpen, setVideoOpen] = useState(false);

  return (

    <section id="how-it-works" className="scroll-mt-28 md:scroll-mt-32 bg-[#081813] relative overflow-hidden min-h-screen">
      <ModernBackgroundPaths className="min-h-screen">
        <div className="container mx-auto px-4 pt-16 md:pt-20 pb-14 md:pb-16 relative z-10">
          <div className="text-center mb-12 sm:mb-16 px-2 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">The Detective's Workflow</h2>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#36FF9B]">
              One Precinct. Total Ideological Coherence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <p className="text-base sm:text-lg text-white/85 leading-relaxed">
              From the initial autopsy of an idea to the final forensic polish: Interrogate the spark with{" "}
              <strong className="font-bold text-[#36FF9B]">KitsuragiAI<Reg /></strong>. Structure the conspiracy with{" "}
              <strong className="font-bold text-[#36FF9B]">VolitionAI<Reg /></strong>. Perform rigorous structural inquests with{" "}
              <strong className="font-bold text-[#36FF9B]">LogicAI<Reg /></strong>. The prose remains exclusively yours.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8 relative before:hidden md:before:block before:absolute before:left-1/2 before:-translate-x-px before:top-0 before:bottom-0 before:w-[2px] before:border-l-2 before:border-dashed before:border-white/15 before:z-0">
            {aiCompanions.map((companion, index) => (
              <Card
                key={companion.name}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div
                    className={`grid md:grid-cols-2 gap-8 items-center ${companion.imageOnRight ? "md:grid-flow-col-dense" : ""}`}
                  >
                    {/* Image */}
                    <div className={`${companion.imageOnRight ? "md:col-start-2" : ""} p-4 sm:p-6 md:p-8`}>
                      <HoverCard openDelay={200}>
                        <HoverCardTrigger asChild>
                          <div className="bg-white/10 aspect-video rounded-xl flex items-center justify-center border border-white/20 overflow-hidden cursor-pointer hover:border-primary/50 transition-colors">
                            <img
                              src={companion.image}
                              alt={companion.name}
                              loading="lazy"
                              decoding="async"
                              width={1280}
                              height={720}
                              className={`w-full h-full object-cover ${companion.blurImage ? "blur-md" : ""}`}
                            />
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent
                          className="fixed inset-0 z-[9999] flex items-center justify-center p-0 bg-transparent border-0 shadow-none rounded-lg origin-center pointer-events-none"
                          side="top"
                          align="center"
                          sideOffset={0}
                        >
                          <img
                            src={companion.image}
                            alt={`${companion.name} enlarged preview`}
                            loading="lazy"
                            decoding="async"
                            className={`max-w-[60vw] max-h-[60vh] w-auto h-auto rounded-lg object-contain ${companion.blurImage ? "blur-md" : ""}`}
                          />
                        </HoverCardContent>
                      </HoverCard>
                    </div>

                    {/* Content */}
                    <div className={`${companion.imageOnRight ? "md:col-start-1 md:row-start-1" : ""} p-4 sm:p-6 md:p-8`}>
                      <p className="text-xs sm:text-sm text-[#36FF9B] italic mb-2 tracking-wide">
                        {companion.microcopy}
                      </p>
                      <div className="flex items-center gap-3 sm:gap-4 mb-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/10 border-2 border-[#36FF9B] overflow-hidden flex-shrink-0">
                          <img src={companion.avatar} alt={companion.name} loading="lazy" decoding="async" width={96} height={96} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white"><BrandName name={companion.name} /></h3>
                          <p className="text-sm sm:text-base text-white font-semibold">{companion.title}</p>
                        </div>
                      </div>
                      <div className="text-sm sm:text-base text-white/80 leading-relaxed">
                        {companion.description}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-6xl mx-auto text-center mt-14 md:mt-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Witness the Cognitive Engine in Action
            </h3>
            <Button
              size="lg"
              onClick={() => setVideoOpen(true)}
              className="w-full sm:w-auto h-auto transition-all duration-300 hover:scale-105 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_0_30px_rgba(54,255,155,0.6)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_0_40px_rgba(54,255,155,0.8)] border-2 border-[#36FF9B]/60 bg-gradient-to-r from-[#36FF9B] to-[#10B981] hover:from-[#10B981] hover:to-[#36FF9B] text-[#081813] rounded-full px-8 py-4 text-base md:text-lg font-bold"
            >
              <span className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#081813]/20 border border-[#081813]/30">
                  <Play className="h-4 w-4 fill-[#081813] text-[#081813]" />
                </span>
                Playback Surveillance Reel (3 Min)
              </span>
            </Button>
          </div>
        </div>
      </ModernBackgroundPaths>

      <HeroVideoModal open={videoOpen} onOpenChange={setVideoOpen} />
    </section>

  );
};

export default HowItWorks;
