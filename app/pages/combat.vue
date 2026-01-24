<script setup lang="ts">
import DefensiveFire from '~/components/combat/DefensiveFire.vue'
import CombatInfo from '~/components/combat/CombatInfo.vue'
import HitDamage from '~/components/combat/HitDamage.vue'
import OffensiveFire from '~/components/combat/OffensiveFire.vue'
import OffensiveFireShell from '~/components/combat/OffensiveFireShell.vue'
import SuccessiveAttacks from '~/components/combat/SuccessiveAttacks.vue'
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Combat" />
      <CombatInfo />
    </template>

    <template #body>
      <div class="body-card">
        <DefensiveFire id="defensive-fire" />
        <HitDamage id="hit-damage" />
        <OffensiveFire id="offensive-fire" />
        <OffensiveFireShell id="offensive-fire-shell" />
        <SuccessiveAttacks id="successive-attacks" />
      </div>
    </template>
  </UDashboardPanel>
</template>

<style scoped>
.body-card > *:not(:last-child) {
  margin-bottom: 2rem;
}
</style>
