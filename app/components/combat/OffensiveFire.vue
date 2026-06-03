<script setup lang="ts">
import { EnemyExperience } from '~/types/enum'

const enemyDirection = useState('enemyDirection')
const enemyExperience = useState('enemyExperience')

const { data } = await useFetch('/api/offensive-fire-hit', {
  query: { direction: enemyDirection }
})
const dataFiltered = computed(() => data.value?.results)
function onContextMenu() {}

const experienceModifier = computed(() => {
  switch (enemyExperience.value) {
    case EnemyExperience.Experte:
      return '+2'
    case EnemyExperience.Ace:
      return '+1'
    case EnemyExperience.Flieger:
      return '-1'
    case EnemyExperience.Novice:
      return '-2'
    default:
      return null
  }
})
const damageModifier = computed(() => {
  switch (enemyExperience.value) {
    case EnemyExperience.Experte:
      return 'Ignore FCA and FBOA modifiers'
    case EnemyExperience.Ace:
      return 'Ignore FCA modifier, apply FBOA modifier'
    default:
      return 'Apply FCA and FBOA modifiers'
  }
})
const onMiss = computed(() => {
  switch (enemyExperience.value) {
    case EnemyExperience.Experte:
      return 'breaks off only if FBOA'
    case EnemyExperience.Ace:
      return '1D6, breaks off on 5-6'
    default:
      return 'breaks off'
  }
})
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-8) German offensive fire from {{ enemyDirection }} ; <i>2D6</i>
    </template>
    <div class="row">
      <div>
        <UTable
          :data="dataFiltered"
          @contextmenu="onContextMenu"
        />
        <div class="px-4 py-3 border-t border-accented">
          Natural 12 is always a hit
        </div>
      </div>
      <UCard
        variant="soft"
        class="px-4"
      >
        <ul>
          <li><b>-1</b> if bomber is performing Evasive Maneuvers</li>
          <li><b>+1</b> if bomber has 2+ engines inoperative</li>
          <li v-if="experienceModifier !== null">
            <b>{{ experienceModifier }}</b> if {{ enemyExperience }} pilot
          </li>
          <li class="mb-2">
            <b>{{ damageModifier }}</b>
          </li>
          <li>If hit: go to 5-10</li>
          <li>If miss: {{ onMiss }}</li>
        </ul>
      </UCard>
    </div>
  </UCard>
</template>
