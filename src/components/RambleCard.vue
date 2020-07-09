<template>
    <router-link :to="rambleUrl" class="ramble-link">
        <div class="ramble-card">
            <h1 class="ramble-title">{{ title }}</h1>
            <h2 class="ramble-subtitle">{{ subtitle }}</h2>
            <span class="arrow" aria-hidden="true">&gt;</span>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "RambleCard",
        props: {
            title: String,
            subtitle: String,
            rambleUrl: String
        }
    };
</script>

<style lang="scss">
    .ramble-link {
        color: $secondary-color;
    }

    .ramble-card {
        background: lighten($main-color, 5);
        margin: 2% 1%;
        padding: 2%;
        box-shadow: -6px 6px 0 0 darken($main-color, 10);
        display: grid;
        grid-template: 0.5fr 0.6fr / 10fr 1fr;
        grid-template-areas:
            "title arrow"
            "subtitle arrow";
        transition: all 100ms ease-in-out;

        &:hover {
            background: lighten($main-color, 7);
        }

        &:active {
            background: lighten($main-color, 10);
        }

        .ramble-title {
            grid-area: title;
            padding-bottom: 3px;
            border-bottom: 6px solid $highlight-color;
            font-size: 2.7em;
        }

        .ramble-subtitle {
            grid-area: subtitle;
            margin: 0 35% 0 0;
            /*align-self: center;*/
        }

        .arrow {
            grid-area: arrow;
            font-size: 5em;
            align-self: center;
            justify-self: end;
            margin-bottom: 20px;
            color: $highlight-color;
            transition: all 125ms ease-in-out;
            user-select: none;
        }

        &:hover > .arrow {
            transform: translate(5px);
        }
    }

    .ramble-title,
    .ramble-subtitle {
        font-family: "Roboto", sans-serif;
    }
</style>
