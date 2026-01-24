<script setup lang="ts">
const { data } = await useFetch('/api/successive-attack-result')
const dataFiltered = computed(() => data.value)
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-9) Successive attacks new position ; <i>1D6 + 1D6</i>
    </template>
    <UTable
      :data="dataFiltered"
      @contextmenu="onContextMenu"
    />
    <div class="px-4 py-3 border-t border-accented">
      1st roll is for the position, 2nd is for the altitude
    </div>
  </UCard>
</template>
