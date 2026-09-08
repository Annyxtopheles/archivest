import { m } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Simone didn't hand me convenient bourgeois platitudes. She interrogated my drunken premise like a lieutenant double-checking ballistic trajectories. What was once incoherent static in the Whirling-in-Rags became razor-sharp socio-political tragedy.",
    attribution: "— H. Du Bois, RCM Lieutenant Double-Yefreitor",
  },
  {
    quote:
      "Archivest completely stabilized my case notes. Olivia's structural ledger and scene-beat blueprints stopped me from losing my narrative in the boardwalk fog. Rigorous. Methodical. Exactly what a detective of letters requires.",
    attribution: "— Kim Kitsuragi, Lieutenant, 57th Precinct",
  },
  {
    quote:
      "I was trapped in the same draft for a decade—an ideological bog of failed revolutions. Ellis arrived like a post-war coroner with a red pen, dissecting character arcs down to their bare marrow. Outstanding forensic clarity.",
    attribution: "— Evrart Claire, Union Boss & Amateur Chronicler",
  },
  {
    quote:
      "The Thought Cabinet interface keeps my plot outline pinned right next to my prose. When the existential dread creeps in from the Sea, Archivest holds the structural line. It is truly disco.",
    attribution: "— Lena, Cryptid Researcher & Memoirist",
  },
];

const CoachTestimonials = () => {
  return (
    <section className="bg-[#F4FBF7] py-16">
      <div className="container mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {testimonials.map((t) => (
            <div
              key={t.attribution}
              className="h-full relative flex flex-col gap-1 rounded-3xl border border-[#10B981]/15 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 md:p-8 hover:border-[#36FF9B]/40 transition-colors"
            >
              <span
                aria-hidden
                className="block font-serif text-3xl md:text-4xl leading-none text-[#36FF9B] select-none -mb-3 md:-mb-5"
              >
                “
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#36FF9B] fill-[#36FF9B]" />
                  ))}
                </div>
                <p className="text-[#081813] text-sm leading-relaxed">
                  {t.quote}
                </p>
                <p className="mt-4 text-xs font-semibold tracking-[0.14em] uppercase text-[#059669]">
                  {t.attribution}
                </p>
              </div>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default CoachTestimonials;
