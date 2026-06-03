<script setup lang="ts">
import { FlakStrength, TargetVisibility, Weather } from '~/types/enum'

const flakStrengths = Object.values(FlakStrength)

const isOverTargetZone = useState('isOverTargetZone')
const weather = useState('weather')
const targetVisibility = useState('targetVisibility')
const flakStrength = useState('flakStrength', () => FlakStrength.NoFlak)

const { data } = await useFetch('/api/flak/strength')
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
      (6-2A) Flak Strength ; <i>1D6</i>
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
              v-model="flakStrength"
              :items="flakStrengths"
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
            <li>-1 if bomber is performing "Evasive Action"</li>
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
            <li>-1 if bomber is performing "Evasive Action"</li>
            <li>-1 for additional Flak (this is the 2nd flak in target zone)</li>
            <li>+1 if contrails formed in the zone</li>
            <li>+1 if bomber is <10k feet AND at least one engine is out</li>
            <li>+1 if target is Bremen, Cologne, Frankfurt, Hamburg, Kassel, La Rochelle, Leipzig, Lorient, Munich, Ploesti, Regensburg, St-Nazaire, Schweinfurt, or Stuttgart</li>
            <li>+2 if target is Berlin or Merseburg</li>
          </ul>
        </div>
      </UCard>
    </div>
  </UCard>
</template>
