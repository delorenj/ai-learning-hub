'use client';

import { useEffect } from 'react';

export default function HydrationErrorSuppress() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const originalConsoleError = console.error;
      console.error = (...args) => {
        const message = args[0]?.toString() || '';
        if (
          message.includes('Hydration failed') ||
          message.includes('did not match') ||
          message.includes('Warning: Text content did not match')
        ) {
          return;
        }
        originalConsoleError(...args);
      };
    }
  }, []);

  return null; // This component doesn't render anything
} 