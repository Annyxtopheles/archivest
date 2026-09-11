import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";

const SIMONE_PRICE_ID = import.meta.env.VITE_SIMONE_ONETIME_PRICE as string;
const BUILDER_MONTHLY_PRICE_ID = import.meta.env.VITE_PRICE_BUILDER_MONTHLY as string;
const BUILDER_YEARLY_PRICE_ID = import.meta.env.VITE_PRICE_BUILDER_YEARLY as string;
const STUDIO_MONTHLY_PRICE_ID = import.meta.env.VITE_PRICE_STUDIO_MONTHLY as string;
const STUDIO_YEARLY_PRICE_ID = import.meta.env.VITE_PRICE_STUDIO_YEARLY as string;

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

    // Brief simulated latency (500ms) for responsive button feedback
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoadingPriceId(null);

    // 1. Starter / $7 Kitsuragi Dossier
    if (
      !priceId ||
      priceId === SIMONE_PRICE_ID ||
      id.includes("simone") ||
      id === "starter-dossier"
    ) {
      toast("INLAND EMPIRE: [Medium: Success] — Case Dossier Requisitioned", {
        description:
          "7 Real ($7) logged in archive demonstration mode. KitsuragiAI has commenced your 20 Socratic cross-examinations in the local case ledger.",
        duration: 6000,
      });
      return;
    }

    // 2. Field Detective Edition ($79/mo or $799/yr)
    if (
      priceId === BUILDER_MONTHLY_PRICE_ID ||
      priceId === BUILDER_YEARLY_PRICE_ID ||
      id.includes("builder")
    ) {
      toast("VOLITION: [Medium: Success] — Field Detective Clearance Logged", {
        description:
          "Requisition acknowledged in showcase mode. VolitionAI and KitsuragiAI stand ready at your Thought Cabinet drafting desk.",
        duration: 6000,
      });
      return;
    }

    // 3. Prefecture Edition ($99/mo or $999/yr)
    if (
      priceId === STUDIO_MONTHLY_PRICE_ID ||
      priceId === STUDIO_YEARLY_PRICE_ID ||
      id.includes("studio")
    ) {
      toast("VISUAL CALCULUS: [Challenging: Success] — Taskforce Mobilized", {
        description:
          "Complete Martinaise taskforce mobilized in demonstration sandbox. Kitsuragi, Volition, and Logic are stationed on the zinc table.",
        duration: 6000,
      });
      return;
    }

    // 4. General fallback
    toast("COMMUNAL LOGIC: [Trivial: Success] — Requisition Noted", {
      description:
        "The Thought Cabinet is operating in public portfolio showcase mode. No currency was deducted from your pocket.",
      duration: 5000,
    });
  }, []);

  return {
    startCheckout,
    isLoading: (priceId?: string) => (priceId ? loadingPriceId === priceId : loadingPriceId !== null),
    isAnyLoading: loadingPriceId !== null,
  };
}
