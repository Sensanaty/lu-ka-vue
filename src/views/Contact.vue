<template>
    <div class="wrapper-div contact-wrapper">
        <NavBar />
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
        <div class="form-wrapper">
            <p>Had a project in mind that you'd like to talk about?</p>
            <p>Send me a message at <span>salevic@lu-ka.me</span> or fill in the form below.</p>
            <NetlifyForm />
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
    import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    import NavBar from "@/components/NavBar";
    import NetlifyForm from "@/components/NetlifyForm";

    library.add(faEnvelope, faGithub, faLinkedinIn);
    Vue.component("font-awesome-icon", FontAwesomeIcon);

    export default {
        name: "Contact",
        metaInfo: {
            title: "L U K A | CONTACT",
            meta: [
                {
                    name: "description",
                    content: "Get in touch with Luka about any potential projects you might want me to work on"
                }
            ]
        },
        components: {
            NavBar,
            NetlifyForm
        },
        mounted() {
            this.replaceEmail();
        },
        methods: {
            replaceEmail: function() {
                const emailLink = document.querySelector(".email-link");
                emailLink.href = "mail" + "to:" + "sale" + "vic" + "@" + "lu-ka" + ".me";
            }
        }
    };
</script>

<style lang="scss">
    .contact-wrapper {
        height: 100%;
        display: grid;
        grid-template: 0.2fr 0.7fr 3fr / 1fr;
    }

    .social-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .social-details {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: lighten($main-color, 5);
        padding: 26px 0;
    }

    .icon-link {
        color: $highlight-color;
        font-size: 40px;

        transition: all ease-in-out 150ms;

        &:hover {
            color: darken($highlight-color, 10);
        }

        &:active {
            color: darken($highlight-color, 15);
            transform: translateY(1px);
        }
    }

    .form-wrapper {
        height: 100%;
        display: flex;
        flex-flow: column nowrap;

        p {
            font-size: 18px;
            line-height: 1;
            margin: 9px 0;
            align-self: center;
        }

        span {
            color: $highlight-color;
            font-size: 25px;

            &:hover {
                color: #faa613;
            }
        }
    }

    @import "../styles/media-queries/contact";
</style>
