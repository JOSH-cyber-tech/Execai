'use client';

import { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';

type ElectronWindow = Window & {
  require?: (module: 'electron') => {
    ipcRenderer: {
      send: (channel: string, ...args: unknown[]) => void;
    };
  };
};

export function ElectronTokenSync() {
  const { getToken } = useAuth();

  useEffect(() => {
    // Only run in Electron environment
    const electronWindow = window as ElectronWindow;
    const isElectron = typeof window !== 'undefined' && !!electronWindow.require;
    
    if (!isElectron) return;

    async function syncToken() {
      try {
        const token = await getToken();
        if (token) {
          const electron = electronWindow.require?.('electron');
          electron?.ipcRenderer.send('store-auth-token', token);
        }
      } catch (err) {
        console.error('[ElectronTokenSync] Failed to sync token:', err);
      }
    }

    // Sync immediately and every 50 minutes (tokens expire after 60min)
    syncToken();
    const interval = setInterval(syncToken, 50 * 60 * 1000);
    return () => clearInterval(interval);
  }, [getToken]);

  return null;
}
