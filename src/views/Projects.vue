<template>
    <div class="wrapper-div projects-wrapper">
        <div class="project-card-wrapper">
            <ProjectCard
                text-title="Spotlight"
                text-subtitle="Keep track of your restaurant's online presence in one convenient spot"
                :text-description="spotlight"
                :stack="{
                    name: 'Rails',
                    class: 'rails'
                }"
                :multiple="true"
                :stack-extra="{
                    name: 'Heroku',
                    class: 'heroku'
                }"
                projectUrl="https://sp0tlight.herokuapp.com"
                rambleUrl="/spotlight"
            />
            <ProjectCard
                text-title="AirP2P"
                text-subtitle="Rent out those games gathering dust and earn a quick buck"
                :text-description="airp2p"
                :stack="{
                    name: 'Vue',
                    class: 'vue'
                }"
                projectUrl="https://airp2p.herokuapp.com"
                rambleUrl="/airp2p"
            />
            <ProjectCard
                text-title="Steven de Graaf"
                text-subtitle="steven de graaf is a website blah blah blah"
                :text-description="steven"
                :stack="{
                    name: 'Javascript',
                    class: 'javascript'
                }"
                :multiple="true"
                :stack-extra="{
                    name: 'Netlify',
                    class: 'netlify'
                }"
                projectUrl="https://stevendegraaf.com"
                rambleUrl="/steven"
            />
            <ProjectCard
                text-title="Izzicup"
                text-subtitle="idk something about izzicup.com"
                :text-description="izzicup"
                :stack="{
                    name: 'React',
                    class: 'react'
                }"
                :multiple="true"
                :stack-extra="{
                    name: 'Rails',
                    class: 'rails'
                }"
                projectUrl="https://sp0tlight.herokuapp.com"
            />
            <ProjectCard
                text-title="How's the Cash?"
                text-subtitle="uhh hello dolla dolla bills yall GET THAT MONEY C.R.E.A.M."
                :text-description="cash"
                :stack="{
                    name: 'React',
                    class: 'react'
                }"
                projectUrl="https://sp0tlight.herokuapp.com"
            />
            <ProjectCard
                text-title="LU-KA.ME"
                text-subtitle="oh wow look it's my own website lol what a project"
                :text-description="luka"
                :stack="{
                    name: 'React',
                    class: 'react'
                }"
                rambleUrl="/luka"
            />
        </div>
    </div>
</template>

<script>
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
            title: "L U K A | PROJECTS",
            meta: [
                {
                    name: "description",
                    content:
                        "LUKA SALEVIĆ - A fullstack web developer skilled in Ruby on Rails, ReactJS, VueJS, and much more"
                }
            ]
        },
        components: {
            ProjectCard
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
