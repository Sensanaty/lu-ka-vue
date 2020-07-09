<template>
    <nav class="navlink-wrapper">
        <ButtonLink url="/about" text="ABOUT" />
        <ButtonLink url="/projects" text="PROJECTS" />
        <ButtonLink url="/" text="LUKA" />
        <ButtonLink url="/contact" text="CONTACT" />
        <ButtonLink url="/rambles" text="RAMBLES" />
    </nav>
</template>

<script>
    import ButtonLink from "@/components/ButtonLink";

    export default {
        name: "NavBar",
        components: {
            ButtonLink
        }
    };
</script>

<style scoped lang="scss">
    .navlink-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        margin-top: 30px;
        font-family: "Open Sans", sans-serif;

        .navbox {
            font-size: calc(26px + 1vmin);
            min-width: 17%;
            padding: 8px 10px;
            user-select: none;

            &:hover {
                border-radius: 6px;
            }

            &:nth-child(1) {
                &:hover {
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
            }

            &:nth-child(3) {
                letter-spacing: 8px;
            }

            &:nth-child(5) {
                &:hover {
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
            }
        }
    }

    @import "../styles/media-queries/navbox";
</style>
