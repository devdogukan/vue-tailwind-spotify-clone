<template>
    <div class="flex items-center gap-5 pt-3">
        <div class="text-sm opacity-80">00:30</div>
        <div class="relative bg-[#535353] w-full h-1 rounded group">
            <div id="progress-slider" class="absolute bg-gray-200 group-hover:bg-[#1DB954] h-1 rounded-l-md"></div>
            <input v-model="value" min="0" max="100" type="range" class="slider">
        </div>
        <div class="text-sm opacity-80">04:30</div>
    </div>
</template>

<script>

export default {
    name: "Slider",

    data() {
        return {
            value: 0,
        }
    },

    watch: {
        value(newValue) {
            const progressSlider = document.querySelector('#progress-slider');
            progressSlider.style.width = newValue + '%'
        }
    }
}
</script>