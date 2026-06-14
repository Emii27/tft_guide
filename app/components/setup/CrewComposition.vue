<script setup lang="ts">

</script>

<template>
  <UCard class="p-0">
    <template #header>
      Crew Composition
    </template>
    <UCard
      variant="soft"
      class="mb-4"
    >
      <template #header>
        Mission Lead / Deputy Lead
      </template>
      <ul>
        <li class="mb-2">
          Additional Navigator in the radio room (+1 on T-10.7.1)
        </li>
        <li>Starting Jun 1944: Toggliers may replace Bombardier</li>
      </ul>
    </UCard>
    <UCard
      variant="soft"
      class="mb-4"
    >
      <template #header>
        PFF
      </template>
      <ul>
        <li>Radar Operator instead of Ball Gunner</li>
      </ul>
    </UCard>
    <UCard variant="soft">
      <template #header>
        Gunners
      </template>
      <ul>
        <li class="mb-2">
          Starting 7 Jun 1944: Only 1 waist gunner (Gradual adjustment over 2 weeks)
        </li>
        <li>Starting 23 Feb 1945: No waist gunner (Exceptions on some missions)</li>
      </ul>
    </UCard>
  </UCard>
</template>
