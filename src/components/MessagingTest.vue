<template>
    <div class="h-full flex flex-col">
        <!-- Connection Status Bar -->
        <div class="bg-bg-secondary border-b border-border px-6 py-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-2">
                        <span class="text-xs text-content-secondary">Status:</span>
                        <span
                            :class="[
                                'px-2 py-1 rounded text-xs font-medium',
                                connectionStatus === 'connected'
                                    ? 'bg-green-500/10 text-green-500'
                                    : connectionStatus === 'disconnected'
                                      ? 'bg-red-500/10 text-red-500'
                                      : 'bg-yellow-500/10 text-yellow-500',
                            ]"
                        >
                            {{ connectionStatus }}
                        </span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-xs text-content-secondary">API:</span>
                        <span
                            :class="[
                                'px-2 py-1 rounded text-xs font-medium',
                                apiStatus === 'available'
                                    ? 'bg-green-500/10 text-green-500'
                                    : 'bg-red-500/10 text-red-500',
                            ]"
                        >
                            {{ apiStatus }}
                        </span>
                    </div>
                </div>
                <div class="flex items-center gap-4 text-xs text-content-secondary">
                    <span>📤 {{ messagesSent }}</span>
                    <span>📥 {{ messagesReceived }}</span>
                </div>
            </div>
        </div>

        <!-- Quick Actions Bar -->
        <div class="bg-bg-secondary border-b border-border px-6 py-2">
            <div class="flex items-center gap-2">
                <button
                    @click="sendPing"
                    class="px-3 py-1.5 text-xs font-medium rounded-md bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
                >
                    🏓 Ping
                </button>
                <button
                    @click="sendGreeting"
                    class="px-3 py-1.5 text-xs font-medium rounded-md bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors"
                >
                    👋 Greeting
                </button>
                <button
                    @click="sendDataRequest"
                    class="px-3 py-1.5 text-xs font-medium rounded-md bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 transition-colors"
                >
                    📊 Data
                </button>
                <button
                    @click="sendComplexMessage"
                    class="px-3 py-1.5 text-xs font-medium rounded-md bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 transition-colors"
                >
                    🔧 Complex
                </button>
                <button
                    @click="runStressTest"
                    class="px-3 py-1.5 text-xs font-medium rounded-md bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors disabled:opacity-50"
                    :disabled="stressTestRunning"
                >
                    {{ stressTestRunning ? "⏳" : "⚡" }} Stress
                </button>
                <div class="flex-1"></div>
                <button
                    @click="clearMessages"
                    class="px-3 py-1.5 text-xs font-medium rounded-md bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
                >
                    🗑️ Clear
                </button>
            </div>
        </div>

        <!-- Tabs -->
        <TabSystem
            :active-tab="activeTab"
            :tabs="[
                { id: 'messaging', label: 'Messaging', icon: '💬' },
                { id: 'history', label: `History (${messageHistory.length})`, icon: '📝' },
            ]"
            @tab-change="handleTabChange"
        />

        <!-- Tab Content -->
        <div class="flex-1 min-h-0">
            <!-- Messaging Tab -->
            <div v-if="activeTab === 'messaging'" class="h-full p-6">
                <div class="space-y-6">
                    <!-- Custom Message Input -->
                    <div class="card">
                        <div class="card-header">
                            <h3 class="text-lg font-semibold text-content">Send Custom Message</h3>
                        </div>
                        <div class="flex gap-3">
                            <input
                                v-model="customMessage"
                                type="text"
                                placeholder="Enter your message..."
                                @keypress.enter="sendCustomMessage"
                                class="flex-1 px-4 py-3 text-white bg-bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-content-secondary"
                            />
                            <button @click="sendCustomMessage" :disabled="!customMessage.trim()" class="btn-primary">
                                Send
                            </button>
                        </div>
                    </div>

                    <!-- Detailed Test Actions -->
                    <div class="card">
                        <div class="card-header">
                            <h3 class="text-lg font-semibold text-content">Test Actions</h3>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button
                                @click="sendPing"
                                class="flex items-center gap-3 p-4 bg-green-500/5 border border-green-500/20 rounded-lg hover:bg-green-500/10 transition-colors"
                            >
                                <span class="text-2xl">🏓</span>
                                <div class="text-left">
                                    <div class="font-medium text-content">Ping Test</div>
                                    <div class="text-xs text-content-secondary">
                                        Test basic connectivity and response time
                                    </div>
                                </div>
                            </button>
                            <button
                                @click="sendGreeting"
                                class="flex items-center gap-3 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg hover:bg-blue-500/10 transition-colors"
                            >
                                <span class="text-2xl">👋</span>
                                <div class="text-left">
                                    <div class="font-medium text-content">Greeting</div>
                                    <div class="text-xs text-content-secondary">Send a friendly greeting message</div>
                                </div>
                            </button>
                            <button
                                @click="sendDataRequest"
                                class="flex items-center gap-3 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg hover:bg-yellow-500/10 transition-colors"
                            >
                                <span class="text-2xl">📊</span>
                                <div class="text-left">
                                    <div class="font-medium text-content">Data Request</div>
                                    <div class="text-xs text-content-secondary">
                                        Request app information and metrics
                                    </div>
                                </div>
                            </button>
                            <button
                                @click="sendComplexMessage"
                                class="flex items-center gap-3 p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg hover:bg-purple-500/10 transition-colors"
                            >
                                <span class="text-2xl">🔧</span>
                                <div class="text-left">
                                    <div class="font-medium text-content">Complex Data</div>
                                    <div class="text-xs text-content-secondary">
                                        Test with nested objects and arrays
                                    </div>
                                </div>
                            </button>
                            <button
                                @click="runStressTest"
                                class="flex items-center gap-3 p-4 bg-orange-500/5 border border-orange-500/20 rounded-lg hover:bg-orange-500/10 transition-colors"
                                :disabled="stressTestRunning"
                            >
                                <span class="text-2xl">{{ stressTestRunning ? "⏳" : "⚡" }}</span>
                                <div class="text-left">
                                    <div class="font-medium text-content">
                                        {{ stressTestRunning ? "Testing..." : "Stress Test" }}
                                    </div>
                                    <div class="text-xs text-content-secondary">
                                        Send 10 rapid messages for performance testing
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- History Tab -->
            <div v-if="activeTab === 'history'" class="h-full flex flex-col">
                <div class="flex-1 overflow-y-auto p-6" ref="messageList">
                    <div v-if="messageHistory.length === 0" class="text-center text-content-secondary py-16">
                        <div class="text-4xl mb-4">📝</div>
                        <div class="text-lg font-medium mb-2">No messages yet</div>
                        <div class="text-sm">Send a message to see the history here</div>
                    </div>
                    <div v-else class="space-y-3">
                        <div
                            v-for="(message, index) in messageHistory"
                            :key="index"
                            :class="[
                                'p-4 rounded-lg border-l-4',
                                message.direction === 'sent'
                                    ? 'bg-primary/5 border-l-primary'
                                    : 'bg-accent/5 border-l-accent',
                            ]"
                        >
                            <div class="flex items-center justify-between mb-3">
                                <div class="flex items-center gap-3">
                                    <span class="text-sm font-medium text-content">{{ message.type }}</span>
                                    <span
                                        :class="[
                                            'px-2 py-1 rounded text-xs font-medium',
                                            message.direction === 'sent'
                                                ? 'bg-primary/10 text-primary'
                                                : 'bg-accent/10 text-accent',
                                        ]"
                                    >
                                        {{ message.direction === "sent" ? "📤" : "📥" }} {{ message.direction }}
                                    </span>
                                    <span v-if="message.responseTime" class="text-xs text-content-secondary">
                                        {{ message.responseTime }}ms
                                    </span>
                                </div>
                                <span class="text-xs text-content-secondary">{{ message.timestamp }}</span>
                            </div>
                            <pre class="text-sm text-content-secondary whitespace-pre-wrap font-mono">{{
                                formatMessageContent(message.content)
                            }}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from "vue";
