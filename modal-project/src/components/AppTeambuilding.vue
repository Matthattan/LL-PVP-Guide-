<template>
    <ImageHeader :imageUrl="imageUrl" pageName="Teambuilding"/>
    <SideBar/>
    <main>
        <ContentList id="Questions" :content="contentData"/>
        <h1>What is Teambuilding?</h1>
        <p>Team Building is the process of finding Loomians that work well with each other in a team so you can win pvp battles. 
            You may look at Loomians' weaknesses and how they are commonly used in the meta to make your team as effective as possible when trying to battle players. 
        </p>
        <p>Team Building can be broken down into many stages - starting from creating a singular PVP Loomian - in order to ease the planning of your team and design; 
            however, this page will cover the combining of Loomians to make a synergistic, capable team.
        </p>
        <h1>How should I build a Team?</h1>
        <p>First, you should understand some concepts in team building that can make choosing Loomians and understanding when to use certain Loomians easier to comprehend:
        </p>
        <Playstyles/>
        <Cores/>
        <Roles/>
    </main>
</template>
<script>
    import SideBar from './SideBar.vue';
    import ImageHeader from './Header.vue';
    import ContentList from './ContentList.vue';
    import Playstyles from './Playstyles.vue';
    import Cores from './Cores.vue';
    import Roles from './Roles.vue';

    export default {
        name: "App",
        components: {
            ImageHeader,
            SideBar,
            ContentList,
            Playstyles,
            Cores,
            Roles
        },
        data() {
            return {
                imageUrl: require("@/assets/images/headers/Judgements_Keep.webp"),
                contentData: [
                {
                    id: 'What',
                    title: 'What is Teambuilding?',
                },
                {
                    id: 'How',
                    title: 'How should I Build a Team?',
                    subitems: [
                        {id: `Playstyle`, title: `Playstyle`},
                        {id: `Cores`, title: `Cores`},
                        {id: `Roles`, title: `Roles`},
                    ],
                }],
                roles : [{
                    name: "Wallbreaker",
                    desc: `A Loomian in which can deal heavy damage to the opponent’s Defensive Loomians. Most commonly, a Loomian that attacks the opponent’s weaker defense is used for the initial damage output however using a set-up move like Brawn Boost or Magnify can also aid wallbreaking.`,
                    loomian: [
                        {imageAlt: "Obsidrugon", image: require("@/assets/images/teambuilding/sprites/Obsidrugon-menu.webp")},
                        {imageAlt: "Eleguana", image: require("@/assets/images/teambuilding/sprites/Eleguana-menu.webp")},
                        {imageAlt: "Stratusoar", image: require("@/assets/images/teambuilding/sprites/Stratusoar-menu.webp")}
                    ],
                    },
                    {
                    name: "Cleaner",
                    desc: `A Loomian whose main job is to KO Loomians by picking off Loomians with lower HP at late stages of the game. They can also have access to Set-Up moves to hit harder however this isn't a necessity.`
                    },
                    {
                    name: "Set-Up Sweeper",
                    desc: `A Loomian who functions best after they've set up and can deal heavy amounts of damage to the opposing team. Being fast to avoid being revenge-killed is also recommended.`
                    },
                    {
                    name: "Revenge Killer",
                    desc: `A Loomian whose purpose is to come in after one of your own Loomian has already been KO’ed or safely swaps out to then KO the opponent's Loomian.`    
                    },
                    {
                    name: "Wall",
                    desc: `A Loomian whose purpose is to halt the progress of the opponent. Usually by being very bulky and utilizing type interactions to take as little damage as possible and chip down the opponent. They can also make opportunities to continue or create momentum through some kind of utility.`   
                    },
                    {
                    name: "Tank",
                    desc: `A Loomian whose purpose is to halt the progress of the opponent. Usually by being bulky and utilizing its bulk to take hits to create opportunities to continue or create momentum through its offensive pressure.`
                    },
                    {
                    name: "Pivot",
                    desc: `Loomians that use moves that allow the player to switch Loomians during turns which helps maintain momentum. Offensive Pivots usually swap out before the opponents makes a move in order to get a Defensive Loomian in whereas a Defensive Pivot tries to be as slow as possible in order to be hit before swapping out, enabling a defensively weak Loomian to swap in damage-free.`
                    },
                    {
                    name: "Barter Users",
                    desc: `Loomians that hold an item that can cripple the opposition when bartered. For example, Tahtab can run Specialty Boots not only for a speed boost but also to disable defensive Loomians from accessing their entire utility.`
                    },
                    {
                    name: "Priority Abuser",
                    desc: `Loomians that use priority moves such as Shadow Sprint or Bait. Benefits of using a Priority Loomian include not needing to invest much in speed as these moves tend to go first.`
                    },
                    {
                    name: "Hazard Setter",
                    desc: `Hazard Setters are Loomians that set down hazards like Barbs or Icicle Trap to chip damage. This is especially useful against bulkier teams which require more damage to break through.`
                    },
                    {
                    name: "Hazard Removal",
                    desc: `Loomians that are able to remove hazards such as Barbs or Icicle Trap to prevent a build-up of chip damage from swapping in Loomians on hazards. Moves such as Tear Down or Burn Up can remove hazards however typings such as Toxic can remove poison barbs.`
                    },
                    {
                    name: "Stall Breaker",
                    desc: `A Loomian that possesses utility to hinder defensive Loomians. This may be with Provoke to prevent the use of support moves or Spite to cut an opponent’s Health in half.`
                    }
                ]     
            }
        },
    }
</script>
<style>
    * {
        font-family: 'Russo One', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: black;
    }

    h1 {
        text-align: center;
    }

    main {
        width: 60%;
        margin: auto;
        margin-bottom: 200px;
    }

</style>