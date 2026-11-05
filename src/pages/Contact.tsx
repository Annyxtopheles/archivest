import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, MapPin, Compass } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#181816] text-[#F6F5F0]">
      <Header />
      <main className="container mx-auto px-4 pt-28 md:pt-36 pb-20 max-w-4xl">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono uppercase tracking-wider bg-[#C85A32]/15 text-[#C85A32] border border-[#C85A32]/30 mb-4">
            <Compass className="w-3.5 h-3.5" />
            Materials Engineering Desk
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#F6F5F0] mb-3">
            Specification Support &amp; Quarry Audits
          </h1>
          <p className="text-base sm:text-lg text-[#EAE7DF]/75 font-sans">
            Need custom EPD ingestion, Revit family troubleshooting, or enterprise practice licensing? Connect directly with our architectural engineering specialists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#1F1E1B] p-6 sm:p-8 rounded-2xl border border-[#EAE7DF]/15 shadow-lg">
            <Mail className="w-8 h-8 text-[#C85A32] mb-4" />
            <h2 className="text-xl font-serif font-normal text-[#F6F5F0] mb-2">Technical Specification Desk</h2>
            <p className="text-sm text-[#EAE7DF]/75 font-sans mb-4">
              For CSI MasterFormat inquiries, custom WBLCA audits, and enterprise seat commissioning:
            </p>
            <a href="mailto:specs@matterlab-strata.io" className="text-[#C85A32] hover:underline font-mono text-sm font-semibold break-all">
              specs@matterlab-strata.io
            </a>
          </div>

          <div className="bg-[#1F1E1B] p-6 sm:p-8 rounded-2xl border border-[#EAE7DF]/15 shadow-lg">
            <MapPin className="w-8 h-8 text-[#2E6F5E] mb-4" />
            <h2 className="text-xl font-serif font-normal text-[#F6F5F0] mb-2">Applied Materials Laboratory</h2>
            <p className="text-sm text-[#EAE7DF]/75 font-mono leading-relaxed">
              MatterLab Applied Sciences // STRATA Division<br />
              Technoparkstrasse 1, 8005 Zürich<br />
              Switzerland (SIA / EN Compliance Hub)
            </p>
          </div>
        </div>

        <section className="bg-[#1F1E1B] p-6 sm:p-8 rounded-2xl border border-[#EAE7DF]/15">
          <h2 className="text-xl font-serif font-normal text-[#F6F5F0] mb-3">Manufacturer Specimen Submission Protocol</h2>
          <p className="text-sm text-[#EAE7DF]/80 font-sans leading-relaxed">
            Physical quarries, timber mills, and biogenic insulation producers seeking inclusion in the STRATA index must submit verified ISO 14025 / EN 15804+A2 Environmental Product Declarations alongside three physical 200mm×200mm material coupons for independent laboratory validation. Prefix technical dispatches with <strong className="text-[#C85A32] font-mono">[EPD-INGEST-REQUEST]</strong>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
