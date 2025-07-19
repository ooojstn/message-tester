import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import { BaseApp } from "@trymimirai/app-sdk";
import type { MimirAPI, WindowInfo, MessageCleanup, ChannelMessageHandler } from "@trymimirai/app-types";

// Create Vue app instance when running in browser
if (typeof window !== "undefined" && typeof document !== "undefined") {
    const app = createApp(App);
    app.mount("#app");
}

// ES Module exports for Mimir plugin system

/**
 * Message Tester - Mimir AI App
 *
 * A dedicated app for testing bidirectional messaging between app instances and webviews.
 *
 * This app demonstrates:
 * - Vue 3 with TypeScript and Composition API
 * - Mimir API messaging integration
 * - Bidirectional communication testing
 * - Message handling and response patterns
 * - Interactive debugging interface
 */
class MessageTesterApp extends BaseApp {
    private _testWindow: WindowInfo | null = null;
    private _messageCleanup: MessageCleanup | null = null;

    protected async onActivate(): Promise<void> {
        console.log("[MessageTesterApp] App activated");

        // Set up messaging system
        this.setupMessaging();

        // Show activation notification
        await this.api.ui.notifications.show("Message Tester activated! 📡", {
            type: "success",
            duration: 3000,
        });

        // Create interactive webview window
        try {
            // Use import.meta.url to get the current module path
            const currentModulePath = new URL(import.meta.url).pathname;
            const appDir = currentModulePath.replace("/dist/index.js", "");

            const testWindow = await this.api.ui.windows.create({
                id: "message-tester-window",
                title: "📡 Message Tester",
                width: 900,
                height: 700,
                x: 200,
                y: 100,
                resizable: true,
                minimizable: true,
                maximizable: true,
                closable: true,
                pinnable: true,
                content: {
                    type: "webview",
                    source: `file://${appDir}/web-dist/index.html`,
                    webPreferences: {
                        nodeIntegration: false,
                        contextIsolation: true,
                        webSecurity: true,
                        // preload will be automatically set to app webview preload script
                    },
                },
            });

            this._testWindow = testWindow;
            console.log("[MessageTesterApp] Created webview window");
        } catch (error) {
            console.error("[MessageTesterApp] Failed to create webview window:", error);

            // Show error notification
            await this.api.ui.notifications.show("Failed to create Message Tester window", {
                type: "error",
                duration: 5000,
            });
        }
    }

    protected async onDeactivate(): Promise<void> {
        console.log("[MessageTesterApp] App deactivated");

        // Clean up messaging
        if (this._messageCleanup) {
            this._messageCleanup();
            this._messageCleanup = null;
        }

        // Clear the window reference to allow reactivation
        if (this._testWindow) {
            console.log(`[MessageTesterApp] Clearing window reference: ${this._testWindow.id}`);
            this._testWindow = null;
        }
        console.log("[MessageTesterApp] Cleared window reference for reactivation");
    }

    /**
     * Set up messaging system to handle communication with webview and test channel
     */
    private setupMessaging(): void {
        console.log("[MessageTesterApp] Setting up messaging system");

        // Set up webview message handling (existing functionality)
        this._messageCleanup = this.api.messaging.onMessage((message: any) => {
            console.log("[MessageTesterApp] Received message from webview:", message);
            this.handleMessage(message);
        });

        // Set up test channel messaging (new functionality)
        const testChannelHandler: ChannelMessageHandler = (message: any, source: string) => {
            console.log("[MessageTesterApp] Received message on test channel:", message, "from:", source);
            this.handleTestChannelMessage(message, source);
        };
        const testChannelCleanup = this.api.messaging.subscribeToChannel("test", testChannelHandler);

        // Combine cleanup functions
        const originalCleanup = this._messageCleanup;
        this._messageCleanup = () => {
            originalCleanup();
            testChannelCleanup();
        };

        console.log("[MessageTesterApp] Messaging system set up successfully");
    }

    /**
     * Handle messages received from webview
     */
    private handleMessage(message: any): void {
        const { type, ...data } = message;

        console.log(`[MessageTesterApp] Handling message type: ${type}`, data);

        switch (type) {
            case "ping":
                this.handlePing(message);
                break;
            case "greeting":
                this.handleGreeting(message);
                break;
            case "data-request":
                this.handleDataRequest(message);
                break;
            case "custom":
                this.handleCustomMessage(message);
                break;
            case "complex-data":
                this.handleComplexData(message);
                break;
            case "connection-established":
                this.handleConnectionEstablished(message);
                break;
            case "stress-test":
                this.handleStressTest(message);
                break;
            default:
                console.log(`[MessageTesterApp] Unknown message type: ${type}`);
                this.sendResponseMessage({
                    type: "unknown-message-type",
                    originalMessage: message,
                    timestamp: new Date().toISOString(),
                });
        }
    }

