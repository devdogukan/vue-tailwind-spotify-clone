<template>
    <nav class="mt-6">
            <ul>
                <li v-for="(link, index) in links" :key="index">
                    <a :href="link.to" class="flex py-2 px-6 items-center text-sm text-link group hover:text-white font-semibold">
                        <span :class="link.bg, link.color" class="w-6 h-6 flex items-center transition justify-center mr-4 bg-opacity-60 group-hover:bg-opacity-100 rounded-sm group-active:fill-white">
                            <Icons :name="link.icon" :size="link.size" />
                        </span>
                        {{ link.name }}
                    </a>
                </li>
            </ul>
        </nav>
</template>

<script>
import Icons from '../../Icons.vue';

export default {
    name: 'CreateAndLiked',

    components: {
        Icons,
    },

    data() {
        return {
            links: [
                { icon: 'plus', to: '#', name: 'Create Playlist', size: '12', bg: 'bg-white', color: 'fill-black' },
                { icon: 'heartFilled', to: '#', name: 'Liked Songs', size: '12', bg: 'bg-gradient-to-br from-indigo-500 to-blue-300', color: 'fill-white' },
            ]
        }
    }
}
</script>