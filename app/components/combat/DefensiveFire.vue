<script setup lang="ts">
import { EnemyAltitude, EnemyDirection, EnemyExperience, EnemyType } from '~/types/enum'

const enemyType = useState('enemyType')
const enemyDirection = useState('enemyDirection')
const enemyAltitude = useState('enemyAltitude')
const enemyExperience = useState('enemyExperience')

const data = ref([
  {
    roll: '< 1',
    effect: 'Miss'
  },
  {
    roll: '2',
    effect: 'Gun jam (a)'
  },
  {
    roll: '3-7',
    effect: 'Miss'
  },
  {
    roll: '8+',
    effect: 'Hit'
  }
])
function onContextMenu() {}

const typeModifier = computed(() => {
  switch (enemyType.value) {
    case EnemyType.Me163:
      return '-2'
    case EnemyType.Me262:
    case EnemyType.He162:
      return '-1'
    case EnemyType.Me110:
    case EnemyType.Me210:
    case EnemyType.Me410:
    case EnemyType.Ju88C6:
      return '+1'
    default:
      return null
  }
})

const directionModifier = computed(() => {
  switch (enemyDirection.value) {
    case EnemyDirection.Dive:
      return '-3'
    case EnemyDirection.Climb:
      return '+3'
    case EnemyDirection.D0600:
      return '+2'
    case EnemyDirection.D0300:
    case EnemyDirection.D0900:
      return '+1'
    case EnemyDirection.D1200:
      return enemyAltitude.value === EnemyAltitude.Level ? '+1' : null
    default:
      return null
  }
})
const is12Lvl = computed(() => enemyDirection.value === EnemyDirection.D1200 && enemyAltitude.value === EnemyAltitude.Level)

const experienceModifier = computed(() => {
  switch (enemyExperience.value) {
    case EnemyExperience.Experte:
      return '-2'
    case EnemyExperience.Ace:
      return '-1'
    case EnemyExperience.Novice:
      return '+1'
    default:
      return null
  }
})
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-6) Defensive Fire ; <i>2D6</i>
    </template>
    <div class="row">
      <div>
        <UTable
          :data="data"
          @contextmenu="onContextMenu"
        />
        <div class="px-4 py-3 border-t border-accented">
          Natural 12 is always a hit
        </div>
      </div>
      <UCard
        variant="soft"
        class="px-4"
      >
        <ol>
          <li>
            <b>Single gun:</b> Jammed<br>
            <b>Twin gun:</b> <i>1D6</i> = 1-4: 1 gun jam ; 5-6: both guns jam.<br>
            Starting next turn, gunner may attempt to fix jammed gun once every zone entered:
            <i>1D6</i> = 1-2: gun fixed, 3-5: gun remains jammed, 6: gun permanently broken
          </li>
        </ol>
      </UCard>
    </div>
    <UCard
      variant="soft"
      class="mt-2"
    >
      <div class="row">
        <ul>
          <li v-if="typeModifier !== null">
            <b>{{ typeModifier }}</b> against {{ enemyType }}
          </li>
          <li v-if="directionModifier !== null">
            <b>{{ directionModifier }}</b> against {{ enemyDirection }}
            <span v-if="is12Lvl">{{ enemyAltitude }} fighter position, for Chin <i>(G model)</i> and Top turret</span>
            <span v-else> fighter position</span>
          </li>
          <li v-if="experienceModifier !== null">
            <b>{{ experienceModifier }}</b> against {{ enemyExperience }} pilot
          </li>
          <li><b>+1</b> if functionning power turret</li>
          <li><b>+1</b> if Ace gunner</li>
        </ul>

        <ul>
          <li><b>-2</b> if power failed to turret (Top, Ball, Chin <i>(G model)</i>)</li>
          <li><b>-2</b> if Intercom System for all guns except Tail Guns</li>
          <li><b>-1</b> if Intercom System for Tail Guns</li>
          <li><b>-1</b> if bomber performing Evasive Maneuvers</li>
          <li><b>-1</b> if gunner suffering frostbite</li>
        </ul>
      </div>
    </UCard>
  </UCard>
</template>

<style scoped>
ol {
  list-style: lower-alpha;
}
</style>