    /**
     * Handle ping messages - respond with pong
     */
    private async handlePing(message: any): Promise<void> {
        console.log("[MessageTesterApp] Handling ping message");

        const pongMessage = {
            type: "pong",
            originalPing: message,
            timestamp: new Date().toISOString(),
            appId: this.api.getPluginId(),
            responseTime: Date.now(),
        };

        // Send pong back to webview (existing functionality)
        await this.sendResponseMessage(pongMessage);

        // ALSO send pong to test channel so frontend can see it
        await this.api.messaging.sendToChannel("test", pongMessage);
    }

    /**
     * Handle greeting messages
     */
    private async handleGreeting(message: any): Promise<void> {
        console.log("[MessageTesterApp] Handling greeting message");

        await this.sendResponseMessage({
            type: "greeting-response",
            message: `Hello from app instance! Received: ${message.content}`,
            timestamp: new Date().toISOString(),
            appInfo: {
                id: this.api.getPluginId(),
                version: "1.0.0",
                name: "Message Tester",
            },
        });
    }

    /**
     * Handle data request messages
     */
    private async handleDataRequest(message: any): Promise<void> {
        console.log("[MessageTesterApp] Handling data request");

        const { requestType } = message;

        if (requestType === "app-info") {
            await this.sendResponseMessage({
                type: "app-info-response",
                data: {
                    appId: this.api.getPluginId(),
                    windowId: this._testWindow?.id || "unknown",
                    timestamp: new Date().toISOString(),
                    uptime: process.uptime(),
                    memoryUsage: process.memoryUsage(),
                    nodeVersion: process.version,
                },
            });
        } else {
            await this.sendResponseMessage({
                type: "data-request-error",
                error: `Unknown request type: ${requestType}`,
                timestamp: new Date().toISOString(),
            });
        }
    }

    /**
     * Handle custom messages
     */
    private async handleCustomMessage(message: any): Promise<void> {
        console.log("[MessageTesterApp] Handling custom message");

        await this.sendResponseMessage({
            type: "custom-response",
            message: `App received your custom message: "${message.content}"`,
            timestamp: new Date().toISOString(),
            originalMessage: message,
            processed: true,
        });
    }

    /**
     * Handle complex data messages
     */
    private async handleComplexData(message: any): Promise<void> {
        console.log("[MessageTesterApp] Handling complex data message");

        await this.sendResponseMessage({
            type: "complex-data-response",
            analysis: {
                receivedDataKeys: Object.keys(message.data || {}),
                totalNumbers: Array.isArray(message.data?.numbers) ? message.data.numbers.length : 0,
                hasMetadata: !!message.metadata,
                processedAt: new Date().toISOString(),
                dataSize: JSON.stringify(message.data || {}).length,
            },
            originalMessage: message,
        });
    }

    /**
     * Handle connection established messages
     */
    private async handleConnectionEstablished(message: any): Promise<void> {
        console.log("[MessageTesterApp] Webview connection established");

        await this.sendResponseMessage({
            type: "connection-acknowledged",
            message: "App instance is ready for messaging tests!",
            timestamp: new Date().toISOString(),
            appId: this.api.getPluginId(),
            capabilities: ["ping-pong", "data-requests", "custom-messages", "stress-testing"],
        });
    }

    /**
     * Handle stress test messages
     */
    private async handleStressTest(message: any): Promise<void> {
        console.log("[MessageTesterApp] Handling stress test message");

        const { testId, iteration } = message;

        await this.sendResponseMessage({
            type: "stress-test-response",
            testId,
            iteration,
            timestamp: new Date().toISOString(),
            processingTime: Math.random() * 10, // Simulate processing time
            status: "completed",
        });
    }

    /**
     * Send a response message back to the webview
     */
    private async sendResponseMessage(message: any): Promise<void> {
        try {
            console.log("[MessageTesterApp] Sending response message:", message);
            await this.api.messaging.postMessage(message);
        } catch (error) {
            console.error("[MessageTesterApp] Failed to send response message:", error);
        }
    }

    /**
     * Handle messages received on test channel
     */
    private async handleTestChannelMessage(message: any, source: string): Promise<void> {
        console.log("[MessageTesterApp] Handling test channel message:", message, "from:", source);

        // Only respond to ping messages from OTHER sources (not from this app itself)
        if (message.type === "ping" && source !== this.api.getPluginId()) {
            console.log("[MessageTesterApp] Received ping from external source, sending pong");

            // Respond with pong on test channel
            const pongMessage = {
                type: "pong",
                originalPing: message,
                timestamp: new Date().toISOString(),
                appId: this.api.getPluginId(),
                responseTime: Date.now(),
                source: "app",
            };

            await this.api.messaging.sendToChannel("test", pongMessage);
            console.log("[MessageTesterApp] Sent pong response to test channel");
        } else if (message.type === "ping" && source === this.api.getPluginId()) {
            console.log("[MessageTesterApp] Ignoring ping from self to avoid loop");
        }
    }
}

// Create and export the app instance
export default new MessageTesterApp();
