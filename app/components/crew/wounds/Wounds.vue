<script setup lang="ts">
const { data } = await useFetch('/api/wounds')
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-17) Wounds ; <i>1D6</i>
    </template>
    <div class="row">
      <UTable
        :data="data"
        @contextmenu="onContextMenu"
      />
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
  </UCard>

  <UCard class="p-0">
    <template #header>
      First Aid
    </template>
    <p>As soon as a crewmember is seriously wounded or frostbitten, he can receive first aid from another uninjured crewmember.</p>
    <p>
      The helping crewmember abandon his post to give first aid to the wounded.
      <i>A crewman already giving first aid can attend multiple wounded.</i>
    </p>
    <p>Crewmember receiving first aid is moved to the radio room.</p>
    <p>Wounded crewmembers must receive first aid continuously for the remainder of the mission to gain the effect of first aid.</p>
    <div class="pt-4">
      Effect of First Aid:
      <ul class="pl-4">
        <li><b>-1</b> on 5-17B Recovery table for serious wound.</li>
        <li><b>+1</b> on 5-18A Recovery table for frostbite.</li>
      </ul>
    </div>
  </UCard>
</template>
