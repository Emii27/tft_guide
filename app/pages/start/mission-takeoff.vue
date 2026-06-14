<script setup lang="ts">
import Takeoff from '~/components/mission-start/Takeoff.vue'
import RoughTakeoff from '~/components/mission-start/RoughTakeoff.vue'
import CrashTakeoff from '~/components/mission-start/CrashTakeoff.vue'
import WeatherOverBase from '~/components/mission-start/WeatherOverBase.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Takeoff" />
    </template>

    <template #body>
      <div class="body-card">
        <WeatherOverBase />
        <Takeoff />
        <RoughTakeoff />
        <CrashTakeoff />
      </div>
    </template>
  </UDashboardPanel>
</template>
