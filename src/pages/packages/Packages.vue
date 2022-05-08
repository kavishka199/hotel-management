<template>
  <div class="container p-0">
    <navbar />
    <div class="row m-0">
      <div class="col-md-4">
      </div>
      <div class="col-md-4 text-center">
        <h3>Day out packages</h3>
      </div>
      <div class="col-md-4">
      </div>
    </div>
    <div class="row m-0">
      <div class="col-md-12 gap-3 d-flex flex-wrap">
        <package-card 
          v-for="item in allItems" 
          :key="item" 
          :title="item.name" 
          :features="item.packageInclude" 
          :price="item.price" 
          :photo="'https://loremflickr.com/320/240/hotel'" 
          :id="item._id"
          :fetchData="fetchData"
          />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-9"></div>
      <div class="col-md-3 d-flex gap-2">
        <button class="btn btn-danger">Report</button>
        <router-link to="/packages/insert">
          <button class="btn btn-primary">Add New</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Footercomp from '../../components/footercomp/Footercomp.vue';
import Navbar from "../../components/navbar/Navbar.vue";
import PackageCard from "../../components/card/PackageCard.vue"

export default {
  data() {
    return {
      allItems: ''
    }
  },
  components: {
    Navbar,
    Footercomp,
    PackageCard
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http.get('http://localhost:8090/api/package')
        .then(function (response) {
            console.log(response);
            this.allItems = response.body;
        });
    }
  }
};
</script>

<style scoped></style>
