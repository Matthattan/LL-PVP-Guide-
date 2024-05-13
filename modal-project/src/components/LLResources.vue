<template>
    <table>
        <div class="gallery" v-for="(resource, index) in resources" :key="index">
            <a target="_blank" :href="resource.link">
                <div class="image" :alt="resource.imageAlt" :style="{ backgroundImage: 'url(' + resource.image + ')' }"></div>
                <div class="caption">
                    <p class="desc">{{ resource.name }} by {{ resource.creator }}</p>
                </div>
            </a>
        </div>    
    </table>        
</template>
<script>
export default {
    name: 'LLResources',
    data() {
        return {
            resources: [
                {
                    name: "How to get PERFECT UP Loomians!", 
                    creator: "JamiyJamie", 
                    link: "https://www.youtube.com/watch?v=O3604XXmAHU", 
                    image: "https://i3.ytimg.com/vi/O3604XXmAHU/maxresdefault.jpg", 
                    imageAlt: "How to get PERFECT UP Loomians!"
                },
                {
                    name: "The ULTIMATE Guide To Rallying in Loomian Legacy!",
                    creator: "JamiyJamie",
                    link: "https://www.youtube.com/watch?v=5yNoCFWeHa8",
                    image: "https://i3.ytimg.com/vi/5yNoCFWeHa8/maxresdefault.jpg",
                    imageAlt: "The ULTIMATE Guide To Rallying in Loomian Legacy!",

                },
                {
                    name: "Loomian Legacy Beginner's Guide", 
                    creator: "i_eaturface", 
                    link: "https://youtube.com/playlist?list=PLyh6L-B-sEcYSvkPm7tKb1C3EZ__OZple&feature=shares", 
                    image: "https://i3.ytimg.com/vi/jbQn9tQMBhc/maxresdefault.jpg", 
                    imageAlt: "Loomian Legacy Beginner's Guide"
                },
                {
                    name: "Damage Calculator",
                    creator: "SauceSoy & i_eaturface",
                    link: "https://saucesoy.github.io/Damage-Calculator/",
                    image: require("@/assets/images/resourceThumbnails/DamageCalculator.png"),
                    imageAlt: "Damage Calculator"
                },
                {
                    name: "A FULL BREAKDOWN OF HOW TO USE THE DAMAGE CALCULATOR - A Beginner's Guide for Loomian Legacy PvP",
                    creator: "i_eaturface",
                    link: "https://www.youtube.com/watch?v=-9KCrlcM0bs",
                    image: "https://i3.ytimg.com/vi/-9KCrlcM0bs/maxresdefault.jpg",
                    imageAlt: "Damage Calculator"
                },
                {
                    name: "Loomian Legacy Unofficial Wikia",
                    creator: "Fandom",
                    link: "https://loomian-legacy.fandom.com/wiki/Loomian_Legacy_Wiki",
                    image: "https://cdn.discordapp.com/attachments/540729144061853738/977931639088898069/unknown.png?ex=662519cf&is=6612a4cf&hm=7c1b1ab902bd2b86146ef9433a6b2ee516e28548d43f0c0f898534ff81d24a74&",
                    imageAlt: "Loomian Legacy Unofficial Wikia"
                },
                {
                    name: "Coverage Calculator",
                    creator: "Mathwel17",
                    link: "https://scratch.mit.edu/projects/575159978/",
                    image: require("@/assets/images/resourceThumbnails/CoverageCalculator.png"),
                    imageAlt: "Coverage Calculator",
                },
                {
                    name: "Loomian Legacy Teambuilder",
                    creator: "BadGlowingDiamond",
                    link: "https://www.roblox.com/games/7224086316/Loomian-Legacy-Teambuilder-beta",
                    image: "https://t7.rbxcdn.com/06d7a653d11cde3c346163ecf5ac4509",
                    imageAlt: "Loomian Legacy Teambuilder",

                },
                {
                    name: "Free Sets Damage Calculator Set Data",
                    creator: "Vholtninja",
                    link: "https://docs.google.com/document/d/1pOIbtxnH89QiqAy5DKexT8bJbu8Y4cpj3swHs9vftcQ",
                    image: "https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png",
                    imageAlt: "Free Sets Damage Calculator Set Data",

                },
                {
                    name: "Typechart Teambuilder",
                    creator: "Rashaba",
                    link: "https://docs.google.com/spreadsheets/d/1Hva9nRXC1cbeiGWW5S8NU5_DqCnpL88lCObMkg_Lr8U/edit?usp=sharing",
                    image: "https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png",
                    imageAlt: "Typechart Teambuilder",
                }
            ]
        }
    }
}
</script>
<style scoped>

table {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: fit-content;
    flex-wrap: wrap;
    margin: auto;
    border: 2px black solid;
    border-radius: 5px;
    /*width: calc(4*294px);  each resource is 280px*/
    align-content: center;
}

.gallery {
    margin: 5px 5px;
    border: 1px solid #ccc;
    background-color: white;
    width: 280px;
    height: max-content;
    border-radius: 25px;
    text-align: center; 
    vertical-align: middle;
}

.gallery:hover {
    border: 1px solid #777;
    background-color: #ccc;
}

.gallery a {
    text-decoration: none;
    color: black;
}

.image {
    height: 160px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 25px 25px 0px 0px;
}

.desc {
    padding: 15px;
    text-align: left;
    font-size: 20px;
    height: 5rem;
    overflow: hidden;
}

@media screen and (max-width: 1920px) {
    table {
        grid-template-columns: 1fr 1fr 1fr;
        width: fit-content;
    }

    .gallery {
        width: 260px;
        height: auto;
    }

    .image {
        height: 160px;
        width: auto;
    }
}

@media screen and (max-width: 1400px) {
    table {
        grid-template-columns: 1fr 1fr;
        width: fit-content;
    }

    .gallery {
        width: 260px;
        height: auto;
    }

    .image {
        height: 160px;
        width: auto;
    }
}

@media screen and (max-width: 920px) {
    table {
        grid-template-columns: 1fr;
        width: fit-content;
    }

    .gallery {
        width: 260px;
        height: auto;
    }

    .image {
        height: 160px;
        width: auto;
    }
}

</style>
