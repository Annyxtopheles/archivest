import { useState } from "react";
import { Check, ShieldCheck, Download, Layers, Building2, Globe, Cpu, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useCheckout } from "@/hooks/use-checkout";

const starterBenefits = [
  "Single Assembly Full Specification Dossier",
  "A1–A3 Embodied Carbon EPD Verification (EN 15804)",
  "ASTM E84 Fire & ISO 354 Acoustic Performance Certificates",
  "CSI MasterFormat Division 03 / 06 / 09 Word/PDF Spec Sheet",
  "Downloadable Revit (.rvt) & IFC4 Parametric Material Asset",
];

const lifetimeCharterBenefits = [
  "Permanent Studio Spec Vault Commissioning",
  "Full Access to 4,000+ Verified Low-Carbon Physical Materials",
  "Unlimited Hygrothermal Condensation & Dew-Point Simulations",
  "Direct Revit, ArchiCAD & Rhino/Grasshopper API Sync",
  "Custom Quarry Provenance & Supply Chain Audits",
  "Zero Vendor Sponsored Bias: 100% Empirically Tested Data",
];

const soloBenefits = [
  "1 Active Principal Architect Seat with full BIM write permissions",
  "Unlimited parametric wall/slab assembly configurations",
  "Live Glaser method condensation dew-point calculations",
  "Export CSI MasterFormat 3-part construction specifications",
  "Direct synchronization with Autodesk Revit 2024–2026",
  "LEED v4.1 & BREEAM Mat 01 compliance credit calculators",
];

const practiceBenefits = [
  "Up to 10 Practice Seats with role-based project permissions",
  "Shared Central Studio Material Palette & Custom Assembly Library",
  "Automated Whole-Building Life Cycle Assessment (WBLCA) rollups",
  "Direct manufacturer lead-time API and physical sample dispatch",
  "Dedicated Computational Materials Engineer advisory desk",
  "Custom EPD ingestion and verification pipeline for client specs",
];

