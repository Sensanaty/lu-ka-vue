<template>
    <div id="app">
        <NavBar v-if="renderNav" />
        <router-view />
        <button class="scroll-button" @click="scrollToTop()">&gt;</button>
    </div>
</template>

<script>
    import NavBar from "@/components/NavBar";

    export default {
        name: "App",
        components: {
            NavBar
        },
        computed: {
            renderNav() {
                return !(this.$route.name === "Home" || this.$route.name === "About" || this.$route.name === "Contact");
            },

            renderMarkdown() {
                return Rambles.includes(this.$route.name);
            }
        },
        methods: {
            scrollToTop() {
                window.scrollTo(0, 0);
            },

            /**
             * Set the opacity of the button at the bottom of the page to 100 when the user scrolls down 500px
             */
            handleScroll() {
                const btn = document.querySelector(".scroll-button");

                if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                    btn.style.opacity = 100;
                } else {
                    btn.style.opacity = 0;
                }
            },
            }
        created() {
            window.addEventListener("scroll", this.handleScroll);
        },
        }
    };
</script>

<style lang="scss">
    button {
        font-size: 40px !important;
        opacity: 0;
        position: fixed;
        bottom: 20px;
        right: 60px;
        z-index: 99;
        border: none;
        outline: none;
        background: lighten($main-color, 10);
        padding: 15px;
        color: $highlight-color;
        cursor: pointer;
        transition: all 150ms ease-in-out;
        transform: rotate(270deg);

        &:hover {
            background: lighten($main-color, 15);
        }
    }

    @media screen and (max-width: 496px) {
        button {
            font-size: 30px !important;
        }
    }
</style>
