import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import StarsBackdrop from "@/components/ui/stars-backdrop";
import { Reg } from "@/components/ui/trademark";
import archivestHorizontal from "@/assets/Archivest Horizontal.svg";

const Footer = () => {
  return (
    <footer className="relative bg-[#081813] text-white pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <StarsBackdrop density="subtle" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-8 sm:mb-12">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 sm:mb-6">
              <Link to="/">
                <img
                  src={archivestHorizontal}
                  alt="Archivest Logo"
                  loading="lazy"
                  decoding="async"
                  width={200}
                  height={42}
                  className="h-9 sm:h-10 md:h-12 w-auto cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto sm:mx-0 mb-2">
              The city of Revachol has a tragedy to tell.
              <br />
              Your typewriter is the only witness.
            </p>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md mx-auto sm:mx-0">
              Station yourself alongside KitsuragiAI<Reg /> and inscribe the novel that outlives the pale.
            </p>
          </div>

          {/* Follow Us — hidden for now, uncomment to restore
          <div className="text-center sm:text-left mt-8">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 md:mb-6">Follow Us</h4>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a href="#" className="text-white/80 hover:text-[#36FF9B] transition-colors" aria-label="Facebook"><FaFacebookF className="w-5 h-5 sm:w-6 sm:h-6" /></a>
              <a href="#" className="text-white/80 hover:text-[#36FF9B] transition-colors" aria-label="Twitter"><FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6" /></a>
              <a href="#" className="text-white/80 hover:text-[#36FF9B] transition-colors" aria-label="Instagram"><FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" /></a>
              <a href="#" className="text-white/80 hover:text-[#36FF9B] transition-colors" aria-label="LinkedIn"><FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6" /></a>
              <a href="#" className="text-white/80 hover:text-[#36FF9B] transition-colors" aria-label="YouTube"><FaYoutube className="w-5 h-5 sm:w-6 sm:h-6" /></a>
            </div>
          </div>
          */}
        </div>

        <Separator className="bg-white/20 mb-6 sm:mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-white/60 text-xs sm:text-sm md:text-base mb-2 sm:mb-0 text-center sm:text-left">
            © 2026 Archivest.ai. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base">
            <Link to="/privacy-policy" className="text-white/60 hover:text-[#36FF9B] transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/60 hover:text-[#36FF9B] transition-colors">Terms of Service</Link>
            <Link to="/refund-policy" className="text-white/60 hover:text-[#36FF9B] transition-colors">Refund Policy</Link>
            <Link to="/early-access-terms" className="text-white/60 hover:text-[#36FF9B] transition-colors">Early Access Terms</Link>
            <Link to="/contact" className="text-white/60 hover:text-[#36FF9B] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
