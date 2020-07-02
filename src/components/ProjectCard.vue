<template>
    <div class="project-card">
        <h1 class="project-title">{{ textTitle }}</h1>
        <h2 class="project-subtitle">{{ textSubtitle }}</h2>
        <p class="project-description" v-for="line in textDescription" :key="line">{{ line }}</p>
    </div>
</template>

<script>
    export default {
        name: "ProjectCard",
        props: {
            textTitle: String,
            textSubtitle: String,
            textDescription: Array
        }
    };
</script>

<style lang="scss">
    .project-card {
        background: lighten($main-color, 5);
        margin: 2% 0;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        width: 55%;
        padding: 15px 2%;
        box-shadow: -6px 6px 0px 0px darken($main-color, 5);

        h2:after {
            color: $secondary-color;
            content: " ";
            display: block;
            border: 3px solid $highlight-color;
            margin: 0 -2%;
        }

        h1 {
            font-size: 2.3em;
            margin-bottom: 0;
        }

        p {
            color: $secondary-color;
            font-weight: 400;
            font-family: "Roboto", sans-serif;
            line-height: 1.467;
            text-rendering: optimizelegibility !important;
            letter-spacing: 0.03em;
            font-size: 1.13em;
        }
    }
</style>
