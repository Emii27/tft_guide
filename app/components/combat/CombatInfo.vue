<script setup lang="ts">
import { EnemyAltitude, EnemyDirection, EnemyExperience, EnemyType } from '~/types/enum'

const enemyTypes = Object.values(EnemyType)
const enemyDirections = Object.values(EnemyDirection)
const enemyAltitudes = Object.values(EnemyAltitude)
const enemyExperiences = Object.values(EnemyExperience)

const enemyType = useState('enemyType', () => EnemyType.Me109)
const enemyDirection = useState('enemyDirection', () => EnemyDirection.D1200)
const enemyAltitude = useState('enemyAltitude', () => EnemyAltitude.Level)
const enemyExperience = useState('enemyExperience', () => EnemyExperience.Veteran)
</script>

<template>
  <UDashboardToolbar>
    <template #left>
      <UFormField
        orientation="horizontal"
        label="Enemy type"
        class="mr-4"
      >
        <USelect
          v-model="enemyType"
          :items="enemyTypes"
          class="min-w-32"
        />
      </UFormField>

      <UFormField
        orientation="horizontal"
        label="Enemy direction"
        class="mr-4"
      >
        <USelect
          v-model="enemyDirection"
          :items="enemyDirections"
          class="min-w-24"
        />
      </UFormField>

      <UFormField
        orientation="horizontal"
        label="Enemy altitude"
        class="mr-4"
      >
        <USelect
          v-model="enemyAltitude"
          :items="enemyAltitudes"
          class="min-w-24"
        />
      </UFormField>
      <UFormField
        orientation="horizontal"
        label="Enemy experience"
        class="mr-4"
      >
        <USelect
          v-model="enemyExperience"
          :items="enemyExperiences"
          class="min-w-28"
        />
      </UFormField>
    </template>
  </UDashboardToolbar>
</template>

<style scoped>

</style>
