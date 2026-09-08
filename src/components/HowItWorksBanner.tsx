import bannerImg from "@/assets/banner-manuscript-desk-1.jpg";

const HowItWorksBanner = () => {
  return (
    <section
      id="why-archivest"
      className="scroll-mt-28 md:scroll-mt-32 relative overflow-hidden pt-8 md:pt-10 pb-14 md:pb-20 text-white"
    >
      <img
        src={bannerImg}
        alt="Archivest desk apparatus"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        width={1920}
        height={600}
      />
      <div className="absolute inset-0 bg-[#081813]/65 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-[1.75rem] font-bold leading-tight text-[#36FF9B]">
            Archivest. One Telegraphic Dispatch. Always In Flow.
          </h2>
          <p className="mt-4 text-lg md:text-xl leading-relaxed text-white/90">
            Across the desolate expanse of the Insulindian isola, your narrative ledger remains intact.<br />
            Your inner faculties retain the entire forensic timeline of your investigation—from primordial spark to final print.
          </p>
          <blockquote className="mt-8 mx-auto max-w-3xl rounded-xl border-l-4 border-[#36FF9B] bg-[#0A241C]/80 border border-white/10 px-6 py-5 text-left text-lg md:text-xl leading-relaxed text-white italic shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            &ldquo;LOGIC: [Easy: Success] — This isn't merely another software utility. It is an airtight precinct for the literary imagination, where every clue clicks into place and the hangover of creative paralysis finally breaks.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksBanner;
