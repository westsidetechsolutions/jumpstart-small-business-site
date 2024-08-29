"use client";
import { useEffect, useRef } from 'react';

const FlyerTracker: React.FC = () => {
  const hasSentEvent = useRef(false);

  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== 'undefined' && !hasSentEvent.current) {
      const urlParams = new URLSearchParams(window.location.search);
      const flyer = urlParams.get('flyer');

      if (flyer) {
        if (typeof window !== 'undefined' && window.gtag) {
          const urlParams = new URLSearchParams(window.location.search);
          const flyerValue = urlParams.get('flyer');
          window.gtag('event', 'flyer_scan', {
            flyer_value: flyerValue,
          });
          hasSentEvent.current = true;
          urlParams.delete('flyer');
          const newUrl = window.location.pathname + '?' + urlParams.toString();
          window.history.replaceState({}, '', newUrl);
        }
      }
    }
  }, []);

  return null; // This component doesn't render anything
};

export default FlyerTracker;
