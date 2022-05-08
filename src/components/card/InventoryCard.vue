<template>
  <div class="card" style="width: 18rem;">
    <img :src="photo" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <button type="button" class="btn btn-primary" @click="editCard">Edit</button>
      <button type="button" class="btn btn-primary" @click="deleteCard()">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  props: {
    title: String,
    photo: String,
    id: String,
    fetchData: Function
  },
  methods: {
    deleteCard() {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.$http
            .delete(`http://localhost:8090/api/inventory/${this.id}`)
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
    editCard() {
      console.log(this.id);
      this.$router.push(`/inventory/${this.id}`);
    }
  },
}
</script>

<style>

</style>
