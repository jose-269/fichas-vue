<template>
  <div>
    <!-- COPARADOR -->
    <div v-if="seleccionados.length" class="comparador py-3 border-bottom border-danger">
      <div class="container">
        <div class="d-flex flex-row justify-content-between flex-nowrap align-items-center">
            <div>
              <h4 class="fw-bold">Comparar</h4>
            </div>


              <div class="text-center d-flex" v-for="(seleccion, i) in comparadorSeleccion" :key="i">
                <div class="d-flex">
                  <img  :src="seleccion.pic" alt="imagen thimbnail" height="75px" class="rounded-circle">
                  <div class="my-auto">
                    <h5 class="mb-0 ps-2 text-uppercase">{{seleccion.marca}}</h5>
                  <button class="btn btn-disabled ms-2 mt-auto" @click="eliminaSelectComparador(seleccion.id)">Emilinar</button>
                  </div>
                </div>
              </div>
              
              <div v-show="!comparadorSeleccion[0]" class="text-center" >
                <p class=" fw-bold m-0">Añadir más avisos</p>
                <small class="m-0">Selecciona la casilla en el listado</small>
              </div> 
              <div v-show="!comparadorSeleccion[1]" class="text-center border-start border-end px-4" >
                <p class=" fw-bold m-0">Añadir más avisos</p>
                <small class="m-0">Selecciona la casilla en el listado</small>
              </div>
              <div v-show="!comparadorSeleccion[2]" class="text-center" >
                <p class=" fw-bold m-0">Añadir más avisos</p>
                <small class="m-0">Selecciona la casilla en el listado</small>
              </div>
                
            <div class="text-center d-flex flex-column">
              <button class="btn btn-danger px-2 mb-2" @click="toComparar">Comparando <br><span>{{comparadorSeleccion.length}}</span></button>
              <p class="m-0 btn btn-disabled" @click="eliminaTodosSeleccionados">Eliminar todo</p>
            </div>
        </div>
      </div>
      <!-- FIN COMPARADOR -->
    </div>
    <div class="p-0">
      <div v-if="cambioDeFiltro === false">
        <div class="col-12 p-0">
          <Slider />
          <Buscador class="finder" />
          <FiltroSobre />
        </div>
        <div class="col-12 p-0">
          <Cards />
        </div>
        <!--Start Pagination -->
        <Paginacion />
        <!-- End Pagination -->
      </div>
      <div v-else class="container-fluid">
        <div class="row">
          <div class="col-12 p-0">
            <Slider />
            <Buscador class="finder pe-sm-0" />
            <!-- <FiltroSobre /> -->
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <FiltroLateral />
          </div>
          <div class="col-sm-12 col-md-8 col-lg-9">
            <FiltroResPag />
            <Cards :autos="data" />
          </div>
        </div>
        <!--Start Pagination -->
        <Paginacion />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/MainSlider.vue";
import Cards from "@/components/Cards";
import Buscador from "@/components/Buscador";
import FiltroSobre from "@/components/filtros/FiltroSobre";
import FiltroLateral from "@/components/filtros/FiltroLateral";
import Paginacion from "@/components/Paginacion";
import FiltroResPag from "@/components/filtros/FiltroResultadoDePagina";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Seminuevos",
  
  components: {
    Slider,
    Cards,
    FiltroSobre,
    FiltroLateral,
    Buscador,
    Paginacion,
    FiltroResPag,
  },
  computed: {
    ...mapGetters(["comparadorSeleccion"]),
    ...mapState(["cambioDeFiltro", "data", "seleccionados"]),
  },
  methods: {
    ...mapMutations(["deleteByIdSeleccionados", "deleteTodosSeleccionados"]),
    eliminaSelectComparador(autoSeleccion) {
      this.deleteByIdSeleccionados(autoSeleccion);
      
    },
    eliminaTodosSeleccionados() {
      this.deleteTodosSeleccionados();
    },
    toComparar() {
      if(this.comparadorSeleccion.length < 2) alert("Debes comparar al menos dos automóviles");
      else this.$router.push('/comparador')
    }
  },
};
</script>

<style lang="scss" scoped>
.finder {
  position: relative;
  margin-top: -3.75rem;
}
.comparador {
  position: fixed;
  top: 0;
  // height: 175px;
  z-index: 6;
  background-color: #fff;
  width: 100vw;
}
@media only screen and (max-width: 576px) {
  .finder {
    margin-top: 1.5rem;
  }
}
</style>
