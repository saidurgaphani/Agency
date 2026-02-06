import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const { hash, pathname } = useLocation();

  // Disable browser's automatic scroll restoration
  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    if (hash) {
      // Small delay to ensure the page has rendered for hash navigation
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Instant scroll to top for page navigation (no race condition)
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}
