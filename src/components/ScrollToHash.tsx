import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();
  const { hash } = location;

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    // Small delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;

      const header = document.querySelector("[data-site-header]") as HTMLElement;
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      const buffer = 24;

      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - headerHeight - buffer,
        behavior: "smooth",
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.key, hash]);

  return null;
};

export default ScrollToHash;
