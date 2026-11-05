import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShieldCheck } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#181816] text-[#F6F5F0]">
      <Header />
      <main className="container mx-auto px-4 pt-28 md:pt-36 pb-20 max-w-4xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono uppercase tracking-wider bg-[#2E6F5E]/15 text-[#2E6F5E] border border-[#2E6F5E]/30 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Data &amp; BIM Governance
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-[#F6F5F0]">
            Privacy &amp; Architectural IP Protection Policy
          </h1>
          <p className="text-xs font-mono text-[#B8B19F] mt-2">
            Effective Date: October 2026 · MatterLab Applied Sciences LLC (d/b/a STRATA)
          </p>
        </div>

        <div className="space-y-6 bg-[#1F1E1B] p-6 sm:p-8 rounded-2xl border border-[#EAE7DF]/15 font-sans text-sm text-[#EAE7DF]/85 leading-relaxed">
          <section>
            <h2 className="text-lg font-serif font-normal text-[#F6F5F0] mb-2">1. Proprietary BIM &amp; CAD Model Isolation</h2>
            <p>
              STRATA maintains an uncompromising intellectual property boundary: <strong className="text-white">Your studio's Revit schedules, IFC assemblies, and custom project specifications belong exclusively to your architectural practice.</strong> We never expose client building geometry, proprietary facade details, or tender schedules to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-normal text-[#F6F5F0] mb-2">2. Telemetry &amp; Performance Analytics</h2>
            <p>
              We collect only minimal operational telemetry required to synchronize parametric material families, compute Glaser condensation curves, and verify license seats. All project files are encrypted at rest (AES-256) and in transit (TLS 1.3).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-normal text-[#F6F5F0] mb-2">3. Zero Manufacturer Retargeting</h2>
            <p>
              Unlike ad-supported product directories, STRATA does not sell your specification history or contact credentials to building product sales representatives. When you inspect a quarry or mill specimen, your inquiry remains anonymous unless you explicitly request a physical sample dispatch.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-normal text-[#F6F5F0] mb-2">4. Data Retention &amp; Vault Export</h2>
            <p>
              Practices may export their complete specification archive in open IFC4, CSV, and CSI MasterFormat formats at any time. For data deletion or GDPR/FADP compliance inquiries, contact <a href="mailto:specs@matterlab-strata.io" className="text-[#C85A32] hover:underline font-mono">specs@matterlab-strata.io</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
