<script setup lang="ts">
const { data } = await useFetch('/api/frostbite/frostbite-recovery')
const columns = [
  {
    accessorKey: 'roll',
    header: 'Roll'
  },
  {
    accessorKey: 'nipExtremities',
    header: 'Frostnip (Hands/Fingers/Feet/Toes)'
  },
  {
    accessorKey: 'nipOther',
    header: 'Frostnip (Other body parts)'
  },
  {
    accessorKey: 'biteExtremities',
    header: 'Frostbite (Hands/Fingers/Feet/Toes)'
  },
  {
    accessorKey: 'biteOther',
    header: 'Frostbite (Other body parts)'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-18B) Frostbite Recovery; <i>1D6</i>
    </template>

    <UCard variant="soft">
      <p>
        <b>After landing roll 1D6 for each frostbitten crew man:</b>
      </p>
      <ul>
        <li>1-2: Frostnip (Roll for recovery)</li>
        <li>3: Frostbite (Roll for recovery)</li>
        <li>4: Frostbite, infection occurs, sent home after treatment</li>
        <li>5-6: Deep frostbite, necrotic blood vessels, gangrene occurs, sent home after amputation</li>
      </ul>
    </UCard>
    <UTable
      :data="data"
      :columns="columns"
      @contextmenu="onContextMenu"
    />
  </UCard>
</template>
