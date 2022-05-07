<template>
  <div class="card" style="width: 18rem;">
    <img :src="photo" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{features}}</p>
      <p><b>Price :</b> LKR.{{price}}</p>
      <a href="#" class="btn btn-primary">Edit</a>
      <a href="#" class="btn btn-primary">Delete</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    features: String,
    price: String,
    photo: String
  }
}
</script>

<style>

</style>
