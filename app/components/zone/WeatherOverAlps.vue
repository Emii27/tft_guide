<script setup lang="ts">
import { Weather } from '~/types/enum'

const data = [
  {
    roll: '< 3',
    effect: 'Good weather'
  },
  {
    roll: '4-5',
    effect: 'High Clouds (can abort, if not: a)'
  },
  {
    roll: '6+',
    effect: 'Severe Icing (abort mission)'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (4-1A) Weather over Alps ; <i>1D10</i>
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
          <li>+1 if in Dec, Jan, Feb</li>
          <li>-1 if in Jun, Jul, Aug</li>
        </ul>
        <ol class="px-4 mt-4">
          <li>
            <ul>
              <li class="mb-2">
                No Axis fighters encountered this turn
              </li>
              <li class="mb-2">
                Extreme cold applies, 1D6 for each gun position: 6 = Gun jammed
              </li>
              <li>Effect of dense cloud / snowstorm, 1D10: <8 = OK ; 9+ = Bomber crashes in the mountain, crew KIA</li>
            </ul>
          </li>
        </ol>
      </UCard>
    </div>
  </UCard>
</template>
