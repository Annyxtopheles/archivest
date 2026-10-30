"use client";
import React from "react";
import { m } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Array<{
    text: string;
    name: string;
    role?: string;
  }>;
  duration?: number;
}) => {
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <div
      className={props.className}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <m.div
        animate={{
          translateY: isPaused ? undefined : "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div
                  className="p-6 rounded-2xl border border-[#EAE7DF]/15 bg-[#1F1E1B]/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)] max-w-[330px] w-full transition-all duration-300 hover:border-[#C85A32]/50 hover:-translate-y-1"
                  key={i}
                >
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5 font-mono text-[10px] text-[#2E6F5E]">
                    <span className="flex items-center gap-1 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED SPECIFIER
                    </span>
                    <span className="text-[#B8B19F]">ISO 14044</span>
                  </div>
                  <div className="text-[#EAE7DF]/90 text-xs sm:text-sm font-sans leading-relaxed">{text}</div>
                  <p className="mt-4 text-xs font-mono font-bold tracking-wider uppercase text-[#C85A32]">
                    — {name}
                  </p>
                  {role && (
                    <p className="text-[11px] font-mono text-[#B8B19F] mt-0.5">
                      {role}
                    </p>
                  )}
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </m.div>
    </div>
  );
};
