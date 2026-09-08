import {
  Check,
  Sparkles,
  BookOpen,
  Clapperboard,
  BarChart3,
  UserRound,
  ChevronDown,
  Lock,
  Users,
  Star,
} from "lucide-react";
import { m } from "framer-motion";
import { Button } from "./ui/button";
import KitsuragiAvatar from "@/assets/kitsuragi-avatar.jpg";
import VolitionAvatar from "@/assets/volition-avatar.jpg";
import LogicAvatar from "@/assets/logic-avatar.jpg";
import { useCheckout } from "@/hooks/use-checkout";
import { Reg, TM, BrandInline } from "./ui/trademark";

const SIMONE_PRICE_ID = import.meta.env.VITE_SIMONE_ONETIME_PRICE as string;
const BUILDER_MONTHLY_PRICE_ID = import.meta.env.VITE_PRICE_BUILDER_MONTHLY as string;
const BUILDER_YEARLY_PRICE_ID = import.meta.env.VITE_PRICE_BUILDER_YEARLY as string;
const STUDIO_MONTHLY_PRICE_ID = import.meta.env.VITE_PRICE_STUDIO_MONTHLY as string;
const STUDIO_YEARLY_PRICE_ID = import.meta.env.VITE_PRICE_STUDIO_YEARLY as string;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const StepBadge = ({ n, dark = false }: { n: number; dark?: boolean }) => (
  <div
    className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
      dark ? "bg-[#36FF9B]/15 text-[#36FF9B]" : "bg-[#0B221B] text-white"
    }`}
  >
    Step {n}
  </div>
);

const StepArrow = () => (
  <div className="flex justify-center my-6">
    <div className="w-10 h-10 rounded-full bg-white border border-[#10B981]/20 shadow-[0_6px_20px_rgba(0,0,0,0.06)] flex items-center justify-center">
      <ChevronDown className="w-5 h-5 text-[#36FF9B]" />
    </div>
  </div>
);

const starterBenefits = [
  "Interrogate your raw impulse into an ironclad premise",
  "Extract case logline, synopsis, and opening scene beat",
  "Compute narrative tension and ideological resonance",
  "Download your comprehensive Case Dossier Report",
  "Ready-to-deploy blueprint for chapter construction",
];

const step2Benefits = [
  "Private Revachol Authorship Station & Thought Cabinet",
  "Full integration with Kitsuragi, Volition & Logic",
  "Persistent forensic memory across all drafts",
  "Long-term timeline continuity and world indexation",
  "Private underground syndicate & dispatch access",
  "Inviolable copyright. Export full archives anytime.",
];

const builderBenefits = [
  "Interactive collaboration with VolitionAI® for chapter-by-chapter master ledger.",
  "Construct ironclad roadmaps with sharp beat pacing and character moral fractures.",
  "Turn fragmented notes or half-finished drafts into a coherent case file.",
  "Real-time craft interrogation on scene logic, stakes, and subtext.",
  "Story Bible memory preserves your world's lore and class dynamics.",
  "Human authorship inviolable: Volition interrogates, you hold the pen.",
];

const studioBenefits = [
  "Direct collaboration with LogicAI® as your developmental coroner.",
  "Unvarnished Global Editorial Letter analyzing structural fractures.",
  "Chapter-by-chapter developmental autopsy across pacing, stakes, and tension.",
  "Tailored diagnostic evaluations to refine prose and narrative architecture.",
  "Deliver an undeniable literary dossier ready for publication.",
];

const Pricing = () => {
  const { startCheckout, isLoading } = useCheckout();

  return (
    <m.section
      id="pricing"
      className="scroll-mt-28 md:scroll-mt-32 py-20 bg-[#F4FBF7]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#081813]">
            <span className="text-[#36FF9B]">Thought Cabinet</span> Requisitions
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">Select Your Jurisdictional Clearance Level</p>
        </div>

        {/* STEP 1 — Starter */}
        <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <StepBadge n={1} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#059669]">Preliminary Interrogation</h3>
            <p className="mt-2 text-lg font-semibold text-[#081813]">
              Subject your premise to KitsuragiAI<Reg />'s 20 Socratic Cross-Examinations &amp; Receive Your Case Dossier
            </p>

            <p className="mt-1 text-muted-foreground">Audit your creative instincts before establishing full precinct clearance.</p>
          </div>

          <div className="bg-white rounded-3xl border border-[#10B981]/15 shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 md:p-10">
            <div className="max-w-xl mx-auto">
              {/* Avatar */}
              <div className="w-[120px] h-[120px] mx-auto mb-5 rounded-full overflow-hidden ring-2 ring-[#081813]/20 ring-offset-2">
                <img
                  src={KitsuragiAvatar}
                  alt="KitsuragiAI®"
                  loading="lazy"
                  decoding="async"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Kitsuragi title block */}
              <div className="text-center">
                <div className="text-lg font-bold text-[#081813]">KitsuragiAI<Reg /></div>
                <div className="text-sm text-muted-foreground mt-1">Premise Interrogator &amp; Dialectical Partner</div>
                <div className="text-sm font-semibold text-[#059669] mt-1">KitsuragiAI<Reg /> (Complete Case Dossier Report)</div>
              </div>

              <div className="my-6 border-t border-[#10B981]/10" />

              {/* Designed For */}
              <div className="text-center">
                <div className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Jurisdiction</div>
                <p className="mt-2 text-[#081813]">Authors clawing a coherent narrative from psychic static</p>
              </div>

              <div className="my-6 border-t border-[#10B981]/10" />

              <div className="flex justify-center">
                <ul className="space-y-3 inline-block text-left">
                  {starterBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                      <span className="text-[#081813]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-6 border-t border-[#10B981]/10" />

              {/* Price + CTA */}
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#059669]">Only 7 Real ($7)</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Test your story premise for psychological veracity and dramatic tension for only $7
                </p>
                <Button
                  onClick={() => startCheckout(SIMONE_PRICE_ID)}
                  disabled={isLoading(SIMONE_PRICE_ID)}
                  className="mt-5 rounded-full bg-gradient-to-r from-[#36FF9B] to-[#10B981] hover:from-[#10B981] hover:to-[#36FF9B] text-[#081813] font-semibold px-6 shadow-[0_0_20px_rgba(54,255,155,0.4)] transition-all duration-300"
                >
                  {isLoading(SIMONE_PRICE_ID) ? "Redirecting…" : (<span>Acquire Case Dossier With KitsuragiAI<Reg /></span>)}
                </Button>
                <p className="text-xs text-muted-foreground mt-3">No long-term precinct pledge required.</p>
              </div>
            </div>
          </div>
        </m.div>

        <StepArrow />

        {/* STEP 2 — Coaching System Membership */}
        <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <StepBadge n={2} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#081813]">Establish Your Station</h3>
            <p className="mt-2 text-base md:text-lg font-semibold text-[#081813]">Archivest Thought Cabinet &amp; Authorship Syndicate</p>
            <p className="mt-2 text-[#059669] font-medium">Permanent commission into the connected atelier where your magnum opus, inner faculties, and historical timeline remain preserved.</p>
          </div>

          <div className="bg-white rounded-3xl border border-[#10B981]/15 shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-[auto_auto_1fr] gap-8 items-center">
              {/* Emblem */}
              <div className="flex justify-center">
                <div className="w-[140px] h-[140px] rounded-full bg-[#0A241C] flex items-center justify-center relative">
                  <Users className="w-14 h-14 text-[#36FF9B]" strokeWidth={1.5} />
                  <Star className="w-5 h-5 text-[#36FF9B] fill-[#36FF9B] absolute bottom-9" />
                </div>
              </div>

              {/* Price */}
              <div className="text-center md:border-l md:border-[#10B981]/15 md:pl-8">
                <div className="text-5xl md:text-6xl font-bold text-[#081813]">$397</div>
                <div className="mt-2 text-lg font-semibold text-[#081813]">Lifetime Station Charter</div>
                <p className="mt-1 text-sm text-[#059669] font-medium">Requisite to commission your precinct.</p>
                <p className="mt-3 text-base font-bold text-[#059669]">This is where your manuscript,<br />and your whole body of work,<br />gain an unbreakable fortress.</p>
              </div>

              {/* Benefits — vertical single column */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 md:border-l md:border-[#10B981]/15 md:pl-8">
                {step2Benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span className="text-[#081813]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer strip */}
            <div className="mt-8 rounded-2xl bg-[#36FF9B]/10 border border-[#36FF9B]/20 px-5 py-3 flex items-center justify-center gap-3 text-sm text-[#065F46]">
              <Lock className="w-4 h-4 text-[#059669] flex-shrink-0" />
              <span className="text-center">
                You pay the membership fee when you join. Your monthly coaching plan is separate and can be upgraded later without paying the membership fee again. If you need to step away, you can pause your studio instead of canceling. If you cancel and return later, you will need to rejoin.
              </span>
            </div>
          </div>
        </m.div>

        <StepArrow />

        {/* STEP 3 — Choose Your Coaching Team */}
        <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <StepBadge n={3} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#081813]">Mobilize Your Cerebral Taskforce</h3>
            <p className="mt-2 text-muted-foreground">
              Select the active mental faculties stationed inside your Thought Cabinet.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Builder */}
            <m.div
              id="builder-edition"
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="scroll-mt-28 md:scroll-mt-32 bg-white rounded-3xl border border-[#10B981]/15 shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-8 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="flex -space-x-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white">
                    <img
                      src={KitsuragiAvatar}
                      alt="KitsuragiAI®"
                      loading="lazy"
                      decoding="async"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white">
                    <img
                      src={VolitionAvatar}
                      alt="VolitionAI®"
                      loading="lazy"
                      decoding="async"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold tracking-wider text-muted-foreground">
                    KitsuragiAI<Reg /> &middot; VolitionAI<Reg />
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    Premise Interrogator &middot; Narrative Architect &middot; Encyclopedia &amp; Drama
                  </div>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-[#059669]">Field Detective Edition</h4>
              <p className="mt-2 text-sm italic text-[#081813]">For authors ready to forge fragmented revelations into an ironclad, chapter-by-chapter case file.</p>
              <div className="mt-2 text-lg font-semibold text-[#081813]">$79/mo or $799 annually</div>
              <div className="text-sm text-[#059669] font-semibold mt-1">Includes KitsuragiAI<Reg /> + VolitionAI<Reg /></div>

              <div className="my-5 border-t border-[#10B981]/15" />

              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                EVERYTHING IN PRELIMINARY DOSSIER, PLUS:
              </div>
              <ul className="space-y-2.5 flex-1">
                {builderBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm break-inside-avoid">
                    <Check className="w-4 h-4 text-black flex-shrink-0 mt-1" />
                    <span className="text-[#081813] leading-snug"><BrandInline text={b} /></span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-[#10B981]/15">
                <div className="text-sm text-[#081813] mb-4">
                  <span className="font-bold">Operational Scope:</span> Authors developing and drafting their novel under dialectical guidance, collective syndicate workshops, and connected cognitive faculties.
                </div>
                <div className="flex flex-row flex-wrap gap-3">
                  <Button
                    onClick={() => startCheckout(BUILDER_MONTHLY_PRICE_ID)}
                    disabled={isLoading(BUILDER_MONTHLY_PRICE_ID)}
                    className="flex-1 min-w-fit rounded-full bg-gradient-to-r from-[#36FF9B] to-[#10B981] hover:from-[#10B981] hover:to-[#36FF9B] text-[#081813] font-semibold shadow-[0_0_20px_rgba(54,255,155,0.4)] transition-all duration-300"
                  >
                    {isLoading(BUILDER_MONTHLY_PRICE_ID) ? "Redirecting…" : "Requisition Field Edition (Monthly)"}
                  </Button>
                  <Button
                    onClick={() => startCheckout(BUILDER_YEARLY_PRICE_ID)}
                    disabled={isLoading(BUILDER_YEARLY_PRICE_ID)}
                    className="flex-1 min-w-fit rounded-full bg-gradient-to-r from-[#36FF9B] to-[#10B981] hover:from-[#10B981] hover:to-[#36FF9B] text-[#081813] font-semibold shadow-[0_0_20px_rgba(54,255,155,0.4)] transition-all duration-300"
                  >
                    {isLoading(BUILDER_YEARLY_PRICE_ID) ? "Redirecting…" : "Requisition Field Edition (Annual)"}
                  </Button>
                </div>
              </div>
            </m.div>

            {/* Studio */}
            <m.div
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative bg-gradient-to-b from-[#07221A] to-[#081813] rounded-3xl border-2 border-[#36FF9B] p-8 flex flex-col"
              style={{ boxShadow: "0 10px 40px rgba(54,255,155,0.25), 0 0 30px rgba(54,255,155,0.12)" }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-[#36FF9B] text-[#081813] text-center text-xs font-bold uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(54,255,155,0.4)]">
                  The Full Martinaise Precinct
                </div>
              </div>

              <div className="flex items-center gap-4 mb-5 mt-2">
                <div className="flex -space-x-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#07221A]">
                    <img
                      src={KitsuragiAvatar}
                      alt="KitsuragiAI®"
                      loading="lazy"
                      decoding="async"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#07221A]">
                    <img
                      src={VolitionAvatar}
                      alt="VolitionAI®"
                      loading="lazy"
                      decoding="async"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#07221A]">
                    <img
                      src={LogicAvatar}
                      alt="LogicAI®"
                      loading="lazy"
                      decoding="async"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold tracking-wider text-gray-300">
                    KitsuragiAI<Reg /> &middot; VolitionAI<Reg /> &middot; LogicAI<Reg />
                  </div>
                  <div className="text-[11px] text-gray-400">
                    Premise Interrogator &middot; Narrative Architect &middot; Forensic Manuscript Coroner
                  </div>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-white">Prefecture Edition</h4>
              <p className="mt-2 text-sm italic text-gray-300">For authors conducting exhaustive forensic autopsies, building multi-generational chronicles, and erecting an enduring canon in one comprehensive suite.</p>
              <div className="mt-2 text-lg font-semibold text-[#36FF9B]">$99/mo or $999 annually</div>
              <div className="text-sm text-[#36FF9B] font-medium mt-1">Includes KitsuragiAI<Reg /> + VolitionAI<Reg /> + LogicAI<Reg /></div>

              <div className="my-5 border-t border-white/10" />

              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Everything in Field Detective, plus:
              </div>
              <ul className="space-y-2 flex-1">
                {studioBenefits.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm break-inside-avoid"
                  >
                    <Check className="w-4 h-4 text-[#36FF9B] flex-shrink-0 mt-1" />
                    <span className="text-gray-300 leading-snug"><BrandInline text={b} /></span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="text-sm text-gray-300 mb-4">
                  <span className="font-bold text-white">Operational Scope:</span> Authors executing macro-level developmental revisions, character post-mortems, and preparing an unassailable dossier for publication.
                </div>
                <div className="flex flex-row flex-wrap gap-3">
                  <Button
                    onClick={() => startCheckout(STUDIO_MONTHLY_PRICE_ID)}
                    disabled={isLoading(STUDIO_MONTHLY_PRICE_ID)}
                    className="flex-1 min-w-fit rounded-full bg-gradient-to-r from-[#36FF9B] to-[#10B981] hover:from-[#10B981] hover:to-[#36FF9B] text-[#081813] font-semibold shadow-[0_0_20px_rgba(54,255,155,0.4)] transition-all duration-300"
                  >
                    {isLoading(STUDIO_MONTHLY_PRICE_ID) ? "Redirecting…" : "Requisition Prefecture (Monthly)"}
                  </Button>
                  <Button
                    onClick={() => startCheckout(STUDIO_YEARLY_PRICE_ID)}
                    disabled={isLoading(STUDIO_YEARLY_PRICE_ID)}
                    className="flex-1 min-w-fit rounded-full bg-gradient-to-r from-[#36FF9B] to-[#10B981] hover:from-[#10B981] hover:to-[#36FF9B] text-[#081813] font-semibold shadow-[0_0_20px_rgba(54,255,155,0.4)] transition-all duration-300"
                  >
                    {isLoading(STUDIO_YEARLY_PRICE_ID) ? "Redirecting…" : "Requisition Prefecture (Annual)"}
                  </Button>
                </div>
              </div>
            </m.div>
          </div>
        </m.div>
      </div>
    </m.section>
  );
};

export default Pricing;
