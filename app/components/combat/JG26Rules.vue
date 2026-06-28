<script setup lang="ts">
import Card from '~/components/utils/Card.vue'
</script>

<template>
  <Card>
    <template #header>
      JG-26 - Special rules
    </template>

    <ul>
      <li>Experience, 1D6: <5 = Ace ; 6 = Experte </li>
      <li>Escort: If escort is present then treat as Poor cover</li>
      <li>Combat: Ignore FBOA and FCA modifiers</li>
      <li>Successive Attacks: Always make successive attack even if Miss (fighter still breaks off if FBOA)</li>
    </ul>
  </Card>
</template>
