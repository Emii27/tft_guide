<script setup lang="ts">
import DefensiveFire from '~/components/combat/DefensiveFire.vue'
import CombatInfo from '~/components/combat/CombatInfo.vue'
import HitDamage from '~/components/combat/HitDamage.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Defensive Fire">
        <template #trailing>
            <UButton class="ml-4" size="lg">
                <NuxtLink to="/combat/ennemy-fire">
                    Go to Ennemy Fire
                </NuxtLink>
            </UButton>
        </template>
      </UDashboardNavbar>

      <CombatInfo />
    </template>

    <template #body>
      <div class="body-card">
        <DefensiveFire id="defensive-fire" />
        <HitDamage id="hit-damage" />
      </div>
    </template>
  </UDashboardPanel>
</template>
