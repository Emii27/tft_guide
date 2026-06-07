<script setup lang="ts">
const { data } = await useFetch('/api/frostbite/frostbite')
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-18) Frostbite ; <i>1D6</i>
    </template>

    <div class="row">
      <UTable
        :data="data"
        @contextmenu="onContextMenu"
      />
      <UCard
        variant="soft"
        class="px-4"
      >
        <p class="mb-2">
          +1 for each additional zone after the "Heat out" result was received that the bomber does not descend to 10,000 feet. There is
          no die roll modifier in the zone immediately following the "heat out" result
        </p>
        <ol>
          <li>-1 on Table 5-6 if crewman is firing a gun</li>
          <li>May not operate gun. +1 to roll for recovery status (After landing)</li>
        </ol>
      </UCard>
    </div>
  </UCard>
</template>
