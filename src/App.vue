<template>
    <div class="min-h-screen bg-bg-primary text-content">
        <!-- Header -->
        <header class="bg-bg-secondary border-b border-border p-4">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold text-sm">📡</span>
                </div>
                <div>
                    <h1 class="text-lg font-semibold text-content">Message Tester</h1>
                    <p class="text-xs text-content-secondary">Bidirectional Communication Testing</p>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="h-[calc(100vh-80px)] overflow-hidden">
            <MessagingTest />
        </main>
    </div>
</template>

<script setup lang="ts">
import MessagingTest from "@/components/MessagingTest.vue";
</script>

<style scoped>
/* Additional component-specific styles can go here */
</style>
