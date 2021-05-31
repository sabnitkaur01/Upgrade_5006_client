<template>
  <div class="productFilter">
    <div id="prdfilter">
      <h4 class="d-flex mb-3">
        <span class="text-muted">Filters:</span>
      </h4>
      
        
      </div>
      <div class="form-group">
        <label for="filterPrdCty">By Category:</label>
        <select
          class="form-control"
          id="filterPrdCty"
          v-model="selectedCategory"
          @change="(event) => updateProductCategory(event, 'productCategory')"
        >
          <option
            v-for="(category, index) in categories"
            :key="index"
            v-bind:value="category.productCategory"
            >{{ category.productCategory }}</option
          >
        </select>
      </div>      
    </div> 
  
</template>

<script>


export default {
  name: "productFilter",
  props: ["categories"], 
  
  data() {
    return {
      selectedCategory: "Handtool",      
    };
  },
  methods: {
    
    updateProductCategory(event, productFilterID) {
      this.$parent.filterProductBy(event, productFilterID);
    },    
  },
};
</script>

<style lang="css">
.productFilter #prdfilter {
  text-align: start !important;
}
</style>
