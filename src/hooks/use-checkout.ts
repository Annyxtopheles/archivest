import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";
import { createCheckoutSession } from "@/services/checkout-service";

export function useCheckout() {
  const [loadingPriceId, setLoadingPriceId] = useState<string | null>(null);

  // Reset loading state when the page is restored from bfcache or becomes visible again
  // (e.g. user returns from Stripe via browser back button).
  useEffect(() => {
    const reset = () => setLoadingPriceId(null);
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) reset();
      else reset();
    };
    const handleVisibility = () => {
      if (document.visibilityState === "visible") reset();
    };
    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const startCheckout = useCallback(async (priceId: string | undefined) => {
    if (!priceId) {
      toast.error("Checkout is not configured. Please try again later.");
      return;
    }
    try {
      setLoadingPriceId(priceId);
      const url = await createCheckoutSession(priceId);
      window.location.href = url;
    } catch (err) {
      console.error("Checkout error:", err);
      toast.error("Something went wrong. Please try again.");
      setLoadingPriceId(null);
    }
  }, []);

  return {
    startCheckout,
    isLoading: (priceId?: string) => (priceId ? loadingPriceId === priceId : loadingPriceId !== null),
    isAnyLoading: loadingPriceId !== null,
  };
}
