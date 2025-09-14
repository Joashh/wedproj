'use client';
import { useEffect } from 'react';

export default function ScrollToTop({ children }) {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Initial scroll reset
    window.scrollTo(0, 0);

    // Safety scroll reset after hydration
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  return <>{children}</>;
}
