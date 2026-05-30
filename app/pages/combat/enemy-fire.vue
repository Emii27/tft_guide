<script setup lang="ts">
import CombatInfo from '~/components/combat/CombatInfo.vue'
import OffensiveFire from '~/components/combat/OffensiveFire.vue'
import OffensiveFireShell from '~/components/combat/OffensiveFireShell.vue'
import SuccessiveAttacks from '~/components/combat/SuccessiveAttacks.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Ennemy Fire">
        <template #trailing>
            <UButton class="ml-4" size="lg">
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
        
        <OffensiveFire id="offensive-fire" />
        <OffensiveFireShell id="offensive-fire-shell" />
        <SuccessiveAttacks id="successive-attacks" />
      </div>
    </template>
  </UDashboardPanel>
</template>
