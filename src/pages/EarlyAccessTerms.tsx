import Header from "../components/Header";
import Footer from "../components/Footer";

const EarlyAccessTerms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#081813] mb-2 sm:mb-3">Early Access Terms</h1>
        <p className="text-sm text-gray-500 mb-6 sm:mb-8">Operated by GBBB LLC (d/b/a Archivest)</p>
        
        <div className="prose prose-lg max-w-none">
          <ul className="space-y-6 list-none pl-0">
            <li className="text-gray-700 leading-relaxed">
              Some advanced features are released in limited early access and may be available by invitation only.
            </li>
            <li className="text-gray-700 leading-relaxed">
              These features are provided for testing and feedback purposes and may be updated, changed, limited, or removed as we continue improving the platform.
            </li>
            <li className="text-gray-700 leading-relaxed">
              Access to specific early access features may be granted, delayed, restricted, or withdrawn at Archivest's discretion.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EarlyAccessTerms;
