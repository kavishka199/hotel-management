<template>
  <div class="container p-0">
    <navbar />
    <form class="contained-box">
      <h4>Add New Item</h4>

      <div class="row gap-5 m-0">
        <div class="col-md-6">
          <div class="mb-3 row">
            <label for="pkgid" class="col-sm-3 col-form-label">Inventory ID</label>
            <div class="col-sm-9">
              <input v-model="form.inventoryId" type="text" class="form-control">
            </div>
          </div>

          <div class="mb-3 row">
            <label for="pkgid" class="col-sm-3 col-form-label">Name</label>
            <div class="col-sm-9">
              <input v-model="form.name" type="text" class="form-control">
            </div>
          </div>

          <div class="mb-3 row">
            <label for="pkgid" class="col-sm-3 col-form-label">Quantity</label>
            <div class="col-sm-9">
              <input v-model="form.quantity" type="number" class="form-control">
            </div>
          </div>

          <div class="mb-3 row">
            <label for="pkgid" class="col-sm-3 col-form-label">Price</label>
            <div class="col-sm-9">
              <input v-model="form.price" type="text" class="form-control">
            </div>
          </div>

          <div class="mb-3 row">
            <label for="pkgid" class="col-sm-3 col-form-label">Type</label>
            <div class="col-sm-9">
              <select v-model="form.type" class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div class="mb-3 row">
            <label for="pkgid" class="col-sm-3 col-form-label">Description</label>
            <div class="col-sm-9">
              <textarea v-model="form.description" cols="15" rows="10" class="form-control"></textarea>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="mb-3 row text-center">
            <label class="form-label">Upload Photo</label>
            <div class="input-group mb-3">
              <input type="file" class="form-control" id="inputGroupFile02">
              <label class="input-group-text" for="inputGroupFile02">Upload</label>
            </div>
          </div>

          <input @click="onSubmit" type="button" class="btn btn-success" value="Add New" />
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
        inventoryId: '',
        name: '',
        quantity: '',
        price: '',
        type: '',
        description: ''
      }
    }
  },
  components: {
    Navbar,
  },
  methods: {
    onSubmit() {
      this.$http.post('http://localhost:8090/api/inventory', this.form).then(function (response) { 
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