import type { MimirAPI, MessageCleanup, ChannelMessageHandler } from "@trymimirai/app-types";
import TabSystem from "./TabSystem.vue";

// Simple interface for message history display
interface MessageHistoryEntry {
    type: string;
    direction: "sent" | "received";
    content: any;
    timestamp: string;
    responseTime?: number;
}

// Reactive state
const activeTab = ref<"messaging" | "history">("messaging");
const connectionStatus = ref<"connected" | "disconnected" | "connecting">("connecting");
const apiStatus = ref<"available" | "unavailable">("unavailable");
const customMessage = ref<string>("");
const messageHistory = ref<MessageHistoryEntry[]>([]);
const messagesSent = ref<number>(0);
const messagesReceived = ref<number>(0);
const messageList = ref<HTMLElement | null>(null);
const stressTestRunning = ref<boolean>(false);

// Plugin API reference with proper typing
let pluginAPI: MimirAPI | null = null;
let messageCleanup: MessageCleanup | null = null;
let pingStartTime: number = 0;

// Initialize plugin API connection
const initializePluginAPI = async (): Promise<void> => {
    try {
        // Check if plugin API is available
        if (typeof window !== "undefined" && window.pluginAPI) {
            pluginAPI = window.pluginAPI;
            apiStatus.value = "available";

            // Wait for plugin ID to be available (with timeout)
            let attempts = 0;
            const maxAttempts = 50; // 5 seconds total
            while ((!pluginAPI.getPluginId() || pluginAPI.getPluginId() === "") && attempts < maxAttempts) {
                await new Promise(resolve => setTimeout(resolve, 100));
                attempts++;
            }

            const pluginId = pluginAPI.getPluginId();
            console.log(`[MessagingTest] Plugin ID initialized: '${pluginId}' (attempts: ${attempts})`);

            // Set up message listener
            if (pluginAPI.messaging) {
                // Listen for direct plugin messages
                const directMessageCleanup = pluginAPI.messaging.onMessage((message: any) => {
                    handleReceivedMessage(message);
                });

                // Subscribe to test channel to receive pong responses
                const channelMessageHandler: ChannelMessageHandler = (message: any, source: string) => {
                    console.log("[MessagingTest] Received channel message:", message, "from:", source);
                    handleReceivedMessage(message);
                };

                const channelCleanup = pluginAPI.messaging.subscribeToChannel("test", channelMessageHandler);

                // Combine cleanup functions
                messageCleanup = () => {
                    if (directMessageCleanup) directMessageCleanup();
                    if (channelCleanup) channelCleanup();
                };

                connectionStatus.value = "connected";

                // Send initial connection message
                await sendMessage({
                    type: "connection-established",
                    timestamp: new Date().toISOString(),
                    webviewId: "message-tester-webview",
                });

                console.log("[MessagingTest] Plugin API initialized and connected");
            } else {
                console.warn("[MessagingTest] Plugin API found but messaging not available");
                connectionStatus.value = "disconnected";
            }
        } else {
            console.warn("[MessagingTest] Plugin API not available");
            apiStatus.value = "unavailable";
            connectionStatus.value = "disconnected";
        }
    } catch (error) {
        console.error("[MessagingTest] Failed to initialize plugin API:", error);
        apiStatus.value = "unavailable";
        connectionStatus.value = "disconnected";
    }
};

