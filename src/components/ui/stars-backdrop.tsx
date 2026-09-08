interface StarsBackdropProps {
  density?: "subtle" | "normal";
  className?: string;
}

const StarsBackdrop = ({ density = "normal", className = "" }: StarsBackdropProps) => {
  const isSubtle = density === "subtle";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Industrial CRT scanline and worn vignette overlay */}
      <div
        className="absolute inset-0 opacity-[0.25] mix-blend-overlay"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.85) 2px, rgba(0,0,0,0.85) 4px),
            radial-gradient(circle at 50% 50%, rgba(54,255,155,0.06) 0%, transparent 80%)
          `,
          backgroundSize: "100% 4px, 100% 100%",
        }}
      />

      {/* Rusted patina & degraded analog noise */}
      <div
        className="absolute inset-0"
        style={{
          opacity: isSubtle ? 0.12 : 0.2,
          backgroundImage: `
            radial-gradient(1px 1px at 15px 25px, rgba(54,255,155,0.7), transparent),
            radial-gradient(1.5px 1.5px at 75px 65px, rgba(210,180,140,0.5), transparent),
            radial-gradient(1px 1px at 140px 180px, rgba(54,255,155,0.5), transparent),
            radial-gradient(2px 2px at 210px 90px, rgba(180,120,60,0.4), transparent),
            radial-gradient(1px 1px at 290px 240px, rgba(200,200,200,0.4), transparent),
            radial-gradient(1.5px 1.5px at 360px 140px, rgba(54,255,155,0.6), transparent)
          `,
          backgroundSize: "360px 360px",
        }}
      />

      {/* Weathered technical grid lines */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(54,255,155,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(54,255,155,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />
    </div>
  );
};

export default StarsBackdrop;
