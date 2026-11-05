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
    label: "Materials",
    href: "/#spec-sandbox",
  },
  {
    id: "engineering-modules",
    label: "Analyzers",
    href: "/#engineering-modules",
  },
  {
    id: "specimen-catalog",
    label: "Catalog",
    href: "/#specimen-catalog",
  },
  {
    id: "pricing",
    label: "Pricing",
    href: "/#pricing",
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
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[#EAE7DF]/75 hover:text-[#F6F5F0] transition-colors text-sm font-sans font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pl-4 border-l border-[#EAE7DF]/10">
              <Button
                size="sm"
                variant="ghost"
                onClick={handleOpenBimVault}
                className="text-[#EAE7DF]/75 hover:text-white hover:bg-white/5 font-sans text-xs font-normal px-3 py-1.5 h-auto transition-colors"
              >
                BIM Vault
              </Button>
              <Button
                size="sm"
                asChild
                className="bg-[#C85A32] text-white font-sans text-xs font-medium hover:bg-[#A64522] rounded-lg px-4 py-2 h-auto transition-all"
              >
                <a href="/#pricing" onClick={(e) => handleNavClick(e, "/#pricing")}>
                  Request Access
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              size="sm"
              asChild
              className="bg-[#C85A32] text-white font-sans text-xs font-medium hover:bg-[#A64522] rounded-lg px-3 py-1.5 h-auto"
            >
              <a href="/#pricing" onClick={(e) => handleNavClick(e, "/#pricing")}>
                Access
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
                <nav className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item.href);
                        setIsOpen(false);
                      }}
                      className="text-[#EAE7DF]/80 hover:text-white transition-colors text-sm font-sans py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                  
                  <div className="pt-6 mt-4 border-t border-[#EAE7DF]/10 flex flex-col gap-3">
                    <Button
                      size="sm"
                      asChild
                      className="w-full bg-[#C85A32] text-white font-sans text-xs font-medium hover:bg-[#A64522] rounded-lg py-2.5 h-auto"
                    >
                      <a
                        href="/#pricing"
                        onClick={(e) => {
                          handleNavClick(e, "/#pricing");
                          setIsOpen(false);
                        }}
                      >
                        Request Access
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setIsOpen(false);
                        handleOpenBimVault();
                      }}
                      className="w-full bg-white text-[#C85A32] hover:bg-[#FAF9F5] hover:text-[#A64522] border border-[#C85A32]/30 font-sans text-xs font-medium rounded-lg py-2.5 h-auto transition-all"
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
