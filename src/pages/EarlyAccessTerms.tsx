import Header from "../components/Header";
import Footer from "../components/Footer";
import { Compass, Beaker, Terminal, Shield } from "lucide-react";

const EarlyAccessTerms = () => {
  return (
    <div className="min-h-screen bg-[#081813] text-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-16 max-w-4xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#36FF9B]/15 text-[#36FF9B] border border-[#36FF9B]/30 mb-4">
            <Compass className="w-3.5 h-3.5" />
            Field Testing Protocols
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">Experimental Calibration Terms</h1>
          <p className="text-sm text-gray-400 mb-6 sm:mb-8">Operated by GBBB LLC (d/b/a Archivest) · Insulindian Atelier Lab Division</p>
        </div>
        
        <div className="space-y-8 text-gray-300">
          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Beaker className="w-5 h-5 text-[#36FF9B]" />
              <span className="text-[#36FF9B]">1.</span> Beta Cognitive Protocols &amp; Invitation Clearance
            </h2>
            <p className="leading-relaxed mb-4">
              Certain advanced apparatuses inside the Archivest atelier (including experimental Shivers acoustic maps, deep ideological dialectics, and multi-timeline ledger sync) are released under limited Early Access clearance.
            </p>
            <p className="leading-relaxed">
              These features are made available to select authors for testing, field stress evaluation, and feedback synthesis prior to general precinct roll-out.
            </p>
          </section>

          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#36FF9B]" />
              <span className="text-[#36FF9B]">2.</span> Dynamic Calibration &amp; Iteration
            </h2>
            <p className="leading-relaxed mb-4">
              Early Access apparatuses are provided on an "as-calibrated" basis. The mechanics, interface levers, dialectical models, and analytical thresholds may be tuned, refactored, or superseded at any time without prior telegraphic warning.
            </p>
            <p className="leading-relaxed">
              We welcome field bug reports, telemetry anomalies, and philosophical feedback transmitted to our engineering desk at <a href="mailto:support@archivest.ai" className="text-[#36FF9B] hover:underline">support@archivest.ai</a>.
            </p>
          </section>

          <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#36FF9B]" />
              <span className="text-[#36FF9B]">3.</span> Authorship Protection Remains Absolute
            </h2>
            <p className="leading-relaxed">
              Even in experimental beta regimes, our core dogma stands unbroken: <strong className="text-white">Your manuscript is sacred.</strong> Beta features will never claim ownership over your text, nor will your test materials be used to train external synthetic models.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EarlyAccessTerms;
