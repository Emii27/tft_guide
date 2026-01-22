<script setup lang="ts">
import type { DefensiveFire } from '~/types'

const { data: defensiveFiresData } = await useFetch<DefensiveFire[]>('/api/defensive-fire', { default: () => [] })
const defensiveFires = defensiveFiresData.value
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Combat" />
    </template>

    <template #body>
      <DefensiveFireChart :defensive-fires="defensiveFires" />
    </template>
  </UDashboardPanel>
</template>
