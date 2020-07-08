<template>
    <div class="wrapper-div projects-wrapper">
        <NavBar />
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
                projectUrl="https://lu-ka.me"
            />
        </div>
        <button class="scroll-button" @click="scrollToTop()">&gt;</button>
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

                if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                    btn.style.opacity = 100;
                } else {
                    btn.style.opacity = 0;
                }
            }
        },
        created() {
            window.addEventListener("scroll", this.handleScroll);
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
