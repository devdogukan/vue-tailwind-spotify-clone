<template>
    <div class="flex px-4 justify-between items-center h-full ">
        <div class="min-w-[11.25rem] w-[30%]">
            sol
        </div>
        <div class="max-w-[45.125rem] w-[40%] flex flex-col items-center">
            <div class="flex items-center gap-x-2">
                <button class="w-8 h-8 flex items-center justify-center text-white text-opacity-60 hover:text-opacity-100">
                    <Icons size="16" name="shuffle" />
                </button>
                <button class="w-8 h-8 flex items-center justify-center text-white text-opacity-60 hover:text-opacity-100">
                    <Icons size="16" name="playerPrev" />
                </button>
                <button class="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]">
                    <Icons size="16" name="play" />
                </button>
                <button class="w-8 h-8 flex items-center justify-center text-white text-opacity-60 hover:text-opacity-100">
                    <Icons size="16" name="playerNext" />
                </button>
                <button class="w-8 h-8 flex items-center justify-center text-white text-opacity-60 hover:text-opacity-100">
                    <Icons size="16" name="repeat" />
                </button>
            </div>
            <div class="w-full pt-3 flex justify-center items-center">
                <Slider v-model="value" color="#1DB954" track-color="#535353" circleOffset="360" />
            </div>
        </div>
        <div class="min-w-[11.25rem] w-[30%] flex justify-end">
            sag
        </div>
    </div>
</template>

<script>
import Icons from '../../Icons.vue';
import Slider from "vue3-slider";

export default {
    name: "Player",

    components: { 
        Icons,
        Slider,
    },

    data() {
        return {
            value: null,
        }
    }
}
</script>