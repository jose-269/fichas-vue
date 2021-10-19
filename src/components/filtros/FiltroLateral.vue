<template>
  <div class="container-fluid pe-md-0 pe-lg-0 pe-xl-0">
    <div class="row">
      <div class="col-sm-12 px-0">
        <div class="pt-5">
          <Categorias :categories="itemsCategorias" v-if="categoriasToggle" />
          <Marca :mark="marca" v-if="marcaToggle" />
          <Anios :year="intemsAnios" v-if="aniosToggle"/>
          <Precio v-if="precioToggle" />
          <Transmision :transmission="itemsTransmision" v-if="transmisionToggle" />
          <Combustible :fuel="itemsCombustible" v-if="combustibleToggle"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Categorias from "@/components/filtros/filtros_laterales/Categorias.vue";
import Marca from "@/components/filtros/filtros_laterales/Marca.vue";
import Anios from "@/components/filtros/filtros_laterales/Anios.vue";
import Precio from "@/components/filtros/filtros_laterales/Precio.vue";
import Transmision from "@/components/filtros/filtros_laterales/Transmision.vue";
import Combustible from "@/components/filtros/filtros_laterales/Combustible.vue";
import { mapState, mapGetters} from "vuex"
export default {
  name: "FiltroLatera",
  data() {
    return {
      marca: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
      ],
      anios: [
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
      ],
      // combustible: ["Gasolina", "Diésel"],
    };
  },
  computed: {
    ...mapState(["categoriasToggle", "marcaToggle", "aniosToggle", "precioToggle", "transmisionToggle", "combustibleToggle"]),
    ...mapGetters(["itemsCategorias", "itemsTransmision", "itemsCombustible", "intemsAnios"]),
  },
  components: {
    Categorias,
    Marca,
    Anios,
    Precio,
    Transmision,
    Combustible,
  },
};
</script>

<style></style>
