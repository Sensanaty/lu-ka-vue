<template>
    <div class="project-card">
        <div class="header-details">
            <h1 class="project-title">{{ textTitle }}</h1>
            <div class="stacks">
                <span class="project-stack" :stack="Object" :class="stack.class">
                    {{ stack.name }}
                </span>
                <span v-if="multiple" class="project-stack" :stack-extra="Object" :class="stackExtra.class">
                    {{ stackExtra.name }}
                </span>
            </div>
        </div>
        <h2 class="project-subtitle">{{ textSubtitle }}</h2>
        <p class="project-description" v-for="line in textDescription" :key="line">{{ line }}</p>
        <a target="_blank" class="project-url" v-if="projectUrl" :href="projectUrl">
            See it in action
        </a>
        <router-link class="project-url" v-if="rambleUrl" :to="rambleUrl">
            See the Ramble
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "ProjectCard",
        props: {
            textTitle: String,
            textSubtitle: String,
            textDescription: Array,
            stack: Object,
            stackExtra: Object,
            projectUrl: String,
            rambleUrl: String,
            multiple: {
                type: Boolean,
                default: false
            }
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
        padding: 2% 2% 15px 2%;
        box-shadow: -6px 6px 0px 0px darken($main-color, 5);

        .header-details {
            display: flex;
            align-items: center;
        }

        h1 {
            font-family: "Roboto", sans-serif;
            font-weight: bold;
            font-size: 2.7em;
            margin: 0;
        }

        h2 {
            font-family: "Roboto", sans-serif;

            &:after {
                color: $secondary-color;
                content: " ";
                display: block;
                border: 3px solid $highlight-color;
                margin: 0 -2%;
            }
        }

        .stacks {
            margin-left: auto;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        .project-stack {
            font-size: 1.2em;
            font-family: "Roboto", sans-serif;
            font-weight: bold;
            padding: 3.5px 10px;
            margin-left: 15px;
            color: black;
            pointer-events: none;
            user-select: none;

            &.react {
                background: #5bd9ff;
            }

            &.vue {
                background: #45b882;
            }

            &.rails {
                background: #cc0001;
                color: white;
            }

            &.javascript {
                background: #f7df1e;
            }

            &.netlify {
                background: #4a9dbe;
            }

            &.heroku {
                background: #6762a6;
            }
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

        .project-url {
            color: $highlight-color;
            font-size: 1.5em;
            transition: all 150ms ease-in-out;
            margin-right: auto;

            &:hover {
                color: darken($highlight-color, 4);
            }

            &:after {
                display: inline-flex;
                content: ">";
                font-size: 1.3em;
                justify-content: center;
                transition: all 200ms ease-in-out;
                opacity: 0;
            }

            &:hover::after {
                transform: translate(10px);
                opacity: 1;
            }
        }
    }

    @media screen and (max-width: 870px) {
        .project-card {
            width: 65%;
            padding: 3% 5% 20px 5%;

            h1 {
                font-size: 2em;
            }

            h2 {
                font-size: 1.3em;
            }

            p {
                font-size: 1.02em;
            }
        }
    }

    @media screen and (max-width: 610px) {
        .project-card {
            width: 70%;
            padding: 3% 7% 20px 7%;
            margin-top: 4%;

            .header-details {
                margin-top: 30px;
            }
        }
    }

    @media screen and (max-width: 496px) {
        .project-card {
            h1 {
                font-size: 1.6em;
            }

            h2 {
                font-size: 1em;
                margin-bottom: 0;

                &:after {
                    margin: 10px -2%;
                }
            }

            p {
                margin: 0;
            }

            .project-stack {
                font-size: 0.9em;

                &.netlify {
                    display: none;
                }
            }
        }
    }

    @media screen and (max-width: 360px) {
        .project-card {
            .stacks {
                margin: 0;
            }

            .header-details {
                justify-content: center;
            }

            h2 {
                text-align: center;
            }

            p {
                font-size: 0.9em;
                margin-top: 5%;
            }
        }

        .project-stack {
            display: none;
        }

        .project-url {
            margin-top: 20px;
        }
    }
</style>
