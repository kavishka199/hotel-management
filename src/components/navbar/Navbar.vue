<template>
  <div class="row m-0 py-3 mb-3 navbar-styles">
    <div class="col-md-2 text-center" style="background: #fff; height: 100px">
      <img src="./logo.png" alt="logo" style="height: 100%" />
    </div>
    <div class="col-md-10 py-3">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/Home">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about">
                <a class="nav-link" href="#">About us</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/packages">
                  <p class="nav-link">Packages</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/rooms">
                  <p class="nav-link">Rooms</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/events">
                  <p class="nav-link">Events</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/inventory">
                  <p class="nav-link">Inventory</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact">
                <a class="nav-link" href="#">Contact</a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar-styles {
  border-bottom: 2px solid #d8d8d8;
}
</style>
