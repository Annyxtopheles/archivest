import bannerImg from "@/assets/banner-manuscript-desk-2.jpg";

const LiteraryRenaissanceBanner = () => {
  return (
    <section
      className="relative overflow-hidden py-14 md:py-20 flex items-center justify-center text-white text-center"
    >
      <img src={bannerImg} alt="Archivest typewriter and manuscripts" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" width={1920} height={600} />
      <div className="absolute inset-0 bg-[#081813]/65 backdrop-blur-[1px]" />
      <div className="relative z-10 max-w-4xl mx-auto px-10 md:px-16">
        <p className="text-2xl md:text-3xl font-bold leading-tight text-white">
          This is the post-revolutionary renaissance: detectives of craft harnessing dialectical engines to think with brutal lucidity, assemble unyielding structures, and carve unflinching truths into the memory of Elysium.
        </p>
      </div>
    </section>
  );
};

export default LiteraryRenaissanceBanner;
