
<template>
    <h2 id="Playstyle">Playstyle</h2>
    <p>A Playstyle - colloquially known as a Team Archetype, is the general strategy when using a team. Some Play Styles that you may see in the competitive scene include:
    </p>
    <template v-for="(playstyle, index) in Playstyles" :key="index">
        <button @click="toggleAnswer(index)">{{ playstyle.name }}</button>
        <div class="answer" v-if="playstyle.showDescription">
            {{ playstyle.desc }}
            <div class="team">
                <table>
                    <tr>
                        <td v-for="loomian in playstyle.team"> 
                            <img :alt="loomian.imageAlt" :src="loomian.image">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </template>
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
                        {imageAlt: "Obsidrugon", image: require("@/assets/images/teambuilding/sprites/Obsidrugon-menu.webp")},
                        {imageAlt: "Eleguana", image: require("@/assets/images/teambuilding/sprites/Eleguana-menu.webp")},
                        {imageAlt: "Stratusoar", image: require("@/assets/images/teambuilding/sprites/Stratusoar-menu.webp")},
                        {imageAlt: "Wabalisc", image: require("@/assets/images/teambuilding/sprites/Wabalisc-menu.webp")},
                        {imageAlt: "Harvesect", image: require("@/assets/images/teambuilding/sprites/Harvesect-menu.webp")},
                        {imageAlt: "Gargolem-D", image: require("@/assets/images/teambuilding/sprites/Gargolem-Defense-menu.webp")},
                        {imageAlt: "Pyrolen", image: require("@/assets/images/teambuilding/sprites/Pyrolen-menu.webp")}
                    ]},
                    {
                    name: "Semi-Stall",
                    desc: `You compose a team with as much defensive synergy as possible to mitigate as much damage as possible while you slowly chip down your enemy. Although, you throw in an offensive loomian to break any walls they have or to clean up low HP Loomians at the end.`,
                    team: [
                        {imageAlt: "Gargolem-Attack", image: require("@/assets/images/teambuilding/sprites/Gargolem-Attack-menu.webp")},
                        {imageAlt: "Halvantic", image: require("@/assets/images/teambuilding/sprites/Halvantic-menu.webp")},
                        {imageAlt: "Mawamurk", image: require("@/assets/images/teambuilding/sprites/Mawamurk-menu.webp")},
                        {imageAlt: "Sedimars", image: require("@/assets/images/teambuilding/sprites/Sedimars-menu.webp")},
                        {imageAlt: "Searknight", image: require("@/assets/images/teambuilding/sprites/Searknight-menu.webp")},
                        {imageAlt: "Barblast", image: require("@/assets/images/teambuilding/sprites/Barblast-menu.webp")},
                        {imageAlt: "Obsidrugon", image: require("@/assets/images/teambuilding/sprites/Obsidrugon-menu.webp")}
                    ]},
                    {
                    name: "Fake-Stall",
                    desc: `Though the team consists of usually defensive-oriented Loomians, they secretly possessive offensive utility to surprise opponents who expected a different, more conservative, strategy.`,
                    team: [
                        {imageAlt: "Imperior", image: require("@/assets/images/teambuilding/sprites/Imperior-menu.webp")},
                        {imageAlt: "Celesting", image: require("@/assets/images/teambuilding/sprites/Celesting-menu.webp")},
                        {imageAlt: "Pyrolen", image: require("@/assets/images/teambuilding/sprites/Pyrolen-menu.webp")},
                        {imageAlt: "Swolder", image: require("@/assets/images/teambuilding/sprites/Swolder-menu.webp")},
                        {imageAlt: "Luminami", image: require("@/assets/images/teambuilding/sprites/Luminami-menu.webp")},
                        {imageAlt: "Stratusoar", image: require("@/assets/images/teambuilding/sprites/Stratusoar-menu.webp")},
                        {imageAlt: "Obsidrugon", image: require("@/assets/images/teambuilding/sprites/Obsidrugon-menu.webp")}
                    ]},
                    {
                    name: "Balance",
                    desc: `You compose a team with defensive synergy in mind for all Loomians. However some are purely for offensive pressure and others are purely for defensive utility and yet others are a mix of both.`,
                    team: [
                    {imageAlt: "Tiklipse", image: require("@/assets/images/teambuilding/sprites/Tiklipse-menu.webp")},
                        {imageAlt: "Tahtab", image: require("@/assets/images/teambuilding/sprites/Tahtab-menu.webp")},
                        {imageAlt: "Wintrix", image: require("@/assets/images/teambuilding/sprites/Wintrix-menu.webp")},
                        {imageAlt: "Ikazune", image: require("@/assets/images/teambuilding/sprites/Ikazune-menu.webp")},
                        {imageAlt: "Obsidrugon", image: require("@/assets/images/teambuilding/sprites/Obsidrugon-menu.webp")},
                        {imageAlt: "Taoshinu", image: require("@/assets/images/teambuilding/sprites/Taoshinu-menu.webp")},
                        {imageAlt: "Sedimars", image: require("@/assets/images/teambuilding/sprites/Sedimars-menu.webp")}
                    ]},
                    {
                    name: "Bulky Offense",
                    desc: `You compose a team with defensive synergy in mind for all Loomians. Your Loomians for offensive pressure can take some hits and usually have natural bulk looms meaning they can absorb hits and cover weak spots.`,
                    team: [
                    {imageAlt: "Phagenaut", image: require("@/assets/images/teambuilding/sprites/Phagenaut-menu.webp")},
                        {imageAlt: "Harvesect", image: require("@/assets/images/teambuilding/sprites/Harvesect-menu.webp")},
                        {imageAlt: "Tyrecks", image: require("@/assets/images/teambuilding/sprites/Tyrecks-menu.webp")},
                        {imageAlt: "Oxidrake", image: require("@/assets/images/teambuilding/sprites/Oxidrake-menu.webp")},
                        {imageAlt: "Barblast", image: require("@/assets/images/teambuilding/sprites/Barblast-menu.webp")},
                        {imageAlt: "Zepholen", image: require("@/assets/images/teambuilding/sprites/Zepholen-menu.webp")},
                        {imageAlt: "Luminami", image: require("@/assets/images/teambuilding/sprites/Luminami-menu.webp")}
                    ]},
                    {
                    name: "Offense",
                    desc: `You compose a team with defensive synergy in mind but more so in terms of types. You want to almost always have offensive pressure but with bulky things to swap in and take hits. These bulky things should also be able to put offensive pressure on the opponent.`,
                    team: [
                        {imageAlt: "Samarine", image: require("@/assets/images/teambuilding/sprites/Samarine-menu.webp")},
                        {imageAlt: "Cosmiore-Cracked", image: require("@/assets/images/teambuilding/sprites/Cosmiore-Cracked-Green-menu.webp")},
                        {imageAlt: "Sedimars", image: require("@/assets/images/teambuilding/sprites/Sedimars-menu.webp")},
                        {imageAlt: "Luminami", image: require("@/assets/images/teambuilding/sprites/Luminami-menu.webp")},
                        {imageAlt: "Zuelong", image: require("@/assets/images/teambuilding/sprites/Zuelong-menu.webp")},
                        {imageAlt: "Zepholen", image: require("@/assets/images/teambuilding/sprites/Zepholen-menu.webp")},
                        {imageAlt: "Vesperatu", image: require("@/assets/images/teambuilding/sprites/Vesperatu-menu.webp")}
                    ]},
                    {
                    name: "Hyper Offense",
                    desc: `You compose a team with defensive synergy only in terms of types. You always want to have offensive pressure on your opponent.`,
                    team: [
                        {imageAlt: "Halvatnic", image: require("@/assets/images/teambuilding/sprites/Halvantic-menu.webp")},
                        {imageAlt: "Tyrecks", image: require("@/assets/images/teambuilding/sprites/Tyrecks-menu.webp")},
                        {imageAlt: "Tiklipse", image: require("@/assets/images/teambuilding/sprites/Tiklipse-menu.webp")},
                        {imageAlt: "Wintrix", image: require("@/assets/images/teambuilding/sprites/Wintrix-menu.webp")},
                        {imageAlt: "Gobbidemic", image: require("@/assets/images/teambuilding/sprites/Gobbidemic-menu.webp")},
                        {imageAlt: "Harvesect", image: require("@/assets/images/teambuilding/sprites/Harvesect-menu.webp")},
                        {imageAlt: "Tahtab", image: require("@/assets/images/teambuilding/sprites/Tahtab-menu.webp")}
                    ]}
                ]
            }
        },
        methods: {
            toggleAnswer(index) {
                // Toggle the showDescription property of the clicked playstyle
                this.Playstyles[index].showDescription = !this.Playstyles[index].showDescription;
            }
        },
    }
</script>
<style scoped>
    table {
        margin: auto;
        border: 1px solid #000000;
        background-color: #0057b4;
        margin-bottom: 1rem;
    }

    td {
        width: auto;
        padding: 0;
        background-color: rgb(68, 127, 196);
    }

    td img {
        width: 6rem;
    }

    button {
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

    .team {
        overflow-x: auto;
    }
</style>