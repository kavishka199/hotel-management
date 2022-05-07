<template>
  <div class="container p-0">
    <navbar />
    <div class="row m-0">
      <div class="col-md-4">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
      <div class="col-md-4 text-center">
        <h3>Available Rooms</h3>
      </div>
      <div class="col-md-4">
        <router-link to="/rooms/insert">
          <button class="btn btn-primary">Add New Room</button>
        </router-link>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-md-12 gap-3 d-flex flex-wrap">
        <card
          v-for="item in allItems"
          :key="item"
          :id="item._id"
          :fetchData="fetchData"
          :title="item.roomName"
          :features="item.features"
          :type="item.roomType"
          :photo="'https://loremflickr.com/320/240/hotel'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Footercomp from "../../components/footercomp/Footercomp.vue";
import Navbar from "../../components/navbar/Navbar.vue";
import Card from "../../components/card/Card.vue";

export default {
  data() {
    return {
      allItems: "",
    };
  },
  components: {
    Navbar,
    Footercomp,
    Card,
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http
        .get("http://localhost:8090/api/room")
        .then(function (response) {
          console.log(response);
          this.allItems = response.body;
        });
    }
  },
};
</script>

<style scoped></style>
