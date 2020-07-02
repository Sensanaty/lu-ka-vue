<template>
    <div class="wrapper-div projects-wrapper">
        <NavBar />
        <div class="project-card-wrapper">
            <ProjectCard
                text-title="Spotlight"
                text-subtitle="Keep track of your restaurant's online presence in one convenient spot"
                :text-description="spotlight"
            />
            <ProjectCard
                text-title="AirP2P"
                text-subtitle="Rent out those games gathering dust and earn a quick buck"
                :text-description="airp2p"
            />
            <ProjectCard
                text-title="Izzicup"
                text-subtitle="idk something about izzicup.com"
                :text-description="izzicup"
            />
            <ProjectCard
                text-title="Steven de Graaf"
                text-subtitle="steven de graaf is a website blah blah blah"
                :text-description="steven"
            />
            <ProjectCard
                text-title="How's the Cash?"
                text-subtitle="uhh hello dolla dolla bills yall GET THAT MONEY C.R.E.A.M."
                :text-description="cash"
            />
            <ProjectCard
                text-title="LU-KA.ME"
                text-subtitle="oh wow look it's my own website lol what a project"
                :text-description="luka"
            />
        </div>
    </div>
</template>

<script>
    import NavBar from "@/components/NavBar";
    import ProjectCard from "@/components/ProjectCard";
    import Spotlight from "@/assets/texts/spotlight.txt";
    import Airp2p from "@/assets/texts/airp2p.txt";
    import Izzicup from "@/assets/texts/izzicup.txt";
    import Steven from "@/assets/texts/steven.txt";
    import Cash from "@/assets/texts/cash.txt";
    import Luka from "@/assets/texts/luka.txt";

    export default {
        name: "Projects",
        metaInfo: {
            title: "L U K A | PROJECTS"
        },
        components: {
            ProjectCard,
            NavBar
        },
        data: function() {
            return {
                spotlight: Spotlight.split("\n\n"),
                airp2p: Airp2p.split("\n\n"),
                izzicup: Izzicup.split("\n\n"),
                steven: Steven.split("\n\n"),
                cash: Cash.split("\n\n"),
                luka: Luka.split("\n\n")
            };
        }
    };
</script>

<style lang="scss">
    ::-webkit-scrollbar {
        display: none;
    }

    .projects-wrapper {
        height: 100%;
        display: grid;
        grid-template: 0.2fr 3fr / 1fr;
    }

    .project-card-wrapper {
        margin-top: 12px;
        display: flex;
        align-items: center;
        flex-flow: column nowrap;
    }
</style>