// Handle received messages
const handleReceivedMessage = (message: any): void => {
    console.log("[MessagingTest] Received message from app instance:", message);

    let responseTime: number | undefined;

    // Calculate response time for pong messages
    if (message.type === "pong" && pingStartTime) {
        responseTime = Date.now() - pingStartTime;
        pingStartTime = 0;
        console.log("[MessagingTest] Calculated response time:", responseTime);
    }

    messagesReceived.value++;

    // Add to message history
    messageHistory.value.push({
        type: message.type || "unknown",
        direction: "received",
        content: message,
        timestamp: new Date().toLocaleTimeString(),
        responseTime,
    });

    // Auto-scroll to bottom
    nextTick(() => {
        if (messageList.value) {
            messageList.value.scrollTop = messageList.value.scrollHeight;
        }
    });
};

// Send message via plugin API
const sendMessage = async (message: any): Promise<void> => {
    if (!pluginAPI || !pluginAPI.messaging) {
        console.error("[MessagingTest] Plugin API not available for sending");
        return;
    }

    try {
        console.log("[MessagingTest] Sending message:", message);

        // Record ping start time for response time calculation
        if (message.type === "ping") {
            pingStartTime = Date.now();
        }

        // await pluginAPI.messaging.postMessage(message);
        await pluginAPI.messaging.sendToChannel("test", message);

        messagesSent.value++;
        messageHistory.value.push({
            type: message.type || "custom",
            direction: "sent",
            content: message,
            timestamp: new Date().toLocaleTimeString(),
        });

        // Auto-scroll to bottom
        nextTick(() => {
            if (messageList.value) {
                messageList.value.scrollTop = messageList.value.scrollHeight;
            }
        });
    } catch (error) {
        console.error("[MessagingTest] Failed to send message:", error);
    }
};

