<script setup lang="ts">
import MissionScrubbed from '~/components/briefing/MissionScrubbed.vue'
import TargetDetermination from '~/components/briefing/TargetDetermination.vue'
import BombLoad from '~/components/briefing/BombLoad.vue'
import Page from '~/components/utils/Page.vue'
</script>

<template>
  <Page title="Target Determination">
    <TargetDetermination />
    <MissionScrubbed />
    <BombLoad />
  </Page>
</template>
