<template>
    <ImageHeader :imageUrl="imageUrl" pageName="Rally Ranch"/>
    <SideBar/>
    <!-- Your main content here -->
    <main>
        <ContentList id="Questions" :content="contentData"/>
    </main>
</template>
<script>
import SideBar from './SideBar.vue';
import ImageHeader from './Header.vue';
import ContentList from './ContentList.vue';

export default {
name: 'App', 
components: {
    ImageHeader,
    SideBar,
    ContentList,
},
data() {
    return {
    imageUrl: require("@/assets/images/headers/Route_6.webp"),
    contentData: [
            {
                id: 'Questions',
                title: 'Questions',
            },
            {
                id: 'Terminology',
                title: 'Terminology',
            },
            {
                id: 'UsageTiers',
                title: 'Usage Tiers',
            },
            // Add more sections as needed
        ]
    }
}
}
</script>
<style scoped>
    * {
        font-family: 'Russo One', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: black;
    }

    h1 {
        text-align: center;
    }

    main {
        font-size: 20px;
        width: 60%;
        margin: auto;
        margin-bottom: 200px;
    }
</style>
  