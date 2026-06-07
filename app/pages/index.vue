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
            <li>Advanced Flak Rules by Addison Edgar</li>
          </ul>
        </UCard>
        <UCard>
          <template #header>
            Roadmap
          </template>
          <ul class="px-4">
            <li>Pre-mission tables (2-9 to 3-3)</li>
            <li>In zone tables (4-1 to 4-8)</li>
            <li>Resistance and Waves (5-1 to 5-4)</li>
            <li class="strikethrough">
              Combat charts (5-6 to 5-11)
            </li>
            <li>Damages tables (5-12 to 5-15)</li>
            <li class="strikethrough">
              Wounds (5-17)
            </li>
            <li class="strikethrough">
              Frostbite (5-18)
            </li>
            <li>Oxygen Fire (5-19)</li>
            <li>Target Visibility (6-1)</li>
            <li class="strikethrough">
              Flak (6-2 to 6-5)
            </li>
            <li>Bomb run (6-6 to 6-7)</li>
            <li>Landing (7-1 to 7-2)</li>
            <li>Bailout (7-3 to 7-4)</li>
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
