<template>
    <aside class="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
        <a href="#" class="px-6 mb-7">
            <img src="../assets/img/logo.svg" alt="spotify-logo-text" class="h-10">
        </a>
        <Menu />
        <CreateAndLiked />
        <Playlists />
    </aside>
</template>

<script>
import Menu from './Sidebar/Menu.vue';
import CreateAndLiked from './Sidebar/CreateAndLiked.vue'
import Playlists from './Sidebar/Playlist.vue'

export default {
    name: 'Sidebar',

    components: {
        Menu,
        CreateAndLiked,
        Playlists,
    },
}
</script>