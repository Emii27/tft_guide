<script setup lang="ts">
import Page from '~/components/utils/Page.vue'
import WeatherOverBase from '~/components/briefing/WeatherOverBase.vue'
import WeatherInZone from '~/components/briefing/WeatherInZone.vue'
import WeatherOverAlps from '~/components/briefing/WeatherOverAlps.vue'
import Contrails from '~/components/briefing/Contrails.vue'
</script>

<template>
  <Page title="Weather">
    <WeatherOverBase />
    <WeatherInZone />
    <WeatherOverAlps />
    <Contrails />
  </Page>
</template>
