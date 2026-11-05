import { useState } from "react";
import { Check, ShieldCheck, Sparkles, Building2, Layers, Cpu, ArrowRight } from "lucide-react";
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
  features: string[];
  ctaText: string;
  checkoutId: string;
  buttonVariant?: "default" | "outline" | "highlight";
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: "tier-atelier",
    name: "Atelier",
    target: "Solo Architects & Specifiers",
    description: "Essential material specification and carbon benchmarking for independent permit filings.",
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      "1 Principal Architect Seat",
      "Full access to 4,000+ verified low-carbon materials",
      "Cradle-to-gate (A1–A3) carbon benchmarks & EPDs",
      "CSI MasterFormat & PDF specification export",
      "Email technical support",
    ],
    ctaText: "Start 14-Day Free Trial",
    checkoutId: "atelier-plan",
    buttonVariant: "outline",
  },
  {
    id: "tier-studio",
    name: "Practice Studio",
    badge: "Most Popular",
    popular: true,
    target: "Architecture Studios & Facade Teams",
    description: "Collaborative material engineering with live Revit and ArchiCAD synchronization.",
    monthlyPrice: 129,
    annualPrice: 99,
    features: [
      "5 Studio Team Seats included",
      "Bidirectional Autodesk Revit & ArchiCAD live sync",
      "Multi-layer assembly builder & Glaser dew-point simulator",
      "Whole-Building LCA rollups for LEED & BREEAM",
      "Priority engineering support",
    ],
    ctaText: "Start 14-Day Practice Trial",
    checkoutId: "practice-plan",
    buttonVariant: "highlight",
  },
  {
    id: "tier-enterprise",
    name: "Enterprise",
    target: "Multi-Office Engineering Practices",
    description: "Enterprise material governance, custom supply chain audits, and dedicated engineering advisory.",
    monthlyPrice: 299,
    annualPrice: 249,
    features: [
      "Unlimited seats across global branches",
      "Custom quarry provenance & proprietary library",
      "Rhino / Grasshopper API & automation pipelines",
      "SSO / SAML, audit logs & dedicated SLA",
      "Dedicated computational materials advisor",
    ],
    ctaText: "Contact Enterprise",
    checkoutId: "enterprise-plan",
    buttonVariant: "default",
  },
];

const TRUST_METRICS = [
  {
    title: "14-Day Free Trial",
    description: "Full access to all 4,000+ materials. No card required.",
  },
  {
    title: "Cancel Anytime",
    description: "Switch between annual and monthly billing instantly.",
  },
  {
    title: "ISO 14044 Certified",
    description: "Every EPD dataset verified by third-party environmental auditors.",
  },
  {
    title: "Native CAD Sync",
    description: "Direct plugin integrations for Revit, ArchiCAD, and Rhino.",
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">("annual");
  const { startCheckout, isLoading } = useCheckout();

  return (
    <section id="pricing" className="py-24 bg-[#181816] text-[#F6F5F0] relative overflow-hidden border-t border-[#EAE7DF]/15">
      <div className="absolute inset-0 cad-grid-dark opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-sans uppercase tracking-widest text-[#C85A32] font-semibold">
            Licensing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F6F5F0] mt-2">
            Studio Plans &amp; Licensing
          </h2>
          <p className="mt-3 text-base text-[#EAE7DF]/75 font-sans leading-relaxed">
            Transparent pricing for boutique design ateliers, regional studios, and global engineering practices.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-[#141412] border border-white/5">
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-lg text-xs font-sans font-medium transition-all ${
                billingCycle === "annual"
                  ? "bg-[#C85A32] text-white shadow-sm"
                  : "text-[#B8B19F] hover:text-[#F6F5F0]"
              }`}
            >
              Annual Billing (Save 20%)
            </button>
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-lg text-xs font-sans font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-[#C85A32] text-white shadow-sm"
                  : "text-[#B8B19F] hover:text-[#F6F5F0]"
              }`}
            >
              Monthly Billing
            </button>
          </div>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {PRICING_TIERS.map((tier) => {
            const price = billingCycle === "annual" ? tier.annualPrice : tier.monthlyPrice;
            const isHighlight = tier.popular;

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl flex flex-col justify-between p-8 md:p-10 transition-all ${
                  isHighlight
                    ? "bg-[#1C1B18] border-2 border-[#C85A32] shadow-2xl"
                    : "bg-[#1C1B18]/80 border border-[#EAE7DF]/15 shadow-lg"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-sans font-medium bg-[#C85A32] text-white shadow-sm">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-serif font-bold text-[#F6F5F0]">{tier.name}</h3>
                    <p className="text-xs text-[#B8B19F] mt-1 font-sans">{tier.target}</p>
                  </div>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-white/5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-serif font-bold text-[#F6F5F0]">${price}</span>
                      <span className="text-xs text-[#B8B19F] font-sans">/ month / seat</span>
                    </div>
                    <span className="text-xs text-[#EAE7DF]/60 mt-1 block font-sans">
                      {billingCycle === "annual" ? "Billed annually" : "Billed monthly"}
                    </span>
                  </div>

                  <p className="text-xs text-[#EAE7DF]/75 leading-relaxed font-sans mb-6">
                    {tier.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8 text-xs font-sans text-[#EAE7DF]/85">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#2E6F5E] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  size="lg"
                  onClick={() => startCheckout(tier.checkoutId)}
                  disabled={isLoading(tier.checkoutId)}
                  className={`w-full py-3 rounded-lg font-sans text-xs font-medium transition-all ${
                    isHighlight
                      ? "bg-[#C85A32] hover:bg-[#A64522] text-white shadow-sm"
                      : "bg-[#141412] hover:bg-[#252420] text-[#EAE7DF] border border-white/10"
                  }`}
                >
                  {isLoading(tier.checkoutId) ? "Redirecting..." : tier.ctaText}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Trust Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-[#EAE7DF]/15 text-center">
          {TRUST_METRICS.map((item, idx) => (
            <div key={idx} className="p-4">
              <h4 className="text-sm font-serif font-bold text-[#F6F5F0]">{item.title}</h4>
              <p className="text-xs text-[#B8B19F] mt-1 font-sans">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
