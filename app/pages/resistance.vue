<script setup lang="ts">
import FighterResistance from '~/components/resistance/FighterResistance.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Resistance" />
    </template>

    <template #body>
      <div class="body-card">
        <FighterResistance id="fighter-resistance" />
      </div>
    </template>
  </UDashboardPanel>
</template>
