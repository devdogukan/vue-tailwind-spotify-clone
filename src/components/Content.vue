<template>
    <main class="flex-auto">
        <Navbar />
        <router-view></router-view>
    </main>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
    name: 'Content',

    components: {
        Navbar,
    }
}
</script>