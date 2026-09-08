import { useState, useRef, useCallback } from "react";
import { Pause, Play } from "lucide-react";
import CrossFadeVideo, { type CrossFadeVideoHandle } from "./CrossFadeVideo";
import { BrandName } from "./ui/trademark";

const editors = [
  {
    name: "KitsuragiAI®",
    title: "Premise Interrogator // Shivers & Logic",
    description: "Your razor-sharp partner. Socratic cross-examinations test motive, stakes, and emotional resonance until your premise crystallizes into an undeniable case file.",
    videoUrl: "/videos/Kitsuragi.mp4",
    banner: "THOUGHT CABINET ENTRY #01" as string | null,
  },
  {
    name: "VolitionAI®",
    title: "Story Architect // Encyclopedia & Drama",
    description:
      "The master ledger. Stitches napkins, outlines, and character dossiers into an unshakeable chapter blueprint, holding the line against narrative collapse.",
    videoUrl: "/videos/Volition.mp4",
    banner: "THOUGHT CABINET ENTRY #02" as string | null,
  },
  {
    name: "LogicAI®",
    title: "Developmental Coroner // Visual Calculus",
    description:
      "Forensic autopsy for completed drafts. Delivers an unsparing Global Editorial Letter analyzing pacing, structural fractures, and scene cohesion.",
    videoUrl: "/videos/Logic.mp4",
    banner: "THOUGHT CABINET ENTRY #03",
  },
];

export const AICoachIntro = () => (
  <div className="text-center max-w-5xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
      Consult Your Inner Thought Cabinet
    </h2>
    <p className="mt-4 text-lg md:text-xl font-medium text-[#36FF9B]">
      Three dialectical faculties. One unified Revacholian Authorship Station. Every beat of your opus.
    </p>
  </div>
);


const AICoachCards = () => {
  const [playingStates, setPlayingStates] = useState<boolean[]>([true, true, true]);
  const videoRefs = useRef<(CrossFadeVideoHandle | null)[]>([null, null, null]);
  const resettingRef = useRef(false);

  // Playback is controlled by IntersectionObserver inside CrossFadeVideo.

  const handleNearEnd = useCallback(() => {
    if (resettingRef.current) return;
    resettingRef.current = true;
    videoRefs.current.forEach((handle) => {
      handle?.triggerFadeReset();
    });
    setTimeout(() => {
      resettingRef.current = false;
    }, 1200);
  }, []);

  const togglePlay = (index: number) => {
    const handle = videoRefs.current[index];
    if (handle) {
      if (handle.paused) {
        handle.play();
        setPlayingStates((prev) => prev.map((s, i) => (i === index ? true : s)));
      } else {
        handle.pause();
        setPlayingStates((prev) => prev.map((s, i) => (i === index ? false : s)));
      }
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 max-w-7xl w-full mx-auto">
      {editors.map((editor, index) => (
        <div
          key={editor.name}
          className="group relative flex items-stretch gap-3 md:gap-4 rounded-2xl border border-white/5 bg-gradient-to-b from-[#0A241C]/80 to-[#081813]/70 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:border-[#36FF9B]/40 hover:-translate-y-0.5 transition-all duration-300 animate-fade-in overflow-hidden p-4 md:p-5"
          style={{ animationDelay: `${index * 120}ms` } as React.CSSProperties}
        >
          <div className="relative shrink-0 self-stretch w-28 sm:w-32 md:w-40 aspect-[3/4] rounded-lg ring-1 ring-[#36FF9B]/20 overflow-hidden bg-black group/video">

            <CrossFadeVideo
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={editor.videoUrl}
              onNearEnd={handleNearEnd}
            />
            <button
              onClick={() => togglePlay(index)}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 bg-black/20"
              aria-label={playingStates[index] ? "Pause video" : "Play video"}
            >
              {playingStates[index] ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          <div className="flex-1 min-w-0 text-left pr-1">
            {editor.banner ? (
              <span className="inline-flex items-center mb-1.5 text-[9px] tracking-[0.12em] uppercase font-semibold px-2 py-0.5 rounded-full bg-[#36FF9B]/10 text-[#36FF9B] border border-[#36FF9B]/25">
                {editor.banner}
              </span>
            ) : null}
            <h3 className="text-base md:text-lg font-bold text-[#36FF9B] tracking-tight leading-tight">
              <BrandName name={editor.name} />
            </h3>
            <p className="mt-1 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#36FF9B]/80">
              {editor.title}
            </p>
            <span className="block w-8 h-px bg-[#36FF9B]/30 my-2" />
            <p className="text-xs text-white/70 leading-relaxed">{editor.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AICoachCards;
