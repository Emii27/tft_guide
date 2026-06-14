<script setup lang="ts">
import AircraftReplacementUpgrade from '~/components/setup/AircraftReplacementUpgrade.vue'
import AircraftSetup from '~/components/setup/AircraftSetup.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Aircraft" />
    </template>

    <template #body>
      <div class="body-card">
        <AircraftSetup />
        <AircraftReplacementUpgrade />
      </div>
    </template>
  </UDashboardPanel>
</template>
