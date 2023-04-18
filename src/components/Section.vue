<template>
    <section>
        <header class="flex items-start justify-between mb-4">
            <router-link v-if="more != ''" :to="more">
                <h3 class="text-2xl text-white font-semibold tracking-tight hover:underline">{{ title }}</h3>
            </router-link>
            <router-link v-if="more != ''" class="text-xs font-semibold uppercase text-link hover:underline tracking-wider" :to="more">
                SEE ALL
            </router-link>
        </header>
        <div class="grid grid-cols-5 gap-x-6">
            <router-link v-for="item in items" :key="item.id" to="/" class="bg-footer p-4 rounded group hover:bg-active">
                <div class="pt-[100%] relative mb-4">
                    <img :src="item.image" alt="music" class="absolute inset-0 object-cover w-full h-full"
                        :class="imageType(item.type)">
                    <button
                        class="w-10 h-10 rounded-full bg-[#1ed760] absolute hidden bottom-1 right-1 items-center justify-center hover:scale-110 group-hover:flex group-focus:flex">
                        <Icons size="20" name="play" />
                    </button>
                </div>
                <h6 class="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
                    {{ item.title }}
                </h6>
                <p class="line-clamp-2 text-link text-sm mt-1">
                    {{ item.description }}
                </p>
            </router-link>
        </div>
    </section>
</template>

<script>
import Icons from '../Icons.vue';

export default {
    name: "Section",
    props: {
        title: { type: String },
        more: { type: String, default: "" },
        items: { type: Array, default: [] }
    },
    components: { Icons },

    methods: {
        imageType(type) {
            switch (type) {
                case 'artist':
                    return 'rounded-full';
                case 'podcast':
                    return 'rounded-xl'
                default:
                    return 'rounded'
            }
        }
    }
}
</script>