import Header from "../components/Header";
import Footer from "../components/Footer";
import { Reg } from "@/components/ui/trademark";
import { Scale, Feather, AlertTriangle, Cpu } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#081813] text-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-16 max-w-4xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#36FF9B]/15 text-[#36FF9B] border border-[#36FF9B]/30 mb-4">
            <Scale className="w-3.5 h-3.5" />
            Precinct Jurisprudence
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">Atelier Terms of Service</h1>
          <p className="text-sm text-gray-400 mb-6 sm:mb-8">Effective Date: April 2026 · Registered under GBBB LLC (d/b/a Archivest) · All Rights Reserved</p>
        </div>

        <div className="space-y-8 text-gray-300">
          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Feather className="w-5 h-5 text-[#36FF9B]" />
              <span className="text-[#36FF9B]">1.</span> The Sacred Principle of Human Authorship
            </h2>
            <p className="leading-relaxed mb-4">
              Archivest provides a specialized dialectical apparatus designed to accompany serious novelists through premise interrogation, narrative architecture, and developmental autopsy. Archivest does <strong className="text-white">NOT</strong> generate ghostwritten prose or replace human imagination.
            </p>
            <p className="leading-relaxed">
              You command every stroke of the typewriter. The dialectical faculties—KitsuragiAI<Reg />, VolitionAI<Reg />, and LogicAI<Reg />—serve strictly as interrogators, continuity custodians, and structural coroners.
            </p>
          </section>

          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#36FF9B]">2.</span> Inviolable Intellectual Sovereignty
            </h2>
            <p className="leading-relaxed mb-4">
              You retain 100% unencumbered copyright, trademark, and artistic title to your manuscripts, lore, characters, and case files. Archivest makes zero claim of ownership over anything committed to your Thought Cabinet.
            </p>
            <p className="leading-relaxed mb-4">
              By operating the station, you grant Archivest only the strict, temporary technical clearance required to process, render, and store your case files on secure precinct servers.
            </p>
            <p className="leading-relaxed">
              Your words will never be harvested or surrendered to train public foundation models or corporate algorithm farms.
            </p>
          </section>

          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#36FF9B]" />
              <span className="text-[#36FF9B]">3.</span> Station Charters, Requisitions &amp; Pausing
            </h2>
            <p className="leading-relaxed mb-4">
              Requisitions (Lifetime Station Charter and monthly cognitive allocations) are billed in advance. Due to dedicated computing provision and vault reservation upon activation, payments are non-refundable.
            </p>
            <p className="leading-relaxed mb-4">
              There are no surprise per-token charges or pay-per-word meters for standard creative novel drafting.
            </p>
            <p className="leading-relaxed">
              If an author must embark on an extended expedition or fieldwork, the station charter may be paused for up to six months annually ($19/mo maintenance ledger) to keep your case files sealed and preserved.
            </p>
          </section>

          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#36FF9B]" />
              <span className="text-[#36FF9B]">4.</span> Acceptable Conduct &amp; Forensic Fair Use
            </h2>
            <p className="leading-relaxed mb-4">
              Archivest is calibrated strictly for the craft of long-form fiction and creative storytelling. It is not an open-ended conversational playground, an automated content spam mill, or a benchmarking testbed.
            </p>
            <p className="leading-relaxed mb-3">Acceptable atelier operations include:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4 text-gray-300 leading-relaxed">
              <li>Deploying KitsuragiAI<Reg /> for rigorous 20-question premise interrogations.</li>
              <li>Utilizing VolitionAI<Reg /> to track chapter beats, subplots, and character psychologies.</li>
              <li>Running LogicAI<Reg /> for developmental autopsy and manuscript structural diagnosis.</li>
            </ul>
            <p className="leading-relaxed mb-3">Prohibited transgressions:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4 text-gray-300 leading-relaxed">
              <li>Running automated scraping bots, mass crawlers, or programmatic stress tests against precinct servers.</li>
              <li>Bypassing structural prompt guardrails to output synthetic pulp slop at volume.</li>
              <li>Using individual author licenses to syndicate third-party commercial publishing houses without prior enterprise clearance.</li>
              <li>Attempting to decompile, reverse-engineer, or harvest the dialectical prompting architectures of the station.</li>
            </ul>
          </section>

          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#36FF9B]">5.</span> Jurisdictional Dispatches
            </h2>
            <p className="leading-relaxed">
              Archivest reserves the right to suspend or decommission stations found in flagrant breach of these terms. For questions or enterprise syndicate licensing, transmit your dispatch to{" "}
              <a href="mailto:support@archivest.ai" className="text-[#36FF9B] hover:underline font-semibold">
                support@archivest.ai
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
