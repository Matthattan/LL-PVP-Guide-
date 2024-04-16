<template>
    <h1 id="Terminology">Terminology</h1>
    <p>When speaking with other players in the PVP Community, you may hear terms that sound familiar or are completely foreign. 
        This list attempts to explain different terms you may hear and what they mean.
    </p>
    <div v-for="(Term, index) in Terms" :key="index" class="container">
        {{Term.Term}} - {{ Term.Explanation }}
    </div>
</template>
  
<script>

export default {
    name: "Terminology",
    data() {
        return {
            Terms: [
                {
                    Term: `2v2`,
                    Explanation: `PVP Format where 4 people battle each bring a maximum of 3 Loomians and send out 1 Loomian at any one time.`,
                },
                {
                    Term: `7x40`,
                    Explanation: `40 refers to how many UPS and the 7 refers to how many stats have those amount of UPs. 
                    Variations include 6x40 which means all UP stats excluding one stat are 40 and 7x0 which means all UP stats are 0.`
                },
                {
                    Term: `Attack Type Bonus (ATB)`,
                    Explanation: `The strength increase on moves that share its type with the Loomian. 
                    By default, this is 25%. If the Loomian has Awakening, ATB changes to 50% and if the Loomian has Ace, ATB changes to 100%. 
                    This may sometimes be referred to as STAB (Same Type Attack Boost) by Players.`,
                },
                {
                    Term: `Chip(ped)`,
                    Explanation: `Minimal amount of damage done to a Loomian. This can either enable another Loomian to Knock Out the Loomian or - if too many switch-ins are done - can completey knock out a Loomian`,
                },
                {
                    Term: `Coverage`,
                    Explanation: `A move given to a Loomian in order to be able to hit a Typing/Loomian.`,
                },
                {
                    Term: `Doubles`,
                    Explanation: `The PVP format where 2 users can pick a maximum of 5 Loomians and battle with 2 Loomians at any one time.`,
                },
                {
                    Term: `GPVP`,
                    Explanation: `(Alpha) Gleaming PVP Loomians. They're mainly used to show off as alphas aren't a necessity for PVP however they normally do have access to totemised personalities so sacrificing stats for appearance is not an issue.`,
                },
                {
                    Term: `Meta(game)`,
                    Explanation: `Popular, Effective tactics being used within the colosseum, especially amongst competitive players.`,
                },
                {
                    Term: `Movepool`,
                    Explanation: `The Moves a Loomian has access to, whether that be from Level Up, Rally, Move Manuals or Soul Burst`
                },
                {
                    Term: `OHKO/2HKO/3HKO etc.`,
                    Explanation: `One Hit Knock Out/Two Hit Knock Out/Three Hit Knock Out.`
                },
                {
                    Term: `SA`,
                    Explanation: `Secret Ability which are rarer abilities that Loomians have. Exceptions include the Harvesect Evolutionary Line, Boonary and Swirelle.`
                },
                {
                    Term: `SB`,
                    Explanation: `Soul Burst; The upgraded form of some Loomians.`
                },
            ]        
        };
    }
};
</script>
  
<style scoped>
    * {
        font-family: 'Russo One', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: black;
    }

    .container {
        background-color: #004691;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        margin-bottom: 10px;
        font-size: 18px;
        text-align: left;
    }
</style>
