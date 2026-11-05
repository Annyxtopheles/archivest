import { m } from "framer-motion";
import { TestimonialsColumn } from "./ui/testimonials-columns";

const testimonials = [
  {
    text: "STRATA eliminated three weeks of manual EPD PDF hunting during our Zurich university timber hall tender. The Glaser condensation curves are dead-on accurate.",
    name: "Lukas Lindqvist",
    role: "Senior Facade Engineer, Lindqvist & Partner SIA",
  },
  {
    text: "Having 3rd-party verified A1–A3 GWP metrics tied directly to CSI MasterFormat sections transformed how our studio defends low-carbon specs against value-engineering cuts.",
    name: "Maya Lin-Vance",
    role: "Principal Architect, Atelier Vance NYC",
  },
  {
    text: "We swapped conventional aluminum rain-screens for charred Cryptomeria cladding after modeling the 60-year lifecycle carbon in STRATA. Passed municipal fire review on the first submission.",
    name: "Kenji Takahashi",
    role: "Director of Tectonics, Kengo Studio Tokyo",
  },
  {
    text: "The Hempcrete hygrothermal simulator let us prove to structural underwriters that a 300mm monolithic bio-wall met R-value targets without synthetic vapor barriers.",
    name: "Clara Von Berg",
    role: "Passivhaus Certifier, Munich",
  },
  {
    text: "Finally a material specification workbench built for practicing engineers rather than interior moodboard hobbyists. The Revit parameter bindings work without a single broken family.",
    name: "Marcus Thorne",
    role: "BIM Director, Arup-Aligned Practice London",
  },
  {
    text: "Quarry provenance tracking saved our civic museum project from sourcing uncertified travertine. Every stone block was traced to its exact Italian basin.",
    name: "Giulia Moretti",
    role: "Materials Specialist, Milano Architettura",
  },
  {
    text: "Comparing pozzolanic basalt concrete against standard Portland OPC in real time convinced our municipal client to approve a 74% carbon reduction across the foundation slab.",
    name: "Henrik Soren",
    role: "Structural Lead,Nordic Timber & Stone",
  },
  {
    text: "The acoustic NRC simulator accurately predicted reverberation times in our timber atrium using mycelium baffle panels. Zero post-occupancy acoustic retrofits required.",
    name: "Dr. Aris Thorne",
    role: "Architectural Acoustician, Berlin",
  },
  {
    text: "Exporting clean Division 03, 06, and 09 project manuals directly from our sample assembly board cut our specification writing overhead in half.",
    name: "Sarah Jenkins, CSI",
    role: "Senior Specifier, SOM-Trained Consultant",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-[#181816] relative py-20 overflow-hidden border-t border-[#EAE7DF]/15">
      <div className="container z-10 mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center"
        >
          <span className="text-xs font-sans uppercase tracking-widest text-[#C85A32] font-semibold mb-2">
            Practice Reports
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#F6F5F0]">
            Specified by Leading Studios
          </h2>
          <p className="mt-3 text-base text-[#EAE7DF]/75 font-sans">
            Architects, facade engineers, and specification writers rely on STRATA to defend material integrity.
          </p>
        </m.div>

        <div className="flex justify-center gap-6 mt-14 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={36} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={44} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={40} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
