<template>
    <ImageHeader :imageUrl="imageUrl" pageName="Common Questions"/>
    <SideBar/>
    <!-- Your main content here -->
    <main>
        <ContentList id="Questions" :content="contentData"/>
        <h1>Common Questions</h1>
        <p> 
            If it's your first time stepping into Loomian Legacy PVP, It's understandable if you have an overwhelming amount of questions that are daunting to ask other people. 
            This page tries to cover many basic questions to ease your concerns. 
            <br>
            <br>
            If any question you have is not listed here, feel free to ask members in the community; they're more than happy to ask, so long as you're respectful. You can also suggest the question be answered here!
        </p>
        <Questions/>
        <h1 id="Terminology">Terminology</h1>
        <p>
            When speaking with other players in the PVP Community, you may hear terms that sound familiar or are completely foreign. This list attempts to explain different terms you may hear and what they mean.
        </p>
        <Terminology/>
    </main>
</template>
<script>
import SideBar from './SideBar.vue';
import ImageHeader from './Header.vue';
import Questions from './Questions.vue';
import Terminology from './Terminology.vue';
import ContentList from './ContentList.vue';

export default {
name: 'App', 
components: {
    ImageHeader,
    SideBar,
    ContentList,
    Questions,
    Terminology
},
data() {
    return {
    imageUrl: require("@/assets/images/headers/InsideColosseum.jpg"),
    contentData: [
            {
                id: 'Questions',
                title: 'Questions',
            },
            {
                id: 'Terminology',
                title: 'Terminology',
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
        margin-top: 600px;
        margin-bottom: 200px;
    }
</style>
  