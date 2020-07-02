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
    export default {
        name: "Projects",
        metaInfo: {
            title: "L U K A | Projects"
        },
        components: {
            ProjectCard,
            NavBar
        }
    };
</script>
