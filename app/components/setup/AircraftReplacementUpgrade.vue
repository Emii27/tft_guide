<script setup lang="ts">
const data = [
  {
    date: 'Sep 1943',
    replace: '<4',
    upgrade: '1 (from Sep 10th)'
  },
  {
    date: 'Oct 1943',
    replace: '<9',
    upgrade: '1'
  },
  {
    date: 'Nov 1943',
    replace: 'Always',
    upgrade: '<3'
  },
  {
    date: 'Dec 1943',
    replace: 'Always',
    upgrade: '1'
  },
  {
    date: 'Jan 1944',
    replace: 'Always',
    upgrade: '<4'
  },
  {
    date: 'Feb 1944',
    replace: 'Always',
    upgrade: '<4'
  },
  {
    date: 'Mar 1944',
    replace: 'Always',
    upgrade: '<3'
  },
  {
    date: 'Apr 1944',
    replace: 'Always',
    upgrade: '<2 (<3 from Apr 16th)'
  },
  {
    date: 'May 1944',
    replace: 'Always',
    upgrade: '<18'
  },
  {
    date: 'Jun 1944+',
    replace: 'Always',
    upgrade: 'Always'
  }
]
const columns = [
  {
    accessorKey: 'date',
    header: 'Date'
  },
  {
    accessorKey: 'replace',
    header: 'Replace ; 1D10'
  },
  {
    accessorKey: 'upgrade',
    header: 'Upgrade ; 1D100'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      B-17F Replacement and Upgrade to B-17G
    </template>
    <UTable
      :data="data"
      :columns="columns"
      @contextmenu="onContextMenu"
    />
  </UCard>
</template>
