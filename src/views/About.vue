<template>
    <div class="wrapper-div about-wrapper">
        <div class="greeting-div">
            <h1 class="greeting-header">Hi, I'm <router-link to="/" class="name navbox">LUKA</router-link></h1>
            <h2 class="greeting-subheader">A Fullstack Web Developer</h2>
        </div>

        <div class="navigation-div responsive-small">
            <p class="navigation-text">
                Check out my
                <router-link to="/projects" class="inline navbox">PROJECTS</router-link>
            </p>
            <p class="navigation-text">
                Get in
                <router-link to="/contact" class="inline navbox">CONTACT</router-link>
            </p>
            <p class="navigation-text">
                Check out my
                <router-link to="/rambles" class="inline navbox">RAMBLES</router-link>
            </p>
        </div>

        <div class="navigation-div responsive-large">
            <p class="navigation-text">
                Want to see what I've been working on lately? Check out my
                <router-link to="/projects" class="inline navbox">PROJECTS</router-link>
            </p>
            <p class="navigation-text">
                Want to get in touch with me? Get in
                <router-link to="/contact" class="inline navbox">CONTACT</router-link>
            </p>
            <p class="navigation-text">
                I like to write down my thoughts as I make things. Check out my
                <router-link to="/rambles" class="inline navbox">RAMBLES</router-link>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About",
        metaInfo: {
            title: "L U K A | ABOUT"
        }
    };
</script>

<style lang="scss">
    .about-wrapper {
        height: 100%;
        font-family: "Roboto", sans-serif;
        display: grid;
        grid-template: 1fr 1fr / 1fr 1fr;
        grid-template-areas:
            "greeting ."
            "navigation navigation";
    }

    .greeting-div {
        grid-area: greeting;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
    }

    .navigation-div {
        grid-area: navigation;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-end;
        align-items: flex-end;

        &.responsive-small {
            display: none;
        }
    }

    .greeting-header {
        font-size: calc(55px + 3vmin);
        margin: 0.6em 0 0 0;
        font-weight: 600;
    }

    .greeting-subheader {
        font-size: calc(35px + 3vmin);
        margin: 0.4em 0 0 0;
        font-weight: 600;
    }

    .navbox {
        color: $highlight-color;
        background: lighten($main-color, 5);
        margin-left: 5px;
        padding: 0 15px;
        transition: all ease-in-out 100ms;
        transition-property: border-radius, background;

        &:hover {
            border-radius: 7px;
            background: lighten($main-color, 10);
        }

        &:active {
            background: lighten($main-color, 20);
        }

        &.name {
            font-size: calc(60px + 2vmin);
            letter-spacing: 10px;
        }

        &.inline {
            font-weight: 600;
            padding: 3px 15px;
        }
    }

    .navigation-text {
        font-family: "Open Sans", sans-serif;
        font-size: calc(21px + 1vmin);
        margin: 15px 3em;

        &:nth-child(3) {
            margin: 15px 3em 1.5em 0;
        }
    }

    @import "../styles/media-queries/about";
</style>
