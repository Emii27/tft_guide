<script setup lang="ts">
import TourOfDuty from '~/components/setup/TourOfDuty.vue'
import CrewComposition from '~/components/setup/CrewComposition.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Basic infos" />
    </template>

    <template #body>
      <div class="body-card">
        <TourOfDuty />
        <CrewComposition />
        <UCard class="p-0">
          <template #header>
            Additional infos
          </template>
          <ul>
            <li>Apr 1943: AFCE linked to flight controls</li>
            <li>Oct 1944: Oil Installations use Smokescreens</li>
          </ul>
        </UCard>
      </div>
    </template>
  </UDashboardPanel>
</template>
