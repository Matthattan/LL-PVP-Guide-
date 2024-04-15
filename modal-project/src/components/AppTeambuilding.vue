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
        <h2>Playstyle</h2>
        <p>A Playstyle - colloquially known as a Team Archetype, is the general strategy when using a team. Some Play Styles that you may see in the competitive scene include:
        </p>
        <Playstyles/>
        
        <h2>Cores</h2>
        <p>A Core is when 2 or More Loomians that support each other well, are combined. 
            In other words, they have good synergy with each other whether that be offensively, defensively or both. 
            Cores are great for starting off the creation of a team because it saves time by focusing on several Loomians, 
            allows you to closely analyze how Loomians work with each other and can save time by looking at pre-existing cores. 
        </p>
        <p>For example, Magamadire-Eruptidon and Ursnac have proven to be such a threatening core due to the speed control and defensive utility offered by Ursnac 
            and Insane Coverage and Damage Output credited to Magamadire-Eruptudon. 
            This toxic mix of Loomians that do well for their roles resulted in a change of Baffle’s effect, 
        </p>
        <h2>Roles</h2>
        <p>A Role is the function that a Loomian plays in a team. 
            Roles can be offensive or defensive in nature and many Loomians may switch what role they serve based on the set they run. 
            Furthermore, a Loomian may serve as multiple roles however this isn’t always the case due to Limited Moves and TPs.
        </p>
        <ul>
            <li v-for="(item, index) in roles" :key="index">
                <strong>{{ item.name }}</strong> - {{ item.desc }}
            </li>
        </ul>

    </main>
</template>
<script>
    import SideBar from './SideBar.vue';
    import ImageHeader from './Header.vue';
    import ContentList from './ContentList.vue';
    import Playstyles from './Playstyles.vue';

    export default {
        name: "App",
        components: {
            ImageHeader,
            SideBar,
            ContentList,
            Playstyles
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
                    title: 'How should I Build a Team??',
                    subitems: [
                        {id: `Playstyle`, title: `Playstyle`},
                        {id: `Cores`, title: `Cores`},
                        {id: `Roles`, title: `Roles`},
                    ],
                }],
                roles : [{
                    name: "Wallbreaker",
                    desc: `A Loomian in which can deal heavy damage to the opponent’s Defensive Loomians. Most commonly, a Loomian that attacks the opponent’s weaker defense is used for the initial damage output however using a set-up move like Brawn Boost or Magnify can also aid wallbreaking.`
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
        font-size: 20px;
        width: 60%;
        margin: auto;
        margin-bottom: 200px;
    }

</style>