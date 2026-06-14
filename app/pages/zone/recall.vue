<script setup lang="ts">
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Recall" />
    </template>

    <template #body>
      <div class="body-card">
        <UCard class="p-0">
          <template #header>
            (4-2) Recall
          </template>
          <div class="flex justify-center">
            <NuxtImg
              src="/recall-table.png"
              width="805"
              height="718"
            />
          </div>
        </UCard>
        <UCard class="p-0">
          <template #header>
            Target of opportunity
          </template>
          <div class="flex justify-center">
            <NuxtImg
              src="/target-of-opportunity-table.png"
              width="805"
              height="452"
            />
          </div>
        </UCard>
      </div>
    </template>
  </UDashboardPanel>
</template>
