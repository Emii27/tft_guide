<script setup lang="ts">
const data = [
  {
    roll: '<2',
    effect: 'Form-up OK'
  },
  {
    roll: '3-6',
    effect: 'Delayed form-up ; Modifier to fighter cover'
  },
  {
    roll: '7',
    effect: 'Straggle ; Become Tail End Charlie'
  },
  {
    roll: '8',
    effect: 'Straggle ; Out of formation (can abort or attempt to catch-up)'
  },
  {
    roll: '9',
    effect: 'Fail to form-up ; Abort mission'
  },
  {
    roll: '10+',
    effect: 'Collision with another bomber ; Roll on collision table below'
  }
]
const columns = [
  {
    accessorKey: 'roll',
    header: 'Roll 2D6'
  },
  {
    accessorKey: 'effect',
    header: 'Effect'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      Form-up
    </template>
    <UCard variant="soft">
      <template #header>
        Form-up event happens? ; <i>2D6</i>
      </template>
      <ul>
        <li><10 = Form-up OK</li>
        <li>11+ = Possible form-up event ; roll on the table below</li>
      </ul>
      <template #footer>
        <ul>
          <li>+3 if bad weather over base</li>
          <li>+1 if poor weather over base</li>
          <li>-1 if Feb 1944+</li>
        </ul>
      </template>
    </UCard>
    <UTable
      :data="data"
      :columns="columns"
      @contextmenu="onContextMenu"
    />
    <UCard
      variant="soft"
    >
      <ul>
        <li>+2 if Bad weather over base</li>
        <li>+1 if Poor weather over base</li>
        <li>-1 Pilot has flew 10+ mission</li>
      </ul>
    </UCard>
  </UCard>
</template>
