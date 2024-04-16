<template>
    <h2 id="Cores">Cores</h2>
    <p>A Core is when 2 or More Loomians that support each other well, are combined. 
        In other words, they have good synergy with each other whether that be offensively, defensively or both. 
        Cores are great for starting off the creation of a team because it saves time by focusing on several Loomians, 
        allows you to closely analyze how Loomians work with each other and can save time by looking at pre-existing cores. 
    </p>
    <p>For example, Magamadire-Eruptidon and Ursnac have proven to be such a threatening core due to the speed control and defensive utility offered by Ursnac 
        and Insane Coverage and Damage Output credited to Magamadire-Eruptudon. 
        This toxic mix of Loomians that do well for their roles resulted in a change of Baffle’s effect and Magmadire-Eruptidon's Soul Burst Move.
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
            <h2> {{ coreType.Name }} </h2>
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
                CoreTypes: [
                    {
                    Name: "Offensive Cores", 
                    Cores: [{
                        Name: "HalvShaw (Halvantic + Shawchi)",
                        Description: `A formidable duo, these Loomians alone have great coverage preventing many walls from swapping in without taking a huge hit and together this offensive pressure only becomes scarier. 
                        Shawchi can comfortably use Pyrokinesis without concern for the likes of Searknight or Eleguana as Halvantic can hit them for SE using its STAB and almost-STAB Gnarly Gash. 
                        Given these two are quite slow, frail Loomians, Boots can quicken Halvantic while speed control/pivots help both get onto the field to cause chaos.`,
                        Loomians: [
                            {imageAlt: "Halvantic", image: "Halvantic"},
                            {imageAlt: "Shawchi", image: "Shawchi"},
                        ]},
                        {
                        Name: "FalkSoul (Falkyrie + Ursoul)",
                        Description: `Falkyrie plus Ursoul is best known for their combination of offensive moves giving very limited answers at any time. 
                        Falkyrie is able to set up Radiant Forecast and then swap (or rather pivot) into Ursoul to apply pressure as no Loomian can swap in without taking at least a neutral hit. 
                        Ursoul is also able to hit ranged tanks that would usually come in on Falkyrie as its high Matk is quite threatening especially when many are weak to the likes of Slap Down or Pep Jab/Quick Punch.`,
                        Loomians: [
                            {imageAlt: "Falkyrie", image: "Falkyrie"},
                            {imageAlt: "Ursoul", image: "Ursoul"},
                        ]},
                        {
                        Name: "ProtoBrat (Protogon + Umbrat)",
                        Description: `Initially, Protogon loved being paired up with Ursoul to make use of Chase Down to involuntary incapacitate ranged walls however, ever since the Chase Down nerf, all but one user became less scary: Umbrat. 
                        This often overlooked rat has Overshadow allowing Chase Down to once again become dark type. 
                        Umbrat has far from a good MAtk stat by todays standard but the boost from Overshadow as well as Chase Down's swap out bonus has allowed it to shine back into the light once more. 
                        Similar to FalkSoul, this core appreciates hazards for that extra damage as well as speed control/pivot for safe manoeuvring. `,
                        Loomians: [
                            {imageAlt: "Protogon", image: "Protogon"},
                            {imageAlt: "Umbrat", image: "Umbrat"},
                        ]},
                        {
                        Name: "NeverKnight (Nevermare + Searknight)",
                        Description: `This is core is best explained as "What X doesn't answer, Y does". 
                        Searknight is commonly recognised as a solid answer to Nevermare so naturally pairing it up with its counterpart helps expand attack coverage. 
                        An answer to opposing Searknights and Chartikis are appreciated. `,
                        Loomians: [
                            {imageAlt: "Nevermare", image: "Nevermare"},
                            {imageAlt: "Searknight", image: "Searknight"},
                        ]},
                        {
                        Name: "KaniTooth (Kanibo + Joltooth)",
                        Description: `Also known as Double Ambush, this core gets its name from the mutual ability: Ambush. 
                        Similar to the Move Chase Down, this ability allows moves to deal double the damage if a Loomian has been swapped in. 
                        This can help break down answers to both Loomians allowing for solid progression. 
                        Pivot support, Speed Control and Barbs to further break down Loomians is appreciated.`,
                        Loomians: [
                            {imageAlt: "Kanibo", image: "Kanibo"},
                            {imageAlt: "Joltooth", image: "Joltooth"},
                        ]},
                        {
                        Name: "ZueBadger (Zuelong + Barbadger)",
                        Description: `Similar to ProtoBrat, Zuelong can be answered by a variety of ranged walls however Barbadger makes use of this by being a melee wallbreaker. 
                        As a bonus, Dauntless (which gives a +1 MAtk if the opponent has an SE move) makes it easier to break common Zuelong answers like Pyrolen or Sedimars. 
                        Barbs plus Slow Pivot support helps make the most of this core. `,
                        Loomians: [
                            {imageAlt: "Zuelong", image: "Zuelong"},
                            {imageAlt: "Barbadger", image: "Barbadger"},
                        ]},
                        {
                        Name: "DeluGlyph (Deludrix + Pharoglyph)",
                        Description: `Deludrix does what Deludrix does and abuses its absurd collage of coverage by taking on Gargolem-D and Stratusoar while (Idiosyncratic) Pharoglyph can break Venolen, Taoshinu and Icigool. 
                        A defensive pivot is much appreciated to get either Offensive Loomian into the field and start their chaos.`,
                        Loomians: [
                            {imageAlt: "Deludrix", image: "Deludrix"},
                            {imageAlt: "Pharoglpyh", image: "Pharoglpyh"},
                        ]},
                        {
                        Name: "AceMiore (Wresolen + Cosmiore-Unleashed)",
                        Description: `In conjuction with Wresolen's Ace, Cosmiore-Unleashed can enter the field once Wresolen is down and make use of its doubled power. 
                        Common Answers to Cosmiore such as Stratusoar don't want to stay in long due to the colossal damage output compared to non-Ace Cosmiore. 
                        Wresolen can also break down defensive answers to Cosmiore before dropping out in order to make Cos-U's job a lot easier. 
                        This core offers very limited answers however some people may pair up Cosmiore-Unleashed with another Loomian. `,
                        Loomians: [
                            {imageAlt: "Deludrix", image: "Deludrix"},
                            {imageAlt: "Pharoglpyh", image: "Pharoglpyh"},
                        ]},
                        {
                        Name: "SpeciMiore (Meditoad + Cosmiore-Unleashed)",
                        Description: `To an extent, think of this as an upgrade from AceMiore. Specilization Meditoad beholds high potential damage with 1 or 2 moves that form deadly coverage. 
                        Once passed onto Cos-U, Stratusoar, Tyrecks and Tiklipse do NOT want to pick a fight with it. 
                        Giving Cosmiore Boots to abuse the single move it has helps with speed control while Meditoad can carry Mega Punch for those who resist its Psycho Blast. `,
                        Loomians: [
                            {imageAlt: "Meditoad", image: "Meditoad"},
                            {imageAlt: "Cosmiore-Unleashed", image: "Cosmiore-Unleashed"},
                        ]},
                        {
                        Name: "BunnArine (Bunnecki + Samarine)",
                        Description: `Samarine has a blatant 4x eletric weakness, thats quite obvious. 
                        However, we can turn this into a good thing by pairing Samarine with Bunnecki. 
                        With its Electric (and Light) Immunity, Bunnecki can come in freely when an electric attack is immininent. 
                        From there, Bunnecki can set up and start attacking. 
                        An answer to toxic types is appreciated as well a pivot to get either Loomian in. `,
                        Loomians: [
                            {imageAlt: "Bunnecki", image: "Bunnecki"},
                            {imageAlt: "Samarine", image: "Samarine"},
                        ]},
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
                        ]},
                        {
                        Name: "WresoTao (Wresolen + Taoshinu)",
                        Description: `Toashinu is best recognised as an adequate bequeather making use of sharpen and even a Rageful Plushie. 
                        Once setted up, This Loomian can pass on its somewhat concerning Matk stat to a more fearful utiliser: Wresolen. 
                        A reliable answer to mind types is preferred as well as Cosmiore can be inserted to make use of Ace once Wresolen has done its job. `,
                        Loomians: [
                            {imageAlt: "Wresolen", image: "Wresolen"},
                            {imageAlt: "Taoshinu", image: "Taoshinu"},
                        ]},
                        {
                        Name: "BoarNami (Boarrok + Luminami)",
                        Description: `Luminami is best recognised as a defensive pivot making us of its natural bulk, flash n' flee and its passive recovery through Power Napper. 
                        That being said, it can be paired up with virtually any frail Loomian who needs extra support when entering the battlefield. 
                        This variation pairs Luminami up with Boarrok so it can collect a +1 Matk and start rampaging. 
                        Answers to Wintrix, Deludrix, Kanibo and many other SE Loomians are appreciated.`,
                        Loomians: [
                            {imageAlt: "Boarrok", image: "Boarrok"},
                            {imageAlt: "Luminami", image: "Luminami"},
                        ]},
                        {
                        Name: "StratuNecki (Stratusoar + Bunnecki)",
                        Description: `It's no secret that Bunnecki isn't a favourable Loomian to use due to a sub-optimal stat spread and questionable movesets however there are some benefits that players may enjoy and Stratusoar can make it all the easier to use. 
                        Stratusoar helps bait out electric type loomians to dish out electric type attacks making it easier for bunnecki to enter the field and start its rampage. 
                        Stratusoar also offers hazard removal with gust which can clear the likes of icicle traps allowing bunnecki to swap in chip-free. `,
                        Loomians: [
                            {imageAlt: "Stratusoar", image: "Stratusoar"},
                            {imageAlt: "Bunnecki", image: "Bunnecki"},
                        ]},
                        {
                        Name: "NymErupt (Nymaurae + Eruptidon)",
                        Description: `Nymaurae can assert offensive pressure with a support-oriented set making it all the easier to pair it with a nuke such as Eruptidon. 
                        Eruptidon's best strengths can be attributed to being able to set up to use its amazing coverage of moves. 
                        From there, it can start wallbreaking and swap into Nymaurae once Loomians are within KO range. 
                        As a plus, Eruptidon can melts icicle traps which Nymaurae is weak to. `,
                        Loomians: [
                            {imageAlt: "Nymaurae", image: "Nymaurae"},
                            {imageAlt: "Eruptidon", image: "Eruptidon"},
                        ]},
                        {
                        Name: "TahMiore (Tahtab + Cosmiore-Cracked)",
                        Description: `Tahtab helps Cosmiore out by beating nearly every metal type (and provides an immunity to light) while Cosmiore can take advantage of Tahtab defensive answers such as Obsidrugon or Barblast. 
                        Tahtab can also make use of barter to cripple either's answers. 
                        Hazards, Hazard Removal and a Harvesect answer is highly advised.`,
                        Loomians: [
                            {imageAlt: "Tahtab", image: "Tahtab"},
                            {imageAlt: "Cosmiore-Cracked", image: "Cosmiore-Cracked"},
                        ]},
                        {
                        Name: "CharoSoul (Charonyx + Ursoul)",
                        Description: `Charonyx has shown its versatility in roles which helps it maintain offensive pressure whilst having a high defensive profile. 
                        That being said, it provides good synergy with Ursoul by shutting down the likes of Obsidrugon or Phagenaut. 
                        Ursoul can also help out Charonyx by hitting metal types for Super Effective. `,
                        Loomians: [
                            {imageAlt: "Charonyx", image: "Charonyx"},
                            {imageAlt: "Ursoul", image: "Ursoul"},
                        ]},
                        {
                        Name: "DreggoTiki (Dreggodyne + Chartiki)",
                        Description: `Dreggodyne is a formidable opponent with access to extreme setup using anomaly (with Draco Beam). 
                        With Wabalisc being one of the few that can stand up to it (with the ability Ignorant), Chartiki provides great cover for the ice thief. 
                        Additionally, Dreggodyne provides defensive utility against the likes of Vesperatu and Ursoul - two common users of dark type moves. `,
                        Loomians: [
                            {imageAlt: "Dreggodyne", image: "Dreggodyne"},
                            {imageAlt: "Chartiki", image: "Chartiki"},
                        ]},
                    ]},
                    {
                    Name: "Defensive Cores", 
                    Cores: [{
                        Name: "PyroLumiGool (Pyrolen + Luminami + Icigool)",
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
                        Name: "OxiNami (Oxidrake + Luminami)",
                        Description: `A very classic defensive core, as well variations such as OxiNamiSwol or OxiNamiToad, this also follows the principle of "What X doesn't answer, Y does" by covering eachothers weaknesses based on resistances and attack moves. 
                        Furthermore, Luminami provides slow pivot support while Oxidrake can use driving force to shuffle around the opponent's team. 
                        A barbs setter or offensive Loomian works well with this core. 
                        The addition of Swolder and Meditoad to the core can help provide speed control via tase/webbing, slap down, poison as well as (poison) barbs removal.  `,
                        Loomians: [
                            {imageAlt: "Oxidrake", image: "Oxidrake"},
                            {imageAlt: "Luminami", image: "Luminami"},
                        ]},
                        {
                        Name: "TundroBlast (Tundrolen + Barblast)",
                        Description: `This somewhat recent defensive core covers against the majority of Melee Attackers by utilising resistances. 
                        For example, Wresolen - who can break through tundrolen - can be dealt easily with barblast and Joltooth - which is SE against Barblast - can be stopped by Tundrolen. 
                        As you might have guessed, Ranged Attackers do invalidate this core especially Gummy Fiscarna who is immune to highly explosive Barblast. `,
                        Loomians: [
                            {imageAlt: "Tundrolen", image: "Tundrolen"},
                            {imageAlt: "Barblast", image: "Barblast"},
                        ]},
                        {
                        Name: "WabaGargD (Wabalisc + Gargolem-Defense)",
                        Description: `One look at both their Movesets shows they both have Barbs and Driving Force. 
                        Abusing this common utility means your opponent is in for some trouble with their Loomians constantly being swapped out and gradually chipped. 
                        Gargolem Defense also has access to Mudslide (for hazard removal) and Slap Down to disable a Loomians capability. 
                        Adding a Late-Game Sweeper helps clear the field faster as well as adding pressure through speed. `,
                        Loomians: [
                            {imageAlt: "Wabalisc", image: "Wabalisc"},
                            {imageAlt: "Gargolem-Defense", image: "Gargolem-Defense"},
                        ]},
                        {
                        Name: "ObsiPyro (Obsidrugon + Pyrolen)",
                        Description: `A slight modernisation of the the ObsiRecks core, this makes use of two extremely capable, meta tanks in the meta who can answers common threats in the meta such as Zuelong, Harvesect, Wintrix and Ursoul (amonst others). 
                        Obsidrugon can take on a more offensive presence with Drudge whilst Pyrolen has utility such as speed control and Peace of Mind to exert its own offensive pressure. 
                        An answer for Luminami, Gargolem-D and various attackers - that utilise weaknesses on lower defences - are appreciated. `,
                        Loomians: [
                            {imageAlt: "Obsidrugon", image: "Obsidrugon"},
                            {imageAlt: "Pyrolen", image: "Pyrolen"},
                        ]},
                        {
                        Name: "LumiFernix (Luminami + Infernix)",
                        Description: `Better known as Double Napper, this core abuses the mutual ability Power Napper by recovering health whenever swapping out. 
                        This allows for safe exchanging knowing your main core has gotten some of their health back. 
                        Luminami provides pivot support as always while Infernix can provide speed control, hazard removal or deal crazy damage back with Return to Sender. `,
                        Loomians: [
                            {imageAlt: "Luminami", image: "Luminami"},
                            {imageAlt: "Infernix", image: "Infernix"},
                        ]},
                        {
                        Name: "ObsiRecks (Obsidrugon + Tyrecks)",
                        Description: `A quick glance of Obsidrugon's weaknesses shows light ancient and metal with a lot of Loomians who share this type being ranged attackers. 
                        Tyrecks has been acknowledged for its great defensive typing allowing it to stay in and hit the likes of Falkyrie or Tiklipse. 
                        It also has the Melee Bulk to answer some Melee Attackers, that Obsidrugon may be unable to, such as Halvantic. 
                        Some Loomians like Ikazune, Luminami, Whippledriff (generally Ranged Attackers that hit Tyrecks for SE) can break through this core so add to it accordingly. `,
                        Loomians: [
                            {imageAlt: "Obsidrugon", image: "Obsidrugon"},
                            {imageAlt: "Tyrecks", image: "Tyrecks"},
                        ]},

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