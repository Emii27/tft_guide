<script setup lang="ts">
import DefensiveFire from '~/components/combat/DefensiveFire.vue'
import HitDamage from '~/components/combat/HitDamage.vue'
import EnemyExperience from '~/components/combat/EnemyExperience.vue'
import DefensiveFireAllocation from '~/components/combat/DefensiveFireAllocation.vue'
import SprayFire from '~/components/combat/SprayFire.vue'
import Page from '~/components/utils/Page.vue'
</script>

<template>
  <Page title="Defensive Fire">
    <template #headerTrailing>
      <UButton
        class="ml-4"
        size="lg"
      >
        <NuxtLink to="/combat/enemy-fire">
          Go to Ennemy Fire
        </NuxtLink>
      </UButton>
    </template>

    <template #header>
      <CombatInfo class="my-2" />
    </template>

    <DefensiveFireAllocation />
    <EnemyExperience />
    <DefensiveFire id="defensive-fire" />
    <SprayFire />
    <HitDamage id="hit-damage" />
  </Page>
</template>
