<script setup lang="ts">
import Frostbite from '~/components/crew/frostbite/Frostbite.vue'
import FrostbiteLocation from '~/components/crew/frostbite/FrostbiteLocation.vue'
import FrostbiteRecovery from '~/components/crew/frostbite/FrostbiteRecovery.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Frostbite" />
    </template>

    <template #body>
      <div class="body-card">
        <Frostbite />
        <FrostbiteLocation />
        <FrostbiteRecovery />
      </div>
    </template>
  </UDashboardPanel>
</template>
