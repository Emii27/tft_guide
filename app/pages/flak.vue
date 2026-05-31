<script setup lang="ts">
import { FlakStrength, TargetVisibility, Weather } from '~/types/enum'
import FlakStrengthTable from '~/components/flak/FlakStrengthTable.vue'
import FlakShellHit from '~/components/flak/FlakShellHit.vue'

const WeatherTypes = Object.values(Weather)
const TargetVisibilityTypes = Object.values(TargetVisibility)

const isOverTargetZone = useState('isOverTargetZone', () => false)
const weather = useState('weather', () => Weather.Clear)
const targetVisibility = useState('targetVisibility', () => TargetVisibility.Clear)
const flakStrength = useState('flakStrength')
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Flak" />
      <UDashboardToolbar>
        <template #left>
          <USwitch
            v-model="isOverTargetZone"
            label="Is over Target zone?"
            class="mr-4"
          />

          <UFormField
            v-if="!isOverTargetZone"
            orientation="horizontal"
            label="Weather in zone"
            class="mr-4"
          >
            <USelect
              v-model="weather"
              :items="WeatherTypes"
              class="min-w-32"
            />
          </UFormField>

          <UFormField
            v-if="isOverTargetZone"
            orientation="horizontal"
            label="Target Visibility"
            class="mr-4"
          >
            <USelect
              v-model="targetVisibility"
              :items="TargetVisibilityTypes"
              class="min-w-32"
            />
          </UFormField>
        </template>
      </UDashboardToolbar>
    </template>

    <template #body>
      <div class="body-card">
        <UCard>
          <template #header>
            Infos
          </template>
          <div class="mb-4">
            <b>When entering a non-target zone that is over land or half-water/half-land (and is not friendly territory):</b>
            <ul>
              <li>If mission lead bomber + Off-course result, 1D6: 1-4 = No effect ; 5-6 = Flak (roll starting Table 6-2A)</li>
              <li>If not mission lead bomber, 2D6: 2-9 = No effect ; 10-12 = Flak (roll starting Table 6-2A)</li>
            </ul>
          </div>
          <div class="mb-4">
            <b>Add +1 to the roll above when:</b>
            <ul>
              <li>Entering first zone over land (or half over land) during inbound flight.</li>
              <li>Entering last zone over land (or half over land) during outbound flight.</li>
              <li>Entering any zone over Germany (or half over Germany)</li>
            </ul>
          </div>
          <b>Flak is always light when bomber is Out of Formation + Below 10k feet in non-target zone (ignore table 6-2A, go directly to 6-2B)</b>
        </UCard>

        <FlakStrengthTable />
        <UCard v-if="flakStrength === FlakStrength.NoFlak">
          No flak
        </UCard>
        <div
          v-else
          class="body-card"
        >
          <FlakType />
          <FlakAccuracy />
          <FlakHit />
          <FlakShellHit />
          <FlakAreaHit />
        </div>
      </div>
    </template>
  </UDashboardPanel>
</template>
