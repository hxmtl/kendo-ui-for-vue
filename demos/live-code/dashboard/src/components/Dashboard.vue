<template>
<div>
  <h1>Dashboard</h1>
  <kendo-datasource ref="sharedDataSource" :data="localData" :schema-model-fields="schemaModelFields">
  </kendo-datasource>
  <kendo-grid :data-source-ref="'sharedDataSource'" :sortable="true" :filterable="true">
        <kendo-grid-column field="employee" title="Employee"></kendo-grid-column>
        <kendo-grid-column field="sales" title="Sales" type="number" :format="'{0:c}'"></kendo-grid-column>
  </kendo-grid>
  <kendo-chart :title-text="'Employee Sales'"
               :data-source-ref="'sharedDataSource'"
               :series="series"
               :category-axis-field="'employee'">
  </kendo-chart>
</div>
</template>

<script>
export default {
  name: "Dashboard",
  data: function() {
    return {
      localData: [
        { employee: "Joe Smith", sales: 2000 },
        { employee: "Jane Smith", sales: 2250 },
        { employee: "Will Roberts", sales: 1550 },
        { employee: "John Hopcroft", sales: 1000 },
        { employee: "Maggies Simpson", sales: 3120 }
      ],
      schemaModelFields: {
        employee: { type: "string", title: "Employee" },
        sales: { type: "number", title: "Sales" }
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
