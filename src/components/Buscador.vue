<template>
    <div class="container ps-sm-0 px-md-0 ">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4">
          <form>
            <p class="bg-dark text-white fw-bold p-1 mb-0 text-center rounded-top shadow">Busca tu auto por marca, modelo, año...</p>
            <div class="container bg-white pt-3 rounded-bottom shadow">
              <div class="input-group pb-4">
                <span class="input-group-text"><i class="fas fa-search fa-lg"></i></span>
                <input class="form-control" type="text" placeholder="Escribe palabras claves">
              </div>
              <div class="d-flex justify-content-between pb-3">
                <div class="d-flex">
                  <span class="align-self-end pe-2">15</span>
                  <p class="p-0 m-0 align-self-end">Autos Disponibles</p>
                </div>
                <button class="btn btn-danger">Buscar Auto</button>
              </div>
            </div>
          </form>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Buscador",
}
</script>

<style>

</style>