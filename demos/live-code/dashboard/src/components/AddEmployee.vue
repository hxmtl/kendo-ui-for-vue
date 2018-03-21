<template>
<div>
  <h1>Add Employee</h1>
  <label>Name: <input v-model="employee.name" type="text"/></label>
  <label>Sales: <input v-model.number="employee.sales" type="number"></label>
  <button @click="addHandler">Add</button>
</div>
</template>

<script>
import dataProvider from './../data-provider.js'

export default {
  name: "AddEmployee",
  methods: {
    addHandler: function(e) {
      dataProvider.employees.push(this.employee);
      this.employee = {};
      console.log("Employee added.");
      this.$router.push('/');
    }
  },
  data: function() {
    return {
      employee: {}
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
