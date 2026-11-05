import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShieldCheck } from "lucide-react";

const FAQ = () => {
  const faqItems = [
    {
      id: "item-what-is-strata",
      question: "What is the STRATA Material Specification Workbench?",
      answer: (
        <>
          <p className="mb-3">
            STRATA (developed by MatterLab Applied Sciences) is a computational material specification workbench and embodied carbon library built specifically for architects, facade engineers, and specification writers.
          </p>
          <p>
            Unlike generic visual moodboard directories, every specimen in STRATA is indexed with verified 3rd-party Environmental Product Declarations (EN 15804+A2), ASTM E84 fire performance metrics, ISO 354 acoustic absorption curves, and parametric Revit/IFC schedule bindings.
          </p>
        </>
      ),
    },
    {
      id: "item-epd-accuracy",
      question: "How are Cradle-to-Gate (A1–A3) carbon metrics verified?",
      answer: (
        <>
          <p className="mb-3">
            All GWP (Global Warming Potential) values in STRATA are audited against ISO 14025 and EN 15804+A2 Type III Environmental Product Declarations issued by accredited program operators (IBU, UL Environment, Environdec, and ASTM).
          </p>
          <p>
            We separate biogenic carbon sequestration from fossil fuel manufacturing emissions so your Whole-Building Life Cycle Assessment (WBLCA) passes LEED v4.1, BREEAM, and RIBA 2030 audits without dispute.
          </p>
        </>
      ),
    },
    {
      id: "item-bim-revit",
      question: "Does STRATA integrate directly with Autodesk Revit, Rhino, and ArchiCAD?",
      answer: (
        <p>
          Yes. Every assembly exports natively as an IFC4 material asset, an Autodesk Revit (`.adsklib` / `.rvt`) parameter family with pre-populated thermal and physical appearance assets, and a formatted 3-part CSI MasterFormat specification sheet (Word `.docx` and `.pdf`).
        </p>
      ),
    },
    {
      id: "item-vendor-bias",
      question: "Are materials in the library sponsored by manufacturers?",
      answer: (
        <>
          <p className="mb-3">
            Never. STRATA maintains a strict empirical firewall: manufacturers cannot pay to alter rankings, conceal Red List chemicals, or inflate thermal R-values.
          </p>
          <p>
            Specimens are admitted solely after passing MatterLab's independent laboratory verification for compressive strength, VOC off-gassing, and quarry chain-of-custody transparency.
          </p>
        </>
      ),
    },
    {
      id: "item-custom-assemblies",
      question: "Can our studio build and save custom multi-layer wall assemblies?",
      answer: (
        <p>
          Yes. Using the Live Assembly Inspector and Hygrothermal Simulator, you can stack exterior rain-screens, vapor-permeable membranes, bio-based insulation batts, and structural CLT or geopolymer cores—instantly computing combined U-value, Glaser interstitial condensation risk, and net kgCO₂e/m².
        </p>
      ),
    },
    {
      id: "item-licensing",
      question: "Can our practice switch between monthly and annual billing, or scale studio seats?",
      answer: (
        <p>
          Yes. You can switch between monthly and annual billing at any time with a single click. Annual plans include a 20% discount (equivalent to over two months free). Practice Studio plans include 5 named team seats, and additional project architects or facade engineers can be scaled up or down dynamically for $25/seat/month.
        </p>
      ),
    },
  ];

  return (
    <section
      id="faq"
      className="scroll-mt-28 py-20 bg-[#181816] text-[#F6F5F0] relative overflow-hidden border-t border-[#EAE7DF]/15"
    >
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans font-medium text-[#2E6F5E] bg-[#2E6F5E]/10 border border-[#2E6F5E]/25 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Documentation &amp; FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F6F5F0]">
            Specification Protocol
          </h2>
          <p className="mt-3 text-base text-[#EAE7DF]/70 font-sans">
            Answers regarding ISO 14044 carbon accounting, BIM interoperability, and studio licensing.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="rounded-2xl border border-[#EAE7DF]/15 bg-[#1C1B18]/90 px-6 py-1 data-[state=open]:border-[#C85A32]/50 transition-all shadow-sm"
            >
              <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-semibold text-[#F6F5F0] hover:text-[#C85A32] hover:no-underline py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm font-sans text-[#EAE7DF]/80 leading-relaxed pb-5 pt-1 border-t border-white/5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center text-xs text-[#B8B19F] font-sans">
          Have specific technical questions? Reach our engineering team at{" "}
          <a href="mailto:specs@matterlab-strata.io" className="text-[#C85A32] hover:underline font-medium">
            specs@matterlab-strata.io
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
