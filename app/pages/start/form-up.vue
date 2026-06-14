<script setup lang="ts">
import FormupEvent from '~/components/mission-start/FormupEvent.vue'
import FormupCollision from '~/components/mission-start/FormupCollision.vue'
import FirstZoneMechanicalFailure from '~/components/mission-start/FirstZoneMechanicalFailure.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Takeoff" />
    </template>

    <template #body>
      <div class="body-card">
        <FormupEvent />
        <FormupCollision />
        <FirstZoneMechanicalFailure />
      </div>
    </template>
  </UDashboardPanel>
</template>
