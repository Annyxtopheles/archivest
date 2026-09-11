import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#081813] group-[.toaster]:text-white group-[.toaster]:border-[#36FF9B]/40 group-[.toaster]:shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(54,255,155,0.25)] group-[.toaster]:backdrop-blur-xl group-[.toaster]:rounded-2xl group-[.toaster]:p-4 group-[.toaster]:border",
          title: "group-[.toast]:text-[#36FF9B] group-[.toast]:font-bold group-[.toast]:text-sm group-[.toast]:tracking-wide",
          description: "group-[.toast]:text-gray-200 group-[.toast]:text-xs group-[.toast]:mt-1.5 leading-relaxed",
          actionButton:
            "group-[.toast]:bg-[#36FF9B] group-[.toast]:text-[#081813] font-bold",
          cancelButton:
            "group-[.toast]:bg-white/10 group-[.toast]:text-white",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
