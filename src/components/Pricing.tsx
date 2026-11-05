import { useState } from "react";
import { Check, ShieldCheck, Sparkles, Building2, Layers, Cpu, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useCheckout } from "@/hooks/use-checkout";

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  target: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  featuresTitle: string;
  features: string[];
  ctaText: string;
  checkoutId: string;
  buttonVariant?: "default" | "outline" | "highlight";
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: "tier-atelier",
    name: "Atelier",
    badge: "FOR BOUTIQUE STUDIOS",
    target: "Solo Architects & Independent Specifiers",
    description:
      "Essential low-carbon material specification, carbon benchmarking, and CSI MasterFormat export for independent permit filings.",
    monthlyPrice: 49,
    annualPrice: 39,
    featuresTitle: "Included in Atelier:",
    features: [
      "1 Named Principal Architect Seat",
      "Full access to 4,000+ verified low-carbon physical materials",
      "Cradle-to-gate (A1–A3 GWP) carbon benchmarks & EPD certificates",
      "Single-assembly hygrothermal & acoustic NRC calculator",
      "Up to 10 active project workspaces",
      "CSI MasterFormat (Div 03, 06, 09) & PDF specification exports",
      "Standard community & email technical support",
    ],
    ctaText: "Start 14-Day Free Trial",
    checkoutId: "atelier-plan",
    buttonVariant: "outline",
  },
  {
    id: "tier-studio",
    name: "Practice Studio",
    badge: "MOST POPULAR FOR ARCHITECTURE STUDIOS",
    popular: true,
    target: "Architecture Studios & Facade Engineering Teams",
    description:
      "Full-scale collaborative material engineering workbench with bidirectional Autodesk Revit and ArchiCAD synchronization.",
    monthlyPrice: 129,
    annualPrice: 99,
    featuresTitle: "Everything in Atelier, plus:",
    features: [
      "5 Studio Team Seats included (+$25/mo per extra seat)",
      "Unlimited project workspaces",
      "Bidirectional Autodesk Revit (2024–2026) & ArchiCAD live sync",
      "Multi-layer composite assembly builder & Glaser dew-point simulator",
      "Automated Whole-Building LCA (WBLCA) rollups for LEED & BREEAM",
      "Export to IFC4, Revit parameter files (.adsklib), and CSI 3-part specs",
      "Priority engineering support & quarterly EPD database updates",
    ],
    ctaText: "Start 14-Day Practice Trial",
    checkoutId: "practice-plan",
    buttonVariant: "highlight",
  },
  {
    id: "tier-enterprise",
    name: "Global Enterprise",
    badge: "FOR MULTI-OFFICE FIRMS",
    target: "Multi-Disciplinary Engineering & Masterplanning Practices",
    description:
      "Enterprise-grade material governance, custom supply chain verification, and dedicated computational engineering advisory.",
    monthlyPrice: 299,
    annualPrice: 249,
    featuresTitle: "Everything in Practice Studio, plus:",
    features: [
      "Unlimited team seats across global office branches",
      "Custom quarry provenance, supply chain auditing & private EPD ingestion",
      "Dedicated Computational Materials Engineer advisory desk",
      "Custom Rhino / Grasshopper API endpoints & webhook pipelines",
      "Private firm-wide proprietary material library & custom finishes",
      "Enterprise Single Sign-On (SSO / SAML), audit logging & role controls",
      "99.9% uptime SLA & dedicated practice onboarding engineer",
    ],
    ctaText: "Requisition Enterprise Suite",
    checkoutId: "enterprise-plan",
    buttonVariant: "default",
  },
];

