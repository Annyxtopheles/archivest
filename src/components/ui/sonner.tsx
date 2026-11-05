import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "dark" } = useTheme();

  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#181816]/95 group-[.toaster]:backdrop-blur-xl group-[.toaster]:text-[#F6F5F0] group-[.toaster]:border-2 group-[.toaster]:border-[#C85A32]/60 group-[.toaster]:shadow-[0_12px_40px_rgba(0,0,0,0.85)] group-[.toaster]:rounded-xl font-mono",
          title: "group-[.toast]:text-[#C85A32] group-[.toast]:font-bold group-[.toast]:tracking-wide group-[.toast]:text-xs uppercase",
          description: "group-[.toast]:text-[#EAE7DF]/90 group-[.toast]:text-xs group-[.toast]:leading-relaxed font-sans",
          actionButton: "group-[.toast]:bg-[#C85A32] group-[.toast]:text-white group-[.toast]:font-semibold",
          cancelButton: "group-[.toast]:bg-white/10 group-[.toast]:text-white/80",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
