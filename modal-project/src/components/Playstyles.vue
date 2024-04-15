
<template>
    <ul>
        <li v-for="(playstyle, index) in Playstyles" :key="index">
            <strong>{{ playstyle.name }}</strong> - {{ playstyle.desc }}
            <table style="margin: auto;">
                <tr>
                    <td v-for="loomian in playstyle.team" 
                    style="min-width: 100px;"> {{ loomian }}
                    </td>
                </tr>
            </table>
        </li>
    </ul>
</template>
<script>
    export default {
        name: "Playstyles",
        data() {
            return {
                Playstyles: [{
                    name: "Stall",
                    desc: `You compose a team with as much defensive synergy as possible to mitigate as much damage as possible while you slowly chip down your enemy.
                    Although, you throw in an offensive loomian to break any walls they have or to clean up low HP Loomians at the end.`,
                    team: [
                        "Boonary", 
                        "Obsidrugon", 
                        "Sedimars", 
                        "Eleguana", 
                        "Venolen", 
                        "Barblast",
                        "Clionae",
                    ]},
                    {
                    name: "Semi-Stall",
                    desc: `You compose a team with as much defensive synergy as possible to mitigate as much damage as possible while you slowly chip down your enemy. Although, you throw in an offensive loomian to break any walls they have or to clean up low HP Loomians at the end.`,
                    team: [
                        "Eruptidon", 
                        "Ursnac", 
                        "Pyrolen", 
                        "Phagenaut", 
                        "Venolen", 
                        "Tundrolen",
                        "Gastroak"
                    ]},
                    {
                    name: "Fake-Stall",
                    desc: `Though the team consists of usually defensive-oriented Loomians, they secretly possessive offensive utility to surprise opponents who expected a different, more conservative, strategy.`,
                    team: [
                        "Obsidrugon", 
                        "Pyrolen", 
                        "Phagenaut", 
                        "Gastroak", 
                        "Stratusoar", 
                        "Moreel",
                        "Luminami"
                    ]},
                    {
                    name: "Balance",
                    desc: `You compose a team with defensive synergy in mind for all Loomians. However some are purely for offensive pressure and others are purely for defensive utility and yet others are a mix of both.`,
                    team: [
                        "Eruptidon", 
                        "Ursnac", 
                        "Pyrolen", 
                        "Phagenaut", 
                        "Venolen", 
                        "Tundrolen",
                        "Gastroak"
                    ]},
                    {
                    name: "Bulky Offense",
                    desc: `You compose a team with defensive synergy in mind for all Loomians. Your Loomians for offensive pressure can take some hits and usually have natural bulk looms meaning they can absorb hits and cover weak spots.`,
                    },
                    {
                    name: "Offense",
                    desc: `You compose a team with defensive synergy in mind but more so in terms of types. You want to almost always have offensive pressure but with bulky things to swap in and take hits. These bulky things should also be able to put offensive pressure on the opponent.`
                    },
                    {
                    name: "Hyper Offense",
                    desc: `You compose a team with defensive synergy only in terms of types. You always want to have offensive pressure on your opponent.`
                    }]
            }
        }
    }
</script>