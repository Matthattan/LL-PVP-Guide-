<template>
    <div class="box">
        <div class="selection">
            <button v-for="(item, index) in items"
            :key="index"
            @click="switchTabs(item.name)">
            {{ item.buttonText }}
            </button>
        </div>
        <div v-for="(item, index) in items"
        :key="index"
        :id="item.name"
        class="description"
        :class="{ 'show': activeTab === item.name }">
            <template v-if="typeof item.description === 'string'">
                <p>{{ item.description }}</p>
            </template>
            <template v-else-if="typeof item.description === 'object'">
                <template v-for="(value, key) in item.description" :key="key">
                    <p>{{ value }}</p>
                </template>
            </template>
            <template v-else>
                <table>
                    <tr v-for="(row, rowIndex) in item.description" :key="rowIndex">
                        <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
                    </tr>
                </table>
            </template>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tabs',
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        // default tab to open
        activeTab: 'Normal Rally'
      };
    },
    methods: {
      switchTabs(name) {
        this.activeTab = name;
      }
    }
  };
  </script>
  
  <style scoped>
  * {
    font-family: 'Russo One', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
  }

  .box {
    margin: 20px uto;
    background-color: aqua;
    border-radius: 25px;
    min-width: 600px;
  }

  button {
    border: none;
    border-radius: 25px;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 17px;
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
  
  .show {
    display: block;
  }
  </style>
  