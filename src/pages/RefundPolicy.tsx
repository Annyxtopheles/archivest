import Header from "../components/Header";
import Footer from "../components/Footer";
import { Reg } from "@/components/ui/trademark";
import { Banknote, ShieldAlert, Clock, HelpCircle } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-[#081813] text-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-16 max-w-4xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#36FF9B]/15 text-[#36FF9B] border border-[#36FF9B]/30 mb-4">
            <Banknote className="w-3.5 h-3.5" />
            Precinct Requisition Ledger
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">Refund &amp; Cancellation Policy</h1>
          <p className="text-sm text-gray-400 mb-6 sm:mb-8">GBBB LLC (d/b/a Archivest) · Thought Cabinet Requisition Regulations</p>
        </div>
        
        <div className="space-y-8 text-gray-300">
          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#36FF9B]" />
              <span className="text-[#36FF9B]">1.</span> Dedicated Resource Allocation (Non-Refundable Policy)
            </h2>
            <p className="leading-relaxed mb-4">
              Upon commissioning a station charter or monthly cognitive allocation, dedicated precinct resources—including persistent Thought Cabinet memory, secure case vaults, and high-performance dialectical inference pathways—are instantly reserved in your name.
            </p>
            <p className="leading-relaxed">
              Because these computing faculties are provisioned immediately, <strong className="text-white">all membership fees and recurring subscriptions are non-refundable once billed</strong>, except where explicitly required by local law.
            </p>
          </section>

          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#36FF9B]">2.</span> The 7 Real ($7) Preliminary Evaluation
            </h2>
            <p className="leading-relaxed">
              We urge every writer to subject their premise to the <strong className="text-white">KitsuragiAI<Reg /> Preliminary Interrogation</strong> for only 7 Real ($7) before establishing a permanent station charter. This provides an exhaustive, low-risk demonstration of our Socratic methodology and delivers a complete, downloadable Case Dossier Report without requiring long-term precinct pledge.
            </p>
          </section>

          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#36FF9B]" />
              <span className="text-[#36FF9B]">3.</span> Station Pausing vs. Decommissioning
            </h2>
            <p className="leading-relaxed mb-4">
              Need to step away from your typewriter for investigative field work? Rather than forfeiting your station commission, you may pause your monthly coaching plan for up to six months per calendar year at a nominal maintenance fee of $19/mo, safeguarding your complete Story Bible and case logs intact.
            </p>
            <p className="leading-relaxed">
              You may cancel recurring plans at any time via your account station console. Upon cancellation, you will retain active access until the conclusion of your current billing cycle.
            </p>
          </section>

          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#36FF9B]" />
              <span className="text-[#36FF9B]">4.</span> Support &amp; Billing Dispatches
            </h2>
            <p className="leading-relaxed">
              If you experience telegraphic failure or billing discrepancies, transmit a dispatch directly to central operations:{" "}
              <a href="mailto:support@archivest.ai" className="text-[#36FF9B] hover:underline font-semibold">
                support@archivest.ai
              </a>. All legitimate grievances receive prompt attention within 24–48 hours.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
