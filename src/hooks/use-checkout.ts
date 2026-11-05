import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";

export function useCheckout() {
  const [loadingPriceId, setLoadingPriceId] = useState<string | null>(null);

  useEffect(() => {
    const reset = () => setLoadingPriceId(null);
    window.addEventListener("pageshow", reset);
    return () => window.removeEventListener("pageshow", reset);
  }, []);

  const startCheckout = useCallback(async (priceId: string | undefined) => {
    const id = priceId || "practice-plan";
    setLoadingPriceId(id);

    // Brief simulated latency (500ms) for responsive feedback
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoadingPriceId(null);

    // 1. Atelier Plan ($39–$49/mo)
    if (id.includes("atelier") || id.includes("solo")) {
      toast("ATELIER LICENSE COMMISSIONED", {
        description:
          "Principal architect workspace active (14-day free trial). Access to 4,000+ materials and CSI MasterFormat exports initialized.",
        duration: 5500,
      });
      return;
    }

    // 2. Practice Studio Plan ($99–$129/mo)
    if (id.includes("practice") || id.includes("studio")) {
      toast("PRACTICE STUDIO TRIAL INITIALIZED", {
        description:
          "5 studio seats provisioned (14-day free trial). Bidirectional Revit/ArchiCAD plugin bindings and WBLCA carbon rollups enabled.",
        duration: 5500,
      });
      return;
    }

    // 3. Global Enterprise Plan ($249–$299/mo)
    if (id.includes("enterprise") || id.includes("firm")) {
      toast("ENTERPRISE SPECIFICATION VAULT COMMISSIONED", {
        description:
          "Global practice license dispatched. Dedicated computational materials engineer assigned and custom EPD ingest pipeline unlocked.",
        duration: 6000,
      });
      return;
    }

    // 4. Engineering Module Analyzers
    if (id.includes("analyzer") || id.includes("simulator") || id.includes("ledger")) {
      toast("PARAMETRIC SIMULATION ENGINE DISPATCHED", {
        description:
          "ISO 14044 / ASTM C423 calculation matrix computed for active project assembly.",
        duration: 5000,
      });
      return;
    }

    // 5. General or Material Specimen Export
    toast("MATERIAL SPECIFICATION ACCESSED", {
      description:
        "14-Day Studio trial initialized. Parametric BIM asset and verified EPD carbon metrics ready for download.",
      duration: 5000,
    });
  }, []);

  return {
    startCheckout,
    isLoading: (priceId?: string) => (priceId ? loadingPriceId === priceId : loadingPriceId !== null),
    isAnyLoading: loadingPriceId !== null,
  };
}
