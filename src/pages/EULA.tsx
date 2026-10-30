import Header from "../components/Header";
import Footer from "../components/Footer";

const EULA = () => {
  return (
    <div className="min-h-screen bg-[#181816] text-[#F6F5F0]">
      <Header />
      <main className="container mx-auto px-4 pt-28 md:pt-36 pb-20 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#F6F5F0] mb-4">
          End User License Agreement (EULA)
        </h1>
        <div className="space-y-6 bg-[#1F1E1B] p-6 sm:p-8 rounded-2xl border border-[#EAE7DF]/15 font-sans text-sm text-[#EAE7DF]/85 leading-relaxed">
          <p>
            This End User License Agreement ("Agreement") is between you ("Specifier" or "Practice") and MatterLab Applied Sciences LLC ("Company"), governing use of the STRATA Material Specification Workbench ("Software").
          </p>
          <p>
            By downloading Revit parameter libraries, IFC4 assemblies, or accessing the STRATA cloud workbench, you agree to use the empirical datasets strictly for architectural, engineering, and construction specification purposes.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EULA;
