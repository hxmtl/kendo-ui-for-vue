<template>
<div>
  <h1>Dashboard</h1>
  <kendo-datasource ref="sharedDataSource" :data="localData" :schema-model-fields="schemaModelFields">
  </kendo-datasource>
  <kendo-grid :data-source-ref="'sharedDataSource'" :sortable="true" :filterable="true">
        <kendo-grid-column field="name" title="Employee"></kendo-grid-column>
        <kendo-grid-column field="sales" title="Sales" type="number" :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column field="birthdate" title="Birthdate" type="date" :format="'{0: yyyy-MM-dd}'"></kendo-grid-column>
        <kendo-grid-column field="country" title="Country"></kendo-grid-column>
  </kendo-grid>
  <kendo-chart :title-text="'Employee Sales'"
               :data-source-ref="'sharedDataSource'"
               :series="series"
               :category-axis-field="'name'">
  </kendo-chart>
</div>
</template>

<script>
import dataProvider from './../data-provider.js'

export default {
  name: "Dashboard",
  data: function() {
    return {
      localData: dataProvider.employees,
      schemaModelFields: {
        name: { type: "string", title: "Employee" },
        sales: { type: "number", title: "Sales" },
        birthdate: {type: "date", title: "Birthdate"},
        country: {type: "string", title: "Country" }
      },
      series: [
        {
          field: "sales",
          name: "Sales in Units"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
