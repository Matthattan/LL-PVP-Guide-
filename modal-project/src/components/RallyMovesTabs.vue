<template>
    <h1 id="RallyMoves">Rally Moves</h1>
    <p>
        Many Loomians have access to additional moves through rallying (known as Rally Moves) which may be recommended to run. 
        Giving these moves to your Loomians can give a big advantage in battle so it’s worth learning the different techniques of teaching Rally Moves to your Loomians. 
        There are 3 main ways to use Rally Ranch to put a move on a Loomian: 
    </p>
    <div class="box">
        <div class="selection">
            <button v-for="(Rally, Index) in Items" 
            :key="Index" 
            @click="SwitchTabs(Rally.Name)">
            {{ Rally.Name }}
        </button>
        </div>
        <div class="description"
        :style="{ display: Rally.Name === Items[0].Name ? 'block' : 'none' }"
        v-for="(Rally, Index) in Items" 
        :key="Index" 
        :id="Rally.Name">
            <h2>{{ Rally.Name }}</h2>
            <div v-for="(Text, Index) in Rally.Description" :key="Index">
                <template v-if="isImagePath(Text)">
                    <img :src="Text">
                </template>
                <template v-else>
                    <p>{{ Text }}</p>
                </template>
            </div>   
        </div>
    </div>
</template>
<script>
    export default {
        name: 'RallyMovesTabs',
        data() {
            return {
                Items: [
                    {
                    Name: "Normal Rally", 
                    Description: [                        
                        "Find a Loomian with the Move you want to give. For this example we will be using Thawmin who learns Deep Freeze at Level 23.",
                        require("@/assets/images/rallyRanch/rallyMoves/normalRally/Image1.png"),
                        `Put the Loomian with the Move into the Rally Assistant slot and the Loomian you want to Rally in the Leader Slot`,
                        require("@/assets/images/rallyRanch/rallyMoves/normalRally/Image2.png"),
                        `Wait for Rallied Loomian to appear. The Rally Man will have a number above his head indicating how many Loomians have been Rallied`,
                        `Assuming no other Moves have been passed down - preventing the intended Rally Move to be passed down - your Rallied Loomians will have learnt the Move.`,
                        require("@/assets/images/rallyRanch/rallyMoves/normalRally/Image3.png")]
                    },
                    {
                        Name: "Reverse Rally", 
                    Description: [
                        `Choose a Loomian with the Rally Move and the Loomian you wish to teach the Rally Move to. 
                        This example will use Tahtab, who has Timber Thrash, and Festifir, who wants to learn the Move Timber Thrash.`,
                        require("@/assets/images/rallyRanch/rallyMoves/reverseRally/Image1.png"),
                        `Use the Change Moves function to make room for the new move. This is completely free and any Moves removed can be put back on to the Loomian at any time.`,
                        require("@/assets/images/rallyRanch/rallyMoves/reverseRally/Image2.png"),
                        `Place the Tahtab in the Rally Leader slot and the Festifir in the Rally Assistant Slow`,
                        require("@/assets/images/rallyRanch/rallyMoves/reverseRally/Image3.png"),
                        `Wait for at least 1 minute (or until a new Loomian has been rallied).`,
                        `Check the Rally Assistant and the Loomian will now have learnt the move from the Rally Leader.`,
                        require("@/assets/images/rallyRanch/rallyMoves/reverseRally/Image4.png")]
                    },
                    {
                    Name: "Indirect Rally", 
                    Description: [
                        `In this Example, we will be trying to teach a Shawchi Bag of Tricks. First, find a Loomian that knows the Rally Move. We will be using Icigool.`,
                        require("@/assets/images/rallyRanch/rallyMoves/indirectRally/Image1.png"),
                        `Put the Loomian you want to learn the Move in the Leader Slot and place the Loomian that knows the move in the Assistant Slot. Wait a few minutes for a Loomian to be rallied.`,
                        require("@/assets/images/rallyRanch/rallyMoves/indirectRally/Image2.png"),
                        `Once a Rallied Loomian has appeared and it has the Rally Move, change your Rally set-up so the Loomian you want to teach the move to is in the Assistant slot and the newly Rallied Loomian is now in the Leader slot. Make sure there is an empty moveslot in the Loomian that you wish to give the move to.`,
                        require("@/assets/images/rallyRanch/rallyMoves/indirectRally/Image3.png"),
                        `Wait a few minutes and the Loomian in the assistant slot will now have learnt the move from the Rallied Loomian in the Leader slot.`,
                        require("@/assets/images/rallyRanch/rallyMoves/indirectRally/Image4.png")]
                    },
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
            isImagePath(str) {
                return /\.(jpg|jpeg|png|gif|webp)$/i.test(str);
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

    .selection button {
        margin: 0px 10px;
    }

    .description {
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