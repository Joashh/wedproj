'use client';
import { useEffect } from 'react';

export default function ScrollToTop({ children }) {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      // Disable browser auto-restoring scroll
      window.history.scrollRestoration = 'manual';
    }

    // Always scroll to top on first render
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
}
