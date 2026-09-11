import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ShieldAlert, Terminal, Eye, Volume2, VolumeX } from "lucide-react";

interface HeroVideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FEEDS = [
  {
    id: "kitsuragi",
    name: "FEED 01: KITSURAGI",
    role: "Premise Interrogation",
    skill: "INLAND EMPIRE // LOGIC",
    src: `${import.meta.env.BASE_URL}videos/Kitsuragi.mp4`,
    log: "TRANSCRIPT: Subject undergoing intense dialectical inquiry. Motives, thematic core, and opening scene trajectory validated under RCM pressure.",
  },
  {
    id: "volition",
    name: "FEED 02: VOLITION",
    role: "The Master Ledger",
    skill: "ENCYCLOPEDIA // DRAMA",
    src: `${import.meta.env.BASE_URL}videos/Volition.mp4`,
    log: "TRANSCRIPT: Chronology matrix synchronized. Tracking character psychologies, faction tensions, and chapter pacing against the encroaching Pale.",
  },
  {
    id: "logic",
    name: "FEED 03: LOGIC",
    role: "Manuscript Post-Mortem",
    skill: "VISUAL CALCULUS // INTERFACING",
    src: `${import.meta.env.BASE_URL}videos/Logic.mp4`,
    log: "TRANSCRIPT: Autopsy of completed prose in progress. Pacing cadence mapped, subtextual fissures sealed, global editorial diagnostics compiled.",
  },
];

const HeroVideoModal = ({ open, onOpenChange }: HeroVideoModalProps) => {
  const [activeFeed, setActiveFeed] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const feed = FEEDS[activeFeed];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-[#050e0b] border-2 border-[#36FF9B]/40 shadow-[0_0_50px_rgba(54,255,155,0.2)] rounded-xl font-mono">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#081813] border-b border-[#36FF9B]/20 text-xs">
          <div className="flex items-center gap-2 text-[#36FF9B]">
            <Terminal className="w-4 h-4 animate-pulse" />
            <span className="font-bold tracking-wider">RCM PRECINCT 41 — SURVEILLANCE FEED</span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-[#36FF9B]/10 text-[#36FF9B] text-[10px] border border-[#36FF9B]/30">
              REC // LIVE
            </span>
          </div>
          <div className="flex items-center gap-3 text-white/50 text-[11px]">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="flex items-center gap-1 hover:text-[#36FF9B] transition-colors"
              aria-label="Toggle mute"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isMuted ? "MUTED" : "LIVE AUDIO"}</span>
            </button>
            <span className="text-white/30">|</span>
            <span className="text-[#36FF9B]/80 font-mono">CH-41.9 MHz</span>
          </div>
        </div>

        {/* Video Screen Area */}
        <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
          <video
            key={feed.src}
            src={feed.src}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />

          {/* CRT Scanline & Grain Overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay"
            style={{
              backgroundImage:
                "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.04))",
              backgroundSize: "100% 4px, 6px 100%",
            }}
          />

          {/* In-feed Camera HUD */}
          <div className="pointer-events-none absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-[#36FF9B]/30 px-2.5 py-1 rounded text-[11px] text-[#36FF9B]">
            <span className="font-bold">{feed.name}</span>
            <span className="text-white/60 ml-2">[{feed.skill}]</span>
          </div>

          <div className="pointer-events-none absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded text-[10px] text-white/70">
            LOC: REV-CENTRAL // DISTRICT 4
          </div>
        </div>

        {/* Channel Selector Bar */}
        <div className="bg-[#081813] border-t border-[#36FF9B]/20 p-3 sm:p-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {FEEDS.map((item, idx) => {
              const active = idx === activeFeed;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveFeed(idx)}
                  className={`flex-1 min-w-[120px] px-3 py-2 text-left rounded-lg transition-all text-xs border ${
                    active
                      ? "bg-[#36FF9B]/15 border-[#36FF9B] text-[#36FF9B] shadow-[0_0_15px_rgba(54,255,155,0.25)] font-bold"
                      : "bg-black/30 border-white/10 text-white/60 hover:text-white hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Eye className={`w-3 h-3 ${active ? "text-[#36FF9B]" : "text-white/40"}`} />
                    <span className="truncate">{item.name.replace("FEED ", "")}</span>
                  </div>
                  <div className="text-[10px] opacity-75 font-normal truncate mt-0.5">{item.role}</div>
                </button>
              );
            })}
          </div>

          {/* Diagnostic Log Readout */}
          <div className="bg-black/50 border border-[#36FF9B]/20 rounded-lg p-2.5 text-[11px] text-white/80 leading-relaxed">
            <span className="text-[#36FF9B] font-semibold">{">"}</span> {feed.log}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HeroVideoModal;
