<template>
    <router-link v-if="local" :to="url" class="navbox">{{ text }}</router-link>
    <a v-else :href="url" class="navbox">{{ text }}</a>
</template>

<script>
    export default {
        name: "ButtonLink",
        props: {
            url: String,
            text: String,
            local: {
                type: Boolean,
                default: true
            }
        }
    };
</script>

<style scoped lang="scss">
    .navbox {
        color: $highlight-color;
        background: lighten($main-color, 5);
        transition: all ease-in-out 100ms;
        transition-property: border-radius, background;
        font-weight: 600;
        padding: 3px 15px;

        &:hover {
            border-radius: 7px;
            background: lighten($main-color, 10);
        }

        &:active {
            background: lighten($main-color, 20);
        }
    }
</style>