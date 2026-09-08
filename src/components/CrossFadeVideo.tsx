import { forwardRef, useImperativeHandle, useRef, useState, useEffect } from "react";

export interface CrossFadeVideoHandle {
  play(): void;
  pause(): void;
  paused: boolean;
  getVideoElement(): HTMLVideoElement | null;
  triggerFadeReset(): void;
}

interface CrossFadeVideoProps {
  src: string;
  poster?: string;
  className?: string;
  onNearEnd?: () => void;
}

const CrossFadeVideo = forwardRef<CrossFadeVideoHandle, CrossFadeVideoProps>(
  ({ src, poster, className }, ref) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const userPausedRef = useRef(false);

    useEffect(() => {
      const el = containerRef.current;
      const video = videoRef.current;
      if (!el || !video) return;
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              if (video.preload !== "auto") video.preload = "auto";
              if (!userPausedRef.current) {
                video.play().catch(() => {});
              }
            } else {
              video.pause();
            }
          }
        },
        { threshold: 0.25 }
      );
      io.observe(el);
      return () => io.disconnect();
    }, []);

    useImperativeHandle(ref, () => ({
      play() {
        userPausedRef.current = false;
        videoRef.current?.play().catch(() => {});
        setIsPaused(false);
      },
      pause() {
        userPausedRef.current = true;
        videoRef.current?.pause();
        setIsPaused(true);
      },
      get paused() {
        return isPaused;
      },
      getVideoElement() {
        return videoRef.current;
      },
      triggerFadeReset() {
        // Videos are seamlessly loopable, no flash needed
      },
    }));

    return (
      <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className ?? ""}`}>
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
          src={src}
          poster={poster}
          muted
          loop
          autoPlay
          playsInline
          // @ts-ignore — needed for older iOS Safari
          webkit-playsinline=""
          preload="auto"
        />
      </div>
    );
  }
);

CrossFadeVideo.displayName = "CrossFadeVideo";

export default CrossFadeVideo;
