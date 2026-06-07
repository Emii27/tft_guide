<script setup lang="ts">
import DefensiveFire from '~/components/combat/DefensiveFire.vue'
import CombatInfo from '~/components/combat/CombatInfo.vue'
import HitDamage from '~/components/combat/HitDamage.vue'
import EnemyExperience from '~/components/combat/EnemyExperience.vue'
import DefensiveFireAllocation from '~/components/combat/DefensiveFireAllocation.vue'
import SprayFire from '~/components/combat/SprayFire.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Defensive Fire">
        <template #trailing>
          <UButton
            class="ml-4"
            size="lg"
          >
            <NuxtLink to="/combat/enemy-fire">
              Go to Ennemy Fire
            </NuxtLink>
          </UButton>
        </template>
      </UDashboardNavbar>

      <CombatInfo />
    </template>

    <template #body>
      <div class="body-card">
        <DefensiveFireAllocation />
        <EnemyExperience />
        <DefensiveFire id="defensive-fire" />
        <SprayFire />
        <HitDamage id="hit-damage" />
      </div>
    </template>
  </UDashboardPanel>
</template>
