<script setup lang="ts">
import { EnemyExperience, EnemyType } from '~/types/enum'

const enemyType = useState('enemyType')
const enemyExperience = useState('enemyExperience')

const { data } = await useFetch('/api/defensive-fire-hit')
const dataFiltered = computed(() => {
  const result = data.value?.filter(val => val.enemyType === enemyType.value)[0]
  return result?.results
})
function onContextMenu() {}

const fcaEffect = computed(() => {
  switch (enemyExperience.value) {
    case EnemyExperience.Flieger:
    case EnemyExperience.Novice:
      return 'breaks off after attack'
    default:
      return 'continues attack'
  }
})
const fboaEffect = computed(() => {
  switch (enemyExperience.value) {
    case EnemyExperience.Experte:
      return 'continues attack'
    default:
      return 'breaks off after attack'
  }
})
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-7) Hit damage against german fighter {{ enemyType }}
    </template>
    <div class="row">
      <div>
        <UTable
          :data="dataFiltered"
          @contextmenu="onContextMenu"
        />
        <div class="px-4 py-3 border-t border-accented">
          Natural 12 is always destroyed
        </div>
      </div>
      <UCard
        variant="soft"
        class="px-4"
      >
        <ul class="mb-4">
          <li><b>+1</b> if Ace gunner</li>
          <li v-if="enemyType === EnemyType.Me109 || enemyType === EnemyType.Me110">
            <b>+1</b> for twin guns against {{ EnemyType.Me109 }} and {{ EnemyType.Me110 }}
          </li>
          <li v-if="enemyType === EnemyType.Fw190">
            <b>-1</b> for single gun against {{ EnemyType.Fw190 }}
          </li>
          <li><b>-1</b> against jet fighters</li>
        </ul>
        <ul class="mb-4">
          <li><b>FCAB:</b> Fighter breaks off after attack</li>
          <li><b>FCA:</b> Fighter {{ fcaEffect }} ; <i>Cumulative</i></li>
          <li><b>FBOA:</b> Fighter {{ fboaEffect }} ; <i>Not cumulative</i></li>
          <li><b>Destroyed:</b> Fighter destroyed, may not fire</li>
        </ul>
        <ul>
          <li><i>3 FCA = Destroyed</i></li>
          <li><i>FBOA + FCA = Destroyed</i></li>
        </ul>
      </UCard>
    </div>
  </UCard>
</template>
