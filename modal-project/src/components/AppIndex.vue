<template>
  <ImageHeader :imageUrl="imageUrl" pageName="Home Page"/>
  <SideBar/>
  <main>
    <h1 style="text-align: center;">
      Welcome to the unofficial guide to Loomian Legacy PVP!
    </h1>
    <p>The Aim of this website is to aid players stepping into Loomian Legacy's Competitive Scene. 
      This website addresses how to Teambuild, build pvp Loomians, understanding cores and the different facilities (both ingame and online) that can help in your journey.
    </p>
    <p>This is an unofficial guide not endorsed by the Loomian Legacy developers but rather created by the community.
       We strive for information on this website to be correct and up to date; please don't hesitate to suggest information or report incorrect information. 
    </p>
    </main>
</template>

<script>
import SideBar from './SideBar.vue';
import ImageHeader from './Header.vue';

export default {
  name: 'App', 
  components: {
    ImageHeader,
    SideBar
  },
  data() {
    return {
      imageUrl: require("@/assets/images/headers/BattleColosseum.png"),
    }
  }
}
</script>
