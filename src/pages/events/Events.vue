<template>
  <div class="container p-0">
    <navbar />
    <div class="row m-0">
      <div class="col-md-4">
      </div>
      <div class="col-md-4 text-center">
        <h3>Events</h3>
      </div>
      <div class="col-md-4">
        <div class="input-group mb-3">
          <router-link to="/events/insert">
            <button class="btn btn-primary">Add New Event</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-md-12">

        <table class="table table-striped table-hover">
          <tbody>
            <tr v-for="item in allItems" :key="item">
              <th scope="row">{{item.eventId}}</th>
              <td>{{item.name}}</td>
              <td>{{item.eventDate}}</td>
              <td>{{item.eventType}}</td>
              <td>
                <button type="button" class="btn btn-primary" @click="editCard(item._id)">Edit</button>
                <button type="button" class="btn btn-primary" @click="deleteCard(item._id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-9"></div>
      <div class="col-md-3 d-flex gap-2">
        <button class="btn btn-danger">Report</button>
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
      this.$http.get('http://localhost:8090/api/event')
        .then(function (response) {
            console.log(response);
            this.allItems = response.body;
        });
    },
    deleteCard(id) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.$http
            .delete(`http://localhost:8090/api/event/${id}`)
            .then(function (response) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
              this.fetchData();
            });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    },
    editCard(id) {
      this.$router.push(`/events/${id}`);
    }
  }
};
</script>

<style scoped></style>
