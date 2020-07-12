<template>
    <form name="contact-form" method="post" data-netlify="true" data-netlify-bot-field="bot-field">
        <input type="hidden" name="form-name" value="contact-form" />
        <div class="form-content-wrapper name-wrapper">
            <label for="name-form">Name</label>
            <input type="text" name="name" id="name-form" v-model="form.name" placeholder="John Doe" />
        </div>
        <div class="form-content-wrapper email-wrapper">
            <label for="email-form">Email</label>
            <input
                type="email"
                name="email"
                id="email-form"
                v-model="form.email"
                placeholder="John@Doe.com (required)"
                required
            />
        </div>
        <div class="form-content-wrapper number-wrapper">
            <label for="number-form">Number</label>
            <input type="tel" name="number" id="number-form" v-model="form.number" placeholder="+1 234 567 890" />
        </div>
        <div class="form-content-wrapper message-wrapper">
            <label for="message-form">What do you want to get in touch about?</label>
            <textarea
                v-model="form.message"
                name="message"
                id="message-form"
                placeholder="I want to hire you and give you a lot of money!"
                required
            ></textarea>
        </div>
        <button type="submit" @click.prevent="handleSubmit">SEND</button>
    </form>
</template>

<script>
    export default {
        name: "NetlifyForm",
        data() {
            return {
                form: {
                    name: "",
                    email: "",
                    number: "",
                    message: ""
                }
            };
        },
        methods: {
            encode(data) {
                return Object.keys(data)
                    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
                    .join("&");
            },
            handleSubmit() {
                const formWrapper = document.querySelector("form");

                formWrapper.innerHTML = "Sending";
                formWrapper.classList.add("loading");

                fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: this.encode({ "form-name": "contact-form", ...this.form })
                })
                    .then(() => {
                        formWrapper.classList.remove("loading");
                        formWrapper.classList.add("loaded");
                        formWrapper.innerHTML = `Thanks! I'll get in touch with you soon at ${this.form.email}!`;
                    })
                    .catch(error => alert(error));
            }
        }
    };
</script>

<style lang="scss">
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
            box-shadow: -5px 5px 0 0 darken($main-color, 10);
            outline: 0 $highlight-color solid;
            transition: all ease-in-out 75ms;

            &:focus {
                outline: 2px $highlight-color solid;
                box-shadow: none;
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

    .loading,
    .loaded {
        display: flex;
        justify-content: center;
        align-items: center;
        background: lighten($main-color, 5);
        margin: auto auto;
        flex: 0 1 auto;
        height: 10%;
        padding: 2%;
    }

    .loading:after {
        content: " .";
        animation: dots 1s steps(5, end) infinite;
    }

    @keyframes dots {
        0%,
        20% {
            color: rgba(0, 0, 0, 0);
            text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
        }
        40% {
            color: white;
            text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
        }
        60% {
            text-shadow: 0.25em 0 0 white, 0.5em 0 0 rgba(0, 0, 0, 0);
        }
        80%,
        100% {
            text-shadow: 0.25em 0 0 white, 0.5em 0 0 white;
        }
    }
</style>
