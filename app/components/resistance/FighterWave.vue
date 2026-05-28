<script setup lang="ts">
const { data } = await useFetch('/api/fighter-waves')
function onContextMenu() {}
</script>

<template>
  <UCard>
    <template #header>
      (5-2) German fighter waves ; <i>1D10</i>
    </template>
    <UTable
      :data="data"
      @contextmenu="onContextMenu"
    />
  </UCard>
</template>
