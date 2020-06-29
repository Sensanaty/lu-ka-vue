<template>
    <div class="wrapper-div contact-wrapper">
        <img alt="Vue logo" src="../assets/logo.png" />
        <div>Contact</div>
    </div>
        <div class="social-wrapper">
            <div class="icon-wrapper"><EmailIcon class="email icon" height="100%" width="100%" /></div>
            <div class="icon-wrapper"><GithubIcon class="github icon" height="100%" width="100%" /></div>
            <div class="icon-wrapper"><LinkedinIcon class="linkedin icon" height="100%" width="100%" /></div>
            <div class="icon-wrapper"><PhoneIcon class="phone icon" height="100%" width="100%" /></div>
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
