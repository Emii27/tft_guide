<script setup lang="ts">
import Wounds from '~/components/crew/wounds/Wounds.vue'
import LightWoundDetail from '~/components/crew/wounds/LightWoundDetail.vue'
import SeriousWoundDetail from '~/components/crew/wounds/SeriousWoundDetail.vue'
import { WoundType } from '~/types/enum'
import FirstAidInfo from '~/components/crew/wounds/FirstAidInfo.vue'
import KiaWoundDetail from '~/components/crew/wounds/KiaWoundDetail.vue'

const wound = useState('wound')
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Wounds" />
    </template>

    <template #body>
      <div class="body-card">
        <Wounds />
        <FirstAidInfo v-if="wound === WoundType.SeriousWound" />
        <LightWoundDetail v-if="wound === WoundType.LightWound" />
        <SeriousWoundDetail v-if="wound === WoundType.SeriousWound" />
        <KiaWoundDetail v-if="wound === WoundType.Killed" />
      </div>
    </template>
  </UDashboardPanel>
</template>
