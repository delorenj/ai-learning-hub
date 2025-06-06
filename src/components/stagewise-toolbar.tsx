'use client';

import { StagewiseToolbar as StagewiseToolbarComponent } from '@stagewise/toolbar-next';

export function StagewiseToolbar() {
  // Don't render anything in production
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  // Add some debug logging
  console.log('🔧 Stagewise Toolbar: Loading in development mode');

  const stagewiseConfig = {
    plugins: []
  };

  return <StagewiseToolbarComponent config={stagewiseConfig} />;
} 