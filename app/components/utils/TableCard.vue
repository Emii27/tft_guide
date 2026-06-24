<script setup lang="ts">
import type { TableCardHeader } from '~/types/table-card'
import type { TableColumn } from '#ui/components/Table.vue'
import Card from '~/components/utils/Card.vue'

defineProps<{
  title: TableCardHeader
  data: unknown[] | unknown | undefined
  columns?: TableColumn<unknown>[]
}>()
function onContextMenu() {}
</script>

<template>
  <Card>
    <template #header>
      <template v-if="title?.code">
        ({{ title?.code }})
      </template>
      {{ title?.name }}
      <template v-if="title?.roll">
        ; <i>{{ title?.roll }}</i>
      </template>
    </template>

    <slot name="header" />

    <div class="row">
      <slot name="tableLeftAside" />

      <div>
        <UTable
          :data="data"
          @contextmenu="onContextMenu"
        />
        <div
          v-if="$slots.tableFooter"
          class="px-4 py-3 border-t border-accented"
        >
          <slot name="tableFooter" />
        </div>
      </div>

      <UCard
        v-if="$slots.tableAside"
        variant="soft"
      >
        <slot name="tableAside" />
      </UCard>
    </div>

    <slot />

    <template
      v-if="$slots.footer"
      #footer
    >
      <slot name="footer" />
    </template>
  </Card>
</template>
