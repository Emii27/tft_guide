<script setup lang="ts">
const { data: data } = await useFetch('/api/wound/light-wound-location')
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
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-17A) Light wound location ; <i>2D6</i>
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
      <ol class="row pl-4">
        <li>
          <b>1D6:</b>
          <ul>
            <li><i>1-4 =</i> 0 day</li>
            <li><i>5 =</i> 1 day</li>
            <li><i>6 =</i> 2 days</li>
          </ul>
        </li>
        <li>
          <b>1D6:</b>
          <ul>
            <li><i>1-4 =</i> 1 week</li>
            <li><i>5 =</i> 2 weeks</li>
            <li><i>6 =</i> 3 weeks</li>
          </ul>
        </li>
        <li>
          <b>1D6:</b>
          <ul>
            <li><i>1-4 =</i> 4 weeks</li>
            <li><i>5 =</i> 5 weeks</li>
            <li><i>6 =</i> 6 weeks</li>
          </ul>
        </li>
        <li><b>1D6 + 1</b> days</li>
        <li>
          <b>1D10:</b>
          <ul>
            <li><i>1-8 =</i> b</li>
            <li><i>9-10 =</i> c</li>
          </ul>
        </li>
      </ol>
    </UCard>
  </UCard>
</template>
