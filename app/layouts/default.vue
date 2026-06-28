<script setup lang="ts">
const route = useRoute()

const links = [
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/'
  },
  {
    label: 'Setup',
    defaultOpen: false,
    type: 'trigger',
    children: [
      {
        label: 'Basic Infos',
        icon: 'i-lucide-info',
        to: '/setup/infos'
      },
      {
        label: 'Aircraft',
        icon: 'i-game-icons-commercial-airplane',
        to: '/setup/aircraft'
      }
    ]
  },
  {
    label: 'Briefing',
    defaultOpen: false,
    type: 'trigger',
    children: [
      {
        label: 'Target',
        icon: 'i-game-icons-target-laser',
        to: '/briefing/target'
      },
      {
        label: 'Formation',
        icon: 'i-lucide-group',
        to: '/briefing/formation'
      },
      {
        label: 'Weather',
        icon: 'i-lucide-cloud-sun',
        to: '/briefing/weather'
      }
    ]
  },
  {
    label: 'Mission start',
    defaultOpen: false,
    type: 'trigger',
    children: [
      {
        label: 'Takeoff',
        icon: 'i-lucide-plane-takeoff',
        to: '/start/mission-takeoff'
      },
      {
        label: 'Form-up',
        icon: 'i-game-icons-join',
        to: '/start/form-up'
      },
      {
        label: 'Cover & Resistance',
        icon: 'i-game-icons-gunshot',
        to: '/start/cover'
      }
    ]
  },
  {
    label: 'In Zone',
    defaultOpen: false,
    type: 'trigger',
    children: [
      {
        label: 'Recall',
        icon: 'i-lucide-refresh-ccw',
        to: '/zone/recall'
      },
      {
        label: 'In zone actions',
        icon: 'i-lucide-list-checks',
        to: '/zone/action'
      }
    ]
  },
  {
    label: 'Combat',
    icon: 'i-game-icons-crosshair',
    defaultOpen: false,
    type: 'trigger',
    children: [
      {
        label: 'Waves',
        to: '/combat/waves'
      },
      {
        label: 'Defensive Fire',
        to: '/combat/defensive-fire'
      },
      {
        label: 'Enemy Fire',
        to: '/combat/enemy-fire'
      }
    ]
  },

  {
    label: 'Crew',
    icon: 'i-lucide-users',
    defaultOpen: false,
    type: 'trigger',
    children: [
      {
        label: 'Wounds',
        icon: 'i-lucide-cross',
        to: '/crew/wounds'
      },
      {
        label: 'Frostbite',
        icon: 'i-lucide-snowflake',
        to: '/crew/frostbite'
      },
      {
        label: 'Bailout',
        icon: 'i-game-icons-parachute',
        to: '/crew/bailout'
      }
    ]
  },
  {
    label: 'Flak',
    icon: 'i-game-icons-anti-aircraft-gun',
    to: '/flak'
  }
]

const groups = computed(() => [{
  id: 'links',
  label: 'Go to',
  items: links.flat()
}, {
  id: 'code',
  label: 'Code',
  items: [{
    id: 'source',
    label: 'View page source',
    icon: 'i-simple-icons-github',
    to: `https://github.com/nuxt-ui-templates/dashboard/blob/main/app/pages${route.path === '/' ? '/index' : route.path}.vue`,
    target: '_blank'
  }]
}])
</script>

<template>
  <UDashboardGroup unit="rem">
    <UDashboardSidebar
      id="default"
      v-model:open="open"
      class="bg-elevated/25"
      :ui="{ footer: 'lg:border-t lg:border-default' }"
    >
      <template #header>
        Target for Today
      </template>

      <template #default>
        <BomberSelect />

        <DateSelect />

        <UNavigationMenu
          :items="links"
          orientation="vertical"
          tooltip
          popover
        />
      </template>
    </UDashboardSidebar>

    <UDashboardSearch :groups="groups" />

    <slot />
  </UDashboardGroup>
</template>
