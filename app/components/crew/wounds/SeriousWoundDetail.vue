<script setup lang="ts">
const items = [
  'Head: Shrapnel lodged in skull',
  'Neck: Cartoid artery cut',
  'Broken clavicule',
  'Abdomen',
  'Severed Hand/Foot'
]
const selectedWound = ref(items[0])
const { data: data } = await useFetch('/api/serious-wound-location')
const { data: dataSurgery } = await useFetch('/api/serious-wound-surgery', {
  query: { type: selectedWound }
})
const columns = [
  {
    accessorKey: 'roll',
    header: 'Roll'
  },
  {
    accessorKey: 'area',
    header: 'Area'
  },
  {
    accessorKey: 'effect',
    header: 'Effect 1D6'
  }
]

const columnsSurgery = [
  {
    accessorKey: 'time',
    header: 'Time'
  },
  {
    accessorKey: 'firstRoll',
    header: '1st roll'
  },
  {
    accessorKey: 'secondRoll',
    header: '2nd roll'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-17B) Serious wound location ; <i>2D6</i>
    </template>
    <UTable
      :data="data"
      :columns="columns"
      @contextmenu="onContextMenu"
    />
    <UCard
      variant="soft"
      class="mt-4"
    >
      <template #header>
        Recovery time
      </template>
      <div class="mb-4">
        <p>Make recovery rolls once the mission is over. Exception: In flight effect.</p>
        <p>If First Aid received: -1 modifier on all recovery rolls.</p>
        <p>If First Aid is interrupted and bleeding is controlled: Re-roll in flight effect.</p>
      </div>
      <ol class="row pl-4">
        <li>
          <b>1D6:</b>
          <ul>
            <li><i>1-2 =</i> 1 week</li>
            <li><i>3-4 =</i> 2 weeks</li>
            <li><i>5-6 =</i> 3 weeks</li>
          </ul>
        </li>
        <li>
          <b>1D6:</b>
          <ul>
            <li><i>1-2 =</i> 3 weeks</li>
            <li><i>3-4 =</i> 4 weeks</li>
            <li><i>5 =</i> 5 weeks</li>
            <li><i>6 =</i> 6 weeks</li>
          </ul>
        </li>
        <li>
          <b>1D6:</b>
          <ul>
            <li><i>1-2 =</i> 2 weeks</li>
            <li><i>3-4 =</i> 3 weeks</li>
            <li><i>5 =</i> 4 weeks</li>
            <li><i>6 =</i> 8 weeks</li>
          </ul>
        </li>
        <li>
          <b>1D6:</b>
          <ul>
            <li><i>1-3 =</i> 4 weeks</li>
            <li><i>4 =</i> 5 weeks</li>
            <li><i>5 =</i> 6 weeks</li>
            <li><i>6 =</i> 8 weeks</li>
          </ul>
        </li>
        <li>
          <b>1D6:</b>
          <ul>
            <li><i>1 =</i> 4 weeks</li>
            <li><i>2 =</i> 5 weeks</li>
            <li><i>3 =</i> 6 weeks</li>
            <li><i>4 =</i> 7 weeks</li>
            <li><i>5 =</i> 9 weeks</li>
            <li><i>6 =</i> 12 weeks</li>
          </ul>
        </li>
        <li>
          <b>1D6:</b>
          <ul>
            <li><i>1 =</i> 6 weeks</li>
            <li><i>2 =</i> 7 weeks</li>
            <li><i>3 =</i> 8 weeks</li>
            <li><i>4 =</i> 9 weeks</li>
            <li><i>5 =</i> 12 weeks</li>
            <li><i>6 =</i> 16 weeks</li>
          </ul>
        </li>
        <li>
          <b>1D6:</b>
          <ul>
            <li><i>1-2 =</i> 2 weeks</li>
            <li><i>3-4 =</i> 4 weeks</li>
            <li><i>5 =</i> 6 weeks</li>
            <li><i>6 =</i> Discharge</li>
          </ul>
        </li>
      </ol>
      <div class="mt-4">
        h. Wound:
        <USelect
          v-model="selectedWound"
          :items="items"
          class="w-1/3"
        />
        <UTable
          :data="dataSurgery"
          :columns="columnsSurgery"
          @contextmenu="onContextMenu"
        />
      </div>
    </UCard>
  </UCard>
</template>
