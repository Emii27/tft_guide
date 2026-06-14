<script setup lang="ts">
const data = [
  {
    roll: '<10',
    effect: 'Takeoff OK'
  },
  {
    roll: '11',
    effect: 'Mishap before takeoff (a)'
  },
  {
    roll: '12',
    effect: 'Possible engine malfunction (b)'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (3-2A) Takeoff ; <i>2D6</i>
    </template>
    <div class="row">
      <UTable
        :data="data"
        @contextmenu="onContextMenu"
      />
      <UCard
        variant="soft"
        class="mb-4 px-4"
      >
        <ol>
          <li class="mb-4">
            Mishap ; 1D6:
            <ul>
              <li>1 = Engine won't start, mission scrubbed (no credit)</li>
              <li>2-3 = System glitch (roll for mechanical failure)</li>
              <li>4 = Rough engine during run-up (Go to 3-2B)</li>
              <li>
                5+ = Poor weather + Pilot < 10 missions?
                <ul class="ml-4">
                  <li>Yes: Stuck in mud along taxiway, mission scrubbed</li>
                  <li>No: Takeoff OK</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Possible engine malfunction ; 1D6:
            <ul>
              <li><5 = False alarm, takeoff OK</li>
              <li>6 = Engine failure ; Bomber crashes (Go to 3-3)</li>
            </ul>
          </li>
        </ol>
      </UCard>
    </div>
  </UCard>
</template>
