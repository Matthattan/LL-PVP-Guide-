<template>
    <ImageHeader :imageUrl="imageUrl" pageName="Set Making"/>
    <SideBar/>
    <!-- Your main content here -->
    <main>
        <ContentList id="Questions" :content="contentData"/>
        <h1 id="What_is_a_Set">What is a Set?</h1>
        <p>A set is a specific composure of TP’s, Personalities and items. 
            The way your Loomian plays and performs in battle will depend on what set you’re using. 
        </p>
        <h1 id="Where_can_I_make_Sets">Where can I make Sets?</h1>
        <p>Many programs available online for making sets have been listed in Resources however there are many more on the internet.</p>
        <h1>Why should I make Sets?</h1>
        <p>By analyzing a Loomian’s capabilities, you can choose where to put Training Points, 
            select the optimal personality for the role intended, decide on a specialized movement set and much more. 
            This can give you an edge in certain match-ups and surprise your opponent by running something unexpected. 
            Of course, not all unconventional sets will perform to the same viability so make sure your reason for running a set is greatly justified. 
        </p>
        <h1 id="How_do_I_make_a_Set">How do I make a Set?</h1>
        <p>Though there aren’t set rules when choosing how to run a Loomian, there are some suggested guidelines: </p>
        <ul>
            <li>Base your set around level 50. 
                The standard for competitive battles is level 50, 
                this means 8 Training Points (or 4 if they’re in Energy) and 2 Unique Points are equal to 1 total stat point. 
            </li>
            <li>Try not to force a Loomian to take on multiple roles. Though it's important that your team gets the utility it needs to perform well,
                You may end up stretching its entire arsenal utilities so thin that it can’t perform any of its roles well. 
                Instead, try to focus on a singular role. 
            </li>
            <li> Create purposeful sets by justifying your investments; consider a Loomian's base stats and movepool. 
                Avoid vague reasoning like "to tank hits." 
                You can use the damage calculator to simulate matchups, ensuring optimal point investment for survival, outspeeding, or achieving knockouts. 
            </li>
            <li>Understand how a role affects Training Points, Personalities, Item, Moveset etc. 
                An offensive role such as a Cleaner is likely to invest a lot into its dominant attacking stat and speed however a Wall would prefer maximizing its health and defenses. 
                Many Loomians have explicitly high stats which make it easier to understand how it can be used within the competitive scene. 
            </li>
            <li> Analyze the meta - by understanding which Loomians are being used the most and others which are not seeing usage, 
                you can evaluate if your choices for set making are valid. 
                If you were in a meta with lots of offensive water types, would making a defensive set for a fire type be worth it? 
            </li>
            <li>Test your sets out - simulators are pretty powerful tools however they can’t substitute the real thing. 
                There may be a matchup you forgot to check or an investment simply wasn’t worth it. 
                By using sets in actual battles, it can prove more useful or, if not, show what can be improved. 
            </li>
        </ul>
        <SetExamples/>
    </main>
</template>
<script>
import SideBar from './SideBar.vue';
import ImageHeader from './Header.vue';
import ContentList from './ContentList.vue';
import SetExamples from './SetExamples.vue';

export default {
    name: 'App',
    components: {
        ImageHeader,
        SideBar,
        ContentList,
        SetExamples
    },
    data() {
        return {
            imageUrl: require("@/assets/images/headers/Route_5.webp"),
            contentData: [
                {
                    id: 'What_is_a_Set',
                    title: 'What is a Set?',
                },
                {
                    id: 'Where_can_I_make_Sets',
                    title: 'Where can I make Sets?',
                },
                {
                    id: 'How_do_I_make_a_set',
                    title: 'How do I make a set?',
                },
                {
                    id: 'Set_Examples',
                    title: 'Set Examples',
                    subitems: [
                        {id: `Set_Examples`, title: `Offensive Set - Example 1`},
                        {id: `Set_Examples`, title: `Offensive Set - Example 2`},
                        {id: `Set_Examples`, title: `Defensive Set - Example 1`},
                        {id: `Set_Examples`, title: `Defensive Set - Example 2`},
                    ]
                },
            ]
        }
    }
}
</script>