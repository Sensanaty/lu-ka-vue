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
        <div class="form-wrapper">
            <p>Had a project in mind that you'd like to talk about?</p>
            <p>Send me a message at <span>salevic@lu-ka.me</span> or fill in the form below.</p>
            <form action="post">
                <div class="form-content-wrapper name-wrapper">
                    <label for="name-form">Name</label>
                    <input type="text" id="name-form" placeholder="John Doe" />
                </div>
                <div class="form-content-wrapper email-wrapper">
                    <label for="email-form">Email</label>
                    <input type="email" id="email-form" placeholder="John@Doe.com (required)" required />
                </div>
                <div class="form-content-wrapper number-wrapper">
                    <label for="number-form">Number</label>
                    <input type="tel" id="number-form" placeholder="+1 234 567 890" />
                </div>
                <div class="form-content-wrapper message-wrapper">
                    <label for="message-form">What do you want to get in touch about?</label>
                    <textarea
                        id="message-form"
                        placeholder="I want to hire you and give you a lot of money!"
                        required
                    ></textarea>
                </div>
                <button type="submit">SEND</button>
            </form>
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
            title: "L U K A | CONTACT"
        },
        components: {
            ButtonLink
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

    .navlink-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        margin-top: 30px;
        font-family: "Open Sans", sans-serif;

        .navbox {
            font-size: calc(26px + 1vmin);
            min-width: 17%;
            padding: 8px 10px;

            &:hover {
                border-radius: 6px;
            }

            &:nth-child(1) {
                &:hover {
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
            }

            &:nth-child(3) {
                letter-spacing: 8px;
            }

            &:nth-child(5) {
                &:hover {
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
            }
        }
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

    form {
        height: 100%;
        display: grid;
        grid-template: 1fr 3fr 1fr / 1fr 3fr 1fr;
        grid-template-areas:
            "name email number"
            ". message ."
            ". button .";

        .form-content-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column nowrap;
        }

        .name-wrapper {
            grid-area: name;
            justify-self: flex-end;
        }

        .email-wrapper {
            grid-area: email;
        }

        .number-wrapper {
            grid-area: number;
            justify-self: flex-start;
        }

        .message-wrapper {
            grid-area: message;
        }

        button {
            font-family: "Roboto", sans-serif;
            font-weight: bold;
            letter-spacing: 2px;
            font-size: calc(17px + 1vmin);
            line-height: 1;
            grid-area: button;
            justify-self: center;
            align-self: center;
            padding: 9px 15px;
            border: none;
            color: $highlight-color;
            background: lighten($main-color, 5);
            cursor: pointer;
            transition: all ease-in-out 100ms;

            &:hover {
                background: lighten($main-color, 10);
            }
        }

        label {
            margin: 6px 0;
        }

        ::placeholder {
            color: darken(white, 30);
        }

        input,
        textarea {
            background: lighten($main-color, 10);
            border: none;
            padding: 10px;
            color: white;
            outline: 2px darken($main-color, 10) solid;

            &:focus {
                outline: 2px $highlight-color solid;
            }
        }

        input {
            min-width: 25%;
            min-height: 27%;
        }

        textarea {
            min-width: 75%;
            min-height: 75%;
            resize: none;
        }

        sup {
            font-size: 15px;
        }
    }

    @import "../styles/media-queries/contact";
</style>
