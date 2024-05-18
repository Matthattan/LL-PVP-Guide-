<template>
<h1 id="Rally_Items">Rally Items</h1>
<p>
    As hinted at previously, there are several items used to change what stats a Rallied Loomian appears with. 
    There are 3 categories of items, each with different uses in different contexts:
</p>
<div class="OuterBox">
    <div class="ButtonArray">
        <button v-for="(rallyItem, index) in RallyItems" 
                @click="SwitchTabs(rallyItem.Name)"
                :key="index">
            {{ rallyItem.Name }}
        </button>
    </div>
    <div class="DescriptionBox RallyItems"
        v-for="(rallyItem, index) in RallyItems" 
        :key="index" 
        :id="rallyItem.Name"
        :style="{ display: rallyItem.Name === RallyItems[0].Name ? 'block' : 'none' }">
        <h2>{{ rallyItem.Name }}</h2>
        <table>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Obtainment Method</th>
            </tr>
            <tr v-for="(item, itemIndex) in rallyItem.Items" :key="itemIndex">
                <td>
                    <img class="Sprite" :src="item.Image" :alt="item.Name">
                </td>
                <td>{{ item.Name }}</td>
                <td>{{ item.Description }}</td>
                <td>{{ item.ObtMethod }}</td>
            </tr>
        </table>  
    </div>
</div>
</template>
<script>
    export default {
        name: 'RallyItemsTab',
        data() {
            return {
                RallyItems: [{
                    Name: "Rally Toys",
                    Items: [
                        {
                            Image: require("@/assets/images/rallyRanch/rallyItems/rallyToys/Rubber_Toy.webp"),
                            Name: "Rubber Toy",
                            Description: "Rally Loomians that share a personality trait with the Rally Leader or Assistant.",
                            ObtMethod: "Trainer Mastery level 4"
                        },
                        {
                            Image: require("@/assets/images/rallyRanch/rallyItems/rallyToys/Bouncy_Ball.webp"),
                            Name: "Bouncy Ball",
                            Description: "Rally Loomians that share a positive personality trait with the Rally Leader.",
                            ObtMethod: "Trainer Mastery level 6"
                        },
                        {
                            Image: require("@/assets/images/rallyRanch/rallyItems/rallyToys/Puzzle_Cube.webp"),
                            Name: "Puzzle Cube",
                            Description: "Rally Loomians that share a positive personality trait with the Rally Assistant.",
                            ObtMethod: "Trainer Mastery level 19"
                        },
                        {
                            Image: require("@/assets/images/rallyRanch/rallyItems/rallyToys/Yo-yo.webp"),
                            Name: "Yo-yo",
                            Description: "Rally Loomians that have the exact same personality as the Rally Leader.",
                            ObtMethod: "Trainer Mastery level 39"
                        }]
                    },
                    {
                    Name: "Rally Feeds",
                    Items: [
                        {
                            Image: require("@/assets/images/rallyRanch/rallyItems/rallyFeed/Stromberry.webp"),
                            Name: "Stromberry",
                            Description: "Rally Loomians that share at least one Unique Point with each Rallying Loomian.",
                            ObtMethod: "Default"
                        },
                        {
                            Image: require("@/assets/images/rallyRanch/rallyItems/rallyFeed/Blumelon.webp"),
                            Name: "Blumelon",
                            Description: "Rally Loomians that share at least two Unique Points with each Rallying Loomian.",
                            ObtMethod: "Trainer Mastery level 12"
                        },
                        {
                            Image: require("@/assets/images/rallyRanch/rallyItems/rallyFeed/Tutifruit.webp"),
                            Name: "Tutifruit",
                            Description: "Rally Loomians that share at least three Unique Points with each Rallying Loomian.",
                            ObtMethod: "Trainer Mastery level 22"
                        },
                        {
                            Image: require("@/assets/images/rallyRanch/rallyItems/rallyFeed/Wonderbean.webp"),
                            Name: "Wonderbean",
                            Description: "Rally Loomians that share at least four Unique Points with the Rally Leader.",
                            ObtMethod: "Trainer Mastery level 32"
                        },
                        {
                            Image: require("@/assets/images/rallyRanch/rallyItems/rallyFeed/Jewelfruit.webp"),
                            Name: "Jewelfruit",
                            Description: "Rally Loomians that share three to five perfect Unique Points with any of the Rallying Loomians.",
                            ObtMethod: "Trainer Mastery level 78"
                        }
                    ]},
                    {
                    Name: "Rally Totems",
                    Items: [
                        {
                            Image: require("@/assets/images/rallyRanch/rallyItems/rallyTotems/Smiling_Totem.webp"),
                            Name: "Smiling Totem",
                            Description: "Rally Loomians with two positive personality traits and one strong negative trait.",
                            ObtMethod: "Trainer Mastery level 24"
                        },
                        {
                            Image: require("@/assets/images/rallyRanch/rallyItems/rallyTotems/Scowling_Totem.webp"),
                            Name: "Scowling Totem",
                            Description: "Rally Loomians with a strong positive personality trait and two negative traits.",
                            ObtMethod: "Trainer Mastery level 26"
                        },
                    ]},
                ]
            }
        },
        methods: {
            SwitchTabs(Name) {
                var i, RallyItemsContent
                // second class name used to not not mix up the universal class names on exclusive components
                RallyItemsContent = document.getElementsByClassName("RallyItems")

                // For all the description boxes, make them all invisible
                for (i = 0; i < RallyItemsContent.length; i++) {
                    RallyItemsContent[i].style.display = "none";
                }

                // Now get the element that the user selected and make that visible
                document.getElementById(Name).style.display = "block";
            }
        }
    }
</script>