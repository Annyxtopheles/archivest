import Header from "../components/Header";
import Footer from "../components/Footer";
import { FileCheck } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#181816] text-[#F6F5F0]">
      <Header />
      <main className="container mx-auto px-4 pt-28 md:pt-36 pb-20 max-w-4xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono uppercase tracking-wider bg-[#C85A32]/15 text-[#C85A32] border border-[#C85A32]/30 mb-3">
            <FileCheck className="w-3.5 h-3.5" />
            Practice Licensing Terms
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-[#F6F5F0]">
            Terms of Specification &amp; Studio License
          </h1>
          <p className="text-xs font-mono text-[#B8B19F] mt-2">
            Effective Date: October 2026 · MatterLab Applied Sciences LLC (d/b/a STRATA)
          </p>
        </div>

        <div className="space-y-6 bg-[#1F1E1B] p-6 sm:p-8 rounded-2xl border border-[#EAE7DF]/15 font-sans text-sm text-[#EAE7DF]/85 leading-relaxed">
          <section>
            <h2 className="text-lg font-serif font-normal text-[#F6F5F0] mb-2">1. Scope of Engineering Workbench</h2>
            <p>
              STRATA provides an empirical material specification database, lifecycle carbon (A1–A3 GWP) calculator, and BIM parameter generator for professional architects, engineers, and specification writers. While all EPD data is verified against ISO 14025 / EN 15804+A2 certificates, final structural and municipal code sign-off remains the responsibility of the Architect or Engineer of Record.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-normal text-[#F6F5F0] mb-2">2. Ownership of Construction Documents</h2>
            <p>
              Your practice retains 100% unencumbered copyright and intellectual property rights over all exported CSI MasterFormat manuals, Revit assemblies, and custom hygrothermal calculations generated inside STRATA.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-normal text-[#F6F5F0] mb-2">3. License Seats &amp; Practice Subscriptions</h2>
            <p>
              STRATA provides Atelier (solo practitioner), Practice Studio (multi-seat collaborative), and Global Enterprise licensing tiers. Active computational seats govern concurrent live BIM API bindings, automated WBLCA report exports, and custom material library access.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-normal text-[#F6F5F0] mb-2">4. Technical Inquiries</h2>
            <p>
              For enterprise multi-office licensing or custom API agreements, contact <a href="mailto:specs@matterlab-strata.io" className="text-[#C85A32] hover:underline font-mono">specs@matterlab-strata.io</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
