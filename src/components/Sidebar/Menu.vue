<template>
    <nav class="px-2">
        <ul class="flex flex-col">
            <li v-for="(link, index) in navLinks" :key="index">
                <router-link :to="link.to" class="h-10 flex gap-x-4 group items-center text-sm font-semibold text-link hover:text-white px-4 rounded">
                    <span class="fill-link group-active:fill-white group-hover:fill-white">
                        <Icons :name="link.icon" />
                    </span>
                    {{ link.page }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import Icons from '../../Icons.vue';

export default {
    name: 'Menu',

    components: {
        Icons,
    },

    data() {
        return {
            navLinks: [
                { icon: 'home', to: '/', page: 'Home Page' },
                { icon: 'search', to: '/search', page: 'Search' },
                { icon: 'collection', to: '/collection', page: 'My Library' },
            ]
        }
    }
}
</script>