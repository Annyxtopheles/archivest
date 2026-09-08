import Header from "../components/Header";
import Footer from "../components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#081813] mb-2 sm:mb-3">Refund &amp; Cancellation Policy</h1>
        <p className="text-sm text-gray-500 mb-6 sm:mb-8">Operated by GBBB LLC (d/b/a Archivest)</p>
        
        <div className="prose prose-lg max-w-none">
          <ul className="space-y-6 list-none pl-0">
            <li className="text-gray-700 leading-relaxed">
              All payments are non-refundable.
            </li>
            <li className="text-gray-700 leading-relaxed">
              Users may cancel at any time and retain access through the billing period.
            </li>
            <li className="text-gray-700 leading-relaxed">
              We encourage users to explore free features before subscribing.
            </li>
            <li className="text-gray-700 leading-relaxed">
              For support, contact{" "}
              <a href="mailto:support@archivest.ai" className="text-[#059669] hover:underline">
                support@archivest.ai
              </a>.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
