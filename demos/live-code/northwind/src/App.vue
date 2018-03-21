<template>
  <div id="app">
    <img src="./assets/logo.png">
    <kendo-grid ref="kendoGrid1" :dataSource="localDataSource" :sortable='true'>
    </kendo-grid>
  </div>
</template>

<script>
import Vue from "vue/dist/vue.js";
import { Grid, GridInstaller } from "@progress/kendo-grid-vue-wrapper";

Vue.use(GridInstaller);

export default {
  name: "app",
  components: {
    Grid
  },
  data: function() {
    return {
      localDataSource: [
        {
          ProductID: 1,
          ProductName: "Chai",
          UnitPrice: 18,
          UnitsInStock: 39,
          Discontinued: false
        },
        {
          ProductID: 2,
          ProductName: "Chang",
          UnitPrice: 17,
          UnitsInStock: 40,
          Discontinued: false
        },
        {
          ProductID: 3,
          ProductName: "Aniseed Syrup",
          UnitPrice: 10,
          UnitsInStock: 13,
          Discontinued: false
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
