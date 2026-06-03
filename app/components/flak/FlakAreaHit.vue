<script setup lang="ts">
const { data } = await useFetch('/api/flak/area-hit')
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (6-5) Area hit by flak ; <i>2D6</i>
    </template>
    <UTable
      :data="data"
      @contextmenu="onContextMenu"
    />
    <div class="px-4 py-3 border-t border-accented">
      Roll for each hit score on Table 6-4
    </div>
  </UCard>
</template>
