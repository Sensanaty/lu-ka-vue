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
    import ButtonLink from "@/components/ButtonLink";

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
