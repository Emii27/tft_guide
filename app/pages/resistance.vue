<script setup lang="ts">
import FighterResistance from '~/components/resistance/FighterResistance.vue'
import FighterWave from '~/components/resistance/FighterWave.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Resistance" />
    </template>

    <template #body>
      <div class="body-card">
        <FighterResistance id="fighter-resistance" />
        <FighterWave />
      </div>
    </template>
  </UDashboardPanel>
</template>
