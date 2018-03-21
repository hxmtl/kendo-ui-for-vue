<template>
<div v-kendo-validator>
  <h1>Add Employee</h1>
  <div>
    <label>Name: 
      <input id="name" name="name" 
      required 
      validationMessage="Field is required!" 
      v-model="employee.name"
      type="text" 
      class="k-textbox" />
    <span class="k-invalid-msg" data-for="name"></span>
    </label> 
  </div>
  <div>
    <label>Sales:
      <kendo-numerictextbox 
      type="number" 
      v-model.number="employee.sales" 
      title="Sales" 
      :format="'c'"
      :min="0"
      :decimals="2" />
    </label>
  </div>
  <div>
    <label>Birthdate: 
      <kendo-datepicker v-model="employee.birthdate"></kendo-datepicker>
    </label>
  </div>
    <div>
      <label>Country: 
       <kendo-dropdownlist
       v-model="employee.country"
       :data-source="['', 'Bulgaria', 'Belgium', 'USA', 'Germany', 'Japan']"></kendo-dropdownlist>
      </label>
  </div>
  <kendo-button @click="addHandler">Add</kendo-button>
</div>
</template>

<script>
import dataProvider from "./../data-provider.js";

export default {
  name: "AddEmployee",
  methods: {
    addHandler: function(e) {
      var validator = this.kendoValidator
      if(validator.validate()) {
        dataProvider.employees.push(this.employee);
        this.employee = {};
        console.log("Employee added.");
        this.$router.push("/");
      }
    }
  },
  data: function() {
    return {
      employee: {}
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
label {
  display: block;
}
</style>
