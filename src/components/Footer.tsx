import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { StrataLogo } from "./StrataLogo";

const Footer = () => {
  return (
    <footer className="relative bg-[#181816] text-[#F6F5F0] pt-10 pb-14 overflow-hidden border-t border-[#EAE7DF]/15">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          {/* Brand Column (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="inline-block">
              <StrataLogo />
            </Link>
            <p className="text-[#EAE7DF]/80 text-sm sm:text-base font-serif max-w-md leading-relaxed">
              The tactile Sustainable Architecture Material Specification Workbench &amp; Embodied Carbon Library.
            </p>
            <p className="text-[#B8B19F] text-xs font-mono uppercase tracking-wider">
              ISO 14025 · EN 15804+A2 · ASTM E84 · CSI MASTERFORMAT COMPLIANT
            </p>
          </div>

          {/* Technical Navigation (6 cols) */}
          <div className="md:col-span-6 flex flex-col sm:flex-row sm:justify-end gap-8 font-mono text-xs">
            <div className="space-y-2">
              <div className="text-[#C85A32] font-bold uppercase tracking-wider mb-2">Workbench</div>
              <ul className="space-y-2 text-[#EAE7DF]/70">
                <li><a href="/#spec-sandbox" className="hover:text-[#F6F5F0] transition-colors">Assembly Inspector</a></li>
                <li><a href="/#engineering-modules" className="hover:text-[#F6F5F0] transition-colors">LCA &amp; Physics Analyzers</a></li>
                <li><a href="/#workflow" className="hover:text-[#F6F5F0] transition-colors">Revit / BIM Export</a></li>
                <li><a href="/#pricing" className="hover:text-[#F6F5F0] transition-colors">Studio Licensing</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-[#2E6F5E] font-bold uppercase tracking-wider mb-2">Governance</div>
              <ul className="space-y-2 text-[#EAE7DF]/70">
                <li><Link to="/privacy-policy" className="hover:text-[#F6F5F0] transition-colors">Data &amp; BIM Privacy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-[#F6F5F0] transition-colors">Terms of Specification</Link></li>
                <li><Link to="/refund-policy" className="hover:text-[#F6F5F0] transition-colors">Charter Guarantee</Link></li>
                <li><Link to="/early-access-terms" className="hover:text-[#F6F5F0] transition-colors">Lab Beta Protocol</Link></li>
                <li><Link to="/contact" className="hover:text-[#F6F5F0] transition-colors">Engineering Desk</Link></li>
              </ul>
            </div>
          </div>

        </div>

        <Separator className="bg-[#EAE7DF]/15 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-[#B8B19F]">
          <p>© 2026 MatterLab Applied Sciences LLC (STRATA Workbench). All rights reserved.</p>
          <p className="text-[#EAE7DF]/50">ZURICH · LONDON · NEW YORK · TOKYO</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
