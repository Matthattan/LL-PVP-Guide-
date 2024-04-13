<template>
    <ImageHeader :imageUrl="imageUrl" pageName="Rally Ranch"/>
    <SideBar/>
    <!-- Your main content here -->
    <main>
        <ContentList id="Questions" :content="contentData"/>
        <h1 id="What">What is Rally Ranch?</h1>
        <p>
            Rally Ranch is a sub-location on Route 6 where Players can give Loomians to an NPC in order to produce more Loomians. 
            Rally Ranch can take up to 2 Loomians (A Rally Leader and A Rally Assistant) and has room for 3 Loomians to be rallied at any one time.
        </p>
        <h1 id="Why">Why is Rally Ranch used?</h1>
        <p>
            Firstly, Rallied Loomians have access to Totemised Personalities which means 3 personalities instead of the regular 2 personalities (or even one). 
            Having access to more personalities helps increase stats, making Loomians increasingly viable.
            Another reason to use Rally Ranch is greater control over a Loomian’s UPs. 
            Whether it be maximising all stats or wanting to decrease a certain stat, Rally Ranch offers items to pass down Unique Points.
        </p>
        <h1 id="RallyItems">Rally Items</h1>
        <p>
            As hinted at previously, there are several items used to change what stats a Rallied Loomian appears with. 
            There are 3 categories of items, each with different uses in different contexts:
        </p>
        <h1 id="RallyMoves">Rally Moves</h1>
        <p>
            Many Loomians have access to additional moves through rallying (known as Rally Moves) which may be recommended to run. 
            Giving these moves to your Loomians can give a big advantage in battle so it’s worth learning the different techniques of teaching Rally Moves to your Loomians. 
            There are 3 main ways to use Rally Ranch to put a move on a Loomian: 
        </p>
        <Tabs :items="tabsData"/>
    </main>
</template>
<script>
import SideBar from './SideBar.vue';
import ImageHeader from './Header.vue';
import ContentList from './ContentList.vue';
import Tabs from './Tabs.vue';

export default {
name: 'App', 
components: {
    ImageHeader,
    SideBar,
    ContentList,
    Tabs,
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
    ],
    tabsData: [
    {
        name: 'Normal Rally',
        buttonText: 'Normal Rally',
        description: 'This is the description for the Normal Rally.'
    },
    {
        name: 'Reverse Rally',
        buttonText: 'Reverse Rally',
        description: [
        ['Row 1, Cell 1', 'Row 1, Cell 2'],
        ['Row 2, Cell 1', 'Row 2, Cell 2']
        ]
    },
    {
        name: 'Indirect Rally',
        buttonText: 'Indirect Rally',
        description: {Hello: "Mirror Mirror", Hello2: "On the wall"}
    }
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
  