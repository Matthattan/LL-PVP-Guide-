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
    <!--Entire Box that contains controls for different Cores-->
    <div class="box">
        <!--Buttons for each Core Type-->
        <div class="selection">
            <button class="selectionButton" v-for="(Type, Index) in CoreTypes" 
            :key="Index" 
            @click="SwitchTabs(Type.Name)">
            {{ Type.Name }}
            </button>
        </div>
        <!--Sections for each Core Type-->
        <div class="description" 
        v-for="(coreType, Index) in CoreTypes"
        :style="{ display: coreType.Name === 'Offensive Cores' ? 'block' : 'none' }"
        :id="coreType.Name"
        :key="Index">
            <!--Each Core of the Core Type-->
            <template v-for="(Core, coreIndex) in coreType.Cores" 
            :key="coreIndex">
                <!--Name of Core-->
                <button class="coreButton" 
                @click="toggleAnswer(Core.Name)">
                {{ Core.Name }}
                </button>
                <!--Desc of Core-->
                <div class="answer"
                :id="Core.Name"
                :style="{display: Core.Visible ? 'block' : 'none'}">
                {{ Core.Description }}
                    <!--Images of Loomians in Core-->
                    <table>
                        <tr>
                            <td v-for="(Loomian, imageIndex) in Core.Loomians" :key="imageIndex"> 
                                <img :src="Loomian.image" :alt="Loomian.imageAlt">
                            </td>
                        </tr>
                    </table>
                </div>
            </template>
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
                        Visible: false,
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
                        The opponent's speed stat is decreased by 1 stage allowing Fmattalkyrie to outspeed a plethora of Loomians. 
                        From there, Falkyrie can come in and start setting up and breaking down Loomians. 
                        Ursnac also has access to Slap Down to hit plant types that would usually answer Falkyrie such as Mawamurk.`,
                        Loomians: [
                            {imageAlt: "Falkyrie", image: "Falkyrie"},
                            {imageAlt: "Ursnac", image: "Ursnac"},
                        ]}
                    ]},
                    {
                    Name: "Defensive Cores", 
                    Cores: [{
                        Name: "PyroLumiGool (Pyrolen + Luminami + Icigool",
                        Description: `This core is exceptionally well for supporting offensive Loomians on your team given the utility this trio brings. 
                        First off, both Luminami and Icigool are defensive pivots (with Icigool also having speed control) allowing a chance for Offensive Loomians to enter the battlefield easier. 
                        Pyrolen offers a good answer for meta ranged attackers and provides hazard removal through Burn-Up while Luminami is staple when it comes to Melee Defensive Loomians. 
                        As a plus, decent offensive pressure is emitted from the three. `,
                        Loomians: [
                            {imageAlt: "Pyrolen", image: "Pyrolen"},
                            {imageAlt: "Luminami", image: "Luminami"},
                            {imageAlt: "Icigool", image: "Icigool"}
                        ]},
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
            },
            toggleAnswer(elementId) {
                const element = document.getElementById(elementId);

                if (element) {
                    if (element.style.display === 'block') {
                        element.style.display = 'none';
                    } else {
                        element.style.display = 'block';
                    }
                }
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