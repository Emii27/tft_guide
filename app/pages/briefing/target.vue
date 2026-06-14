<script setup lang="ts">
import MissionScrubbed from '~/components/briefing/MissionScrubbed.vue'
import TargetDetermination from '~/components/briefing/TargetDetermination.vue'
import BombLoad from '~/components/briefing/BombLoad.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Aircraft" />
    </template>

    <template #body>
      <div class="body-card">
        <TargetDetermination />
        <MissionScrubbed />
        <BombLoad />

        <UCard class="p-0">
          Bomber position:
          <UButton
            class="ml-4"
            size="lg"
          >
            <a
              href="/bomber-position.pdf"
              target="_blank"
            >
              Bomb Position
            </a>
          </UButton>
        </UCard>
      </div>
    </template>
  </UDashboardPanel>
</template>
