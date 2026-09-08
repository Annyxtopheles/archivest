import { forwardRef, useImperativeHandle, useRef, useState, useCallback, useEffect } from "react";

const FADE_MS = 800;
const TRIGGER_BEFORE = 0.8;

export interface CrossFadeVideoHandle {
  play(): void;
  pause(): void;
  paused: boolean;
  getVideoElement(): HTMLVideoElement | null;
  triggerFadeReset(): void;
}

interface CrossFadeVideoProps {
  src: string;
  className?: string;
  onNearEnd?: () => void;
}

const CrossFadeVideo = forwardRef<CrossFadeVideoHandle, CrossFadeVideoProps>(
  ({ src, className, onNearEnd }, ref) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [overlayOpacity, setOverlayOpacity] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const userPausedRef = useRef(false);
    const fadingIn = useRef(false);
    const nearEndFired = useRef(false);

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
        const video = videoRef.current;
        if (!video) return;
        fadingIn.current = true;
        setOverlayOpacity(1);
        setTimeout(() => {
          video.currentTime = 0;
          if (!isPaused) {
            video.play().catch(() => {});
          }
          setTimeout(() => {
            setOverlayOpacity(0);
            fadingIn.current = false;
            nearEndFired.current = false;
          }, 50);
        }, FADE_MS);
      },
    }));

    const handleTimeUpdate = useCallback(() => {
      const video = videoRef.current;
      if (!video || !video.duration || fadingIn.current) return;

      const timeLeft = video.duration - video.currentTime;
      if (timeLeft <= TRIGGER_BEFORE && timeLeft > 0 && !nearEndFired.current) {
        nearEndFired.current = true;
        onNearEnd?.();
      }
    }, [onNearEnd]);

    const handleEnded = useCallback(() => {
      const video = videoRef.current;
      if (!video) return;
      video.currentTime = 0;
      video.play().catch(() => {});
      setTimeout(() => {
        setOverlayOpacity(0);
        fadingIn.current = false;
        nearEndFired.current = false;
      }, 50);
    }, []);

    return (
      <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className ?? ""}`}>
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
          src={src}
          muted
          playsInline
          // @ts-ignore — needed for older iOS Safari
          webkit-playsinline=""
          preload="none"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />
        <div
          className="absolute inset-0 rounded-xl bg-white pointer-events-none"
          style={{
            opacity: overlayOpacity,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
          }}
        />
      </div>
    );
  }
);

CrossFadeVideo.displayName = "CrossFadeVideo";

export default CrossFadeVideo;
