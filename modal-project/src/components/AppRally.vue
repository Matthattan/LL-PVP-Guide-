<template>
    <ImageHeader :imageUrl="imageUrl" pageName="Rally Ranch"/>
    <SideBar/>
    <!-- Your main content here -->
    <main>
        <ContentList id="Questions" :content="contentData"/>
        <h1 id="What">What is Rally Ranch?</h1>
        <p> Rally Ranch is a sub-location on Route 6 where Players can give Loomians to an NPC in order to produce more Loomians. 
            Rally Ranch can take up to 2 Loomians (A Rally Leader and A Rally Assistant) and has room for 3 Loomians to be rallied at any one time.
        </p>
        <h1 id="Why">Why is Rally Ranch used?</h1>
        <p> Firstly, Rallied Loomians have access to Totemised Personalities which means 3 personalities instead of the regular 2 personalities (or even one). 
            Having access to more personalities helps increase stats, making Loomians increasingly viable.
            Another reason to use Rally Ranch is greater control over a Loomian’s UPs. 
            Whether it be maximising all stats or wanting to decrease a certain stat, Rally Ranch offers items to pass down Unique Points.
        </p>
        <RallyItemsTabs/>
        <RallyMovesTabs/>
    </main>
</template>
<script>
import SideBar from './SideBar.vue';
import ImageHeader from './Header.vue';
import ContentList from './ContentList.vue';
import RallyItemsTabs from './RallyItemsTabs.vue';
import RallyMovesTabs from './RallyMovesTabs.vue';

export default {
    name: 'App', 
    components: {
        ImageHeader,
        SideBar,
        ContentList,
        RallyItemsTabs,
        RallyMovesTabs,
    },
    data() {
        return {
        imageUrl: require("@/assets/images/headers/Route_6.webp"),
        contentData: [
                {
                    id: 'What',
                    title: 'What is Rally Ranch?',
                },
                {
                    id: 'Why',
                    title: 'Why is Rally Ranch used?',
                },
                {
                    id: 'RallyItems',
                    title: 'Rally Items',
                    subitems: [
                        {id: `RallyItems`, title: `Rally Feed`},
                        {id: `RallyItems`, title: `Rally Toys`},
                        {id: `RallyItems`, title: `Rally Totems`},
                    ],
                },
                {
                    id: 'RallyMoves',
                    title: 'Rally Moves',
                    subitems: [
                        {id: `RallyMoves`, title: `Normal Rally`},
                        {id: `RallyMoves`, title: `Reverse Rally`},
                        {id: `RallyMoves`, title: `Indirect Rally`},
                    ]
                },
                // Add more sections as needed
        ]
        }
    }
}
</script>