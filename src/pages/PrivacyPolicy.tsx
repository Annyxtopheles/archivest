import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShieldCheck, Lock, EyeOff } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#081813] text-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-16 max-w-4xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#36FF9B]/15 text-[#36FF9B] border border-[#36FF9B]/30 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Precinct Secrecy Protocol
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">Thought Cabinet Privacy Charter</h1>
          <p className="text-sm text-gray-400 mb-6 sm:mb-8">Effective Date: April 2026 · Registered under GBBB LLC (d/b/a Archivest) · Revachol West Jurisdiction</p>
        </div>

        <div className="space-y-8 text-gray-300">
          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#36FF9B]">1.</span> Case File Materials We Ingest
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-300 leading-relaxed">
              <li><strong className="text-white">Officer Credentials:</strong> Name, pseudonym, email dispatch address, and station requisition records.</li>
              <li><strong className="text-white">Investigative Evidence:</strong> Raw premises, Story Bibles, character profiles, dialogue transcripts, and drafts committed to your typewriter.</li>
              <li><strong className="text-white">Operational Telemetry:</strong> Latency metrics, browser environments, and station uptime logs strictly collected to keep precinct machinery running without breakdown.</li>
            </ul>
          </section>

          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#36FF9B]">2.</span> Utilization of Precinct Records
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-300 leading-relaxed">
              <li>To initialize and operate your private Thought Cabinet authorship station.</li>
              <li>To power real-time Socratic cross-examinations by KitsuragiAI, structural planning by VolitionAI, and forensic autopsies by LogicAI.</li>
              <li>To preserve long-term narrative continuity and character psychological profiles across all case files.</li>
              <li>To transmit official precinct telegrams and critical station upgrades.</li>
            </ul>
          </section>

          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-[#36FF9B]/30 shadow-[0_10px_30px_rgba(54,255,155,0.1)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-[#36FF9B]" />
              <span className="text-[#36FF9B]">3.</span> Inviolable Shield: No AI Foundation Model Training
            </h2>
            <p className="leading-relaxed mb-3">
              Archivest maintains an uncompromising ideological doctrine: <strong className="text-white">Your words belong solely to your human consciousness.</strong>
            </p>
            <p className="leading-relaxed">
              Manuscripts, beat sheets, scene fragments, and private notes processed through our dialectical engines are <strong className="text-[#36FF9B]">NEVER</strong> used to train public AI foundation models, sold to commercial brokers, or fed into collective synthetic scrapers. Your private case files stay sealed in your precinct vault.
            </p>
          </section>

          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#36FF9B]">4.</span> Compartmentalized Data Transmission
            </h2>
            <p className="leading-relaxed">
              We never barter, monetize, or lease your creative dossiers to advertisers or third-party corporations. We relay encrypted packets solely to dedicated infrastructure partners (such as secure cloud servers and transactional payment processors) required to execute station operations.
            </p>
          </section>

          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#36FF9B]" />
              <span className="text-[#36FF9B]">5.</span> Forensic Vault Security &amp; Retention
            </h2>
            <p className="leading-relaxed mb-3">
              Case materials are stored under enterprise-grade encryption at rest and in transit. Your project archives remain available as long as your station maintains active or paused standing.
            </p>
            <p className="leading-relaxed">
              Upon written dispatch from your verified address, we will execute an irrevocable forensic scrub of all project data from our active drives.
            </p>
          </section>

          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#36FF9B]">6.</span> Detective Sovereign Rights
            </h2>
            <p className="leading-relaxed mb-3">
              You maintain the absolute right to export complete case dossiers and manuscripts at any time in standard portable formats, or request immediate file deletion.
            </p>
            <p className="leading-relaxed">
              Telegraph inquiries to central dispatch:{" "}
              <a href="mailto:support@archivest.ai" className="text-[#36FF9B] hover:underline font-semibold">
                support@archivest.ai
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
