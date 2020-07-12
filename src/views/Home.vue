<template>
    <div class="wrapper-div index-wrapper">
        <div class="index-box box-top-left black-out">
            <div class="box-letter letter-l">L</div>
            <router-link class="box-link white-out" to="/about">ABOUT</router-link>
        </div>
        <div class="index-box box-top-right white-out">
            <div class="box-letter letter-u">U</div>
            <router-link class="box-link black-out" to="/projects">PROJECTS</router-link>
        </div>
        <div class="index-box box-bottom-left white-out">
            <div class="box-letter letter-k">K</div>
            <router-link class="box-link black-out" to="/contact">CONTACT</router-link>
        </div>
        <div class="index-box box-bottom-right black-out">
            <div class="box-letter letter-a">A</div>
            <router-link class="box-link white-out" to="/rambles">RAMBLES</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        metaInfo: {
            title: "L U K A",
            meta: [
                {
                    name: "description",
                    content:
                        "Luka is a Fullstack Web & Software Developer skilled in Ruby on Rails, ReactJS, VueJS, and many more technologies beyond those."
                }
            ]
        }
    };
</script>

<style lang="scss">
    a {
        text-decoration: none;
        padding: 0;
    }

    .index-wrapper {
        height: 100%;
        display: grid;
        grid-template: 1fr 1fr / 1fr 1fr;
        user-select: none;
    }

    .white-out {
        background: $secondary-color;
        color: $main-color;
    }

    .black-out {
        background: $main-color;
        color: $secondary-color;
    }

    .box-letter {
        font-size: 16vh;
        line-height: 1;
        align-self: end;
    }

    .box-link {
        transition: background ease-in-out 150ms;

        &.white-out {
            &:hover {
                background: darken($secondary-color, 15);
            }
            &:active {
                background: darken($secondary-color, 25);
            }
        }

        &.black-out {
            &:hover {
                background: lighten($main-color, 15);
            }
            &:active {
                background: lighten($main-color, 25);
            }
        }
    }

    .index-box {
        display: grid;

        .box-link {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    }

    .box-top-left {
        grid-template-columns: 3fr 1fr 110px;
        grid-template-rows: 1fr 1fr 110px;
        grid-template-areas:
            ".       .       .  "
            ".    letterL    .  "
            ".       .     linkL";

        .letter-l {
            grid-area: letterL;
            justify-self: flex-end;
        }

        .box-link {
            grid-area: linkL;
        }
    }

    .box-top-right {
        grid-template-columns: 110px 1fr 3fr;
        grid-template-rows: 1fr 1fr 110px;
        grid-template-areas:
            "  .      .    ."
            "  .   letterU ."
            "linkU    .    .";

        .letter-u {
            grid-area: letterU;
        }

        .box-link {
            grid-area: linkU;
        }
    }

    .box-bottom-left {
        grid-template-columns: 3fr 1fr 110px;
        grid-template-rows: 110px 1fr 1fr;
        grid-template-areas:
            ".      .     linkK"
            ".   letterK    .  "
            ".      .       .  ";

        .letter-k {
            grid-area: letterK;
            justify-self: flex-end;
        }
        .box-link {
            grid-area: linkK;
        }
    }

    .box-bottom-right {
        grid-template-columns: 110px 1fr 3fr;
        grid-template-rows: 110px 1fr 1fr;
        grid-template-areas:
            "linkA    .       ."
            "  .   letterA    ."
            "  .      .       .";

        .letter-a {
            grid-area: letterA;
        }

        .box-link {
            grid-area: linkA;
        }
    }

    @media screen and (max-width: 500px) {
        .box-letter {
            font-size: 14vh;
        }

        .box-top-left {
            grid-template-columns: 3fr 1fr 100px;
            grid-template-rows: 1fr 1fr 100px;

            .box-letter {
                align-self: center;
            }
        }

        .box-top-right {
            grid-template-columns: 100px 1fr 3fr;
            grid-template-rows: 1fr 1fr 100px;

            .box-letter {
                align-self: center;
            }
        }

        .box-bottom-left {
            grid-template-columns: 3fr 1fr 100px;
            grid-template-rows: 100px 1fr 1fr;
        }

        .box-bottom-right {
            grid-template-columns: 100px 1fr 3fr;
            grid-template-rows: 100px 1fr 1fr;
        }
    }

    @media screen and (max-height: 570px) {
        .box-letter {
            font-size: 5em;
        }
    }
</style>
