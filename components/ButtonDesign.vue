<template>
  <NuxtLink :to="route" class="font-sans shadow-md select-none cursor-pointer p-2 w-64 border-linen-p border-2 before:  active:scale-90 ease-in-out duration-150 transform text-left  items-center rounded-lg flex"
    :class="kind === 1 ? 'hover:border-nyanza-s text-nyanza-s' : kind === 2 ? 'text-vista-blue hover:border-vista-blue' : 'text-indian-red hover:border-indian-red'">
    <div class="mr-2">
      <CoinIcon v-if="kind === 1" />
      <HistoryIcon v-if="kind === 2" />
      <PenIcon v-if="kind === 3" />
    </div>
    <div>
      <h2 class="font-bold">
        {{title}}
      </h2>
      <p class="text-xs">
        {{description}}
      </p>
    </div>
  </NuxtLink> 
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import CoinIcon from './icons/CoinIcon.vue';
import HistoryIcon from './icons/HistoryIcon.vue';
import PenIcon from './icons/PenIcon.vue';
const props = defineProps({
  title: String,
  description: String,
  kind: Number,
  route: String
})
</script>