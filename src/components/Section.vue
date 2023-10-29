<template>
  <section>
    <header class="flex items-start justify-between mb-4">
      <router-link v-if="more != ''" :to="more">
        <h3
          class="text-2xl text-white font-semibold tracking-tight hover:underline"
        >
          {{ title }}
        </h3>
      </router-link>
      <router-link
        v-if="more != ''"
        class="text-xs font-semibold uppercase text-link hover:underline tracking-wider"
        :to="more"
      >
        SEE ALL
      </router-link>
    </header>
    <div class="grid grid-cols-5 gap-x-6">
      <SongItem v-for="item in items" :key="item.id" :item="item"/>
    </div>
  </section>
</template>

<script>
import SongItem from "./SongItem.vue";

export default {
  name: "Section",
  props: {
    title: { type: String },
    more: { type: String, default: "" },
    items: { type: Array, default: [] },
  },
  components: { SongItem },
};
</script>
