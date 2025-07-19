/**
 * Type definitions for the webview environment
 * This file ensures proper TypeScript support for the plugin API injected by the webview preload script
 */

import type { MimirAPI } from "@trymimirai/app-types";

// Extend the global Window interface to include pluginAPI
declare global {
    interface Window {
        /**
         * Plugin API injected by the webview preload script
         * Provides access to messaging, UI, and other plugin functionality
         */
        pluginAPI: MimirAPI;
    }
}

// This export makes this file a module
export {};
