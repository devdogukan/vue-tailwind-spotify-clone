<template>
    <component :is="name" :size="size"></component>
</template>

<script>
import HomeIcon from './assets/icons/HomeIcon.vue';
import SearchIcon from './assets/icons/SearchIcon.vue';
import CollectionIcon from './assets/icons/CollectionIcon.vue';
import PlusIcon from './assets/icons/PlusIcon.vue';
import HeartIcon from './assets/icons/HeartIcon.vue';
import NextIcon from './assets/icons/NextIcon.vue';
import PrevIcon from './assets/icons/PrevIcon.vue';
import DownDirIcon from './assets/icons/DownDirIcon.vue';
import ExternalIcon from './assets/icons/ExternalIcon.vue';

export default {
    name: 'Icons',

    components: {
        home: HomeIcon,
        search: SearchIcon,
        collection: CollectionIcon,
        plus: PlusIcon,
        heart: HeartIcon,
        next: NextIcon,
        prev: PrevIcon,
        downDir: DownDirIcon,
        external: ExternalIcon
    },

    props: {
        name: {type: String},
        size: {type: String, default: "24"}
    }
}
</script>