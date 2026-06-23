<script setup lang="ts">
import Card from '~/components/utils/Card.vue'
</script>

<template>
  <Card>
    <template #header>
      Target determination
    </template>

    <UButton size="lg">
      <a
        href="/target-determination.pdf"
        target="_blank"
      >
        Target determination
      </a>
    </UButton>
    <UButton
      class="ml-4"
      size="lg"
    >
      <a
        href="/gazetteer.pdf"
        target="_blank"
      >
        Gazetteer
      </a>
    </UButton>
    <UButton
      class="ml-4"
      size="lg"
    >
      <a
        href="/shuttle-mission.pdf"
        target="_blank"
      >
        Shuttle Mission
      </a>
    </UButton>

    <template #footer>
      Bomb Bay fuel tanks fitted if Target in Zone 8+.
    </template>
  </Card>
</template>
