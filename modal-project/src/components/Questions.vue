<template>
    <div>
        Click to reveal answers!
        <div v-for="(question, index) in questions" :key="index" class="container">
            <button @click="toggleAnswer(index)" class="question">{{ question.question }}</button>
            <div class="answer" v-if="question.showAnswer"> 
                <!-- Render SelectText component if the answer is 'SelectText', otherwise render the answer text -->
                <template v-if="question.question==''"></template>
                <template v-if="question.answer === 'SelectText'">
                    <SelectText/>
                </template>
                <template v-else-if="question.question === 'What is the Best Loomian for PVP?'">
                    <a href="https://discord.com/channels/549360766600347658/615582246170001409/1170024900459774062" target="_blank">{{ question.answer }}</a>
                </template>
                <template v-else>
                  {{ question.answer }}
                </template>
                <br>
                <img v-if="question.image" :src="question.image" :alt="question.imageAlt">
            </div>
        </div>
    </div>
</template>
<script>
import SelectText from './SelectText.vue';

export default {
    name: "Questions",
    components: {
        SelectText
    },
    data() {
        return {
        questions: [
            {
            question: `What is a PVP Loomian?`,
            answer: 
    `A PVP Loomian is characterized by the 'Set' it runs to battle against other real players. This includes - but is not limited to - Training Points, Moves, Abilities and Items.`,
            image: require('../assets/images/commonQuestions/FalkyrieSet.png'),
            imageAlt: "Falkyrie Set"
    },
            {
            question: `What is the Best Loomian for PVP?`,
            answer: 
    `There is no such thing as the Best Loomian. Many Loomians prove to be more viable than others but generally they all have their strengths and weaknesses. 

    Click here for a link to a Viability and Usage list.`,
            image: require('../assets/images/commonQuestions/NoBestSet.jpeg'),
            imageAlt: "There is no Best Loomian"
            },
            {
            question: `What are Training Points?`,
            answer: 
    `Training Points (or TPs abbreviated) are values that can increase any of the 7 Loomian Total Stats. At Level 50, 8 TPs can increase the total stat of a Loomian by 1. Energy works in Multiples of 4.

    In total, Loomians can have 500 Training Points but all stats only allow a maximum of 200 TPs.

    TPs can be earned by using Gummies, which offer 10 Points per use; Battling Trainers, whose Loomians will drop certain points and Battling wild Loomians, who will also drop TPs. Many multipliers are available to boost the amount of TPs earned from Loomians either in NPC battles or the wild. This Includes the Protein Shake, 2x Training Points Gamepass and the 5x Training Points Loomiboost.

    TPs can be redistributed on the statistics page of a Loomian either in 1s or 10s. Previously, TP Resets could be purchased in order to remove Training Points however this item has now been retired. `,
            image: require('../assets/images/commonQuestions/tpDemo.gif'),
            imageAlt: 'Training Points Demonstration'
            },
            {
            question: `What are Unique Points?`,
            answer: 
    `Unique Points (also known as UPs) increase the total stat of a Loomian. At level 50, 2 UPs are equivalent to 1 Total Stat point. 
            
    UPs can be increased by 10 using Shards which are obtained from defeating Corrupt Loomians, Purchasing them in event shops and Earning them from Trainer Levels (amongst other obtainment methods). 

    A Special Symbol is displayed which corresponds to the range of UPs a Loomian's stat has. The maximum - which is 40 - has 5 golden stars while the minimum - at 0 - is represented by a skull.

    Though UPs are generated randomly for Wild Loomians. Many types of Loomians can have maximised UP stats including: Roaming Loomians, Cosmiore, Nymaurae, Petrolith Loomians and Acting Strangely Loomians found in weather. 

    The use of Rallying can help pass down UP values. For more information, see Rally Feeds.`,
            image: require('../assets/images/commonQuestions/upStats.png'),
            imageAlt: 'UP Stats'
            },
            {
            question: `What is a Secret Ability?`,
            answer:
    `Secret Abilities are rarer than normal abilities and are available to the majority of Loomians. Though not always, they can offer a competitive edge. 

    In the wild, The Rally Charm enables Secret Ability encounters at 1/256. However in Rally Ranch, it starts off at 1/256 without the charm and can increase to 1/32 with a Secret Ability Leader and the Charm. To find out more about Secret Ability Odds, Check the Ability Odds Calculator.

    A Loomian with a Secret Ability will have a purple dot labelled 'secret'. Loomians cannot lose their Secret Ability status but the ability itself may change when it evolves.`,
            image: require('../assets/images/commonQuestions/saEvo.png'),
            imageAlt: 'Secret Ability Evolution'
            },
            {
            question: `What are Loomian Personalities?`,
            answer: 
    `Personalities act as multipliers on a Loomians total stats by increasing or decreasing it by 10% or 20%.

    In the wild, Loomians are only subject to two personalities (one positive, one negative) or one personality (either negative or positive including no stat boost). 

    However, Rallying a Loomian gives access to 3 Personalities (two positive, one negative or one positive, two negative) via Rally Totems.`,
            image: require('../assets/images/commonQuestions/personalityStats.png'),
            imageAlt: 'Personalities from SerXia'
            },
            {
            question: `What is Soul Burst?`,
            answer:
    `This recently added mechanic enables some Fully Evolved Loomians to undertake a new form, potentially change its typing, gain a different ability, unlock a powerful one-time move and see a change in base stats.

    Soul Bursting is available when a Loomian is holding its corresponding Burst Crystal and no other Loomian in the team has used it's Soul Burst. 

    Soul Crystals can be unlocked after beating the Altanthian City Battle Theatre and exploring the Lost City in Aranatta Trench.`,
            image: require('../assets/images/commonQuestions/SBLoomian.gif'),
            imageAlt: 'Soul Burst Loomian'
            },
            {
            question: `How does Priority work?`,
            answer: 
    `Priority refers to the order of Moves when Loomians battle. Usually, when Loomians use moves of the same priority, it depends on who has the faster speed which will decide which Loomian goes first (it becomes 50/50 if the speed stats are the same) however Moves like Dodge (+2 priority) or Quick Pounce (+1 priority) will always go first because of the nature of the move. 

    Contrarily, Moves like Driving Force (-6 Priority) or Return to Sender (-1 Priority) are forced to run after normal moves are used.

    In the case of Bane of Haste, where the order of Loomians moves goes from slowest to fastest, priority still takes affect but Loomians' speeds are compared from lowest to highest.`
            },
            {
            question: `What is a Check?`,
            answer: 
    `A Loomian is considered a check if it can threat a Knock Out on the opposing Loomian. However, this does not mean it can swap into said Loomian and can actually lose the matchup. A check can be either soft - where the chance of a Knock Out is slim to none - or hard - where a knockout is always guaranteed.`
            },
            {
            question: `What is a Counter?`,
            answer: 
    `A Loomian is considered a counter if it can enter the battlefield, under normal circumstances, and threaten a KO. 

    This is usually attributed to defensive loomians who possess major bulk and can sustain themselves with reliable recovery. Counters can be hard - where the opponent can deal little to no damage - or soft - where gradual damage can eventually lead to a counter being vulnerable.`,
            },
            {
            question: `How do you Read Damage Calculations?`,
            answer: `SelectText`
            }
        ]
        };
    },
    methods: {
        toggleAnswer(index) {
        this.questions[index].showAnswer = !this.questions[index].showAnswer;
        },
    }
};
</script>
<style scoped>
a {
  text-decoration: none !important;
  color: black;
}

.container {
  width: 100%;
}

.question {
  width: inherit;
  background-color: #004691;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 18px;
  text-align: left;
}

#text {
  width: 100%;
}

.answer {
  white-space: pre-wrap;
  margin-bottom: 1rem;
}

img {
  display: block;
  margin: auto;
  border-radius: 25px;
  width: 60%;
}
</style>
