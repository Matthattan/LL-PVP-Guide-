<template>
    <h2 id="Roles">Roles</h2>
    <p>A Role is the function that a Loomian plays in a team. 
        Roles can be offensive or defensive in nature and many Loomians may switch what role they serve based on the set they run. 
        Furthermore, a Loomian may serve as multiple roles however this isn’t always the case due to Limited Moves and TPs.
    </p>
    <template v-for="(item, index) in Roles" :key="index">
        <button @click="toggleAnswer(index)">{{ item.name }}</button>
        <div class="answer" v-if="item.showDescription">
            {{ item.desc }}
            <table>
                <tr>
                    <td v-for="loomian in item.loomian"> 
                        <img :alt="loomian.imageAlt" :src="loomian.image">
                    </td>
                </tr>
            </table>
        </div>
    </template>
</template>
<script>
    export default {
        name: "Roles",
        data() {
            return {
                Roles: [{
                    name: "Wall",
                    desc: `A Loomian whose purpose is to halt the progress of the opponent. Usually by being very bulky and utilizing type interactions to take as little damage as possible and chip down the opponent. They can also make opportunities to continue or create momentum through some kind of utility.`,
                    loomian: [
                        {imageAlt: "Luminami", image: require("@/assets/images/teambuilding/sprites/Luminami-menu.webp")},
                        {imageAlt: "Phagenaut", image: require("@/assets/images/teambuilding/sprites/Phagenaut-menu.webp")},
                        {imageAlt: "Sedimars", image: require("@/assets/images/teambuilding/sprites/Sedimars-menu.webp")}
                    ]},
                    {
                    name: "Tank",
                    desc: `A Loomian whose purpose is to halt the progress of the opponent. Usually by being bulky and utilizing its bulk to take hits to create opportunities to continue or create momentum through its offensive pressure.`,
                    loomian: [
                        {imageAlt: "Obsidrugon", image: require("@/assets/images/teambuilding/sprites/Obsidrugon-menu.webp")},
                        {imageAlt: "Terraform-Gastroak", image: require("@/assets/images/teambuilding/sprites/Gastroak-Terraform-menu.webp")},
                        {imageAlt: "Pyrolen", image: require("@/assets/images/teambuilding/sprites/Pyrolen-menu.webp")}
                    ]},
                    {
                    name: "Wallbreaker",
                    desc: `A Loomian in which can deal heavy damage to the opponent’s Defensive Loomians. Most commonly, a Loomian that attacks the opponent’s weaker defense is used for the initial damage output however using a set-up move like Brawn Boost or Magnify can also aid wallbreaking.`,
                    loomian: [
                        {imageAlt: "Colossotrops", image: require("@/assets/images/teambuilding/sprites/Colossotrops-menu.webp")},
                        {imageAlt: "Dakuda", image: require("@/assets/images/teambuilding/sprites/Dakuda-menu.webp")},
                        {imageAlt: "Magmadire-Eruptidon", image: require("@/assets/images/teambuilding/sprites/Eruptidon-Magmadire-menu.webp")}
                    ]},
                    {
                    name: "Cleaner",
                    desc: `A Loomian whose main job is to KO Loomians by picking off Loomians with lower HP at late stages of the game. They can also have access to Set-Up moves to hit harder however this isn't a necessity.`,
                    loomian: [
                        {imageAlt: "Nevermare", image: require("@/assets/images/teambuilding/sprites/Nevermare-menu.webp")},
                        {imageAlt: "Zuelong", image: require("@/assets/images/teambuilding/sprites/Zuelong-menu.webp")},
                        {imageAlt: "Deludrix", image: require("@/assets/images/teambuilding/sprites/Deludrix-menu.webp")}
                    ]},
                    {
                    name: "Set-Up Sweeper",
                    desc: `A Loomian who functions best after they've set up and can deal heavy amounts of damage to the opposing team. Being fast to avoid being revenge-killed is also recommended.`,
                    loomian: [
                        {imageAlt: "Teridescent", image: require("@/assets/images/teambuilding/sprites/Teridescent-menu.webp")},
                        {imageAlt: "Samarine", image: require("@/assets/images/teambuilding/sprites/Samarine-menu.webp")},
                        {imageAlt: "Jetwing-Stratusoar", image: require("@/assets/images/teambuilding/sprites/Stratusoar-Jetwing-menu.webp")}
                    ]},
                    {
                    name: "Revenge Killer",
                    desc: `A Loomian whose purpose is to come in after one of your own Loomian has already been KO’ed or safely swaps out to then KO the opponent's Loomian.`,
                    loomian: [
                        {imageAlt: "Imperior", image: require("@/assets/images/teambuilding/sprites/Imperior-menu.webp")},
                        {imageAlt: "Revenine", image: require("@/assets/images/teambuilding/sprites/Revenine-menu.webp")},
                        {imageAlt: "Tahtab", image: require("@/assets/images/teambuilding/sprites/Tahtab-menu.webp")}
                    ]},
                    {
                    name: "Pivot",
                    desc: `Loomians that use moves that allow the player to switch Loomians during turns which helps maintain momentum. Offensive Pivots usually swap out before the opponents makes a move in order to get a Defensive Loomian in whereas a Defensive Pivot tries to be as slow as possible in order to be hit before swapping out, enabling a defensively weak Loomian to swap in damage-free.`,
                    loomian: [
                        {imageAlt: "Ursnac", image: require("@/assets/images/teambuilding/sprites/Ursnac-menu.webp")},
                        {imageAlt: "Ikazune", image: require("@/assets/images/teambuilding/sprites/Ikazune-menu.webp")},
                        {imageAlt: "Lantorch", image: require("@/assets/images/teambuilding/sprites/Lantorch-menu.webp")}
                    ]},
                    {
                    name: "Barter Users",
                    desc: `Loomians that hold an item that can cripple the opposition when bartered. For example, Tahtab can run Specialty Boots not only for a speed boost but also to disable defensive Loomians from accessing their entire utility.`,
                    loomian: [
                        {imageAlt: "Weaselin", image: require("@/assets/images/teambuilding/sprites/Weaselin-menu.webp")},
                        {imageAlt: "Metronette", image: require("@/assets/images/teambuilding/sprites/Metronette-menu.webp")},
                        {imageAlt: "Snagoop", image: require("@/assets/images/teambuilding/sprites/Snagoop-menu.webp")}
                    ]},
                    {
                    name: "Priority Abuser",
                    desc: `Loomians that use priority moves such as Shadow Sprint or Bait. Benefits of using a Priority Loomian include not needing to invest much in speed as these moves tend to go first.`,
                    loomian: [
                        {imageAlt: "Umbrat", image: require("@/assets/images/teambuilding/sprites/Umbrat-menu.webp")},
                        {imageAlt: "Ursoul", image: require("@/assets/images/teambuilding/sprites/Ursoul-menu.webp")},
                        {imageAlt: "Dyeborg", image: require("@/assets/images/teambuilding/sprites/Dyeborg-menu.webp")}
                    ]},
                    {
                    name: "Hazard Setter",
                    desc: `Hazard Setters are Loomians that set down hazards like Barbs or Icicle Trap to chip damage. This is especially useful against bulkier teams which require more damage to break through.`,
                    loomian: [
                        {imageAlt: "Gobbidemic", image: require("@/assets/images/teambuilding/sprites/Gobbidemic-menu.webp")},
                        {imageAlt: "Gargolem-Defense", image: require("@/assets/images/teambuilding/sprites/Gargolem-Defense-menu.webp")},
                        {imageAlt: "Dokumori", image: require("@/assets/images/teambuilding/sprites/Dokumori-menu.webp")}
                    ]},
                    {
                    name: "Hazard Removal",
                    desc: `Loomians that are able to remove hazards such as Barbs or Icicle Trap to prevent a build-up of chip damage from swapping in Loomians on hazards. Moves such as Tear Down or Burn Up can remove hazards however typings such as Toxic can remove poison barbs.`,
                    loomian: [
                        {imageAlt: "Lavafiend-Krakaloa", image: require("@/assets/images/teambuilding/sprites/Krakaloa-Lavafiend-menu.webp")},
                        {imageAlt: "Taoshinu", image: require("@/assets/images/teambuilding/sprites/Taoshinu-menu.webp")},
                        {imageAlt: "Fiscarna", image: require("@/assets/images/teambuilding/sprites/Fiscarna-menu.webp")}
                    ]},
                    {
                    name: "Stall Breaker",
                    desc: `A Loomian that possesses utility to hinder defensive Loomians. This may be with Provoke to prevent the use of support moves or Spite to cut an opponent’s Health in half.`,
                    loomian: [
                        {imageAlt: "Charonyx", image: require("@/assets/images/teambuilding/sprites/Charonyx-menu.webp")},
                        {imageAlt: "Cinnogre", image: require("@/assets/images/teambuilding/sprites/Cinnogre-menu.webp")},
                        {imageAlt: "Wintrix", image: require("@/assets/images/teambuilding/sprites/Wintrix-menu.webp")}
                    ]},
                ]
            }
        },
        methods: {
            toggleAnswer(index) {
                // Toggle the showDescription property of the clicked playstyle
                this.Roles[index].showDescription = !this.Roles[index].showDescription;
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
        width: 10rem;
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

</style>