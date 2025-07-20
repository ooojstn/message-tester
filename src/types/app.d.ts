/**
 * Type definitions for the webview environment
 * This file ensures proper TypeScript support for the app API injected by the webview preload script
 */

import type { MimirAPI } from "@trymimirai/app-types";

// Extend the global Window interface to include appAPI
declare global {
    interface Window {
        /**
         * App API injected by the webview preload script
         * Provides access to messaging, UI, and other app functionality
         */
        appAPI: MimirAPI;
    }
}

// This export makes this file a module
export {};
