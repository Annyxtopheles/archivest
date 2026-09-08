import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, MapPin, Radio } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#081813] text-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-16 max-w-4xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#36FF9B]/15 text-[#36FF9B] border border-[#36FF9B]/30 mb-4">
            <Radio className="w-3.5 h-3.5" />
            Precinct Dispatch
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">Central Telegraph &amp; Inquiries</h1>
          <p className="text-base sm:text-lg text-gray-300">
            Dispatches from the field? Signal failures or precinct requisitions? Establish contact through official telegraphic channels below:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <Mail className="w-10 h-10 text-[#36FF9B] mb-4" />
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Telegraphic Dispatch</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              For administrative audits, case files, station requisitions, and tactical support:
            </p>
            <a href="mailto:support@archivest.ai" className="text-[#36FF9B] hover:underline text-base sm:text-lg font-semibold break-all">
              support@archivest.ai
            </a>
          </div>

          <div className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <MapPin className="w-10 h-10 text-[#36FF9B] mb-4" />
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Precinct Coordinates</h2>
            <p className="text-sm sm:text-base text-gray-300">
              Archivest Thought Cabinet // Sector 41<br />
              Martinaise Waterfront, Revachol West<br />
              Insulindian Isola, Elysium
            </p>
          </div>
        </div>

        <section className="bg-gradient-to-b from-[#0A241C]/90 to-[#081813]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Pneumatic Tube Transmission Protocol</h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Central dispatch processes incoming cylinders within 24–48 standard hours. In case of acute narrative emergency, psychological static, or structural manuscript fissures while out in the field, prefix your message heading with <strong className="text-[#36FF9B] font-mono">[URGENT CASE DISPATCH]</strong>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
