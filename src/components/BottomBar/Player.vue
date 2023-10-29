<template>
  <div class="flex px-4 justify-between items-center h-full">
    <div class="min-w-[11.25rem] w-[30%]">sol</div>
    <div class="max-w-[45.125rem] w-[40%] flex flex-col items-center">
      <div class="flex items-center gap-x-2">
        <button
          class="w-8 h-8 flex items-center justify-center text-white text-opacity-60 hover:text-opacity-100"
        >
          <Icons size="16" name="shuffle" />
        </button>
        <button
          id="playerPrev"
          class="w-8 h-8 flex items-center justify-center text-white text-opacity-60 hover:text-opacity-100"
        >
          <Icons size="16" name="playerPrev" />
        </button>
        <button
          id="masterPlay"
          class="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]"
        >
          <Icons size="16" :name="icon" />
        </button>
        <button
          id="playerNext"
          class="w-8 h-8 flex items-center justify-center text-white text-opacity-60 hover:text-opacity-100"
        >
          <Icons size="16" name="playerNext" />
        </button>
        <button
          class="w-8 h-8 flex items-center justify-center text-white text-opacity-60 hover:text-opacity-100"
        >
          <Icons size="16" name="repeat" />
        </button>
      </div>
      <div class="w-full">
        <Slider :show="true" />
      </div>
    </div>
    <div class="min-w-[11.25rem] w-[30%] flex items-center justify-end">
      <button
        class="w-8 h-8 flex items-center justify-center text-white text-opacity-60 hover:text-opacity-100"
      >
        <Icons size="16" name="lyric" />
      </button>
      <button
        class="w-8 h-8 flex items-center justify-center text-white text-opacity-60 hover:text-opacity-100"
      >
        <Icons size="16" name="queue" />
      </button>
      <button
        class="w-8 h-8 flex items-center justify-center text-white text-opacity-60 hover:text-opacity-100"
      >
        <Icons size="16" name="device" />
      </button>
      <button
        class="w-8 h-8 flex items-center justify-center text-white text-opacity-60 hover:text-opacity-100"
      >
        <Icons size="16" :name="volumeIcon" />
      </button>
      <div class="w-[5.813rem]">
        <Slider :value="volumeValue" @onChange="volumeValue = $event" />
      </div>
      <button
        class="w-8 h-8 flex items-center justify-center text-white text-opacity-60 hover:text-opacity-100"
      >
        <Icons size="16" name="fullScreen" />
      </button>
    </div>
  </div>
</template>

<script>
import Icons from "../../Icons.vue";
import Slider from "./Slider.vue";

export default {
  name: "Player",

  components: {
    Icons,
    Slider,
  },

  data() {
    return {
      volumeValue: 0,
    };
  },

  computed: {
    volumeIcon() {
      if (this.volumeValue == 0) return "volumeMuted";
      if (this.volumeValue > 0 && this.volumeValue < 33) return "volumeLow";
      if (this.volumeValue >= 33 && this.volumeValue < 66)
        return "volumeNormal";
      return "volumeFull";
    },
    icon() {
      return this.$store.state.player.current ? 'pause' : 'play';
    },
  },
};
</script>
