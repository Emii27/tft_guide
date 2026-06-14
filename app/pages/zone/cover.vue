<script setup lang="ts">
import FighterCover from '~/components/zone/FighterCover.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Fighter cover" />
    </template>

    <template #body>
      <div class="body-card">
        <FighterCover />
      </div>
    </template>
  </UDashboardPanel>
</template>
