<template>
    <div class="flex items-center gap-5 w-full">
        <div class="text-sm opacity-80">{{ startTime }}</div>
        <div class="relative bg-[#535353] w-full h-1 rounded group">
            <div :style="{ 'width': `${model}%` }" class="absolute bg-gray-200 group-hover:bg-[#1DB954] h-1 rounded-l-md">
            </div>
            <input v-model="model" min="0" max="100" type="range" class="slider">
        </div>
        <div class="text-sm opacity-80">{{ endTime === 'NaN:NaN' ? '00:00' : endTime }}</div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const emit = defineEmits(['pause']);

const model = ref(0)
const index = ref(0);

const state = reactive({
    musics: [
        {title: "Yoklugunda - Leyla The Band", name:"Yoklugunda.m4a"},
        {title: "Zombi - Adamlar", name:"Zombi.m4a"},
    ],
});

const music = new Audio(`/musics/${state.musics[0].name}`);

const startTime = ref('00:00');
const endTime = ref('00:00');

setTimeout(() => {
    const masterPlay = document.getElementById('masterPlay');
    const playerPrev = document.getElementById('playerPrev');
    const playerNext = document.getElementById('playerNext');

    masterPlay.addEventListener('click', () => {
        if (music.paused || music.currentTime <= 0) {
            music.play();
        } else {
            music.pause();
        }
    });

    playerNext.addEventListener('click', () => {
        if(index.value === state.musics.length - 1) {
            index.value = 0;
        } else {
            index.value += 1; 
        }

        music.src = `/musics/${state.musics[index.value].name}`;
        music.play()
    });

    playerPrev.addEventListener('click', () => {
        if(index.value <= 0) {
            index.value = state.musics.length - 1;
        } else {
            index.value -= 1;
        }
        music.src = `/musics/${state.musics[index.value].name}`;
        music.play();
    });

    music.addEventListener('timeupdate', () => {
        let currentTime = music.currentTime;
        let duration = music.duration;

        let minEnd = Math.floor(duration / 60);
        let secEnd = Math.floor(duration % 60);

        if(secEnd < 10) {
            secEnd = `0${secEnd}`;
        }

        endTime.value = `${minEnd}:${secEnd}`;

        let minStart = Math.floor(currentTime / 60);
        let secStart = Math.floor(currentTime % 60);

        if(secStart < 10) {
            secStart = `0${secStart}`;
        }

        startTime.value = `${minStart}:${secStart}`;

        model.value = parseInt((currentTime / duration) * 100);

        if(music.paused) {
            if(index.value < state.musics.length) {
                music.src = `/musics/${state.musics[index.value].name}`;
            } else {
                reset()
            }
        }
    });
});

const reset = () => {
    startTime.value = '00:00';
    endTime.value = '00:00';
    index.value = 0;
    emit('pause');
};

</script>