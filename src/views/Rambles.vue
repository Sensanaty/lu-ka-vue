<template>
    <div class="wrapper-div rambling-wrapper">
        <div class="ramble-cards-wrapper">
            <RambleCard
                v-for="route in rambleList"
                :key="route.title"
                :title="route.title"
                :subtitle="route.subtitle"
                :ramble-url="route.url"
            />
        </div>
    </div>
</template>

<script>
    import RambleCard from "@/components/RambleCard";
    import rambleList from "@/assets/rambles/rambleList.json";

    export default {
        metaInfo: {
            title: "L U K A | RAMBLES"
        },
        components: {
            RambleCard
        },
        data() {
            return {
                rambleList
            };
        }
    };
</script>

<style lang="scss">
    .rambling-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.5%;
    }

    .ramble-cards-wrapper {
        display: flex;
        flex-flow: column nowrap;
        width: 60%;
    }

    @media screen and (max-width: 870px) {
        .ramble-cards-wrapper {
            width: 70%;
        }
    }

    @media screen and (max-width: 600px) {
        .ramble-cards-wrapper {
            width: 80%;
        }
    }
</style>
