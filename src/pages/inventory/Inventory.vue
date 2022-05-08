<template>
  <div class="container p-0">
    <navbar />
    <div class="row m-0">
      <div class="col-md-4">
      </div>
      <div class="col-md-4 text-center">
        <h3><center>Inventory</center></h3>
      </div>
      <div class="col-md-4">
        <div class="input-group mb-3">
          <input type="text" class="form-control" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
        </div>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-md-12 gap-3 d-flex flex-wrap"> 
        <inventory-card 
          v-for="item in allItems" :key="item" 
          :title="item.name" 
          :photo="'https://loremflickr.com/320/240/fan'"
          :id="item._id"
          :fetchData="fetchData" 
        />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-9"></div>
      <div class="col-md-3 d-flex gap-2">
        <button class="btn btn-danger">Report</button>
        <router-link to="/inventory/insert">
          <button class="btn btn-primary">Add New</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Footercomp from '../../components/footercomp/Footercomp.vue';
import Navbar from "../../components/navbar/Navbar.vue";
import InventoryCard from "../../components/card/InventoryCard.vue"

export default {
  data() {
    return {
      allItems: ''
    }
  },
  components: {
    Navbar,
    Footercomp,
    InventoryCard
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http.get('http://localhost:8090/api/inventory')
        .then(function (response) {
            console.log(response);
            this.allItems = response.body;
        });
    }
  }
};
</script>

<style scoped></style>
