<template>
    <button type="button" @click="toggleSidebar" id="sidebarButton" class="content" :class="{ 'show': showSidebar}"></button>
    <div class="sidebar" :class="{ 'show': showSidebar }">
        <nav>
            <a href="https://www.roblox.com/games/306964494/Loomian-Legacy">
                <img src='https://tiermaker.com/images/templates/loomian-legacy-osts-1572992/15729921647733889.png'>
            </a>    
            <ul>
                <li v-for="(item, index) in menuItems" :key="index">
                    <!-- Use RouterLink instead of anchor tag -->
                    <router-link :to="item.url">{{ item.label }}</router-link>
                    <router-view/>
                </li>
            </ul>
                <hr style="width: 90%;">
            <ul>
                <li v-for="(item, index) in footer" :key="index">
                    <a :href="item.url">{{ item.label }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'SideBar',
    data() {
        return {
            showSidebar: false,
            sidebarButtons: [
                '../assets/ArrowRight.png',
                '../assets/ArrowLeft.png'
            ],
            menuItems: [
                { label: 'Home', url: '/' },
                { label: 'Common Questions', url: '/CommonQuestions' },
                { label: 'Set Making', url: '/SetMaking' },
                { label: 'Resources', url: '/Resources'},
                { label: 'Credits', url: '/Credits'},
            ],
            footer: [
                { label: 'Repository', url: '#'},
                { label: 'Discord Server', url: '#'},
                { label: 'Discord Profile', url: '#'}
            ]
        }
    },
    methods: {
        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        },
    }
}
</script>
<style scoped>
        * {
            font-family: 'Russo One', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: black;
        }

        .sidebar {
            height: 100%;
            width: 20%;
            position: fixed;
            top: 0;
            left: -100%; /* Initially hidden */
            background-color: #154447;  
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
            color: #eba621;
            font-weight: bolder;
        }

        .sidebar nav img {
            width: 100%;
        }

        hr {
            width: 90%;
        }


        #sidebarButton {
            left: 20px;
            padding: 20px;
            transition: margin-left 0.7s ease; /* Smooth transition for content */
            margin-left: 0; /* Initially aligned with the viewport */
            position: fixed;
            top: 1rem;
            z-index: 2;
            background-image: url('../assets/images/sidebar/ArrowRight.png');
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: transparent;
            background-size: contain;
            border: none;
            height: 4rem;
            width: 4rem;
        }

        #sidebarButton.show {
            margin-left: 20%; /* Move content when sidebar is shown */
            background-image: url('../assets/images/sidebar/ArrowLeft.png');

        }
</style>