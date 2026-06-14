<script setup lang="ts">
const data = [
  {
    roll: '1',
    effect: 'Engine smooths out ; Takeoff OK'
  },
  {
    roll: '2',
    effect: 'Engine OK after fault-finding ; Late takeoff: Out of formation'
  },
  {
    roll: '3-4',
    effect: 'Engine failure ; Mission scrubbed'
  },
  {
    roll: '5+',
    effect: 'Engine catches fire (a)'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (3-2B) Rough Engine during run-up ; <i>1D6</i>
    </template>
    <UTable
      :data="data"
      @contextmenu="onContextMenu"
    />
    <UCard
      variant="soft"
      class="mt-4 px-4"
    >
      <ol>
        <li>
          Fire ; 1D6:
          <ul>
            <li><5 = Fire out ; Mission scrubbed</li>
            <li>6 = Fire spreads to the wing ; Bomber destroyed ; Crew safe</li>
          </ul>
        </li>
      </ol>
    </UCard>
  </UCard>
</template>
