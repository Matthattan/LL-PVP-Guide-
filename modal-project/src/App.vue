<template>
    <router-view/>
</template>
<style>
    /*For Elements that appear in multiple components that need to look the same*/

    * {
        text-decoration: none;
        font-family: 'Russo One', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: black;
    }

    body {
        background-color: rgb(68, 127, 196);
        margin: 0;
        padding: 0;
    }

    main {
        padding: 0px 5px;
        width: 60%;
        min-width: 280px;
        max-width: auto;
        margin: auto;
        margin-bottom: 50px;
        overflow-x: scroll;
    }

    h1 {
        margin: auto;
        text-align: center;
        max-width: 1200px;
    }

    p {
        text-align: left;
        max-width: 1200px;
    }

    /* For all those boxes with buttons*/
    .OuterBox {
        margin: auto;
        margin-top: 20px;
        background-color: #0057b4;
        border-radius: 25px;
        max-width: 1080px;
    }

    .ButtonArray {
        padding: 10px 10px;
        background-color: azure;
        border-radius: 25px 25px 0px 0px;
    }

    .ButtonArray button {
        margin: 5px;
    }

    .DescriptionBox {
        display: none;
        padding: 10px;
        overflow-x: auto;
    }

    .DescriptionBox table {
        margin: auto;
        min-width: 360px;
        width: auto;
        border: 1px solid #000000;
    }

    .DescriptionBox table tr td, .DescriptionBox table tr th {
        border: 1px solid #000000;
        text-align: left;
    }

    .Sprite {
        display: grid;
        margin: auto;
        width: auto;
        border-radius: 25px;
    }

    /* Toggle Button */
    .ToggleButton {
        width: 100%;
        background-color: #004691;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: auto;
        margin-bottom: 10px;
        font-size: 18px;
        text-align: left;
    }

    @media screen and (max-width: 720px) {
        main {
            font-size: 14px;
        }
    }

</style>
