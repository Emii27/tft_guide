<script setup lang="ts">
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Action in Zone" />
    </template>

    <template #body>
      <div class="body-card">
        <ul>
          <li>Mechanical failure</li>
          <li>Fuel Exhaustion</li>
          <li>Rejoining formation</li>
          <li>Navigation error</li>
        </ul>
      </div>
    </template>
  </UDashboardPanel>
</template>
