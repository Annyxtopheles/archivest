import { Dialog, DialogContent } from "@/components/ui/dialog";

interface HeroVideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Paste the public video URL here. Supports:
//   - Direct file URL (.mp4 / .webm / .mov) — Vimeo Pro, Cloudflare Stream, Mux, Bunny, etc.
//   - YouTube watch / share / embed URLs (e.g. https://youtu.be/abc123)
//   - Vimeo page URLs (e.g. https://vimeo.com/123456789)
const VIDEO_SRC = "https://youtu.be/1xknmX_8Aho";

type EmbedType = "youtube" | "vimeo" | "file" | "none";

const getEmbedType = (url: string): EmbedType => {
  if (!url) return "none";
  try {
    const { hostname } = new URL(url);
    if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) return "youtube";
    if (hostname.includes("vimeo.com")) return "vimeo";
    return "file";
  } catch {
    return "none";
  }
};

const getYouTubeId = (url: string): string | null => {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1) || null;
    if (u.pathname.startsWith("/embed/")) return u.pathname.split("/")[2] || null;
    return u.searchParams.get("v");
  } catch {
    return null;
  }
};

const getVimeoId = (url: string): string | null => {
  try {
    const u = new URL(url);
    const match = u.pathname.match(/\/(\d+)/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
};

const HeroVideoModal = ({ open, onOpenChange }: HeroVideoModalProps) => {
  const embedType = getEmbedType(VIDEO_SRC);

  const renderPlayer = () => {
    if (embedType === "youtube") {
      const id = getYouTubeId(VIDEO_SRC);
      if (!id) return null;
      return (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          className="w-full h-full"
          title="How It Works"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      );
    }

    if (embedType === "vimeo") {
      const id = getVimeoId(VIDEO_SRC);
      if (!id) return null;
      return (
        <iframe
          src={`https://player.vimeo.com/video/${id}?autoplay=1&playsinline=1`}
          className="w-full h-full"
          title="How It Works"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      );
    }

    if (embedType === "file") {
      return (
        <video
          src={VIDEO_SRC}
          className="w-full h-full object-cover"
          controls
          autoPlay
          playsInline
          // @ts-ignore - iOS Safari attribute
          webkit-playsinline="true"
        />
      );
    }

    return (
      <div className="absolute inset-0 flex items-center justify-center text-white/70 text-sm">Video coming soon</div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-[#081813] border-[#36FF9B]/30">
        <div className="relative w-full aspect-video bg-black">{renderPlayer()}</div>
      </DialogContent>
    </Dialog>
  );
};

export default HeroVideoModal;
