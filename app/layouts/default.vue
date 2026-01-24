<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const open = ref(false)

const links = [[{
  label: 'Home',
  icon: 'i-lucide-house',
  to: '/',
  onSelect: () => {
    open.value = false
  }
},
{
  label: 'Combat',
  to: '/combat',
  defaultOpen: true
  // type: 'trigger',
  // children: [{
  //   label: 'Defensive fire resolution',
  //   to: '/combat#denfensive-fire',
  //   exact: true,
  //   onSelect: () => {
  //     open.value = false
  //   }
  // },
  // {
  //   label: 'Defensive fire hit damage',
  //   to: '/combat#hit-damage',
  //   onSelect: () => {
  //     open.value = false
  //   }
  // }]
}]]

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
          :items="links[0]"
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
