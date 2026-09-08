const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

export async function createCheckoutSession(priceId: string): Promise<string> {
  if (!SERVER_URL) throw new Error("Missing VITE_SERVER_URL");
  if (!priceId) throw new Error("Missing priceId");

  const res = await fetch(`${SERVER_URL}/api/stripe/public/checkout-session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId }),
  });

  if (!res.ok) {
    throw new Error(`Checkout session failed (${res.status})`);
  }

  const data = await res.json();
  const url: string | undefined = data?.url ?? data?.checkoutUrl ?? data?.sessionUrl;
  if (!url) throw new Error("Checkout session response missing url");
  return url;
}
