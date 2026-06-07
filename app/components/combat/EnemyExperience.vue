<script setup lang="ts">
const month = useState('currentMonth')
const year = useState('currentYear')

const { data } = await useFetch('/api/combat/enemy-experience', {
  query: { month, year }
})
const dataFiltered = computed(() => data.value?.results)

const columns = [
  {
    accessorKey: 'enemyExperience',
    header: 'Experience'
  },
  {
    accessorKey: 'roll',
    header: 'Roll'
  },
  {
    accessorKey: 'max',
    header: 'Max/wave'
  },
  {
    accessorKey: 'extra',
    header: 'Extra (use when max is reached)'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-5A) Enemy experience ; <i>1D100 (1D10 + 1D10)</i>
    </template>
    <UTable
      :data="dataFiltered"
      :columns="columns"
      @contextmenu="onContextMenu"
    />
    <UCard
      variant="soft"
      class="mt-2"
    >
      <b>Fighter restriction</b>
      <ul>
        <li>Experte: Me-110 <i>(Starting May 1943, 1D6: 1-3: Authorized ; 4-6: Veteran)</i> ; Me-210 ; Ju-88 ; Me-410 ; Me-163</li>
        <li>Ace: Me-110 <i>(Starting Dec 1943, 1D6: 1-3: Authorized ; 4-6: Veteran)</i></li>
        <li>Flieger: All Jets</li>
        <li>Novice: Everything except Me-109 and Fw-190</li>
      </ul>
    </UCard>
  </UCard>
</template>
