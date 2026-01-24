<script setup lang="ts">
import { BomberType } from '~/types/enum'

const items = Object.values(BomberType)
const value = useState('currentBomber', () => BomberType.B17F)
</script>

<template>
  <div>
    Current Bomber
    <div>
      <USelect
        v-model="value"
        :items="items"
      />
    </div>
  </div>
</template>

<style scoped>
  div > div {
    margin-top: 0.5rem;
    & > * {
      width: 100%;
    }
  }
</style>
