<template>
    <div class="h-24 bg-footer border-t border-white border-opacity-5">
        <Player />
    </div>
</template>

<script>
import Player from './BottomBar/Player.vue';

export default {
    name: 'BottomBar',

    components: {
        Player
    },
}
</script>