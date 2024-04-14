<template>
    <button type="button" @click="togglecontentList" id="contentlistButton" class="content"></button>
    <div class="Clist" :class="{ 'show': showcontentList}">Content List
        <ol>
            <li v-for="(item, index) in content" :key="index">
                <a :href="'#' + item.id">{{ item.title }}</a>
                <ol v-if="item.subitems && item.subitems.length">
                    <li v-for="(subitem, subIndex) in item.subitems" :key="subIndex">
                        <a :href="'#' + subitem.id">{{ subitem.title }}</a>
                    </li>
                </ol>
            </li>
        </ol>
    </div>
</template>
<script>
export default {
    name: "ContentList",
    data() {
        return {
            showcontentList: false
        }
    },
    props: {
        content: Array // Assuming content is an array of objects
    },
    methods: {
        togglecontentList() {
            this.showcontentList = !this.showcontentList;
        },
    }
}

</script>
<style scoped>
    .Clist {
        background-color: rgb(87, 190, 204);
        border-radius: 25px;
        padding: 10px 5px 5px 10px;
        min-height: 100px;
        position: fixed;
        top: 20rem;
        left: -100%; /* Initially hidden */
        transition: left 0.5s ease;
        z-index: 2;
        width: 20%;
    }

    .Clist li :hover {
        color: aqua;
    }

    .Clist.show {
        left: 20px;
    }

    * {
        text-decoration: none;
        color: black;
    }

    #contentlistButton {
        left: 20px;
        padding: 20px;
        transition: margin-left 0.7s ease; /* Smooth transition for content */
        margin-left: 0; /* Initially aligned with the viewport */
        position: fixed;
        top: 5rem;
        z-index: 1;
        background-image: url('../assets/images/contentList/list-15-512.png');
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-color: transparent;
        background-size: contain;
        border: none;
        height: 4rem;
        width: 4rem;
    }
</style>
