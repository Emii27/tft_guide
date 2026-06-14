<script setup lang="ts">
const data = [
  {
    roll: '<7',
    effect: 'No effect'
  },
  {
    roll: '8+',
    effect: 'Contrails form'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (4-4) Contrails form ; <i>1D10</i>
    </template>
    <UTable
      :data="data"
      @contextmenu="onContextMenu"
    />
    <div class="px-4 py-3 border-t border-accented">
      Doesn't apply if below 10k feet
    </div>
  </UCard>
</template>
