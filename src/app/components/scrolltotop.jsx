'use client';
import { useEffect } from 'react';

export default function ScrollToTop({ children }) {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
}
