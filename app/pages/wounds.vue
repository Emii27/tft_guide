<script setup lang="ts">
import Wounds from '~/components/wounds/Wounds.vue'
import LightWoundDetail from '~/components/wounds/LightWoundDetail.vue'
import SeriousWoundDetail from '~/components/wounds/SeriousWoundDetail.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Wounds" />
    </template>

    <template #body>
      <div class="body-card">
        <Wounds id="wounds" />
        <LightWoundDetail id="light-wound" />
        <SeriousWoundDetail id="serious-wound" />
      </div>
    </template>
  </UDashboardPanel>
</template>
