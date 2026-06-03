<script setup lang="ts">
const { data } = await useFetch('/api/controlled-bailout')
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (7-3) Controlled bailout ; <i>1d6</i>
    </template>
    <UTable
      :data="data"
      @contextmenu="onContextMenu"
    />
  </UCard>
</template>
