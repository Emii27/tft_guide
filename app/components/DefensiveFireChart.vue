<script setup lang="ts">
import { VisSingleContainer, VisNestedDonut } from '@unovis/vue'
import { Area, type NestedDonutSegment, NestedDonutSegmentLabelAlignment } from '@unovis/ts'
// import type { EnnemyDirection } from '~/types/enum'
import type { DefensiveFire } from '~/types'

// type DataDonut = {
//   group: string
//   subgroup: string
// }

// const data: DataDonut[] = [
//   { group: '1200', subgroup: 'A1' },
//   { group: '0130', subgroup: 'A2' },
//   { group: '0300', subgroup: 'B1' },
//   { group: 'Dive', subgroup: 'B2' },
//   { group: '0600', subgroup: 'B2' },
//   { group: 'Climb', subgroup: 'B2' },
//   { group: '0900', subgroup: 'B2' },
//   { group: '1030', subgroup: 'B2' }
// ]
const props = defineProps<{
  defensiveFires: DefensiveFire[]
}>()

const data = props.defensiveFires // Object.values(EnnemyDirection)
const layers = [
  (d: DefensiveFire) => d.direction
  // (d: DefensiveFire.vue) => d.high,
  // (d: DefensiveFire.vue) => d.level,
  // (d: DefensiveFire.vue) => d.low
]
const layerSettings = (index: number) => {
  return {
    // width: index === 0 ? 50 : 100,
    labelAlignment: NestedDonutSegmentLabelAlignment.Straight
  }
}
const segmentColor = (d: NestedDonutSegment<DefensiveFire>) => {
  // return d.data.values.at(0)?.sprayFire ? 'green' : 'red'
  // return d.data.root === 'true' ? 'green' : 'red'
  // const spraySector = props.defensiveFires.filter(fire => fire.sprayFire)
  const fire = props.defensiveFires.find(fire => fire.direction === d.data.root)
  return fire?.sprayFire ? 'green' : 'red'
}
const events = {
  [Area.selectors.area]: {
    click: (d: never) => console.log('Clicked Area', d)
  }
}

const angleRange: [number, number] = [-(2 * Math.PI) / data.length * 0.5, (2 * Math.PI)]
</script>

<template>
  <UCard>
    <template #header>
      Gunnery Chart B-17F
    </template>

    <VisSingleContainer
      :data="data"
    >
      <VisNestedDonut
        :layers="layers"
        :layer-settings="layerSettings"
        :angle-range="angleRange"
        :segment-color="segmentColor"
        :event="events"
      />
    </VisSingleContainer>
  </UCard>
</template>

<style scoped>
:deep(.unovis-nested-donut-segment) {
  cursor: pointer;
  transition: opacity 0.2s;
}

:deep(.unovis-nested-donut-segment:hover) {
  opacity: 0.8;
}
</style>
