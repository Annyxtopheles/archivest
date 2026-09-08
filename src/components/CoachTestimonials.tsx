import { m } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Kitsuragi didn't offer bourgeois comfort. He cross-examined my drunken premise like a lieutenant inspecting ballistic angles. Suddenly, my hazy static was an undeniable case file.",
    attribution: "— H. Du Bois, RCM Lieutenant Double-Yefreitor",
  },
  {
    quote:
      "Volition's master ledger stopped my narrative from dissolving in the boardwalk fog. Rigorous, methodical scene architecture. Exactly what a detective of letters requires.",
    attribution: "— Kim Kitsuragi, Lieutenant, 57th Precinct",
  },
  {
    quote:
      "I was trapped in a decade-long ideological draft. Logic arrived like an unsparing coroner with a red pen, dissecting character arcs to bare marrow. Forensic perfection.",
    attribution: "— Evrart Claire, Union Boss & Amateur Chronicler",
  },
  {
    quote:
      "The Thought Cabinet keeps my plot outline pinned beside my typewriter. When existential dread blows in from the Sea, Archivest holds the structural line.",
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
                className="block font-serif text-3xl md:text-4xl leading-none text-black/40 select-none -mb-3 md:-mb-5"
              >
                “
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-black fill-black" />
                  ))}
                </div>
                <p className="text-[#081813] text-sm leading-relaxed">
                  {t.quote}
                </p>
                <p className="mt-4 text-xs font-bold tracking-[0.14em] uppercase text-black/75">
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
