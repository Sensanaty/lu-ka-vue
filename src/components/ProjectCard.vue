<template>
    <div class="project-card">
        <div style="display: flex; align-items: center;">
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
        <a
            target="_blank"
            class="project-url"
            v-if="projectUrl !== 'https://lu-ka.me' || !projectUrl"
            :href="projectUrl"
        >
            See it in action
        </a>
        <a target="_blank" class="project-url" v-if="rambleUrl" :href="rambleUrl">
            See the Ramble
        </a>
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
            },
            markdownExists: {
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

        h2:after {
            color: $secondary-color;
            content: " ";
            display: block;
            border: 3px solid $highlight-color;
            margin: 0 -2%;
        }

        h1 {
            font-family: "Roboto", sans-serif;
            font-weight: bold;
            font-size: 2.7em;
            margin: 0;
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
                opacity: 100%;
            }
        }
    }
</style>
