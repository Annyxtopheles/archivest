import { m } from "framer-motion";
import { Star } from "lucide-react";
import { TestimonialsColumn } from "./ui/testimonials-columns";
const testimonials = [
  {
    text: "Kitsuragi didn't offer bourgeois comfort. He cross-examined my drunken premise like a lieutenant inspecting ballistic angles. Suddenly, my hazy static was an undeniable case file.",
    name: "H. Du Bois",
    role: "RCM Lieutenant Double-Yefreitor",
  },
  {
    text: "Volition's master ledger stopped my narrative from dissolving in the boardwalk fog. Rigorous, methodical scene architecture. Exactly what a detective of letters requires.",
    name: "Kim Kitsuragi",
    role: "Lieutenant, 57th Precinct",
  },
  {
    text: "I was trapped in a decade-long ideological draft. Logic arrived like an unsparing coroner with a red pen, dissecting character arcs to bare marrow. Forensic perfection.",
    name: "Evrart Claire",
    role: "Union Boss & Amateur Chronicler",
  },
  {
    text: "The Thought Cabinet keeps my plot outline pinned beside my typewriter. When existential dread blows in from the Sea, Archivest holds the structural line.",
    name: "Lena",
    role: "Cryptid Researcher & Memoirist",
  },
  {
    text: "Archivest replaced my cluttered desk of loose receipts. The faculties remember class allegiances and moral contradictions. I write with brutal conviction now.",
    name: "Cindy the Skull",
    role: "Street Essayist & Agitator",
  },
  {
    text: "Like stepping into a warm bookstore shielded from coastal squalls. My world-building dossier stays cohesive, piercing through creative amnesia.",
    name: "Annette",
    role: "Bookstore Clerk & Lorekeeper",
  },
  {
    text: "Forced me to confront the historical reality of my setting. Every street now carries authentic decay, political weight, and economic friction.",
    name: "Plaisance",
    role: "Antique Appraiser & Dramatist",
  },
  {
    text: "Volition keeps the plot lines taut while Logic points out plot inconsistencies before I commit them to ink. Indispensable for mystery writers.",
    name: "Trant Heidelstam",
    role: "Consultant & Crime Analyst",
  },
  {
    text: "INLAND EMPIRE: The ceiling fan was mocking me. Kitsuragi sat down, opened his blue notebook, and asked twenty cold questions. Suddenly, my conspiracy had pulse and teeth.",
    name: "Harrier Du Bois",
    role: "Detective Lieutenant",
  },
  {
    text: "Managing two competing factional narratives in Jamrock was a procedural nightmare. Kitsuragi parsed the ideological fault lines without flinching.",
    name: "Jean Vicquemare",
    role: "Major Crimes Division",
  },
  {
    text: "RHETORIC [Challenging: Success] — Forced me to confront what my political manifesto masquerading as a novel was actually trying to say. Dialectical gold.",
    name: "Trant Heidelstam",
    role: "Special Consultant",
  },
  {
    text: "I was terrified my characters were mere cardboard puppets of Revacholian despair. Volition extracted genuine remorse and buried secrets I hadn't dared contemplate.",
    name: "Judit Minot",
    role: "Patrol Officer",
  },
  {
    text: "PERCEPTION: The smell of salt marsh and wet asphalt. Kitsuragi calibrated my opening chapter's spatial atmosphere until you could taste the motor oil.",
    name: "Chester McLaine",
    role: "RCM Officer",
  },
  {
    text: "Twenty rigorous questions. No bourgeois sycophancy. Just cold diagnostic evaluation of narrative momentum and existential tension.",
    name: "Macky",
    role: "Dockworker Poet",
  },
  {
    text: "ENCYCLOPEDIA: The history of the Suzerainty and the Communard insurrection is vast. Volition structured my family chronicle so the timeline never contradicted itself.",
    name: "Gaston Martin",
    role: "Boulodrome Historian",
  },
  {
    text: "SAVOIR FAIRE: Saved me three months of running in frantic circles around the Doomed Commercial Area. The outline snapped together like a spring-loaded latch.",
    name: "Cuno",
    role: "Street Critic",
  },
  {
    text: "I haven't written a coherent paragraph since the Revolution. Kitsuragi unlocked seventeen years of suppressed stories from my locker.",
    name: "René De Pauw",
    role: "Carabineer Veteran",
  },
  {
    text: "SHIVERS: A cold wind blows from the bay. The city is a living organism waiting for someone to write its obituary. Archivest makes sure you don't drop the pen.",
    name: "The Working Class Woman",
    role: "Martinaise Local",
  },
];

const firstColumn = testimonials.slice(0, 6);
const secondColumn = testimonials.slice(6, 12);
const thirdColumn = testimonials.slice(12, 18);

const Testimonials = () => {
  return (
    <section className="bg-[#081813] relative py-20 overflow-hidden border-t border-white/5">
      <div className="container z-10 mx-auto px-4">
        <m.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{
            once: true,
          }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center text-white">
            Dispatches from Martinaise &amp; Beyond
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#36FF9B] text-center font-medium">
            Field reports from authors holding the structural line against the Pale.
          </p>
        </m.div>

        <div className="flex justify-center gap-6 mt-14 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={48} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={56} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={52} />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
