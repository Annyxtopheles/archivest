import { m } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reg, TM } from "@/components/ui/trademark";

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const FAQ = () => {
    const faqItems = [
    {
      id: "item-what-is",
      question: "What is the Archivest Thought Cabinet & Authorship Station?",
      answer: (
        <>
          <p className="mb-4">Archivest is your private literary atelier. You command every stroke of the typewriter while three dialectical faculties—KitsuragiAI<Reg />, VolitionAI<Reg />, and LogicAI<Reg />—interrogate instincts, track character arcs, and audit structural fractures in real time.</p>
          <p>All the forensic power of dialectical intelligence. Zero synthetic slop over your prose. Your voice remains inviolable.</p>
        </>
      ),
    },
    {
      id: "item-where-to-start",
      question: "Where do I begin my investigation inside Archivest?",
      answer: (
        <>
          <p className="mb-4"><strong>Case #1: Raw impulse or premise notes:</strong> Deploy KitsuragiAI<Reg /> for a 20-inquiry Socratic interrogation to produce your Case Dossier.</p>
          <p className="mb-4"><strong>Case #2: Chaotic draft needing structure:</strong> Deploy VolitionAI<Reg /> to architect chapter beats, character arcs, and narrative tension.</p>
          <p className="mb-4"><strong>Case #3: Completed manuscript:</strong> Deploy LogicAI<Reg /> for an exhaustive developmental autopsy across pacing and structural cohesion.</p>
          <p>Dispatches or inquiries? Contact dispatch: <a href="mailto:support@archivest.ai" className="text-[#059669] hover:underline">support@archivest.ai</a></p>
        </>
      ),
    },
    {
      id: "item-tech-savvy",
      question: "Do I require an advanced degree in Electrical Engineering to operate this station?",
      answer: (
        <p>Negative. Archivest is built for hardboiled novelists and sleuths of craft, not electro-chemists. The computational machinery humming in the radio room stays out of sight; your manuscript stays center stage.</p>
      ),
    },
    {
      id: "item-vs-chatgpt",
      question: "How does Archivest differ from general chatbots like ChatGPT or Claude?",
      answer: (
        <>
          <p className="mb-4">Comparing general LLMs to Archivest is like comparing a rusty crowbar to an entire criminal forensics laboratory. General chatbots are blank slate word-completion algorithms prone to sycophancy and hallucinations.</p>
          <p className="mb-4">Archivest is a custom-engineered narrative apparatus built around the full trajectory of a novel: premise interrogation, Story Bible architecture, scene pacing, and developmental autopsies.</p>
          <p className="mb-4">Crucially: our faculties do NOT write or rewrite your prose. You write every word. We preserve the integrity of human consciousness.</p>
        </>
      ),
    },
    {
      id: "item-experience",
      question: "What does operating the Archivest station feel like?",
      answer: (
        <>
          <p className="mb-4">It feels like unlocking your room at the Whirling-in-Rags, lighting a fresh lamp, and spreading out your case dossier across the table.</p>
          <p className="mb-4">Your Story Bible, character psychologies, subplots, and chapter revisions remain tethered together. You return not to a fragmented pile of notes, but to a living, breathing social organism.</p>
        </>
      ),
    },
    {
      id: "item-no-writing-prose",
      question: "Will the AI faculties write my chapters for me?",
      answer: (
        <>
          <p className="mb-4">Hard refusal. Archivest maintains an inviolable ideological guardrail: human authorship is non-negotiable.</p>
          <p>If you desire synthetic algorithms to spew generic sentences on your behalf, this station is not for you.</p>
        </>
      ),
    },
    {
      id: "item-vs-course",
      question: "How does this compare to creative writing seminars or masterclasses?",
      answer: (
        <>
          <p className="mb-4">Lectures give you abstract theory while you sit passively in an auditorium. Archivest gives you an interactive crime lab where you apply craft principles directly to your manuscript in real time.</p>
          <p>Plus, you gain encrypted access to our private syndicate of serious authors sharing battle-tested dispatches from the front lines of publishing.</p>
        </>
      ),
    },
    {
      id: "item-beginners-experienced",
      question: "Is Archivest suitable for greenhorn scribes or seasoned veterans?",
      answer: (
        <>
          <p className="mb-4">Both. Greenhorn writers receive an orderly, methodical progression preventing them from drowning in the deep waters of Act II.</p>
          <p>Veteran authors receive a relentless dialectical foil that challenges comfortable habits, exposes thematic blind spots, and pressure-tests narrative architecture at the highest level.</p>
        </>
      ),
    },
    {
      id: "item-refund",
      question: "What is the refund protocol and clearance evaluation?",
      answer: (
        <>
          <p className="mb-4">We do not distribute frivolous free trials. Instead, we offer the KitsuragiAI<Reg /> Preliminary Dossier for $7 (7 Real), allowing you to experience our dialectical rigor firsthand before committing to full station charter.</p>
          <p className="mb-4">Because access immediately provisions dedicated cognitive computing resources and archive space, charter and monthly requisitions are non-refundable once activated.</p>
          <p>You may pause your station charter for up to six months per year ($19/mo) to safeguard your case files while operating in the field.</p>
        </>
      ),
    },
    {
      id: "item-privacy",
      question: "Are my case notes and manuscripts shielded from surveillance?",
      answer: (
        <>
          <p className="mb-4">Absolute clearance. Your words, characters, and manuscripts belong entirely to you. We never train public foundation models on your intellectual property.</p>
          <p>Your work remains sealed inside your private Thought Cabinet.</p>
        </>
      ),
    },
    {
      id: "item-contact-support",
      question: "Pneumatic Message Tube & Inquiries",
      answer: (
        <p>
          Transmit questions to central dispatch at{" "}
          <a href="mailto:support@archivest.ai" className="text-[#059669] hover:underline">
            support@archivest.ai
          </a>
          . Inquiries receive attention within 24–48 hours.
        </p>
      ),
    },
  ];


  return (
    <m.section
      id="faq"
      className="scroll-mt-28 md:scroll-mt-32 py-16 md:py-24 bg-gradient-to-b from-[#F4FBF7] to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariants}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center mb-12">
          <h2 className="text-balance text-3xl font-bold md:text-4xl mb-4 text-[#0F2C24] lg:text-5xl">
            Dispatches from Central Precinct: Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-balance">
            Exhaustive tactical dossiers answering the most critical inquiries regarding the Thought Cabinet, authorship protections, and cognitive requisitions.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card w-full rounded-2xl border border-border px-8 py-3 shadow-lg"
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-dashed">
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-left py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-base text-muted-foreground">{item.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </m.section>
  );
};

export default FAQ;
