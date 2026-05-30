<script setup lang="ts">
import EnemyExperience from '~/components/combat/EnemyExperience.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Enemy Experience">
        <template #trailing>
          <UButton
            class="ml-4"
            size="lg"
          >
            <NuxtLink to="/combat/defensive-fire">
              Go to Defensive Fire
            </NuxtLink>
          </UButton>
        </template>
      </UDashboardNavbar>

      <CombatInfo />
    </template>

    <template #body>
      <div class="body-card">
        <EnemyExperience />
      </div>
    </template>
  </UDashboardPanel>
</template>
