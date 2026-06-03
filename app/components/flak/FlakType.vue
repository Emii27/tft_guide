<script setup lang="ts">
import { FlakType, TargetVisibility, Weather } from '~/types/enum'

const flakTypes = Object.values(FlakType)

const isOverTargetZone = useState('isOverTargetZone')
const weather = useState('weather')
const targetVisibility = useState('targetVisibility')
const flakType = useState('flakType', () => FlakType.Barrage)

const { data } = await useFetch('/api/flak/type')
function onContextMenu() {}

const weatherModifier = computed(() => {
  switch (weather.value) {
    case Weather.FullCloud:
      return '-2 if 100% Cloud Cover in the zone'
    case Weather.HalfCloud:
      return '-1 if 50% Cloud Cover in the zone'
    case Weather.Clear:
      return '+1 if Clear Conditions in the zone'
    default:
      return null
  }
})
const targetVisibilityModifier = computed(() => {
  switch (targetVisibility.value) {
    case TargetVisibility.CompletelyObscured:
      return '-2 if target visibility is completely obscured'
    case TargetVisibility.MostlyObscured:
      return '-1 if target visibility is mostly obscured'
    case TargetVisibility.Clear:
      return '+1 if target visibility is clear'
    default:
      return null
  }
})
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (6-2B) Flak Type ; <i>1D6</i>
    </template>
    <div class="row">
      <div>
        <UTable
          :data="data"
          @contextmenu="onContextMenu"
        />
        <div class="px-4 py-3 border-t border-accented">
          <UFormField
            orientation="horizontal"
            label="Result"
          >
            <USelect
              v-model="flakType"
              :items="flakTypes"
              class="min-w-32"
            />
          </UFormField>
        </div>
      </div>
      <UCard
        variant="soft"
        class="px-4"
      >
        <div v-if="!isOverTargetZone">
          <b>Modifiers of Non-Target Zone <i>(Cumulative)</i>:</b>
          <ul>
            <li
              v-if="weatherModifier !== null"
              class="mb-2"
            >
              {{ weatherModifier }}
            </li>
            <li v-if="weather != Weather.FullCloud">
              +1 if contrails formed in the zone
            </li>
            <li>+1 if Out of Formation</li>
          </ul>
        </div>
        <div v-if="isOverTargetZone">
          <b>Modifiers of Target Zone <i>(Cumulative)</i>:</b>
          <ul>
            <li
              v-if="targetVisibilityModifier !== null"
              class="mb-2"
            >
              {{ targetVisibilityModifier }}
            </li>
            <li>+1 if contrails formed in the zone</li>
            <li>+1 if bomber is <10k feet</li>
          </ul>
        </div>
      </UCard>
    </div>
  </UCard>
</template>
