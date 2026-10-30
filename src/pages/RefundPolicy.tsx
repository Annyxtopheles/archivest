import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShieldCheck } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-[#181816] text-[#F6F5F0]">
      <Header />
      <main className="container mx-auto px-4 pt-28 md:pt-36 pb-20 max-w-4xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono uppercase tracking-wider bg-[#2E6F5E]/15 text-[#2E6F5E] border border-[#2E6F5E]/30 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Commercial Licensing Assurance
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#F6F5F0]">
            Specification &amp; Charter Refund Policy
          </h1>
          <p className="text-xs font-mono text-[#B8B19F] mt-2">
            MatterLab Applied Sciences LLC (d/b/a STRATA)
          </p>
        </div>

        <div className="space-y-6 bg-[#1F1E1B] p-6 sm:p-8 rounded-2xl border border-[#EAE7DF]/15 font-sans text-sm text-[#EAE7DF]/85 leading-relaxed">
          <section>
            <h2 className="text-lg font-serif font-bold text-[#F6F5F0] mb-2">1. Single Assembly Dossier ($7 Pass)</h2>
            <p>
              If a downloaded Revit family, IFC4 asset, or CSI MasterFormat specification sheet fails to load in your CAD environment or contains a discrepancy against the published EPD certificate, notify us within 14 days for an immediate full refund or replacement package.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-bold text-[#F6F5F0] mb-2">2. Studio Vault Charter &amp; Practice Seats</h2>
            <p>
              New Studio Vault Charters ($397) and annual practice plans carry a 30-day engineering evaluation guarantee. If STRATA does not integrate cleanly into your studio's specification workflow within the first 30 days, request a full refund with zero administrative friction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-bold text-[#F6F5F0] mb-2">3. Billing Dispatch</h2>
            <p>
              Send invoice or refund requests to <a href="mailto:specs@matterlab-strata.io" className="text-[#C85A32] hover:underline font-mono">specs@matterlab-strata.io</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
