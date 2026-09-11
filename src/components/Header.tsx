import { useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import archivestHorizontal from "@/assets/Archivest Horizontal.svg";
import archivestVertical from "@/assets/Archivest Vertical.svg";

const navItems = [{
  id: "how-it-works",
  label: "How It Works",
  href: "/#how-it-works"
}, {
  id: "why-archivest",
  label: "Why Archivest",
  href: "/#why-archivest"
}, {
  id: "pricing",
  label: "Pricing",
  href: "/#pricing"
}, {
  id: "faq",
  label: "FAQ",
  href: "/#faq"
}];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  }, [navigate]);

  const handleLoginClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    toast("INTERFACING: [Medium: Success] — Officer Console", {
      description:
        "Precinct 41 terminal is in closed archive mode for this portfolio showcase. Central radio relays remain sealed.",
      duration: 5500,
    });
  }, []);

  return <header data-site-header className="fixed top-3 md:top-5 left-3 right-3 md:left-6 md:right-6 z-50">
      <div className="mx-auto max-w-7xl bg-[#081813]/70 backdrop-blur-xl backdrop-saturate-150 border border-[#36FF9B]/20 shadow-[0_12px_40px_rgba(0,0,0,0.45)] rounded-2xl px-5 md:px-8 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="inline-block">
              <img
                src={archivestHorizontal}
                alt="Archivest Logo"
                width={196}
                height={40}
                decoding="async"
                className="h-9 sm:h-10 md:h-11 w-auto cursor-pointer transition-opacity hover:opacity-90"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map(item => <li key={item.id}>
                  <a href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="text-white hover:text-[#36FF9B] transition-colors text-base font-medium">
                    {item.label}
                  </a>
                </li>)}
            </ul>
            <Button
              size="sm"
              asChild
              className="bg-[#36FF9B] text-[#081813] font-semibold border border-[#36FF9B] hover:bg-[#2ee588] hover:border-[#2ee588] hover:shadow-[0_0_20px_rgba(54,255,155,0.5)] transition-all duration-500 ease-out"
            >
              <a href="/#builder-edition" onClick={(e) => handleNavClick(e, "/#builder-edition")}>
                Start Today
              </a>
            </Button>
            <Button
              size="sm"
              onClick={handleLoginClick}
              className="bg-white text-[#081813] border border-white hover:bg-[#36FF9B] hover:text-[#081813] hover:border-[#36FF9B] hover:shadow-[0_0_20px_rgba(54,255,155,0.5)] transition-all duration-500 ease-out"
            >
              Log In
            </Button>
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              size="sm"
              asChild
              className="bg-[#36FF9B] text-[#081813] font-semibold border border-[#36FF9B] hover:bg-[#2ee588] hover:border-[#2ee588] transition-all duration-500 ease-out"
            >
              <a href="/#builder-edition" onClick={(e) => handleNavClick(e, "/#builder-edition")}>
                Start Today
              </a>
            </Button>
            <Button
              size="sm"
              onClick={handleLoginClick}
              className="bg-white text-[#081813] border border-white hover:bg-[#36FF9B] hover:text-[#081813] hover:border-[#36FF9B] transition-all duration-500 ease-out"
            >
              Log In
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#081813] border-[#36FF9B]/20 w-[280px]">
                <div className="flex justify-center mt-4 mb-2">
                  <img src={archivestVertical} alt="Archivest" className="h-20 w-auto" />
                </div>
                <nav className="flex flex-col gap-6 mt-6">
                  {navItems.map(item => <a key={item.id} href={item.href} onClick={(e) => { handleNavClick(e, item.href); setIsOpen(false); }} className="text-white/90 hover:text-[#36FF9B] transition-colors text-lg font-medium">
                      {item.label}
                    </a>)}
                  <Button size="sm" asChild className="w-full mt-4 bg-[#36FF9B] text-[#081813] font-semibold border border-[#36FF9B] hover:bg-[#2ee588] hover:border-[#2ee588]">
                    <a href="/#builder-edition" onClick={(e) => { handleNavClick(e, "/#builder-edition"); setIsOpen(false); }}>
                      Start Today
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      setIsOpen(false);
                      handleLoginClick(e);
                    }}
                    className="w-full"
                  >
                    Log In
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;