<script setup lang="ts">
</script>

<template>
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
