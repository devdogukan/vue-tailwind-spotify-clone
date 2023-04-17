<template>
    <nav class="flex items-center gap-x-4">
        <button v-for="(btn, index) in buttons" :key="index"
            class="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
            @click="routes(btn.control)">
            <span class="material-icons" style="font-size: 25px;">{{ btn.icon }}</span>
        </button>
    </nav>
</template>

<script>

export default {
    name: "Navigation",

    data() {
        return {
            buttons: [
                { icon: "chevron_left", size: "22", control: true },
                { icon: "chevron_right", size: "22", control: false },
            ],
        }
    },

    methods: {
        routes(control) {
            if (control) {
                this.$router.go(-1);
            } else {
                this.$router.go(1);
            }
        }
    }
}
</script>