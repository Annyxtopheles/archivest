import { m } from "framer-motion";
import { Star } from "lucide-react";
import { TestimonialsColumn } from "./ui/testimonials-columns";
const testimonials = [
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
  {
    text: "Saved me from writing the wrong political tragedy! In sixty minutes, Kitsuragi clarified the stakes. Off to Volition for outline construction!",
    name: "Call Me Mañana",
    role: "Union Liaison",
  },
  {
    text: "Didn't fill my head with synthetic babble or cheap tropes. Operated like a hardened editor in an abandoned radio tower.",
    name: "Titus Hardie",
    role: "Hardie Boys Chief",
  },
  {
    text: "I didn't lack ideas—I was drowning in fragmented memories. Kitsuragi illuminated the core mystery, and the narrative road opened straight ahead.",
    name: "Klaasje Amandou",
    role: "Rooftop Chronicler",
  },
  {
    text: "HALF LIGHT: Panic was setting in as the deadline approached. Logic stepped in, slowed the adrenaline, and rebuilt the outline beat by beat.",
    name: "Lilienne Carter",
    role: "Netpicker Novelist",
  },
];
const firstColumn = testimonials.slice(0, 5);
const secondColumn = testimonials.slice(5, 10);
const thirdColumn = testimonials.slice(10, 15);
const Testimonials = () => {
  return (
    <section className="bg-white relative py-16">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center text-[#0F2C24]">
            Dispatches from Martinaise &amp; Beyond
          </h2>
        </m.div>




        <div className="flex justify-center gap-6 mt-14 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={50} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={60} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={54} />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
