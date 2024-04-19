<template>
    <ImageHeader :imageUrl="imageUrl" pageName="Common Questions"/>
    <SideBar/>
    <!-- Your main content here -->
    <main>
        <ContentList id="Questions" :content="contentData"/>
        <p> 
            If it's your first time stepping into Loomian Legacy PVP, It's understandable if you have an overwhelming amount of questions that are daunting to ask other people. 
            This page tries to cover many basic questions to ease your concerns. 
            <br>
            <br>
            If any question you have is not listed here, feel free to ask members in the community; they're more than happy to ask, so long as you're respectful. You can also suggest the question be answered here!
        </p>
        <Questions/>
        <Terminology/>
        <UsageTerms/>
    </main>
</template>
<script>
import SideBar from './SideBar.vue';
import ImageHeader from './Header.vue';
import Questions from './Questions.vue';
import Terminology from './Terminology.vue';
import ContentList from './ContentList.vue';
import UsageTerms from './UsageTerms.vue';

export default {
name: 'App', 
components: {
    ImageHeader,
    SideBar,
    ContentList,
    Questions,
    Terminology,
    UsageTerms,
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
            {
                id: 'UsageTiers',
                title: 'Usage Tiers',
            },
        ]
    }
}
}
</script>