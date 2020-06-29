<template>
    <div class="wrapper-div contact-wrapper">
        <div class="navlink-wrapper">
            <router-link class="link-box" to="/about">ABOUT</router-link>
            <router-link class="link-box" to="/projects">PROJECTS</router-link>
            <router-link class="link-box" to="/">LUKA</router-link>
            <router-link class="link-box" to="/contact">CONTACT</router-link>
            <router-link class="link-box" to="/rambles">RAMBLES</router-link>
        </div>
        <div class="social-wrapper">
            <div class="icon-wrapper"><EmailIcon class="email icon" height="100%" width="100%" /></div>
            <div class="icon-wrapper"><GithubIcon class="github icon" height="100%" width="100%" /></div>
            <div class="icon-wrapper"><LinkedinIcon class="linkedin icon" height="100%" width="100%" /></div>
            <div class="icon-wrapper"><PhoneIcon class="phone icon" height="100%" width="100%" /></div>
        </div>
        <div class="form-wrapper"></div>
    </div>
</template>

<script>
    import EmailIcon from "@/assets/email.svg";
    import GithubIcon from "@/assets/github.svg";
    import LinkedinIcon from "@/assets/linkedin.svg";
    import PhoneIcon from "@/assets/phone.svg";

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
            PhoneIcon
        }
    };
</script>