// Format message content for display
const formatMessageContent = (content: any): string => {
    if (typeof content === "string") {
        return content;
    }
    return JSON.stringify(content, null, 2);
};

// Action handlers
const sendCustomMessage = (): void => {
    if (!customMessage.value.trim()) return;

    sendMessage({
        type: "custom",
        content: customMessage.value,
        timestamp: new Date().toISOString(),
    });

    customMessage.value = "";
};

const sendPing = (): void => {
    sendMessage({
        type: "ping",
        timestamp: new Date().toISOString(),
        id: Math.random().toString(36).substr(2, 9),
    });
};

const sendGreeting = (): void => {
    sendMessage({
        type: "greeting",
        content: "Hello from message tester webview!",
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
    });
};

const sendDataRequest = (): void => {
    sendMessage({
        type: "data-request",
        requestType: "app-info",
        timestamp: new Date().toISOString(),
    });
};

const sendComplexMessage = (): void => {
    sendMessage({
        type: "complex-data",
        data: {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            nested: {
                key: "value",
                timestamp: new Date().toISOString(),
                boolean: true,
                array: ["a", "b", "c", "d"],
            },
            largeString: "A".repeat(1000),
            coordinates: { x: 100, y: 200, z: 300 },
        },
        metadata: {
            version: "2.0.0",
            source: "message-tester-component",
            testType: "complex-data-transmission",
        },
        timestamp: new Date().toISOString(),
    });
};

const runStressTest = async (): Promise<void> => {
    if (stressTestRunning.value) return;

    stressTestRunning.value = true;
    const testId: string = Math.random().toString(36).substr(2, 9);

    try {
        // Send 10 rapid-fire messages
        for (let i = 0; i < 10; i++) {
            await sendMessage({
                type: "stress-test",
                testId,
                iteration: i + 1,
                timestamp: new Date().toISOString(),
                payload: `Stress test message ${i + 1} with some data: ${Math.random()}`,
            });

            // Small delay between messages
            await new Promise<void>(resolve => setTimeout(resolve, 50));
        }
    } finally {
        stressTestRunning.value = false;
    }
};

const clearMessages = (): void => {
    messageHistory.value = [];
    messagesSent.value = 0;
    messagesReceived.value = 0;
};

// Handle tab change
const handleTabChange = (tabId: string): void => {
    if (tabId === "messaging" || tabId === "history") {
        activeTab.value = tabId;
    }
};

// Lifecycle hooks
onMounted(() => {
    console.log("[MessagingTest] Component mounted, initializing...");
    initializePluginAPI();
});

onUnmounted(() => {
    console.log("[MessagingTest] Component unmounting, cleaning up...");
    if (messageCleanup) {
        messageCleanup();
    }
});
</script>

<style scoped>
/* Component-specific styles that don't conflict with the theme system */
</style>
