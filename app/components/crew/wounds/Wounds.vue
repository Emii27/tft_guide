<script setup lang="ts">
import { WoundType } from '~/types/enum'

const woundTypes = Object.values(WoundType)

const wound = useState('wound', () => WoundType.LightWound)

const { data } = await useFetch('/api/wound/wounds')
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-17) Wounds ; <i>1D6</i>
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
              v-model="wound"
              :items="woundTypes"
              class="min-w-32"
            />
          </UFormField>
        </div>
        <UCard
          variant="soft"
          class="px-4"
        >
          <ul class="pb-4">
            <li><b>3rd light wound:</b> Serious wound</li>
            <li><b>4th light wound:</b> KIA</li>
            <li><b>Light wound + Serious wound:</b> KIA</li>
          </ul>
          <ol>
            <li>May continue duties unimpaired</li>
            <li>
              <b>Upon 2nd light wounds:</b>
              <ul>
                <li>Bombardier: Loses mission bonus</li>
                <li>Bombardier: Bomb run roll on 6-6 is -1</li>
                <li>Pilot & Copilot: Lose mission bonus <i>(only if both have 2LW)</i></li>
                <li>Bailout on 7-3 is -1</li>
              </ul>
            </li>
            <li>May not continue duties</li>
            <li>If not receiving First Aid, may not bailout</li>
          </ol>
        </UCard>
      </div>
    </div>
  </UCard>
</template>
