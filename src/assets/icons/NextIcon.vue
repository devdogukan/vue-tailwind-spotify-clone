<template>
    <svg xmlns="http://www.w3.org/2000/svg" :height="size" :width="size" viewBox="0 0 24 24" fill-opacity>
        <path d="M0 0h24v24H0z" fill="currentColor"/>
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
</template>

<script>

export default {
    name: 'NextIcon',

    props: {
        size: {type: String}
    }
}
</script>