const Pricing = () => {
  const { startCheckout, isLoading } = useCheckout();

  return (
    <section id="pricing" className="scroll-mt-28 py-20 bg-[#181816] text-[#F6F5F0] relative overflow-hidden border-t border-[#EAE7DF]/15">
      {/* Precision CAD grid */}
      <div className="absolute inset-0 cad-grid-dark opacity-35 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C85A32] font-semibold">
            STRATA STUDIO LICENSING &amp; COMMISSIONING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F6F5F0] mt-2">
            Material Governance for Architectural Practices
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#EAE7DF]/75 font-sans max-w-2xl mx-auto">
            Choose the specification tier that aligns with your practice scale, from single building permits to multi-studio global masterplanning.
          </p>
        </div>

        {/* =========================================================================
            TIER 1 — Single Assembly Spec Dossier ($7 Preview Pass)
           ========================================================================= */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#C85A32]/15 text-[#C85A32] border border-[#C85A32]/30">
              ENTRY PASS 01 // INDIVIDUAL SPEC AUDIT
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#F6F5F0] mt-2">
              Single Assembly Specification Dossier
            </h3>
            <p className="text-sm font-sans text-[#EAE7DF]/70">
              Verify one physical building assembly with full 3rd-party EPD and Revit parameter sets.
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#1F1E1B] to-[#181816] rounded-2xl border border-[#EAE7DF]/20 shadow-[0_12px_40px_rgba(0,0,0,0.5)] p-6 md:p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Price Callout (5 cols) */}
              <div className="md:col-span-5 text-center md:text-left space-y-3">
                <div className="flex items-baseline justify-center md:justify-start gap-2">
                  <span className="text-4xl sm:text-5xl font-mono font-bold text-[#F6F5F0]">$7</span>
                  <span className="text-xs font-mono text-[#B8B19F]">/ Single Assembly Pass</span>
                </div>
                <div className="text-sm font-serif font-semibold text-[#C85A32]">
                  Instant BIM/Revit &amp; CSI MasterFormat Download
                </div>
                <p className="text-xs text-[#EAE7DF]/70 leading-relaxed font-sans">
                  Evaluate any single low-carbon assembly from our repository. Ingest directly into your active CAD model with verified acoustic and fire ratings.
                </p>
                <div className="pt-2">
                  <Button
                    onClick={() => startCheckout("starter-dossier")}
                    disabled={isLoading("starter-dossier")}
                    className="w-full md:w-auto rounded bg-[#C85A32] hover:bg-[#A64522] text-white font-mono text-xs uppercase tracking-wider font-semibold px-6 py-4 shadow-[0_0_20px_rgba(200,90,50,0.35)]"
                  >
                    {isLoading("starter-dossier") ? "Compiling..." : "Download Sample Dossier ($7)"}
                  </Button>
                </div>
              </div>

              {/* Right Checklist (7 cols) */}
              <div className="md:col-span-7 md:border-l md:border-[#EAE7DF]/15 md:pl-8">
                <ul className="space-y-2.5 font-mono text-xs text-[#EAE7DF]/90">
                  {starterBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#2E6F5E] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* =========================================================================
            TIER 2 — Studio Practice Perpetual Vault ($397 Lifetime Charter)
           ========================================================================= */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#2E6F5E]/15 text-[#2E6F5E] border border-[#2E6F5E]/30">
              PERPETUAL CHARTER 02 // PRACTICE MASTER VAULT
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#F6F5F0] mt-2">
              Lifetime Studio Spec Vault Charter
            </h3>
            <p className="text-sm font-sans text-[#EAE7DF]/70">
              Perpetual institutional access to the entire 4,000+ material library and physical sample coordination desk.
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#252420] to-[#181816] rounded-2xl border-2 border-[#2E6F5E]/60 shadow-[0_16px_50px_rgba(46,111,94,0.2)] p-6 md:p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-5 text-center md:text-left space-y-3">
                <div className="flex items-baseline justify-center md:justify-start gap-2">
                  <span className="text-4xl sm:text-5xl font-mono font-bold text-[#F6F5F0]">$397</span>
                  <span className="text-xs font-mono text-[#2E6F5E] font-semibold">One-Time Studio Charter</span>
                </div>
                <div className="text-sm font-serif font-semibold text-[#F6F5F0]">
                  Unrestricted Practice-Wide Foundation Access
                </div>
                <p className="text-xs text-[#EAE7DF]/70 leading-relaxed font-sans">
                  Permanent access to our complete materials engineering database. Your practice retains verified EPD updates and API access forever with no recurring seat lockouts.
                </p>
                <div className="pt-2">
                  <Button
                    onClick={() => startCheckout("charter-397")}
                    disabled={isLoading("charter-397")}
                    className="w-full md:w-auto rounded bg-[#2E6F5E] hover:bg-[#24594B] text-white font-mono text-xs uppercase tracking-wider font-semibold px-6 py-4 shadow-[0_0_20px_rgba(46,111,94,0.35)]"
                  >
                    {isLoading("charter-397") ? "Chartering..." : "Requisition Studio Vault ($397)"}
                  </Button>
                </div>
              </div>

              <div className="md:col-span-7 md:border-l md:border-[#EAE7DF]/15 md:pl-8">
                <ul className="space-y-2.5 font-mono text-xs text-[#EAE7DF]/90">
                  {lifetimeCharterBenefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#2E6F5E] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE7DF]/10 text-center font-mono text-xs text-[#B8B19F]">
              PRACTICE PROTOCOL: The Lifetime Charter bonds your practice directly to the MatterLab materials repository. Team seats can be expanded anytime.
            </div>
          </div>
        </div>

        {/* =========================================================================
            TIER 3 — Recurring Practice Subscription Options (Solo vs Practice)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Solo Architect Plan */}
          <div className="rounded-2xl border border-[#EAE7DF]/15 bg-[#1F1E1B] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-[#C85A32] uppercase mb-1">
                FOR BOUTIQUE ATELIERS &amp; INDEPENDENT PRACTITIONERS
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#F6F5F0]">Solo Architect Edition</h4>
              <div className="mt-2 text-2xl font-mono font-bold text-[#F6F5F0]">$79 <span className="text-xs text-[#B8B19F] font-normal">/ month or $799 billed annually</span></div>
              <p className="mt-2 text-xs text-[#EAE7DF]/75 font-sans">
                Full parametric calculation power for independent architects managing up to 5 concurrent permit filings.
              </p>

              <div className="my-5 border-t border-[#EAE7DF]/10" />

              <ul className="space-y-2.5 font-mono text-xs text-[#EAE7DF]/90 mb-6">
                {soloBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#EAE7DF]/10">
              <Button
                onClick={() => startCheckout("solo-architect")}
                disabled={isLoading("solo-architect")}
                className="w-full rounded bg-[#181816] hover:bg-[#252420] border border-[#EAE7DF]/25 text-[#F6F5F0] font-mono text-xs uppercase tracking-wider py-4"
              >
                Requisition Solo License ($79/mo)
              </Button>
            </div>
          </div>

          {/* Practice Studio Edition */}
          <div className="rounded-2xl border-2 border-[#C85A32] bg-[#1F1E1B] p-6 sm:p-8 flex flex-col justify-between relative shadow-[0_16px_40px_rgba(200,90,50,0.2)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C85A32] text-white text-[10px] font-mono uppercase tracking-widest font-bold px-4 py-0.5 rounded-full">
              MOST SPECIFIED BY ARCHITECTURE FIRMS
            </div>

            <div>
              <div className="text-xs font-mono font-bold text-[#2E6F5E] uppercase mb-1">
                FOR MID-SIZE &amp; GLOBAL ENGINEERING STUDIOS
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#F6F5F0]">Practice Studio Suite</h4>
              <div className="mt-2 text-2xl font-mono font-bold text-[#F6F5F0]">$99 <span className="text-xs text-[#B8B19F] font-normal">/ seat / month or $999 billed annually</span></div>
              <p className="mt-2 text-xs text-[#EAE7DF]/75 font-sans">
                Enterprise-grade coordination across facade engineers, structural consultants, and specification writers.
              </p>

              <div className="my-5 border-t border-[#EAE7DF]/10" />

              <ul className="space-y-2.5 font-mono text-xs text-[#EAE7DF]/90 mb-6">
                {practiceBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#2E6F5E] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#EAE7DF]/10">
              <Button
                onClick={() => startCheckout("practice-studio")}
                disabled={isLoading("practice-studio")}
                className="w-full rounded bg-[#C85A32] hover:bg-[#A64522] text-white font-mono text-xs uppercase tracking-wider py-4 shadow-[0_0_20px_rgba(200,90,50,0.35)]"
              >
                Requisition Practice Suite ($99/mo)
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Pricing;
