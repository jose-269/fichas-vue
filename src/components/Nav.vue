<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container px-5">
      <router-link class="navbar-brand py-0" to="/">
        <img src="../assets/img/logo-sitio.png" alt="logo-sitio" width="200" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <router-link class="nav-link text-center py-0" aria-current="page" to="/compramos-tu-auto"
              ><button class="btn btn-light px-3">COMPRAMOS TU AUTO</button></router-link
            >
          </li>
          <li class="nav-item my-auto">
            <router-link class="nav-link " aria-current="page" to="/"
              >INICIO</router-link
            >
          </li>
          <li class="nav-item my-auto">
            <router-link class="nav-link" to="/seminuevos"
              >SEMINUEVOS</router-link
            >
          </li>
          <li class="nav-item my-auto">
            <router-link class="nav-link" to="/financiamiento"
              >FINANCIAMIENTO</router-link
            >
          </li>
          <li class="nav-item my-auto">
            <router-link class="nav-link" to="/contacto">CONTACTO</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav nav-flex-icons ms-auto text-center">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              ><i class="fas fa-share-alt"></i
              ><span class="ms-1">Siguenos</span></a
            >
            <div
              class="dropdown-menu dropdown-primary dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a href="#" class="dropdown-item"
                ><i class="fab fa-facebook-square"></i> Facebook</a
              >
              <a href="#" class="dropdown-item"
                ><i class="fab fa-instagram"></i> Instagram</a
              >
              <a href="#" class="dropdown-item"
                ><i class="fab fa-youtube"></i> Youtube</a
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
.nav-item {
  display: flex;
  vertical-align: middle;

}
</style>
