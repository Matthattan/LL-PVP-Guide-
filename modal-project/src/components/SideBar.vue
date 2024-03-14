<template>
    <div class="content" :class="{ 'show': showSidebar }">
        <button @click="toggleSidebar" id="sidebarButton">{{ sidebarText }}</button>
    </div>
    <div class="sidebar" :class="{ 'show': showSidebar }">
        <nav>
            <a href="https://www.roblox.com/games/306964494/Loomian-Legacy">
                <img src='https://tiermaker.com/images/templates/loomian-legacy-osts-1572992/15729921647733889.png'>
            </a>    
            <ul>
                <li v-for="(item, index) in menuItems" :key="index">
                    <a @contextmenu.prevent="changeText" :href="item.url">{{ item.label }}</a>
                </li>
                <hr style="width: 90%;">
                This is just a fan page!
            </ul>
        </nav>
    </div>
    
</template>
<script>
export default {
    name: 'SideBar',
    data () {
        return {
            showSidebar: false,
            sidebarText: '>',
            menuItems: [
                { label: 'Home', url: '#' },
                { label: 'Common Questions', url: '#' },
                { label: 'Set Making', url: '#' },
                { label: 'Contact', url: '#' },
                { label: 'Credts', url: '#'}
            ]
            }
        },
        methods: {
            toggleSidebar() {
                this.showSidebar = !this.showSidebar;
                this.sidebarText = this.showSidebar ? '<' : '>';
            },
            highlightText(item) {
                item.color = "red";
            },
            changeText() {
                this.innerHTML = "Hello"
            }
        }
    }
</script>
<style scoped>
        .sidebar {
            height: 100%;
            width: 20%;
            position: fixed;
            top: 0;
            left: -100%; /* Initially hidden */
            background-color: #154447;  
            /*background-color: rgb(139, 122, 25);*/
            transition: left 0.5s ease;
            z-index: 2; /* Set a higher z-index value */
        }

        .sidebar.show {
            left: 0; /* Show sidebar */
        }

        .sidebar nav ul {
            list-style-type: none;
            padding: 0;
        }

        .sidebar nav ul li {
            padding: 10px;
        }

        .sidebar nav ul li a {
            color: white;
            text-decoration: none;
        }

        .sidebar nav ul li a:hover {
            color: yellow;
            font-weight: bolder;
        }

        .sidebar nav img {
            width: 100%;
        }

        .sidebar button {
            left: 200px;
        }

        .content {
            padding: 20px;
            transition: margin-left 0.7s ease; /* Smooth transition for content */
            margin-left: 0; /* Initially aligned with the viewport */
            position: fixed;
            top: 2rem;
            z-index: 2;
        }

        .content.show {
            margin-left: 20%; /* Move content when sidebar is shown */
        }

        #sidebarButton {
            border: 3px solid black;
            border-radius: 50%;
            background-color: white;
        }
        
        hr {
            width: 90%;
        }

</style>