<script setup lang="ts">
const data = [
  {
    roll: '<8',
    effect: 'Good weather'
  },
  {
    roll: '9-11',
    effect: 'Poor weather'
  },
  {
    roll: '12+',
    effect: 'Bad weather'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (3-1) Weather over base ; <i>1D10</i>
    </template>
    <div class="row">
      <UTable
        :data="data"
        @contextmenu="onContextMenu"
      />
      <UCard
        variant="soft"
        class="px-4"
      >
        <ul>
          <li>+2 if mission in Jan, Feb, Dec</li>
          <li>+1 if mission in Mar, Apr, Oct, Nov</li>
        </ul>
      </UCard>
    </div>
  </UCard>
</template>
