<template>
    <ImageHeader :imageUrl="imageUrl" pageName="Credits"/>
    <SideBar/>
    <main>
        <h1>
            Welcome to the unofficial guide to Loomian Legacy PVP!
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.s</p>
        <div class="credits">
                <b>Website Maker</b>
                <br>
                stuntmanforlyf
                <br>
                <b>Set Making Page</b>
                <br>
                UVUaura
                <br>
                <b>Teambuilding Page</b>
                <br>
                StampGoat
                <br>
                2Kanku
                <br>
                Meta Analysis
                <br>
                <b>Images</b>
                <br>
                <a href="https://twitter.com/loomianpictures">Loomian Pictures</a>
                <br>
                <a href="https://loomian-legacy.fandom.com/wiki/User_blog:SkeleNumber/Loomian_Menu_Sprites:_Continued">Loomian Sprites from Loomian Legacy Wikia</a>
                <br>
                <a href="https://www.roblox.com/games/306964494/Loomian-Legacy">Loomian Legacy</a>
        </div>
    </main>
</template>  
<script>
    import SideBar from './SideBar.vue';
    import ImageHeader from './Header.vue';
  
    export default {
        name: 'App', 
        components: {
        ImageHeader,
        SideBar
        },
        data() {
            return {
                imageUrl: require("@/assets/images/headers/Sepharite_City.png"),
            }
        }
    }
    </script>
    <style scoped>

    .credits {
        text-align: center;
        margin: auto;
        width: 780px;
        height: auto;
        color: black;
    }
  
</style>
  