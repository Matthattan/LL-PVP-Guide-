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
        font-size: 20px;
        width: 60%;
        margin: auto;
        margin-bottom: 200px;
    }

    h1 {
        margin: auto;
        text-align: center;
    }

    @media screen and (max-width: 300px){
        h1 {
            font-size: 18px;
        }
    }
</style>