const TRUST_METRICS = [
  {
    title: "14-Day Free Trial",
    description: "Full access to all 4,000+ materials. No credit card required.",
  },
  {
    title: "Zero Vendor Bias",
    description: "100% 3rd-party audited EPDs. No paid manufacturer placement.",
  },
  {
    title: "Open BIM Native",
    description: "Seamless IFC4, Revit .rvt/.adsklib, and CSI MasterFormat exports.",
  },
  {
    title: "30-Day Guarantee",
    description: "Full refund within 30 days if STRATA doesn't fit your workflow.",
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { startCheckout, isLoading } = useCheckout();

  return (
    <section
      id="pricing"
      className="scroll-mt-28 py-20 md:py-28 bg-[#181816] text-[#F6F5F0] relative overflow-hidden border-t border-[#EAE7DF]/15"
    >
      {/* Precision CAD grid background */}
      <div className="absolute inset-0 cad-grid-dark opacity-35 pointer-events-none" />

      {/* Atmospheric studio glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C85A32]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#C85A32]/15 text-[#C85A32] border border-[#C85A32]/30 mb-4">
            TRANSPARENT TECTONIC PRICING
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F6F5F0] tracking-tight">
            Plans for Practices of Every Scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#EAE7DF]/75 font-sans leading-relaxed">
            From independent practitioners to multi-studio engineering consultancies, specify with verified material intelligence, live hygrothermal simulations, and seamless BIM integrations.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-[#1F1E1B] border border-[#EAE7DF]/20 shadow-inner">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all ${
                !isAnnual
                  ? "bg-[#181816] text-[#F6F5F0] font-bold shadow-md border border-[#EAE7DF]/20"
                  : "text-[#B8B19F] hover:text-[#F6F5F0]"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                isAnnual
                  ? "bg-[#C85A32] text-white font-bold shadow-[0_0_15px_rgba(200,90,50,0.35)]"
                  : "text-[#B8B19F] hover:text-[#F6F5F0]"
              }`}
            >
              <span>Annual Billing</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                isAnnual ? "bg-white/20 text-white" : "bg-[#2E6F5E]/20 text-[#2E6F5E] border border-[#2E6F5E]/40"
              }`}>
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3-Column Standard Pricing Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_TIERS.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
            const savings = isAnnual ? (tier.monthlyPrice - tier.annualPrice) * 12 : 0;
            const isHighlighted = tier.popular;

            return (
              <div
                key={tier.id}
                className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? "bg-[#1F1E1B] border-2 border-[#C85A32] shadow-[0_20px_50px_rgba(200,90,50,0.22)] lg:-translate-y-2 p-7 sm:p-8"
                    : "bg-[#1F1E1B]/90 border border-[#EAE7DF]/15 hover:border-[#EAE7DF]/35 shadow-[0_12px_36px_rgba(0,0,0,0.4)] p-6 sm:p-7"
                }`}
              >
                {/* Popular Pill Badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C85A32] text-white text-[10px] font-mono uppercase tracking-widest font-bold px-4 py-1 rounded-full shadow-[0_4px_12px_rgba(200,90,50,0.4)] whitespace-nowrap">
                    {tier.badge}
                  </div>
                )}

                <div>
                  {/* Top Badge for non-popular */}
                  {!tier.popular && tier.badge && (
                    <div className="text-[10px] font-mono font-bold text-[#B8B19F] uppercase tracking-wider mb-2">
                      {tier.badge}
                    </div>
                  )}

                  <h3 className="text-2xl font-serif font-bold text-[#F6F5F0]">
                    {tier.name}
                  </h3>

                  <div className="text-xs font-mono text-[#C85A32] mt-1 font-medium">
                    {tier.target}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#EAE7DF]/75 font-sans leading-relaxed min-h-[40px]">
                    {tier.description}
                  </p>

                  {/* Price Box */}
                  <div className="my-6 pb-6 border-b border-[#EAE7DF]/15">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-mono font-bold text-[#F6F5F0]">
                        ${price}
                      </span>
                      <span className="text-xs font-mono text-[#B8B19F]">
                        / seat / month
                      </span>
                    </div>

                    <div className="text-xs font-mono text-[#EAE7DF]/60 mt-1.5 flex items-center justify-between">
                      <span>{isAnnual ? `Billed annually ($${price * 12}/yr)` : "Billed monthly"}</span>
                      {isAnnual && savings > 0 && (
                        <span className="text-[#2E6F5E] font-semibold">Save ${savings}/yr</span>
                      )}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#B8B19F] font-semibold">
                      {tier.featuresTitle}
                    </div>
                    <ul className="space-y-2.5 font-mono text-xs text-[#EAE7DF]/90">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isHighlighted ? "text-[#C85A32]" : "text-[#2E6F5E]"
                            }`}
                          />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Action Button */}
                <div className="pt-4 border-t border-[#EAE7DF]/10">
                  <Button
                    onClick={() => startCheckout(tier.checkoutId)}
                    disabled={isLoading(tier.checkoutId)}
                    className={`w-full py-5 font-mono text-xs uppercase tracking-wider font-semibold rounded-lg transition-all duration-300 ${
                      tier.buttonVariant === "highlight"
                        ? "bg-[#C85A32] hover:bg-[#A64522] text-white shadow-[0_0_25px_rgba(200,90,50,0.4)]"
                        : tier.buttonVariant === "default"
                        ? "bg-[#2E6F5E] hover:bg-[#24594B] text-white shadow-[0_0_20px_rgba(46,111,94,0.3)]"
                        : "bg-[#181816] hover:bg-[#252420] text-[#F6F5F0] border border-[#EAE7DF]/25"
                    }`}
                  >
                    {isLoading(tier.checkoutId) ? "Commissioning Seat..." : tier.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Standard Trust & Guarantee Banner */}
        <div className="rounded-2xl bg-[#1F1E1B]/70 border border-[#EAE7DF]/15 p-6 sm:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_METRICS.map((metric, i) => (
              <div key={i} className="space-y-1 font-mono">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F6F5F0]">
                  <ShieldCheck className="w-4 h-4 text-[#2E6F5E]" />
                  <span>{metric.title}</span>
                </div>
                <p className="text-[11px] text-[#B8B19F] font-sans leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-[#EAE7DF]/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#B8B19F]">
            <div>
              <span>Need educational or non-profit consortium access? </span>
              <a href="mailto:specs@matterlab-strata.io" className="text-[#C85A32] hover:underline font-semibold">
                specs@matterlab-strata.io
              </a>
            </div>
            <div className="text-[#EAE7DF]/60 text-center sm:text-right">
              ALL PLANS INCLUDE ISO 14025 / EN 15804+A2 CERTIFIED DATA
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
