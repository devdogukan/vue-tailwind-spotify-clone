<template>
    <div class="grid gap-y-8">
        <Section
            title="Recently played"
            more="blabla"
            :items="items"
        />
        <Section
            title="Shows to try"
            more="blabla"
            :items="items"
        />
        <Section
            title="Made For Dre"
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
                    image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/2/tr/default',
                    type: 'album'
                },
                {
                    id: 2,
                    title: 'Yoklugunda',
                    description: "Leyla The Band",
                    image: 'https://i.scdn.co/image/ab67616d00001e0288f808bb875a0678818228fc',
                    type: 'album'
                },
                {
                    id: 3,
                    title: 'This Is Tarkan',
                    description: "Tarkan",
                    image: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO1t4fWE-default.jpg',
                    type: 'artist'
                },
                {
                    id: 4,
                    title: '71 - Mutluluğun Formülü',
                    description: "17 Nis · 25 Dk",
                    image: 'https://i.scdn.co/image/ab67656300005f1f15dbc1cba8d088bfbba170c1',
                    type: 'podcast'
                },
                {
                    id: 5,
                    title: 'Peaceful Piano',
                    description: "Relax and indulge with beautiful piano pieces",
                    image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
                    type: 'album'
                },
            ]
        }
    }
}
</script>