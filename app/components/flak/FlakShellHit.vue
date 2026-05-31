<script setup lang="ts">
const { data } = await useFetch('/api/flak/shell-hit')
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (6-4) Flak shell hits ; <i>2D6</i>
    </template>
    <div class="row">
      <div>
        <UTable
          :data="data"
          @contextmenu="onContextMenu"
        />
        <div class="px-4 py-3 border-t border-accented">
          Roll once on Table 6-5 for each shell hit
        </div>
      </div>
      <UCard
        variant="soft"
        class="px-4"
      >
        <b>Burst Inside Plane:</b>
        <ul>
          <li class="mb-2">
            Roll for the compartment on 6-5 (re-roll if "Superficial Damage")
          </li>
          <li class="mb-2">
            All crewmen in compartment are KIA
          </li>
          <li class="mb-2">
            If area hit is Wing, Tail, or Pilot Compartment: Bomber dives out of control, crewmen make an uncontrolled bailout (7-4)
          </li>
          <li class="mb-2">
            If area hit is Bomb bay (with bomb onboard): Bombs explode, bomber is destroyed and all crewmen are KIA
          </li>
          <li>If area hit is Nose, empty Bomb bay, Radio room, or Waist:</li>
          <li>- Bomber falls out of formation</li>
          <li>- No Evasive Action is possible</li>
          <li>- Must spend 2 turns in each upcoming zone</li>
          <li>- Bomber received every damage possible for that compartment (assume each number from 2 to 12 has been roll on the damage table)</li>
          <li>- Bomber is automatically Cat-E</li>
        </ul>
      </UCard>
    </div>
  </UCard>
</template>
