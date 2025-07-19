<template>
    <div class="flex justify-between border-b border-border/70 bg-bg-secondary flex-shrink-0">
        <div class="flex">
            <button
                v-for="tab in tabs"
                :key="tab.id"
                :class="getTabClasses(tab.id)"
                @click="$emit('tab-change', tab.id)"
            >
                <span class="mr-2">{{ tab.icon }}</span>
                {{ tab.label }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Tab {
    id: string;
    label: string;
    icon?: string;
}

const props = defineProps<{
    activeTab: string;
    tabs: Tab[];
}>();

defineEmits<{
    "tab-change": [tabId: string];
}>();

const getTabClasses = (tabId: string) => {
    const baseClasses = "px-4 py-3 text-sm font-medium transition-colors duration-200 border-b-2";
    const activeClasses = "text-primary border-primary bg-primary/5";
    const inactiveClasses = "text-content-secondary border-transparent hover:text-content hover:border-border";

    return `${baseClasses} ${tabId === props.activeTab ? activeClasses : inactiveClasses}`;
};
</script>
