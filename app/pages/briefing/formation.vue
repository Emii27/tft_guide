<script setup lang="ts">
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Formation" />
    </template>

    <template #body>
      <div class="body-card">
        <UCard class="p-0">
          Bomber position:
          <UButton
            class="ml-4"
            size="lg"
          >
            <a
              href="/bomber-position.pdf"
              target="_blank"
            >
              Bomb Position
            </a>
          </UButton>
        </UCard>
      </div>
    </template>
  </UDashboardPanel>
</template>
