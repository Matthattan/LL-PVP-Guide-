<template>
    <ImageHeader :imageUrl="imageUrl" pageName="Resources"/>
    <SideBar/>
    <!-- Your main content here -->
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