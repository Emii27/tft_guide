<script setup lang="ts">
import { EnemyExperience } from '~/types/enum'

const enemyExperience = useState('enemyExperience')

const { data } = await useFetch('/api/successive-attack-result')
function onContextMenu() {}

const eligibilityModifier = computed(() => {
  switch (enemyExperience.value) {
    case EnemyExperience.Experte:
    case EnemyExperience.Ace:
      return 'No change'
    case EnemyExperience.Flieger:
      return '1D6: 1-4 = OK ; 5-6 = Ineligible'
    case EnemyExperience.Novice:
      return '1D6: 1-2 = OK ; 3-6 = Ineligible'
    default:
      return '1D6: 1-5 = OK ; 6 = Ineligible'
  }
})
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-9) Successive attacks new position ; <i>1D6 + 1D6</i>
    </template>
    <UTable
      :data="data"
      @contextmenu="onContextMenu"
    />
    <div class="px-4 py-3 border-t border-accented">
      1st roll is for the position, 2nd is for the altitude
    </div>
    <UCard
      variant="soft"
      class="mt-2"
    >
      <b>Eligibility modifier for {{ enemyExperience }} fighter:</b> {{ eligibilityModifier }}
    </UCard>
  </UCard>
</template>
