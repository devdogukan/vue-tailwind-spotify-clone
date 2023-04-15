<template>
    <nav class="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
        <ul>
            <li v-for="(playlist, index) in playlists" :key="index">
                <a href="#" class="text-s text-link hover:text-white flex h-8 items-center">
                    {{(index + 1) + '. ' + playlist.playlist }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'Playlist',

    data() {
        return {
            playlists: [
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
                {to: '#', playlist: 'Playlist'},
            ]
        }
    }
}
</script>