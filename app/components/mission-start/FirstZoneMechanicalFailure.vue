<script setup lang="ts">
const month = useState('currentMonth')
const year = useState('currentYear')

const { data: data } = await useFetch('/api/first-mechanical-failure', {
  query: { month, year }
})
const dataFiltered = computed(() => data.value?.results)
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      Zone 1 Mechanical failure in {{ month }} {{ year }} ; <i>2D6</i>
    </template>
    <UTable
      :data="dataFiltered"
      @contextmenu="onContextMenu"
    />
  </UCard>
</template>
