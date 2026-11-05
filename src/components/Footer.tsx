import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { StrataLogo } from "./StrataLogo";

const Footer = () => {
  return (
    <footer className="relative bg-[#141412] text-[#F6F5F0] pt-14 pb-16 overflow-hidden border-t border-[#EAE7DF]/15">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Column (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="inline-block">
              <StrataLogo />
            </Link>
            <p className="text-[#EAE7DF]/75 text-sm font-sans max-w-md leading-relaxed">
              Sustainable architecture material specification workbench and verified embodied carbon library.
            </p>
            <p className="text-[#B8B19F]/60 text-xs font-sans">
              ISO 14025 · EN 15804+A2 · ASTM E84 · CSI MasterFormat compliant
            </p>
          </div>

          {/* Navigation (6 cols) */}
          <div className="md:col-span-6 flex flex-col sm:flex-row sm:justify-end gap-12 font-sans text-xs">
            <div className="space-y-3">
              <div className="text-[#F6F5F0] font-semibold mb-2">Workbench</div>
              <ul className="space-y-2 text-[#EAE7DF]/70">
                <li><a href="/#spec-sandbox" className="hover:text-[#F6F5F0] transition-colors">Assembly Inspector</a></li>
                <li><a href="/#engineering-modules" className="hover:text-[#F6F5F0] transition-colors">Performance Simulators</a></li>
                <li><a href="/#specimen-catalog" className="hover:text-[#F6F5F0] transition-colors">Specimen Catalog</a></li>
                <li><a href="/#pricing" className="hover:text-[#F6F5F0] transition-colors">Studio Licensing</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-[#F6F5F0] font-semibold mb-2">Governance</div>
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

        <Separator className="bg-white/5 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 font-sans text-xs text-[#B8B19F]/70">
          <p>© 2026 MatterLab Applied Sciences LLC (STRATA Workbench). All rights reserved.</p>
          <p className="text-[#B8B19F]/50">Zurich · London · New York · Tokyo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
