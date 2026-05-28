<script setup lang="ts">
import ControlledBailout from '~/components/crew/bailout/ControlledBailout.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Crew" />
    </template>

    <template #body>
      <div class="body-card">
        <ControlledBailout id="controlled-bailout" />
      </div>
    </template>
  </UDashboardPanel>
</template>
