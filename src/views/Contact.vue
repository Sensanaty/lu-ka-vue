<template>
    <div class="wrapper-div contact-wrapper">
        <div class="navlink-wrapper">
            <ButtonLink url="/about" text="ABOUT" />
            <ButtonLink url="/projects" text="PROJECTS" />
            <ButtonLink url="/" text="LUKA" />
            <ButtonLink url="/contact" text="CONTACT" />
            <ButtonLink url="/rambles" text="RAMBLES" />
        </div>
        <div class="social-wrapper">
            <div class="social-details">
                <a href="#" target="_blank" class="icon-link email-link">
                    <font-awesome-icon icon="envelope" />
                </a>
                <a href="https://github.com/Sensanaty" target="_blank" class="icon-link github">
                    <font-awesome-icon :icon="['fab', 'github']" />
                </a>
                <a href="https://linkedin.com/in/LukaSalevic" target="_blank" class="icon-link linkedin">
                    <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                </a>
            </div>
        </div>
</template>

<script>
    import Vue from "vue";
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
    import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    import ButtonLink from "@/components/ButtonLink";

    library.add(faEnvelope, faGithub, faLinkedinIn);
    Vue.component("font-awesome-icon", FontAwesomeIcon);

    export default {
        name: "Contact",
        metaInfo: {
            title: "L U K A | CONTACT",
            description: "The contact details of Luka Salevic. Feel free to send me an email about anything!"
        },
        components: {
            EmailIcon,
            GithubIcon,
            LinkedinIcon,
            PhoneIcon,
            ButtonLink
        }
    };
</script>
