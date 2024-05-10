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
        width: 80%;
        min-width: 280px;
        max-width: auto;
        margin: auto;
        margin-bottom: 50px;
        overflow-x: scroll;
    }

    h1 {
        margin: auto;
        text-align: center;
    }

    p {
        text-align: left;
    }

    @media screen and (max-width: 720px) {
        main {
            font-size: 14px;
        }
    }

</style>
