<template>
    <div>
        <Section
            title="Recently played"
            more="blabla"
            :items="items"
        />
    </div>
</template>

<script>
import Section from '../components/Section.vue';

export default {
    name: "Home",

    components: {
        Section,
    },

    data() {
        return {
            items: [
                {
                    id: 1,
                    title: 'Daily Mix 2',
                    description: "Eminem",
                    image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/2/tr/default'
                },
                {
                    id: 2,
                    title: 'Daily Mix 2',
                    description: "Eminem",
                    image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/2/tr/default'
                },
                {
                    id: 3,
                    title: 'Daily Mix 2',
                    description: "Eminem",
                    image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/2/tr/default'
                },
                {
                    id: 4,
                    title: 'Daily Mix 2',
                    description: "Eminem",
                    image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/2/tr/default'
                },
                {
                    id: 5,
                    title: 'Daily Mix 2',
                    description: "Eminem",
                    image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/2/tr/default'
                },
            ]
        }
    }
}
</script>