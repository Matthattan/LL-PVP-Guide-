<template>
<div class="boxRallyItem">
    <div class="selectionRallyItem">
        <button v-for="(rallyItem, index) in RallyItems" 
                @click="SwitchTabs(rallyItem.Name)"
                :key="index">
            {{ rallyItem.Name }}
        </button>
    </div>
    <div class="descriptionRallyItem"
         v-for="(rallyItem, index) in RallyItems" 
         :key="index" 
         :id="rallyItem.Name"
         :style="{ display: rallyItem.Name === 'Rally Toys' ? 'block' : 'none' }">
        <table>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Obtainment Method</th>
            </tr>
            <tr v-for="(item, itemIndex) in rallyItem.Items" :key="itemIndex">
                <td>
                    <img :src="item.Image" :alt="item.Name">
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
                RallyItems: [
                    {
                        Name: "Rally Toys",
                        Items: [
                            {
                                Image: "",
                                Name: "Rubber Toy",
                                Description: "Rally Loomians that share a personality trait with the Rally Leader or Assistant.",
                                ObtMethod: "Trainer Mastery level 4"
                            },
                            {
                                Image: "",
                                Name: "Bouncy Ball",
                                Description: "Rally Loomians that share a positive personality trait with the Rally Leader.",
                                ObtMethod: "Trainer Mastery level 6"
                            },
                            {
                                Image: "",
                                Name: "Puzzle Cube",
                                Description: "Rally Loomians that share a positive personality trait with the Rally Assistant.",
                                ObtMethod: "Trainer Mastery level 19"
                            },
                            {
                                Image: "",
                                Name: "Yo-yo",
                                Description: "Rally Loomians that have the exact same personality as the Rally Leader.",
                                ObtMethod: "Trainer Mastery level 39"
                            },
                        ]
                    },
                    {
                        Name: "Rally Feed",
                        Items: [
                            {
                                Image: "",
                                Name: "Stromberry",
                                Description: "Rally Loomians that share at least one Unique Point with each Rallying Loomian.",
                                ObtMethod: "Default"
                            },
                            {
                                Image: "",
                                Name: "Blumelon",
                                Description: "Rally Loomians that share at least two Unique Points with each Rallying Loomian.",
                                ObtMethod: "Trainer Mastery level 12"
                            },
                            {
                                Image: "",
                                Name: "Tutifruit",
                                Description: "Rally Loomians that share at least three Unique Points with each Rallying Loomian.",
                                ObtMethod: "Trainer Mastery level 22"
                            },
                            {
                                Image: "",
                                Name: "Wonderbean",
                                Description: "Rally Loomians that share at least four Unique Points with the Rally Leader.",
                                ObtMethod: "Trainer Mastery level 32"
                            },
                            {
                                Image: "",
                                Name: "Jewelfruit",
                                Description: "Rally Loomians that share three to five perfect Unique Points with any of the Rallying Loomians.",
                                ObtMethod: "Trainer Mastery level 78"
                            }
                        ]
                    },
                    {
                        Name: "Rally Totem",
                        Items: [
                            {
                                Image: "",
                                Name: "Smiling Totem",
                                Description: "Rally Loomians with two positive personality traits and one strong negative trait.",
                                ObtMethod: "Trainer Mastery level 24"
                            },
                            {
                                Image: "",
                                Name: "Scowling Totem",
                                Description: "Rally Loomians with a strong positive personality trait and two negative traits.",
                                ObtMethod: "Trainer Mastery level 26"
                            },
                        ]
                    },

                ]
            }
        },
        methods: {
            SwitchTabs(Name) {
                var i, tabcontent
                tabcontent = document.getElementsByClassName("descriptionRallyItem")

                // For all the description boxes, make them all invisible
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }

                // Now get the element that the user selected and make that visible
                document.getElementById(Name).style.display = "block";
            }
        }
    }
</script>
<style>
    .boxRallyItem {
        display: grid;
        margin-top: 20px;
        background-color: aqua;
        border-radius: 25px;
        min-width: 800px;

    }

    .selectionRallyItem {
        padding: 10px 10px;
        background-color: azure;
        border-radius: 25px 25px 0px 0px;
    }

    .selectionRallyItem button {
        margin: 0px 10px;
    }

    .descriptionRallyItem {
        display: none;
        padding: 50px;
    }

    img {
        display: grid;
        margin: auto;
        width: 60%;
        border-radius: 25px;
    }
</style>