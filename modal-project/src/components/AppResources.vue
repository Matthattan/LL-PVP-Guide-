<template>
    <ImageHeader :imageUrl="imageUrl" pageName="Resources"/>
    <SideBar/>
    <main>
        <LLResources/>
    </main>
</template>
<script>
import SideBar from './SideBar.vue';
import ImageHeader from './Header.vue';
import LLResources from './LLResources.vue';

export default {
    name: 'App', 
    components: {
        ImageHeader,
        SideBar,
        LLResources,
    },
    data() {
        return {
            imageUrl: require("@/assets/images/headers/FerrixMansion.png"),
        }
    }
}
</script>