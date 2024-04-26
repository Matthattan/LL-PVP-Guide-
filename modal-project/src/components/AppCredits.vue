<template>
    <ImageHeader :imageUrl="imageUrl" pageName="Credits"/>
    <SideBar/>
    <main>
        <h1>
            Contributions are always welcome!
        </h1>
        <p>If you wish to submit any information to this guide in any way, such as a document or writing a section, you are welcome to DM me for it to be featured. 
            You'll also be credited for your contribution.
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
    }
    </script>
<style scoped>
    .credits {
        text-align: center;
    }

    p {
        text-align: center;
    }
</style>
  