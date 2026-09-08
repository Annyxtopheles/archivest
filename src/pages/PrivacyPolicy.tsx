import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#081813] mb-2 sm:mb-3">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6 sm:mb-8">Effective Date: April 2026 · Operated by GBBB LLC (d/b/a Archivest)</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">1. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 leading-relaxed">
              <li>Account information (such as name and email address)</li>
              <li>User-generated content created within the platform</li>
              <li>Basic usage data to improve product performance and user experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">2. How We Use Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 leading-relaxed">
              <li>Provide and operate the Archivest platform</li>
              <li>Generate AI-assisted responses and creative guidance</li>
              <li>Improve product functionality and user experience</li>
              <li>Communicate with you about your account or updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">3. AI Processing</h2>
            <p className="text-gray-700 leading-relaxed">
              Archivest uses third-party AI providers to process user inputs and generate outputs. Your content is processed only to deliver functionality. We do not use your content to train public AI models and do not sell your content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">4. Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell or rent your personal data. We may share limited data with trusted service providers strictly to operate the platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We take reasonable measures to protect your data. However, no system is completely secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">6. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain user data as long as needed to provide the service. You may request deletion at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">7. Your Rights</h2>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4 text-gray-700 leading-relaxed">
              <li>Request access to your data</li>
              <li>Request deletion of your data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Contact:{" "}
              <a href="mailto:support@archivest.ai" className="text-[#059669] hover:underline">
                support@archivest.ai
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this policy. Continued use constitutes acceptance.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
