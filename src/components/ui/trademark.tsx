const markClassName = "relative inline align-baseline text-[0.6em] leading-none -top-[0.45em] ml-[0.5px]";

export const Reg = () => (
  <sup className={markClassName}>®</sup>
);

export const TM = () => (
  <sup className={markClassName}>™</sup>
);

/**
 * Renders a brand name that ends in ® or ™ with the symbol as superscript.
 * Falls back to the raw name if no trademark symbol is present.
 */
export const BrandName = ({ name }: { name: string }) => {
  const match = name.match(/^(.*?)([®™])\s*$/);
  if (!match) return <>{name}</>;
  const [, base, symbol] = match;
  return (
    <>
      {base}
      {symbol === "®" ? <Reg /> : <TM />}
    </>
  );
};

/**
 * Renders a plain string, superscripting every ® and ™ occurrence.
 */
export const BrandInline = ({ text }: { text: string }) => {
  const parts = text.split(/([®™])/);
  return (
    <>
      {parts.map((part, i) => {
        if (part === "®") return <Reg key={i} />;
        if (part === "™") return <TM key={i} />;
        return <span key={i}>{part}</span>;
      })}
    </>
  );
};
