<script setup lang="ts">
import { BomberType } from '~/types/enum'

const bomber = useState('currentBomber')

const bomberStr = computed(() => {
  switch (bomber.value) {
    case BomberType.B17E:
    case BomberType.B17F:
      return '/defensive-fire-b17f.png'
    case BomberType.B17G:
      return '/defensive-fire-b17g.png'
    default:
      return null
  }
})
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-5) Defensive Fire Allocation
    </template>
    <div class="flex justify-center">
      <NuxtImg
        :src="bomberStr"
        width="800"
        height="800"
      />
    </div>
  </UCard>
</template>
