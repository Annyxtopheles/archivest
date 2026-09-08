import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#081813] px-4">
      <div className="text-center flex flex-col items-center">
        <img
          src="/archivest-vertical.svg"
          alt="Archivest"
          className="h-20 w-auto mb-6 object-contain"
        />
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 text-[#36FF9B]">404</h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-2 font-serif">Lost in the Pale</p>
        <p className="text-sm sm:text-base text-gray-400 mb-6 max-w-md">CONCEPTUALIZATION: [Medium: Failure] — You have wandered off the edge of the case dossier into total unspooled memory.</p>
        <a 
          href="/" 
          className="inline-block bg-gradient-to-r from-[#36FF9B] to-[#10B981] hover:from-[#10B981] hover:to-[#36FF9B] text-[#081813] px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#36FF9B]/20"
        >
          Return to Precinct
        </a>
      </div>
    </div>
  );
};

export default NotFound;
