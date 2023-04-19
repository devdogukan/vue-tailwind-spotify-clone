<template>
    <nav class="h-[3.75rem] flex items-center justify-between px-8">
        <Navigation />
        <span v-if="route == 'search'">
            Selam
        </span>
        <Auth class="z-10"/>
    </nav>
</template>

<script>
import Navigation from './Navbar/Navigation.vue';
import Auth from './Navbar/Auth.vue'

export default {
    name: "Navbar",

    components: {
        Navigation,
        Auth,
    },

    computed: {
        route() {
            return this.$route.name
        }
    }
}
</script>