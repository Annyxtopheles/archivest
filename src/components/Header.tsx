import { useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, Layers, Compass, FileSpreadsheet, ShieldCheck } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { StrataLogo, StrataVerticalLogo } from "./StrataLogo";
import BimVaultModal from "./BimVaultModal";

const navItems = [
  {
    id: "spec-sandbox",
    label: "Spec Sandbox",
    href: "/#spec-sandbox",
    icon: Layers,
  },
  {
    id: "engineering-modules",
    label: "Analyzers",
    href: "/#engineering-modules",
    icon: Compass,
  },
  {
    id: "workflow",
    label: "BIM Workflow",
    href: "/#workflow",
    icon: FileSpreadsheet,
  },
  {
    id: "carbon-benchmarks",
    label: "EPD Benchmarks",
    href: "/#carbon-benchmarks",
    icon: ShieldCheck,
  },
  {
    id: "pricing",
    label: "Licensing",
    href: "/#pricing",
  },
  {
    id: "faq",
    label: "Docs",
    href: "/#faq",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bimVaultOpen, setBimVaultOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  }, [navigate]);

  const handleOpenBimVault = useCallback((e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setBimVaultOpen(true);
  }, []);

  return (
    <header data-site-header className="fixed top-3 md:top-5 left-3 right-3 md:left-6 md:right-6 z-50">
      <div className="mx-auto max-w-7xl bg-[#181816]/85 backdrop-blur-xl border border-[#EAE7DF]/15 shadow-[0_16px_40px_rgba(0,0,0,0.6)] rounded-xl px-4 md:px-7 py-3 md:py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="inline-block transition-opacity hover:opacity-90">
              <StrataLogo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[#EAE7DF]/80 hover:text-[#C85A32] transition-colors text-xs uppercase font-mono tracking-wider font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pl-2 border-l border-[#EAE7DF]/10">
              <Button
                size="sm"
                asChild
                className="bg-[#C85A32] text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#A64522] border border-[#C85A32]/80 shadow-[0_0_20px_rgba(200,90,50,0.35)] transition-all duration-300"
              >
                <a href="/#pricing" onClick={(e) => handleNavClick(e, "/#pricing")}>
                  Requisition Seat
                </a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleOpenBimVault}
                className="bg-transparent text-[#EAE7DF] border-[#EAE7DF]/25 hover:bg-[#EAE7DF]/10 hover:text-white font-mono text-xs uppercase tracking-wider transition-all duration-300"
              >
                BIM Vault
              </Button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              size="sm"
              asChild
              className="bg-[#C85A32] text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#A64522] transition-all px-3"
            >
              <a href="/#pricing" onClick={(e) => handleNavClick(e, "/#pricing")}>
                Requisition Seat
              </a>
            </Button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="text-[#F6F5F0] p-2 hover:bg-[#EAE7DF]/10 rounded-lg transition-colors border border-[#EAE7DF]/15"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#181816] border-[#EAE7DF]/15 w-[290px] text-[#F6F5F0]">
                <div className="flex justify-center mt-6 mb-4">
                  <StrataVerticalLogo />
                </div>
                <div className="h-px w-full bg-[#EAE7DF]/10 mb-6" />
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item.href);
                        setIsOpen(false);
                      }}
                      className="text-[#EAE7DF]/80 hover:text-[#C85A32] transition-colors text-sm font-mono uppercase tracking-wider py-1.5 flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] text-[#B8B19F]/50 font-mono">0{navItems.indexOf(item) + 1}</span>
                    </a>
                  ))}
                  
                  <div className="pt-6 mt-4 border-t border-[#EAE7DF]/10 flex flex-col gap-3">
                    <Button
                      size="sm"
                      asChild
                      className="w-full bg-[#C85A32] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#A64522]"
                    >
                      <a
                        href="/#pricing"
                        onClick={(e) => {
                          handleNavClick(e, "/#pricing");
                          setIsOpen(false);
                        }}
                      >
                        Requisition Seat
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setIsOpen(false);
                        handleOpenBimVault();
                      }}
                      className="w-full border-[#EAE7DF]/20 text-[#EAE7DF] font-mono text-xs uppercase tracking-wider"
                    >
                      Access BIM Vault
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <BimVaultModal open={bimVaultOpen} onOpenChange={setBimVaultOpen} />
    </header>
  );
};

export default Header;
