<template>
    <div id="app">
        <NavBar v-if="renderNav" />
        <router-view />
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
            }
        }
    };
</script>

<style lang="scss"></style>
