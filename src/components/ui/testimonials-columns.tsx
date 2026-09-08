"use client";
import React from "react";
import { m } from "framer-motion";
import { Star } from "lucide-react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Array<{
    text: string;
    name: string;
    role?: string;
  }>;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <m.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div
                  className="p-7 rounded-3xl border border-white/10 bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)] max-w-[320px] w-full transition-all duration-300 hover:shadow-[0_12px_32px_rgba(54,255,155,0.15)] hover:-translate-y-1 hover:border-[#36FF9B]/40"
                  key={i}
                >
                  <span aria-hidden className="block font-serif text-3xl leading-none text-[#36FF9B]/50 select-none -mb-3">“</span>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 text-[#36FF9B] fill-[#36FF9B]" />
                    ))}
                  </div>
                  <div className="text-white/90 text-sm leading-relaxed">{text}</div>
                  <p className="mt-4 text-xs font-semibold tracking-[0.14em] uppercase text-[#36FF9B]">
                    — {name}{role ? `, ${role}` : ""}
                  </p>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </m.div>
    </div>
  );
};
