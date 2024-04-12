<template>
    <div class="box">
        <div class="selection">
            <button v-for="(Rally, Index) in Items" 
            :key="Index" 
            @click="SwitchTabs(Rally.Name)">
            {{ Rally.Name }}
        </button>
        </div>
        <div class="description" :class="{ 'show' : Rally.Name === 'Normal Rally'}" 
        v-for="(Rally, Index) in Items" 
        :key="Index" 
        :id="Rally.Name">
            <p v-for="(Text, Index) in Rally.Description" :key="Index">
                {{ Text }}
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Tabs',
        data() {
            return {
                Items: [
                    {Name: "Normal Rally", 
                    Description: [
                        "Hello1",
                        "Hello2"
                    ]
                    },
                    {Name: "Reverse Rally", 
                    Description: [
                        "Hello3",
                        "Hello4"
                    ]},
                    {Name: "Indirect Rally", 
                    Description: [
                        "Hello5",
                        "Hello6"
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
                document.getElementById(Name).style.display = "grid";
            }

        }
    }
</script>
<style>
    .box {
        margin-top: 20px;
        background-color: aqua;
        border-radius: 25px;
    }

    .selection {
        padding: 10px 10px;
        background-color: azure;
        border-radius: 25px 25px 0px 0px;
    }

    .selection button {
        margin: 0px 10px;
    }

    .description {
        display: none;
        padding: 50px;
    }

    .show{ 
        display: block;
    }
</style>