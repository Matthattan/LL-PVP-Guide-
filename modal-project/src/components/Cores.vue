<template>
    <h2 id="Cores">Cores</h2>
        <p>A Core is when 2 or More Loomians that support each other well, are combined. 
            In other words, they have good synergy with each other whether that be offensively, defensively or both. 
            Cores are great for starting off the creation of a team because it saves time by focusing on several Loomians, 
            allows you to closely analyze how Loomians work with each other and can save time by looking at pre-existing cores. 
        </p>
        <p>For example, Magamadire-Eruptidon and Ursnac have proven to be such a threatening core due to the speed control and defensive utility offered by Ursnac 
            and Insane Coverage and Damage Output credited to Magamadire-Eruptudon. 
            This toxic mix of Loomians that do well for their roles resulted in a change of Baffle’s effect and agmadire-Eruptidon's Soul Burst Move.
        </p>
    <div class="box">
        <div class="selection">
            <button class="selectionButton" v-for="(Type, Index) in CoreTypes" 
            :key="Index" 
            @click="SwitchTabs(Type.Name)">
            {{ Type.Name }}
        </button>
        </div>
        <div class="description" 
        v-for="(coreType, Index) in CoreTypes"
        :style="{ display: coreType.Name === 'Offensive Cores' ? 'block' : 'none' }"
        :id="coreType.Name">
            <template v-for="(Core, coreIndex) in coreType.Cores" :key="index">
                <button class="coreButton" @click="toggleAnswer(index)"> {{ Core.Name }}</button>
                <div class="answer">
                    {{ Core.Description }}
                    <table>
                            <tr>
                                <td v-for="(Loomian, imageIndex) in Core.Loomians"> 
                                    <img :src="Loomian.image" :alt="Loomian.imageAlt">
                                </td>
                            </tr>
                    </table>
                </div>
            </template>
        <!-- :key="Index" -->
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Cores',
        data() {
            return {
                CoreTypes: [{
                    Name: "Offensive Cores", 
                    Cores: [{
                        Name: "HalvShaw (Halvantic + Shawchi)",
                        Description: `A formidable duo, these Loomians alone have great coverage preventing many walls from swapping in without taking a huge hit and together this offensive pressure only becomes scarier. 
                        Shawchi can comfortably use Pyrokinesis without concern for the likes of Searknight or Eleguana as Halvantic can hit them for SE using its STAB and almost-STAB Gnarly Gash. 
                        Given these two are quite slow, frail Loomians, Boots can quicken Halvantic while speed control/pivots help both get onto the field to cause chaos.`,
                        Loomians: [
                            {imageAlt: "Halvantic", image: "Halvantic"},
                            {imageAlt: "Shawchi", image: "Shawchi"},
                        ]},
                        {

                        }
                    ]},
                    {
                    Name: "Balanced Cores", 
                    Cores: [{
                        Name: "FalkSnac (Falkyrie + Ursnac)",
                        Description: `You've heard of FalkSoul now get ready for FalkSnac. 
                        Falkyrie's Base Speed stat is far from perfect, especially when the meta is using faster and faster Loomians. 
                        Ursnac solves this problem with its Pivot move Baffle. Not only does this allow Ursnac to swap out without wasting a turn (allowing it act as a defensive pivot), 
                        The opponent's speed stat is decreased by 1 stage allowing Falkyrie to outspeed a plethora of Loomians. 
                        From there, Falkyrie can come in and start setting up and breaking down Loomians. 
                        Ursnac also has access to Slap Down to hit plant types that would usually answer Falkyrie such as Mawamurk.`,
                        Image: ["Halvantic", "Shawchi"],
                        ImageAlt: ["Halvantic","Shawchi"]
                        }
                    ]},
                    {
                    Name: "Defensive Cores", 
                    Cores: [{
                        Name: "HalvShaw (Halvantic + Shawchi)",
                        Description: `A formidable duo, these Loomians alone have great coverage preventing many walls from swapping in without taking a huge hit and together this offensive pressure only becomes scarier. 
                        Shawchi can comfortably use Pyrokinesis without concern for the likes of Searknight or Eleguana as Halvantic can hit them for SE using its STAB and almost-STAB Gnarly Gash. 
                        Given these two are quite slow, frail Loomians, Boots can quicken Halvantic while speed control/pivots help both get onto the field to cause chaos.`,
                        Image: ["Halvantic", "Shawchi"],
                        ImageAlt: ["Halvantic","Shawchi"]
                        },
                        {

                        }
                    ]},
                ]
            }
        },
        methods: {
            SwitchTabs(Name) {
                var i, tabcontent
                tabcontent = document.getElementsByClassName("description")

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
<style scoped>
    .box {
        margin-top: 20px;
        background-color: #0057b4;
        border-radius: 25px;
    }

    .selection {
        padding: 10px 10px;
        background-color: azure;
        border-radius: 25px 25px 0px 0px;
    }

    .selectionButton {
        margin: 0px 10px;
    }

    .description {
        display: block;
        padding: 50px;
    }

    img {
        display: grid;
        margin: auto;
        width: 60%;
        border-radius: 25px;
    }

    table {
        margin: auto;
        border: 1px solid #000000;
        background-color: #0057b4;
        margin-bottom: 1rem;
    }

    td {
        width: auto;
        padding: 0;
    }

    td img {
        width: 8rem;
    }

    .coreButton {
        width: 100%;
        background-color: #004691;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: auto;
        margin-bottom: 10px;
        font-size: 18px;
        text-align: left;
    }
</style>