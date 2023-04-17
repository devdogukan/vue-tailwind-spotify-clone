<template>
    <main class="flex-auto">
        <Navbar />
        <div class="px-8 pt-5">
            <router-view></router-view>
        </div>
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