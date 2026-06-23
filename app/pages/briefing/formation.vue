<script setup lang="ts">
import Card from '~/components/utils/Card.vue'
import Page from '~/components/utils/Page.vue'
</script>

<template>
  <Page title="Formation">
    <Card>
      Bomber position:
      <UButton
        class="ml-4"
        size="lg"
      >
        <a
          href="/bomber-position.pdf"
          target="_blank"
        >
          Bomb Position
        </a>
      </UButton>
    </Card>
  </Page>
</template>
