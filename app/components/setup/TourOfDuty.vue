<script setup lang="ts">
const data = [
  {
    Date: '< Apr 44',
    Missions: '25'
  },
  {
    Date: 'Apr 44 - May 44',
    Missions: '30'
  },
  {
    Date: 'Jun 44 - Nov 44',
    Missions: '35'
  },
  {
    Date: 'Dec 44 +',
    Missions: '50'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      Tour of Duty
    </template>
    <div class="row">
      <UTable
        :data="data"
        @contextmenu="onContextMenu"
      />
      <UCard variant="soft">
        <ul>
          <li class="mb-4">
            When a crewman has accomplished his tour of duty, he is send back home to the US.
          </li>
          <li>Some crewman may take the decision to sign up for another tour of duty.</li>
        </ul>
      </UCard>
    </div>
  </UCard>
</template>
