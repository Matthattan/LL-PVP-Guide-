<template>
    <div class="Clist">
        Content List
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
    props: {
        content: Array // Assuming content is an array of objects
    }
}

</script>
<style scoped>
    .Clist {
        background-color: rgb(87, 190, 204);
        border-radius: 25px;
        padding: 10px 5px 5px 10px;
        min-height: 100px;
    }

    .Clist li :hover {
        color: aqua;
    }

    * {
        text-decoration: none;
        color: black;
    }
</style>
