import bannerImg from "@/assets/banner-manuscript-desk-2.jpg";

const QuoteBanner = () => {
  return (
    <section
      id="why-archivest"
      className="scroll-mt-28 md:scroll-mt-32 relative overflow-hidden pt-12 md:pt-16 pb-6 md:pb-8 flex items-center justify-center text-white text-center"
    >
      <img
        src={bannerImg}
        alt="Archivest journal, spectacles, and manuscript"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        width={1920}
        height={600}
      />
      <div className="absolute inset-0 bg-[#081813]/65 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-10 md:px-16">
        <h2 className="text-2xl md:text-[1.75rem] font-bold leading-tight text-[#36FF9B]">
          You command the pen. Archivest holds back the oblivion.
        </h2>

        <p className="mt-4 text-lg md:text-xl leading-relaxed text-white/90">
          Inside one impenetrable precinct, your narrative retains total ideological clarity. Your cognitive faculties grasp the full trajectory of the case—from initial hunch and political intrigue to forensic autopsy and developmental revision.
        </p>
        <p className="mt-4 text-lg md:text-xl leading-relaxed text-white/90">
          Not another lifeless corporate application. A clandestine atelier in the ruins of Revachol where the work deepens and the detective keeps pressing forward against the creeping silence.
        </p>

        {/* Bottom hairline ornament */}
        <div className="flex items-center justify-center gap-3 mt-10 md:mt-12" aria-hidden>
          <span className="h-px w-12 bg-[#36FF9B]/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#36FF9B]/80" />
          <span className="h-px w-12 bg-[#36FF9B]/50" />
        </div>
      </div>
    </section>
  );
};

export default QuoteBanner;
