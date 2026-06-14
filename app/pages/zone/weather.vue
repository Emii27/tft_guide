<script setup lang="ts">
import WeatherInZone from '~/components/zone/WeatherInZone.vue'
import Contrails from '~/components/zone/Contrails.vue'
import WeatherOverAlps from '~/components/zone/WeatherOverAlps.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Weather" />
    </template>

    <template #body>
      <div class="body-card">
        <WeatherInZone />
        <WeatherOverAlps />
        <Contrails />
      </div>
    </template>
  </UDashboardPanel>
</template>
