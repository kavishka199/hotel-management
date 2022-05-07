<template>
  <div class="container p-0">
    <navbar />
    <form class="contained-box">
      <h4>Add New Package</h4>

      <div class="mb-3 row">
        <label for="pkgid" class="col-sm-2 col-form-label">Package ID</label>
        <div class="col-sm-10">
          <input v-model="form.packageId" type="text" class="form-control" id="pkgid">
        </div>
      </div>
      <div class="mb-3 row">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input v-model="form.name" type="text" class="form-control" id="name">
        </div>
      </div>
      <div class="mb-3 row">
        <label for="name" class="col-sm-2 col-form-label">Start</label>
        <div class="col-sm-4">
          <input v-model="form.startingDate" type="date" class="form-control" id="name">
        </div>
        <label for="name" class="col-sm-2 col-form-label">End</label>
        <div class="col-sm-4">
          <input v-model="form.endingDate" type="date" class="form-control" id="name">
        </div>
      </div>
      <div class="mb-3 row">
        <label for="pkgid" class="col-sm-2 col-form-label">Price</label>
        <div class="col-sm-10">
          <input v-model="form.price" type="text" class="form-control" id="pkgid">
        </div>
      </div>
      <div class="mb-3 row">
        <label for="pkgid" class="col-sm-2 col-form-label">Package Include</label>
        <div class="col-sm-10">
          <textarea v-model="form.packageInclude" class="form-control" cols="20" rows="10"></textarea>
        </div>
      </div>

      <div class="mb-3 row">
        <div class="col-sm-2 col-form-label"></div>
        <div class="col-sm-10">
          <input @click="onSubmit" type="button" class="btn btn-success" value="Submit" />
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
      form: {
        packageId: '',
        name: '',
        startingDate: '',
        endingDate: '',
        price: '',
        packageInclude: ''
      }
    }
  },
  components: {
    Navbar,
  },
  methods: {
    onSubmit() {
      this.$http.post('http://localhost:8090/api/package', this.form).then(function (response) { 
        console.log(response);
        alert("Success")
      })
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
