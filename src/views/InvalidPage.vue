<template>
    <div class="wrapper-div error-wrapper">
        <div class="dead">:(</div>
        <div class="text">
            <p>Seems that we got lost somewhere...</p>
            <p>Let's head back to <router-link to="/">safety!</router-link></p>
        </div>
    </div>
</template>

<style lang="scss">
    .error-wrapper {
        height: 100%;
        background: #2f2f2f
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23393939' stroke-width='11.6' stroke-opacity='0.61'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
        font-size: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden !important;
        flex-flow: column nowrap;
        text-align: center;

        .dead {
            transform: rotate(90deg);
            font-family: "Roboto", sans-serif;
            font-weight: bold;
            font-size: 4em;
            user-select: none;
        }

        a {
            color: $highlight-color;
            transition: color 150ms ease-in-out;

            &:hover {
                color: lighten($highlight-color, 10);
            }
        }
    }
</style>
