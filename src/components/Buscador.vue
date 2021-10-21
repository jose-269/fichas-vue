<template>
    <div class="container ps-sm-0 px-md-0 ">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <p class="bg-dark text-white fw-bold p-1 mb-0 text-center rounded-top shadow">Busca tu auto por marca, modelo, año...</p>
            <div class="container bg-white pt-3 rounded-bottom shadow">
              <div class="input-group pb-4">
                <span class="input-group-text"><i class="fas fa-search fa-lg"></i></span>
                <input class="form-control" type="text" placeholder="Escribe palabras claves" v-model="buscador">
              </div>
              <div class="d-flex justify-content-between pb-3">
                <div class="d-flex">
                  <span class="align-self-end pe-2">{{ getFiltrosLateral.length }}</span>
                  <p class="p-0 m-0 align-self-end">Autos Disponibles</p>
                </div>
                <button class="btn btn-danger" @click="obtenerPalabra">Buscar Auto</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
// import {mapState} from "vuex";
export default {
  name: "Buscador",
  data() {
    return {
      buscador: ""
    }
  },
  computed: {
    ...mapGetters(["getFiltrosLateral"]),
  },
  methods: {
    obtenerPalabra() {
      this.setBuscador(this.buscador)
      this.buscador = "";
    },
    ...mapMutations(["setBuscador"]),
  },
}
</script>

<style>

</style>