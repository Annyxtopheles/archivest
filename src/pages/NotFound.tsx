import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { StrataVerticalLogo } from "@/components/StrataLogo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Unindexed specification coordinate:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181816] text-[#F6F5F0] px-4">
      <div className="text-center flex flex-col items-center max-w-md">
        <StrataVerticalLogo className="mb-6" />
        <h1 className="text-6xl sm:text-7xl font-mono font-bold mb-3 text-[#C85A32]">404</h1>
        <p className="text-xl sm:text-2xl text-[#F6F5F0] mb-2 font-serif">Unindexed Datum Coordinate</p>
        <p className="text-xs sm:text-sm font-mono text-[#B8B19F] mb-8">
          CAD-ERR [0x404]: The requested material assembly or specification sheet does not exist at this section plane.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#C85A32] hover:bg-[#A64522] text-white font-mono text-xs uppercase tracking-wider px-6 py-3.5 rounded font-semibold transition-all duration-300"
        >
          Return to STRATA Workbench
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
