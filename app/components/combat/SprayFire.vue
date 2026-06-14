<script setup lang="ts">
const { data } = await useFetch('/api/combat/spray-fire')
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-6A) Area Spray fire ; <i>1D6</i>
    </template>
    <div class="row">
      <div>
        <UTable
          :data="data"
          @contextmenu="onContextMenu"
        />
        <div class="px-4 py-3 border-t border-accented">
          Spray fire can't be use against 1200, 0130, 1030 or Vertical dive attacks
        </div>
      </div>
      <UCard
        variant="soft"
        class="px-4"
      >
        <ol>
          <li>
            <b>Single gun:</b> Jammed<br>
            <b>Twin gun:</b> <i>1D6</i> = 1-4: 1 gun jam ; 5-6: both guns jam.<br>
            Starting next turn, gunner may attempt to fix jammed gun once every zone entered:
            <i>1D6</i> = 1-2: gun fixed, 3-5: gun remains jammed, 6: gun permanently broken
          </li>
          <li><i>1D6</i> = 1-2: gun jams (see note a) ; 3-6: no effect</li>
        </ol>
      </UCard>
    </div>
  </UCard>
</template>

<style scoped>
ol {
  list-style: lower-alpha;
}
</style>
