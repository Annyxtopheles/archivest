import Header from "../components/Header";
import Footer from "../components/Footer";
import { Reg, TM } from "@/components/ui/trademark";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#081813] mb-2 sm:mb-3">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-6 sm:mb-8">Effective Date: April 2026 · Operated by GBBB LLC (d/b/a Archivest)</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">1. Nature of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Archivest provides an AI-assisted creative platform designed to support writers through guidance, prompts, and structural feedback. Archivest does not independently create complete works and is intended to function as a creative aid, not a substitute for the user's own authorship and judgment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Users remain solely responsible for reviewing, editing, and finalizing all content generated with the assistance of the platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">2. User Content &amp; Ownership</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using Archivest, users grant Archivest a limited, non-exclusive license to process, transmit, store, and display their content solely as needed to operate the platform and provide the service to the user.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This includes saving project materials, displaying content inside the user's account, and processing user content through the platform's AI features so the user can receive coaching, feedback, organization, and related functionality.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Users retain full ownership of their original content. Archivest does not claim ownership of user-created material.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Archivest does not use user manuscripts, drafts, story ideas, or project materials to train AI models.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">3. Early Access Features</h2>
            <p className="text-gray-700 leading-relaxed">
              Certain features may be offered as "Early Access" or experimental features and may be incomplete, subject to errors, or modified or discontinued at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">4. Subscriptions, Billing, and Included Usage</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Subscriptions are billed in advance and are non-refundable except where required by law. Users may cancel at any time and will retain access through the end of the current billing period.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Archivest includes standard platform usage within its subscription pricing. There are no token packs, recharge credits, or surprise usage-based AI fees for normal intended use of the platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              However, subscription access is subject to reasonable fair-use limits. Archivest reserves the right to define, monitor, and enforce usage limits to protect platform stability, service quality, and operating costs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">5. Acceptable Use and Fair Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Archivest is built around structured creative workflows for novel development, including idea development, story architecture, outlining, drafting support, revision, and developmental feedback. It is not intended to function as a general-purpose AI chat tool, unlimited chat engine, or open-ended AI sandbox.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Users agree to use Archivest in accordance with its intended design, guided workflows, and normal creative use patterns.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">Acceptable use includes:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4 text-gray-700 leading-relaxed">
              <li>Following the guided processes within SimoneAI<Reg />, OliviaAI<Reg />, EllisAI<Reg />, and other Archivest features</li>
              <li>Using the platform for intentional writing, story development, drafting support, and revision</li>
              <li>Working within the natural flow of the product and its designed creative workflows</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-3">Users may not:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4 text-gray-700 leading-relaxed">
              <li>Use Archivest for unlawful, harmful, abusive, or infringing purposes</li>
              <li>Circumvent, bypass, manipulate, or misuse designed workflows, prompts, system guardrails, or platform limitations</li>
              <li>Attempt to turn Archivest into an unlimited general-purpose AI chat engine</li>
              <li>Force extended or repetitive conversations outside the intended product flows</li>
              <li>Attempt to generate large volumes of content through repeated prompts, bulk prompting, or abnormal usage patterns</li>
              <li>Run automated, scripted, bot-driven, or programmatic interactions</li>
              <li>Use the platform in a manner that creates disproportionate system load, operational burden, or cost relative to standard member usage</li>
              <li>Attempt to exploit, reverse engineer, scrape, interfere with, or disrupt the platform's functionality</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Individual and Commercial Use:</strong> Individual accounts may not be used to process client manuscripts, third-party works, or manuscripts belonging to a publishing house, editorial service, ghostwriting operation, or other commercial organization. Editors, editorial firms, publishers, and other professionals interested in using Archivest's developmental editing services for client or third-party manuscripts must contact Archivest for authorization and commercial pricing.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Benchmarking and competitive testing:</strong> Users may not test, benchmark, compare, or evaluate Archivest or its AI coaches for developing or improving another product, platform, model, or commercial workflow.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Fair Use Is Not Defined Solely by Numerical Limits:</strong> The absence of a displayed counter, daily cap, or specific numerical limit does not constitute permission for unlimited use. Fair use may be determined by volume, frequency, pattern, purpose, and manner of use.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Archivest reserves the right to monitor usage patterns to ensure fair and intended use, apply rate limits, usage caps, technical restrictions, or other controls, and suspend or terminate accounts that violate this policy or pose risk to the platform, other users, service stability, or operating costs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">6. Suspension and Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Archivest may suspend, limit, or terminate access to the platform at its discretion for violations of these Terms, abusive or abnormal usage patterns, attempts to misuse the platform, nonpayment, or actions that create legal, technical, financial, operational, or security risk.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Where appropriate, Archivest may first apply usage limits, rate limits, or temporary restrictions. However, Archivest reserves the right to suspend or terminate access without prior notice when necessary to protect the platform, other users, service stability, or operating costs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Archivest shall not be liable for any loss of access resulting from enforcement of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed">
              The platform is provided on an "as is" and "as available" basis without warranties of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, Archivest shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of data, content, or business opportunity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Archivest's total liability for any claim shall not exceed the total amount paid by the user in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">9. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              Users agree to indemnify, defend, and hold harmless Archivest, GBBB LLC, and its affiliates from and against any claims, damages, liabilities, and expenses arising out of use or misuse of the platform, violation of these Terms, or infringement of third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of the State of Colorado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#081813] mb-4">11. Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Archivest may update these Terms from time to time. Continued use constitutes acceptance of the updated Terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
