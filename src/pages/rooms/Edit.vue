<template>
  <div class="container p-0">
    <navbar />
    <form class="contained-box">
      <h4>Add New Room</h4>

      <div class="row gap-5 m-0">
        <div class="col-md-6">
          <div class="mb-3 row text-center">
            <label class="form-label">Room Name</label>
            <input v-model="form.roomName" type="text" class="form-control">
          </div>
          <div class="mb-3 row text-center">
            <label class="form-label">Room Type</label>
            <input v-model="form.roomType" type="text" class="form-control">
          </div>
          <div class="mb-3 row text-center">
            <label class="form-label">Features</label>
            <textarea v-model="form.features" cols="20" rows="10" class="form-control"></textarea>
          </div>
        </div>
        <div class="col-md-5">
          <div class="mb-3 row text-center">
            <label class="form-label">Add Photo</label>
            <div class="input-group mb-3">
              <input type="file" class="form-control" id="inputGroupFile02">
              <label class="input-group-text" for="inputGroupFile02">Upload</label>
            </div>
          </div>

          <input @click="onSubmit" type="button" class="btn btn-success" value="Update" />
        </div>
      </div>

    </form>

  </div>
</template>

<script>
import Navbar from "../../components/navbar/Navbar.vue";

export default {
  data() {
    return {
      allItems: [],
      form: {
        roomName: '',
        roomType: '',
        features: ''
      }
    }
  },
  components: {
    Navbar,
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
          this.form = this.allItems.find(i => i._id === this.$route.params.id);
        });
    },
    onSubmit() {
      this.$http.put(`http://localhost:8090/api/room/${this.$route.params.id}`, this.form).then(function (response) { 
        console.log(response);
        alert("Success")
      });
    }
  }
};
</script>

<style scoped>
.contained-box {
  background: #d8d8d8;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0px;
}
</style>
