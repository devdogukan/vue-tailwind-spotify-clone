<template>
  <router-link to="/" class="bg-footer p-4 rounded group hover:bg-active">
    <div class="pt-[100%] relative mb-4">
      <img
        :src="item.image"
        alt="music"
        class="absolute inset-0 object-cover w-full h-full"
        :class="imageType(item.type)"
      />
      <button
        @click="updateCurrent"
        class="w-10 h-10 rounded-full bg-[#1ed760] absolute hidden bottom-1 right-1 items-center justify-center hover:scale-110 group-hover:flex group-focus:flex"
      >
        <Icons
          class="text-black"
          size="20"
          :name="icon"
        />
      </button>
    </div>
    <h6
      class="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold"
    >
      {{ item.title }}
    </h6>
    <p class="line-clamp-2 text-link text-sm mt-1">
      {{ item.description }}
    </p>
  </router-link>
</template>

<script>
import Icons from '../Icons.vue';

export default {
  name: "SongItem",

  props: {
    item: { type: Object },
  },

  components: {
    Icons,
  },

  methods: {
    imageType(type) {
      switch (type) {
        case "artist":
          return "rounded-full";
        case "podcast":
          return "rounded-xl";
        default:
          return "rounded";
      }
    },

    updateCurrent() {
      this.$store.commit("setCurrent", this.item);
    },
  },

  computed: {
    icon() {
      return this.$store.state.player.current.id == this.item.id ? 'pause' : 'play';
    },
  },
};
</script>
