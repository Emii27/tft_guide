<script setup lang="ts">
import Page from '~/components/utils/Page.vue'
import NumberWaves from '~/components/combat/NumberWaves.vue'
import DrivenOffByEscort from '~/components/combat/DrivenOffByEscort.vue'
import JG26Rules from '~/components/combat/JG26Rules.vue'
</script>

<template>
  <Page title="Waves">
    <NumberWaves />
    <JG26Rules />
    <DrivenOffByEscort />
  </Page>
</template>
