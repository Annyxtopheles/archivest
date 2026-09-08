import { m } from "framer-motion";
import { Star } from "lucide-react";

const FeaturedTestimonials = () => {
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
          <div className="h-full relative flex flex-col gap-1 rounded-3xl border border-[#10B981]/15 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 md:p-8 hover:border-[#36FF9B]/40 transition-colors">
            <span aria-hidden className="block font-serif text-3xl md:text-4xl leading-none text-black/40 select-none -mb-3 md:-mb-5">“</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-black fill-black" />
                ))}
              </div>
              <p className="text-[#081813] text-sm leading-relaxed">
                Archivest replaced my cluttered desk of loose receipts. The faculties remember class allegiances and moral contradictions. I write with brutal conviction now.
              </p>
              <p className="mt-4 text-xs font-bold tracking-[0.14em] uppercase text-black/75">
                — Cindy the Skull, Street Essayist &amp; Agitator
              </p>
            </div>
          </div>

          <div className="h-full relative flex flex-col gap-1 rounded-3xl border border-[#10B981]/15 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 md:p-8 hover:border-[#36FF9B]/40 transition-colors">
            <span aria-hidden className="block font-serif text-3xl md:text-4xl leading-none text-black/40 select-none -mb-3 md:-mb-5">“</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-black fill-black" />
                ))}
              </div>
              <p className="text-[#081813] text-sm leading-relaxed">
                Like stepping into a warm bookstore shielded from coastal squalls. My world-building dossier stays cohesive, piercing through creative amnesia.
              </p>
              <p className="mt-4 text-xs font-bold tracking-[0.14em] uppercase text-black/75">
                — Annette, Bookstore Clerk &amp; Lorekeeper
              </p>
            </div>
          </div>

          <div className="h-full relative flex flex-col gap-1 rounded-3xl border border-[#10B981]/15 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 md:p-8 hover:border-[#36FF9B]/40 transition-colors">
            <span aria-hidden className="block font-serif text-3xl md:text-4xl leading-none text-black/40 select-none -mb-3 md:-mb-5">“</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-black fill-black" />
                ))}
              </div>
              <p className="text-[#081813] text-sm leading-relaxed">
                Forced me to confront the historical reality of my setting. Every street now carries authentic decay, political weight, and economic friction.
              </p>
              <p className="mt-4 text-xs font-bold tracking-[0.14em] uppercase text-black/75">
                — Plaisance, Antique Appraiser &amp; Dramatist
              </p>
            </div>
          </div>

          <div className="h-full relative flex flex-col gap-1 rounded-3xl border border-[#10B981]/15 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 md:p-8 hover:border-[#36FF9B]/40 transition-colors">
            <span aria-hidden className="block font-serif text-3xl md:text-4xl leading-none text-black/40 select-none -mb-3 md:-mb-5">“</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-black fill-black" />
                ))}
              </div>
              <p className="text-[#081813] text-sm leading-relaxed">
                Volition keeps the plot lines taut while Logic points out plot inconsistencies before I commit them to ink. Indispensable for mystery writers.
              </p>
              <p className="mt-4 text-xs font-bold tracking-[0.14em] uppercase text-black/75">
                — Trant Heidelstam, Consultant &amp; Crime Analyst
              </p>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;
