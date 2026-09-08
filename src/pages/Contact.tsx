import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#062018] mb-6 sm:mb-8 font-serif">Central Telegraph &amp; Inquiries</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-12">
            Dispatches from the field? Signal failures or precinct requisitions? Establish contact through official telegraphic channels below:
          </p>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-[#10B981]/15">
              <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-[#059669] mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#062018] mb-2 font-serif">Telegraphic Dispatch</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                For administrative audits, case files, and tactical support:
              </p>
              <a href="mailto:support@archivest.ai" className="text-[#059669] hover:underline text-base sm:text-lg font-semibold break-all">
                support@archivest.ai
              </a>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-[#10B981]/15">
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-[#059669] mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#062018] mb-2 font-serif">Precinct Coordinates</h2>
              <p className="text-sm sm:text-base text-gray-700">
                Archivest.ai // Sector 41<br />
                Insulindian Isola, Elysium
              </p>
            </div>
          </div>

          <section className="bg-[#F2FAF5] p-6 sm:p-8 rounded-lg border border-[#10B981]/20">
            <h2 className="text-xl sm:text-2xl font-bold text-[#062018] mb-4 font-serif">Dispatch Latency</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Pneumatic tubes process dispatches within 24–48 standard hours. In case of acute narrative emergency or structural breakdown in the field, prefix your subject with [URGENT DISPATCH].
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
