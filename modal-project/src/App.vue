<template>
    <router-view/>
</template>
<style>
    * {
        text-decoration: none;
        font-family: 'Russo One', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: black;
    }

    main {
        padding: 0px 5px;
        width: 60%;
        min-width: 280px;
        margin: auto;
        margin-bottom: 50px;
    }

    h1 {
        margin: auto;
        text-align: center;
    }

    p {
        text-align: left;
    }

    @media screen and (max-width: 400px) {
        main {
            width: auto;
            font-size: small;
        }
    }
</style>
