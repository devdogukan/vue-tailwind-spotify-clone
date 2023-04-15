<template>
    <component :is="name" :size="size"></component>
</template>

<script>
import HomeIcon from './assets/icons/HomeIcon.vue';
import SearchIcon from './assets/icons/SearchIcon.vue';
import CollectionIcon from './assets/icons/CollectionIcon.vue';
import PlusIcon from './assets/icons/PlusIcon.vue';
import HeartIcon from './assets/icons/HeartIcon.vue';

export default {
    name: 'Icons',

    components: {
        home: HomeIcon,
        search: SearchIcon,
        collection: CollectionIcon,
        plus: PlusIcon,
        heart: HeartIcon,
    },

    props: {
        name: {type: String},
        size: {type: String, default: "24"}
    }
}
</script>