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
    const id = priceId || "starter-dossier";
    setLoadingPriceId(id);

    // Brief simulated latency (500ms) for responsive feedback
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoadingPriceId(null);

    // 1. $7 Preview Pass / Single Spec Dossier
    if (
      !priceId ||
      id.includes("starter") ||
      id.includes("dossier") ||
      id.includes("mat-") ||
      id === "preview-pass"
    ) {
      toast("SPECIFICATION DOSSIER REQUISITIONED", {
        description:
          "STRATA Preview Pass active ($7). CSI MasterFormat Div 03/06/09 specification package compiled with 3rd-party EPD carbon verification.",
        duration: 5500,
      });
      return;
    }

    // 2. Solo Architect Tier ($79/mo)
    if (id.includes("solo") || id.includes("builder")) {
      toast("SOLO ARCHITECT SEAT COMMISSIONED", {
        description:
          "MatterLab Studio Seat initialized. Unlimited parametric envelope simulations, Revit schedule bindings, and live LCA calculators unlocked.",
        duration: 5500,
      });
      return;
    }

    // 3. Practice Studio Tier ($99/mo or $999/yr)
    if (id.includes("practice") || id.includes("studio")) {
      toast("PRACTICE STUDIO WORKBENCH INITIALIZED", {
        description:
          "Multi-seat studio license registered. Centralized BIM asset vault, custom quarry provenance API, and LEED/BREEAM tender exports enabled.",
        duration: 5500,
      });
      return;
    }

    // 4. Global Engineering Firm ($397 Lifetime Charter)
    if (id.includes("charter") || id.includes("enterprise") || id.includes("firm")) {
      toast("GLOBAL ENGINEERING FIRM VAULT CHARTERED", {
        description:
          "Lifetime Enterprise Spec Vault commissioned ($397). Unlimited team seats, dedicated computational materials engineer, and custom EPD ingest pipelines active.",
        duration: 6000,
      });
      return;
    }

    // 5. Engineering Module Analzyers
    if (id.includes("analyzer") || id.includes("simulator") || id.includes("ledger")) {
      toast("PARAMETRIC SIMULATION ENGINE DISPATCHED", {
        description:
          "ISO 14044 / ASTM C423 calculation matrix computed for active project coordinate.",
        duration: 5000,
      });
      return;
    }

    // Fallback
    toast("STRATA STUDIO ACTION LOGGED", {
      description:
        "Workbench running in portfolio demonstration sandbox mode. Specifications ready for download.",
      duration: 5000,
    });
  }, []);

  return {
    startCheckout,
    isLoading: (priceId?: string) => (priceId ? loadingPriceId === priceId : loadingPriceId !== null),
    isAnyLoading: loadingPriceId !== null,
  };
}
