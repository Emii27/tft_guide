<script setup lang="ts">
const data = [
  {
    Type: 'E',
    Availability: '17 Aug 1942 - 21 Oct 1942',
    Replacement: 'Always F Model',
    Upgrade: '21 Aug 1942 replace all with F model'
  },
  {
    Type: 'F',
    Availability: '17 Aug 1942 - 1 Jun 1944',
    Replacement: 'Check replacement table',
    Upgrade: 'Check upgrade table'
  },
  {
    Type: 'YB-40',
    Availability: '29 May 1943 - 29 Jul 1943',
    Replacement: 'Always F Model',
    Upgrade: '29 Jul 1943, replace all with F model'
  },
  {
    Type: 'G',
    Availability: '10 Sep 1943+',
    Replacement: 'Always G Model',
    Upgrade: 'N/A'
  },
  {
    Type: 'G (PFF)',
    Availability: 'Oct 1943+ (Check note)',
    Replacement: 'Always G (PFF) Model',
    Upgrade: 'N/A'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      B-17 Availability
    </template>
    <UTable
      :data="data"
      @contextmenu="onContextMenu"
    />
    <div class="px-4 py-3 border-t border-accented">
      <p>PFF Availability (1D10): Oct 43 = 1 ; Nov 43 - Jul 44 = <7 ; Aug 44 - Nov 44 = <9 ; Dec 44+ = Always</p>
      <p>PFF is the Group Lead aircraft</p>
    </div>
    <UCard variant="soft">
      <ul>
        <li>Early B-17G (Up to Jun 1944): Improved field of fire for radio room</li>
        <li>Late B-17G (Starting Jun 1944): No radio room gun</li>
      </ul>
    </UCard>
  </UCard>
</template>
