<script setup lang="ts">
import { EnemyDirection, EnemyExperience, EnemyType } from '~/types/enum'

const month = useState('currentMonth')
const year = useState('currentYear')
const enemyDirection = useState('enemyDirection')
const enemyType = useState('enemyType')
const enemyExperience = useState('enemyExperience')

// Data for (5-10) Shell hits
const { data: shellHitData } = await useFetch('/api/offensive-fire-shell', {
  query: { direction: enemyDirection }
})
const shellHitDataFiltered = computed(() => shellHitData.value?.results)

// Data for (5-11) Shell hit multiplier
const { data: multiplierData } = await useFetch('/api/offensive-fire-multiplier', {
  query: { enemyType, month, year }
})
const multiplierDataFiltered = computed(() => multiplierData.value?.results)

const columns = [
  {
    accessorKey: 'roll',
    header: 'Roll'
  },
  {
    accessorKey: 'effect',
    header: 'Effect'
  }
]
function onContextMenu() {}

const aText = computed(() => {
  switch (enemyExperience.value) {
    case EnemyExperience.Experte:
      return `${enemyExperience.value} pilot: Treat as x1 result`
    default:
      return 'Shell hits are automatic superficial damage (count has a hit for successive attacks eligibility)'
  }
})
const bText = computed(() => {
  switch (enemyExperience.value) {
    case EnemyExperience.Experte:
    case EnemyExperience.Ace:
      return `${enemyExperience.value} pilot: Treat as x1 result`
    case EnemyExperience.Flieger:
    case EnemyExperience.Novice:
      return `${enemyExperience.value} pilot: First (b) result becomes (a)`
    default:
      return '1D6: 1-3 = Superficial damage (see note a.) ; 4-6 = x1'
  }
})
</script>

<template>
  <div class="row">
    <UCard class="p-0">
      <template #header>
        (5-10) Shell hits by german attack from {{ enemyDirection }} ; <i>2D6</i>
      </template>
      <UTable
        :data="shellHitDataFiltered"
        :columns="columns"
        @contextmenu="onContextMenu"
      />
    </UCard>
    <UCard class="p-0">
      <template #header>
        (5-11) Shell hit multiplier ; <i>1D6</i>
      </template>
      <div class="row">
        <UTable
          :data="multiplierDataFiltered"
          :columns="columns"
          @contextmenu="onContextMenu"
        />
        <UCard
          variant="soft"
          class="px-4"
        >
          <ol>
            <li>{{ aText }}</li>
            <li>{{ bText }}</li>
          </ol>
          <ul class="mb-4">
            <li
              v-if="enemyType === EnemyType.Me163 && enemyDirection === EnemyDirection.Dive"
            >
              {{ enemyType }} performing dive attack add <b>+1 shell hit</b>
            </li>
          </ul>
          <ul>
            <li v-if="enemyExperience === EnemyExperience.Flieger || enemyExperience === EnemyExperience.Novice">
              {{ enemyExperience }} pilot: No +1 hit bonus
            </li>
            <li v-if="enemyExperience === EnemyExperience.Novice">
              {{ enemyExperience }} pilot: Treat x2 as x1
            </li>
          </ul>
        </UCard>
      </div>
    </UCard>
  </div>
</template>

<style scoped>
.row{
  gap: 2rem;
  & > :first-child {
    width: 50%;
  }
}
ol {
  list-style: lower-alpha;
}
</style>
