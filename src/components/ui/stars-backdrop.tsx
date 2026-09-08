import { useEffect, useRef, useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";

interface StarsBackdropProps {
  density?: "subtle" | "normal";
  className?: string;
}

const StarsBackdrop = ({ density = "normal", className = "" }: StarsBackdropProps) => {
  const isSubtle = density === "subtle";
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setActive(false);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {active && (
        <>
          <ShootingStars
            starColor="#36FF9B"
            trailColor="#10B981"
            minSpeed={15}
            maxSpeed={35}
            minDelay={isSubtle ? 2500 : 1000}
            maxDelay={isSubtle ? 6000 : 3000}
          />
          <ShootingStars
            starColor="#10B981"
            trailColor="#36FF9B"
            minSpeed={10}
            maxSpeed={25}
            minDelay={isSubtle ? 4000 : 2000}
            maxDelay={isSubtle ? 8000 : 4000}
          />
        </>
      )}
      <div
        className="absolute inset-0 sg-stars"
        style={{
          opacity: isSubtle ? 0.2 : 0.4,
          animationPlayState: active ? "running" : "paused",
        }}
      />
      <style>{`
        .sg-stars {
          background-image:
            radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: sg-twinkle 5s ease-in-out infinite;
        }
        @keyframes sg-twinkle {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default StarsBackdrop;
