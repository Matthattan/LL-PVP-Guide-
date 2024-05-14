<template>
    <h1 id="Set_Examples">Set Examples</h1>
    <p>Here are some basic explanations of both an offensive and defensive set to show just how easy it is to create basic Loomian PVP Sets:</p>
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
            <template v-for="(Text, Index) in Rally.Description" :key="Index">
                <template v-if="isImagePath(Text)">
                    <img class="image" :src="Text">
                    <br>
                </template>
                <template v-else-if="Text == '<br>'">
                    <br>
                </template>
                <template v-else>
                    <p>{{ Text }}</p>
                </template>
            </template>   
        </div>
    </div>
</template>
<script>
    export default {
        name: 'SetExamples',
        data() {
            return {
                Items: [
                    {
                    Name: "Offensive Set - Example 1", 
                    Description: [                        
                        `Ever since it debuted as the Weather Loomian for Dense Fog, Charonyx has received divisive recommendations for how it should be run. Charonyx possesses utility allowing it to thrive either defensively or offensively however this showcase will take a look at its offensive capabilities.`,
                        `Some may wonder why Charonyx is used as either a defensive Loomian or offensive and its easy to see why when glancing at its Base Stats. 2 of its highest stats are its Ranged Attack (122) and Ranged Defense (106).`,
                        require("@/assets/images/setMaking/OffensiveSet1/BaseStats.png"),
                        `Despite Charonyx having a low health - minimising the amount of hits it can take - and low speed - enabling it to be revenge-killed fairly easily, it does also possess a high energy stat of 101 allowing it to dish out many moves before needing to rest. As for Charonyx’s melee side, it has a 96 Melee Defence stat - which is great but won’t be a main focus - and a Melee Attack stat of 48 - not amazing but this stat won’t be used. `,
                        `Another reason for the split of how Charonyx is run is its type effectiveness. Defensively, its immune to Spirit and Brawler, has a resistance for Fire, Electric and Toxic and is only weak to Metal types. Offensively, considering its movepool, it can hit a lot of Loomians for Neutral Effectiveness save for some light types. However, this won’t be a major problem as we’ll see in its movepool.`,
                        require("@/assets/images/setMaking/OffensiveSet1/TypeEffectiveness.png"),
                        `Considering that we know Charonyx has a slow Speed stat, a low Melee Attack stat and we want to make use of its plentiful Ranged Attack stat, Very Smart Frail Sluggish is the ideal personality we’ll be using. Furthermore, this personality doesn’t decrease either of its defences allowing Charonyx to take a few hits either to set up or to underspeed.`,
                        `Two of its Three abilities are generally accepted as viable in PVP: Prismatic and Reaper. Prismatic is especially helpful for denying light types such as another Charonyx, other Luminamis or Jellusas. Reaper, on the other hand, supports Charonyx’s longevity by replenishing 25% of its health after a knockout or doubling to 50% if the opposing Loomian was a light type. Due to it being a normal ability and therefore easier to access, we’ll use Prismatic.`,
                        require("@/assets/images/setMaking/OffensiveSet1/Prismatic.png"),
                        `Another massive reason why Charonyx is considered a powerful Loomian today’s meta is its overwhelmingly powerful array of moves. From priority with Lightspeed Ray to the support move Spite which cuts enemies’ health in half. Ironically, this vast movepool is actually a disadvantage because Charonyx can’t run all the moves it would like to run simultaneously. Nova Blast is chosen as our main Light ATB Move due to its high strength to energy cost ratio and the chance to lower the opponent’s Ranged Attack by one stage, convenient for other ranged attackers.`,
                        `Frost Beam is a must-have on Charonyx because - otherwise - it gets walled by Loomians immune to its other moves such as Tiklipse, Eleguana and other Charonyxes. It also has a 10% chance to freeze the opponent which can drain their energy.`,
                        `Spite, as mentioned previously, reduces the opponent’s current health by 50% which eliminates a lot of popular defensive loomians from stalling out Charonyx such as Pyrolen and Venolen.`,
                        `Lastly, despite its adequate Ranged Attack stat and because it is an offensive Loomian, Charonyx should carry a set-up move such as Magnify which further improves its offensive pressure.`,
                        `This is only one of many movesets that Charonyx can use so try swapping out attacks for others.`,
                        require("@/assets/images/setMaking/OffensiveSet1/Moveset.png"),
                        `First and foremost, 200 Ranged Attack is a must for any offensive loomian - or whichever attacking stat it prioritises. `,
                        `20 Energy helps charonyx reach a benchmark of 270 which lets it fire off: 2 Magnifies, 4 Spites and 4 Frost Beams.`,
                        `200 Health, along with 48 Melee Defence, makes Hunder’s Mega Chomp a 3HKO and 32 speed outspeeds a 0 speed Sluggish Sedimars.`,
                        require("@/assets/images/setMaking/OffensiveSet1/TrainingPoints.png"),
                        `Charonyx can make good use of a rageful plushie given its high Ranged Defence Stat able to take on a super effect attack and works well with Health Amulet for longevity however, this set will use Light Essence for an increase in damage for its Light Type Moves.`,
                    ]},
                    {
                    Name: "Offensive Set - Example 2", 
                    Description: [
                        `At first glance, Hunder’s stats don’t seem special apart from its great speed of 116 which still holds potential in the current meta. Its Melee Attack sits at 94 while its Ranged attack is 43. Both of its defences are not exactly abundant with its Melee Defence and Ranged Defence being 83 and 69 respectively. This isn’t a huge hindrance considering Hunder is used offensively (and has the speed to avoid being outsped). Hunder’s energy is 84 which allows it to feasibly reach the 250 benchmark. Finally its Health is 78 which is quite “middle in the pack” however this isn’t a big matter.`,
                        require("@/assets/images/setMaking/OffensiveSet2/BaseStats.png"),
                        `Hunder is a Metal (like most Sepharite City Loomians) and Electric type which means it has a quad weakness to Earth and a normal weakness to Fire, Water and Brawler. However, quite unexpectedly, it does possess some resistances such as Ice, Bug, Ancient and Mind. It also has 2 major resistances being Metal and Air.`,
                        require("@/assets/images/setMaking/OffensiveSet2/TypeEffectiveness.png"),
                        `Offensively, on the contrary, taking into account its relevant moves, Hunder can hit nearly every Loomian for at least neutral save for a couple of fire types.`,
                        `Given Hunder is a Melee Attacker, it makes sense to use the positive personality Brawny. However, despite its already great speed stat, it does sit between other Loomians who would want to outspeed Hunder who either have the same speed stat or are only slightly below. For this reason, its highly recommended to run Nimble`,
                        `As for the negative ability, Very Clumsy will be used due to its uselessness.`,
                        `Hunder’s Melee Attack is decent for the most part however it can be improved so an ability that increases damage output would be greatly helpful. Brute Force does increase damage output by 30% at the cost of secondary effects but Power Jaw takes this a step further by increasing damage by 50% for all biting moves. For this reason, and also because a lot of Hunder’s best moves are biting-based, we will use Power Jaw.`,
                        require("@/assets/images/setMaking/OffensiveSet2/PowerJaw.png"),
                        `As mentioned previously, Hunder has a lot of biting moves such as Blaze Chomp, Vice Jaws, Thunder Chomp etc. The specific combination we’ll choose is Vice Jaws, Thunder Chomp, Chilly Chomp and Blaze Chomp.`,
                        `Vice Jaws prevents the target from using the same move for more than two moves and acts as one of Hunder’s ATB moves. Thunder Chomp enables Hunder to hit water types as well as other metal types. Chilly Chomp is extremely helpful against Earth types as Hunder is 4x weak to them. Finally, Blaze Chomp helps hit dark types, metal types who have an electric immunity and generally any Loomian that doesn’t get hit by the other 3 moves.`,
                        require("@/assets/images/setMaking/OffensiveSet2/Moveset.png"),
                        `Hunder follows the simple “200 200 100” pattern by having 200 Melee Attack, 200 Speed, 52 Energy and 48 Health. `,
                        `200 Melee Attack for maximum damage output, 200 Speed speedties Nimble Dorogo, outspeeds Very Nimble Garlash, 52 Energy gives 5 Vice Jaws and 48 Health acts as leftovers`,
                        require("@/assets/images/setMaking/OffensiveSet2/TrainingPoints.png"),
                        `Hunder is all about powerful damage - and it also appreciates its diverse moveset. That’s why Hunder will be running Power Cuffs. The amount of TPs invested into Energy that was described earlier takes this into account so Hunder can still pull off quite a few moves before needing to regain energy.`,
                    ]},
                    {
                    Name: "Defensive Set - Example 1", 
                    Description: [
                        `Introduced with Lotusun Beach in Patch 7, Barblast is one of the evolutions for Pwuff. It became an instant favourite given the utility it offered and therefore high viability, especially over its Melee-Attacking Counterpart.`,
                        `Barblast’s defensive nature in the meta is quite obvious when you notice its 96 Health, 102 Melee Defense and 93 Ranged Defence. Though its Energy and Ranged Attack - 83 and 89 respectively - is less than preferred, they’re still usable. Barblast’s speed is at a depressing 37 but this is only expected given the maximisation of bulk. `,
                        require("@/assets/images/setMaking/DefensiveSet1/BaseStats.png"),
                        `Barblast has a respectable 3 weaknesses (being Electric, Earth and Mind) and 5 resistances (Fire, Water, Ice, Metal and Brawler). Melee Attackers such as Kanibo, Vesperatu, Garlash and even Obsidrugon struggle against Barblast given its typing. There are some Loomians that Barblast can act as a hard check against given the scenario however these will be mentioned later on.`,
                        require("@/assets/images/setMaking/DefensiveSet1/TypeEffectiveness.png"),
                        `Additionally, since Barblast is a toxic type, it has the ability to clear poison barbs from your side of the field.`,
                        `Given Barblast excels in Melee Defense and Health, Very Robust Frail Sluggish will be used. This increases Melee Defense by 20% whilst decreasing its Melee Attack and Speed respectively by 10%. Given these two stats are below mediocre, we can afford to decrease them further.`,
                        `Alternatively, we could utilize Clever in order to check Cephalops, Ikazune and many other ranged attackers that Barblast can hit for super effectiveness. However, for this demonstration, we’ll be sticking with Very Robust.`,
                        `To increase the damage output from its 89 Ranged Attack, High Explosive boosts Barblast’s explosive moves (such as Toxiblast and Water Bomb) by 50%. There is a downside to this ability where secondary effects are removed - similar to brute force - but this isn’t a massive downside.`, 
                        require("@/assets/images/setMaking/DefensiveSet1/HighlyExplosive.png"),
                        `Toxic Spines, an ability that gives the chance for an attacker to be poisoned when using a contact move on Barblast, can also be used however some may find the odds of this ability not worth it. We’ll go ahead with the Secret Ability. `,
                        `Barblast isn’t short of moves when it comes to its movepool. Since we are using High Explosive, Toxiblast and Water Bomb are the most obvious choices for ATB. Because This is a defensive loomian, recovery is a must. Rejuvenate will be chosen because of the high amount of health it can return. Finally, for the fourth move, various utility moves can be used but - disappointingly - we can’t choose them all. Poison helps cripple and break down Loomians who stand in Barblast’s way while Icicle Traps help exert pressure due to limiting swap-ins. Power Focus allows Barblast to set up allowing it to hit harder and make it less likely to hit weakly. This set will use Power Focus however any of the three are valid`,
                        require("@/assets/images/setMaking/DefensiveSet1/Moveset.png"),
                        `200 Health and 200 Melee Defense naturally seems the way to go with Barblast given how Melee Bulky we want it to be, allowing it to soak up as much damage as possible from previously mentioned melee attackers.`,
                        `Despite a somewhat suboptimal energy stat, we can invest 60 Training Points into Energy to reach 250 Total Points which enables Barblast to use 3 Rejuvenates, 3 Water Bombs and 1 Toxiblast. 250 is a great benchmark energy stats so this strategy can be applied to a plethora of Loomians. `,
                        `As for the remaining 40 TPs, we can insert them into the Ranged Defense stat in order to increase our bulk on the less defensive side; investing into the Ranged Attack stat is also an option.`,
                        require("@/assets/images/setMaking/DefensiveSet1/TrainingPoints.png"),
                        `There’s a few options to our disposal when it comes to what Barblast will be holding. Energy Orb is very helpful to conserve energy and reduce the energy cost of your moves, especially since Barblast will click Rejuvenate, a move with 72 energy cost, quite often. If preserving energy isn’t a worry for you, Heavy Armour helps strengthen Barblast’s Melee Defense. This will hinder your energy stat leading to only 3 Rejuvenates being available at 250 energy so keep this in mind.`,
                        `Relating to the type effectiveness section, Barblast can find itself in tricky matchups while being able to hit the opponent super effectively i.e. Ikazune, Harvesect and Cephalops. In these situations, the respective pearl - which halves the strength of a move of the corresponding type - can enable Barblast to sustain itself and win in a 1v1. Be cautious, since pearls are a one-use item.`,
                    ]},
                    {
                    Name: "Defensive Set - Example 2",
                    Description: [
                        `Despite appearing right at the beginning of the game, Gastroak was considered as an absolute failure and was largely forgotten by the community; however, with the introduction of Soul Burst, it shot up in usage due to its elite utility as a defensive Loomian.`,
                        `Terraform-Gastroak’s base stats are a breathtaking upgrade from its normal form. A 140 Health stat, along with a 140 Ranged Defence stat, allows it to sponge many hits. It has a respectable Ranged Attack stat of 105 and an adequate energy stat of 88. On the other hand, Terraform-Gastroak’s Melee side is quite middling with a 60 Melee Attack stat and 45 Melee Defence stat but this is fine, due to Gastroak not needing to rely on them. As for its 65 Speed stat, it's a fair compromise given its monstrous stats. `,
                        require("@/assets/images/setMaking/DefensiveSet2/BaseStats.png"),
                        `Generally, Plant isn’t seen as a good typing due to its interactions but, along with its earth typing gained from Soul Burst, Terraform-Gastorak does boast 2 immunities (light and electric) and an earth resistance. Conversely, Terraform-Gastroak has a 2x weakness to Fire, Dark and Bug and a quad weakness to Ice (Though this will be further touched upon in the Ability section).`,
                        require("@/assets/images/setMaking/DefensiveSet2/TypeEffectiveness.png"),
                        `Given its incredibly bulky nature by having a high Health and Ranged Defense stat, Terraform-Gastroak can use Very Clever Frail Sluggish. Terraform-Gastroak also has the utility to support this type of set. The negative personalities are chosen because they’re low and therefore won’t be used much.`,
                        `Terraform-Gastroak has access to only one ability: Insulated which not only turns its quad weakness to ice into a normal weakness but also makes Fire type attacks neutral. Despite this, it's recommended to run Ungracious Host as a normal Gastroak to deter any health-draining move.`,
                        require("@/assets/images/setMaking/DefensiveSet2/Ability.png"),
                        `Stratagem is a no brainer with a Ranged Defense stat of 140, allowing it to exert offensive pressure whilst remaining defensive. Tamp, which increases its Melee Defence and Ranged Defence, is also helpful in making Gastroak deal more damage with stratagem whilst also improving its Defence stats`,
                        `Poison is also a very potent move for asserting pressure onto the opponent especially if they do try to swap into a resist if they’re expecting you to use Stratagem.`,
                        `Lastly, Photosynthesis is a must-have on Gastroak just like how any other defensive Loomians likes reliable recovery. As a bonus, it has an animation allowing you to animation stall in front of your opponent.`,
                        require("@/assets/images/setMaking/DefensiveSet2/Moveset.png"),
                        `200 Health and 200 Ranged Defence makes Gastroak as tanky as possible allowing it to not only take as many hits as possible but also increase its damage output with Stratagem.`,
                        `20 Energy can be used for 5 Stratagems and 2 Tamps (or Poisons).`,
                        `56 Speed enables it to outspeed Ursoul and 24 Melee Defence ensures a Blaze Chomp from Sedimars is a 4 hit KO - which would hit Gastroak for neutral effectiveness.`,
                        require("@/assets/images/setMaking/DefensiveSet2/TrainingPoints.png"),
                        `Of course, since this is a Soul Burst Loomian, it will be running its respective Burst Crystal: Gastroburst. This can be seen as disadvantageous since any other defensive loomian could hold a heavy shield/armour or mysterious dust however there really isn’t an alternative.`,
                        require("@/assets/images/setMaking/DefensiveSet2/Gastroburst.png"),
                    ]}
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
        min-width: 280px;
    }

    .selection {
        padding: 10px;
        background-color: azure;
        border-radius: 25px 25px 0px 0px;
    }

    .selection button {
        margin: 5px 10px;
    }

    .description {
        display: none;
        padding: 5px 2%;
    }

    .image {
        display: grid;
        margin: auto;
        max-width: 800px;
        width: 60%;
        min-width: 260px;
        border-radius: 10px;
    }
</style>