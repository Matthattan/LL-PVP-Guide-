<template>
    <ImageHeader :imageUrl="imageUrl" pageName="Credits"/>
    <SideBar/>
    <main>
        <h1>
            Welcome to the unofficial guide to Loomian Legacy PVP!
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.s
        </p>
        <div class="credits">
            <template v-for="(credit, index) in credits">
                <h2>{{ credit.name }}</h2>
                <!-- Credit without links -->
                <template v-for="(person, i) in credit.creditee" :key="i">
                    <a :href="person.url" target="_blank">{{ person.name || person }}</a>
                    <br>
                </template>
            </template>
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
                imageUrl: require("@/assets/images/headers/Route_8.webp"),
                credits: [{
                    name: "Wesbite",
                    creditee: ["stuntmanforlyf"]
                    },{
                    name: "Set Making",
                    creditee: ["UVUaura"]
                    },
                    {
                    name: "Teambuilding",
                    creditee: [
                        "StampGoat", 
                        "2Kanku", 
                        "Meta Analysis"
                    ]},
                    {
                    name: "Images",
                    creditee: [{
                        name: "Loomian Legacy Wiki",
                        url: "https://loomian-legacy.fandom.com"
                        }, 
                        {
                        name: "Loomian Legacy Wiki (SkeleNumber)",
                        url: "https://loomian-legacy.fandom.com/wiki/User_blog:SkeleNumber/Loomian_Menu_Sprites:_Continued"
                        },
                        {
                        name: "Loomian Legacy",
                        url: "https://www.roblox.com/games/306964494/Loomian-Legacy"
                        }]
                    },
                ]
            }
        },
        methods: {

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

    p {
        text-align: center;
    }
  
</style>
  