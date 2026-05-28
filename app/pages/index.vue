<script setup lang="ts">
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Home" />
    </template>

    <template #body>
      <div class="body-card">
        <UPageCTA
          title="Target for Today Tables"
          description="A simple tool to help organize tables"
        />
        <UPageCard
          title="About"
          description="I like to play Target for Today with several variants/optional rules and always find it tedious to have to flip through the pages of the rulebook or pdf files. I made this tool to have everything in one place, making it easier to switch to different tables as you play."
        />
        <UCard>
          <template #header>
            Variants used
          </template>
          <ul class="px-4">
            <li>Bruce Peckam's German Pilots</li>
            <li>509th BG's Wounds and Recovery times</li>
          </ul>
        </UCard>
        <UCard>
          <template #header>
            Roadmap
          </template>
          <ul class="px-4">
            <li class="strikethrough">
              Combat charts (5-6 to 5-11)
            </li>
            <li>Reorganize combat into 2 pages: defensive and offensive fire</li>
            <li>Remaining of the combat charts (starting 5-5)</li>
            <li class="strikethrough">
              Wounds
            </li>
            <li>KIA</li>
            <li>Frostbite</li>
          </ul>
        </UCard>
      </div>
    </template>
  </UDashboardPanel>
</template>

<style scoped>
ul {
  list-style: circle;
}
ol {
  list-style: decimal;
}
</style>
