<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="text-center py-5">COMPARADOR</h2>
        <hr>

        <table class="table table-striped mb-5">
          <thead>
            <tr>
              <th scope="col" colspan="2"></th>
              <!-- <th scope="col">First</th>
              <th scope="col">Last</th> -->
              <th scoped="col" class="text-uppercase text-center" v-for="(auto, i) in comparadorSeleccion" :key="i">{{auto.marca}}</th>
            </tr>
            <tr>
              <th scope="col" colspan="2"></th>
              <!-- <th scope="col">First</th>
              <th scope="col">Last</th> -->
              <th scoped="col" class="mx-auto text-center" v-for="(auto, i) in comparadorSeleccion" :key="i"><img class="card-img-top" :src="auto.pic" alt="table picture"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" colspan="2">Categoría</th>
              <td class="text-center text-capitalize"  v-for="(auto, i) in comparadorSeleccion" :key="i">{{auto.categoria}}</td>
            </tr>
            <tr>
              <th scope="row" colspan="2">Precio</th>
              <td class="text-center text-capitalize"  v-for="(auto, i) in comparadorSeleccion" :key="i">{{auto.formatPrecio}}</td>
            </tr>
            <tr>
              <th scope="row" colspan="2">Kilometraje</th>
              <td class="text-center text-capitalize"  v-for="(auto, i) in comparadorSeleccion" :key="i">{{auto.kms}}</td>
            </tr>
            <tr>
              <th scope="row" colspan="2">Año</th>
              <td class="text-center text-capitalize"  v-for="(auto, i) in comparadorSeleccion" :key="i">{{auto.anio}}</td>
            </tr>
            <tr>
              <th scope="row" colspan="2">Combustible</th>
              <td class="text-center text-capitalize"  v-for="(auto, i) in comparadorSeleccion" :key="i">{{auto.combustible}}</td>
            </tr>
            <tr>
              <th scope="row" colspan="2">Transmision</th>
              <td class="text-center text-capitalize"  v-for="(auto, i) in comparadorSeleccion" :key="i">{{auto.transmision}}</td>
            </tr>
            <tr>
              <th scope="row" colspan="2"></th>
              <td class="text-center text-capitalize"  v-for="(auto, i) in comparadorSeleccion" :key="i"><button class="btn btn-danger">Cotizar</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
export default {
  name: "Comparador",
  computed: {
    ...mapGetters(["comparadorSeleccion"])
  },
  methods: {
    ...mapMutations(["formatPrices"])
  },
  created () {
    this.formatPrices();
  },
}
</script>

<style lang="scss" scoped>
.card-img-top {
  height: 120px;
  width: 200px;
  overflow: hidden;
  object-fit: cover;
}
</style>