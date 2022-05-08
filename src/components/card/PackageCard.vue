<template>
  <div class="card" style="width: 18rem;">
    <img :src="photo" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{features}}</p>
      <p><b>Price :</b> LKR.{{price}}</p>
      <button type="button" class="btn btn-primary" @click="editCard">Edit</button>
      <button type="button" class="btn btn-primary" @click="deleteCard()">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    features: String,
    price: String,
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
            .delete(`http://localhost:8090/api/package/${this.id}`)
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
      this.$router.push(`/packages/${this.id}`);
    }
  },
}
</script>

<style>

</style>
