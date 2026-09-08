import Header from "../components/Header";
import Footer from "../components/Footer";

const EULA = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-16 max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#081813] mb-6 sm:mb-8">End User License Agreement (EULA)</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            This End User License Agreement ("Agreement") is entered into between you ("User") and 
            Archivest.ai ("Company"). By accessing or using the Archivest application ("App"), 
            you agree to the following terms:
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">1. License Grant</h2>
            <p className="text-gray-700 leading-relaxed">
              Company grants User a limited, non-exclusive, non-transferable license to use the App 
              for personal creative writing purposes only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">2. Restrictions</h2>
            <p className="text-gray-700 leading-relaxed">
              User may not copy, modify, resell, sublicense, reverse engineer, or exploit the App for 
              commercial purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">3. Ownership</h2>
            <p className="text-gray-700 leading-relaxed">
              All intellectual property in the App, including proprietary AI personas, frameworks, and 
              software, remains the sole property of Company. Users retain rights to their own original 
              writings created with the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">4. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              Company reserves the right to terminate User's license for any misuse or breach of this Agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">5. Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              The App is provided "as is" without warranties of any kind. Company disclaims liability 
              for damages arising from use of the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">6. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              This Agreement is governed by the laws of the State of Colorado, USA.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EULA;
