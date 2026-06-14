<script setup lang="ts">
import { Weather } from '~/types/enum'

const data = [
  {
    roll: '< 3',
    effect: Weather.Clear
  },
  {
    roll: '4-6',
    effect: Weather.Haze
  },
  {
    roll: '7-9',
    effect: Weather.HalfCloud
  },
  {
    roll: '10+',
    effect: Weather.FullCloud + ' (a)'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (4-1) Weather in zone ; <i>1D10</i>
    </template>
    <div class="row">
      <UTable
        :data="data"
        @contextmenu="onContextMenu"
      />
      <UCard
        variant="soft"
        class="mb-4"
      >
        <ul>
          <li>+2 if zone 2 or Weather over Base was Poor or Bad</li>
          <li>+1 if Prior zone was {{ Weather.Haze }}</li>
          <li>+2 if Prior zone was {{ Weather.HalfCloud }}</li>
          <li>+3 if Prior zone was {{ Weather.FullCloud }}</li>
        </ul>
        <ol class="px-4 mt-4">
          <li>If in Alps zone, roll on table 4-1A</li>
        </ol>
      </UCard>
    </div>
  </UCard>
</template>
