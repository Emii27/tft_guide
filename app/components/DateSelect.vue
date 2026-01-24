<script setup lang="ts">
import { Months, Years } from '~/types/enum'

const months = Object.values(Months)
const years = Object.values(Years)
const monthValue = useState('currentMonth', () => Months.Aug)
const yearValue = useState('currentYear', () => Years.Y1942)
</script>

<template>
  <div>
    Current Date
    <div class="row">
      <USelect
        v-model="monthValue"
        :items="months"
      />
      <USelect
        v-model="yearValue"
        :items="years"
      />
    </div>
  </div>
</template>
