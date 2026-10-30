import React from "react";

export const StrataLogo = ({ className = "h-8 w-auto", collapsed = false }: { className?: string; collapsed?: boolean }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision CAD Tectonic Mark */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <rect width="32" height="32" rx="4" fill="#181816" stroke="rgba(234, 231, 223, 0.2)" strokeWidth="1"/>
        {/* Layer 1: Rammed Earth Substrate */}
        <path d="M5 9H27" stroke="#EAE7DF" strokeWidth="2" strokeLinecap="round"/>
        {/* Layer 2: Terracotta Thermal Break with Datum Point */}
        <path d="M5 15H19" stroke="#C85A32" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="15" r="2" fill="#C85A32"/>
        {/* Layer 3: Verdigris Low-Carbon Timber Core */}
        <path d="M5 21H27" stroke="#2E6F5E" strokeWidth="2" strokeLinecap="round"/>
        {/* Layer 4: Foundation Footing */}
        <path d="M5 27H15" stroke="#B8B19F" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="27" r="1.5" fill="#2E6F5E"/>
      </svg>

      {!collapsed && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-mono text-lg font-bold tracking-widest text-[#F6F5F0]">STRATA</span>
            <span className="text-[9px] font-mono font-medium px-1.5 py-0.5 rounded bg-[#C85A32]/15 text-[#C85A32] border border-[#C85A32]/30">v2.4</span>
          </div>
          <span className="font-mono text-[9px] tracking-wider text-[#B8B19F] uppercase mt-0.5">by MatterLab</span>
        </div>
      )}
    </div>
  );
};

export const StrataVerticalLogo = ({ className = "h-16 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center gap-2 select-none text-center ${className}`}>
      <svg width="44" height="44" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="5" fill="#181816" stroke="rgba(234, 231, 223, 0.25)" strokeWidth="1"/>
        <path d="M5 8H27" stroke="#EAE7DF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M5 14H19" stroke="#C85A32" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="14" r="2" fill="#C85A32"/>
        <path d="M5 20H27" stroke="#2E6F5E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M5 26H15" stroke="#B8B19F" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="26" r="1.5" fill="#2E6F5E"/>
      </svg>
      <div>
        <span className="font-mono text-base font-bold tracking-widest text-[#F6F5F0] block">STRATA</span>
        <span className="font-mono text-[10px] tracking-wider text-[#B8B19F] uppercase">MatterLab Applied Sciences</span>
      </div>
    </div>
  );
};
