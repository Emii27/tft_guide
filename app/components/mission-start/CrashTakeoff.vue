<script setup lang="ts">
const data = [
  {
    roll: '<1',
    effect: 'Crashes into runway barrier ; Aircraft reparable for next mission ; Crew safe'
  },
  {
    roll: '2',
    effect: 'Crashes into runway barrier ; Aircraft wrecked (a)'
  },
  {
    roll: '3',
    effect: 'Crashes beyond perimeter fence ; Aircraft starts catching fire (b)'
  },
  {
    roll: '4+',
    effect: 'Crashes and bombs explode ; Crew KIA'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (3-3) Bomber crashes on takeoff ; <i>1D6</i>
    </template>
    <UTable
      :data="data"
      @contextmenu="onContextMenu"
    />
    <UCard
      variant="soft"
      class="mt-4"
    >
      <p class="mb-4">
        -1 if Pilot has completed 10+ mission
      </p>
      <ol class="ml-4">
        <li class="mb-4">
          For each crewman, 1D6:
          <ul>
            <li>1-3: Crew member safe</li>
            <li>4+: Roll for wound</li>
          </ul>
        </li>
        <li>
          For each crewman, 1D6:
          <ul>
            <li>1-2: Crew member safe</li>
            <li>3+: Roll for wound (with +1 DRM)</li>
          </ul>
        </li>
      </ol>
    </UCard>
  </UCard>
</template>
