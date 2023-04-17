<template>
    <section>
        <header class="flex items-start justify-between mb-4">
            <h3 class="text-2xl text-white font-semibold tracking-tight hover:underline">{{ title }}</h3>
            <router-link v-if="more != ''" class="text-xs font-semibold uppercase text-link hover:underline" :to="more">SEE ALL</router-link>
        </header>
        <div class="grid grid-cols-5 gap-x-6">
            <router-link v-for="item in items" :key="item.id" to="/" class="bg-footer p-4 rounded">
                <div class="pt-[100%] relative">
                    <img :src="item.image" alt="music" class="absolute inset-0 object-cover w-full h-full">
                </div>
                <h6 class="line-clamp-1">
                    {{ item.title }}
                </h6>
            </router-link>
        </div>
    </section>
</template>

<script>

export default {
    name: "Section",

    props: {
        title: {type: String},
        more: {type: String, default: ''},
        items: {type: Array, default: []}
    }
}
</script>