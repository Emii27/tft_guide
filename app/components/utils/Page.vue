<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar :title="title" />
    </template>

    <template #body>
      <div class="body-card">
        <slot />
      </div>
    </template>
  </UDashboardPanel>
</template>
