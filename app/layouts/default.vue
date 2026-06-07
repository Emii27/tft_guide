<script setup lang="ts">
const route = useRoute()

const open = ref(false)

const links = [
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/',
    onSelect: () => {
      open.value = false
    }
  },
  {
    label: 'Combat',
    icon: 'i-lucide-crosshair',
    defaultOpen: false,
    type: 'trigger',
    children: [
      {
        label: 'Resistance',
        to: '/resistance'
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
        icon: 'i-lucide-parachute',
        to: '/crew/bailout'
      }
    ]
  },
  {
    label: 'Flak',
    icon: 'i-lucide-badge-x',
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
        <!-- <UDashboardSearchButton class="bg-transparent ring-default" /> -->

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

    <NotificationsSlideover />
  </UDashboardGroup>
</template>
