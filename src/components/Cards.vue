<template>
  <div class="container mb-5 py-3">
    <!-- Resultados -->
    <div class="row" v-if="categorias.length === 0 && transmisiones.length === 0 && combustibles.length === 0">
      <!-- cards -->
      <div class="col-md-6 col-lg-4 pb-3" v-for="(auto, i) in data" :key="i">
        <div class="card d-flex my-2" style="height: 100%">
          <router-link to="/page">
            <img :src="auto.pic" class="card-img-top" alt="vehículo imagen"  />
          </router-link>
          <div
            class="
              form-check form-check-inline
              comparar-check
              p-0
              rounded
              bg-light
            "
          >
            <input
              class="form-check-input ms-1"
              type="checkbox"
              :value="auto"
              v-model="seleccionador"
            />
            <label class="form-check-label ps-1"> Comparar </label>
          </div>
          <div class="card-body flex-column">
            <h5 class="card-title text-center text-uppercase">
              {{ auto.marca }}
            </h5>
            <hr />
            <h5 class="card-title text-center text-uppercase text-danger">
              {{ auto.formatPrecio }}
            </h5>
            <hr />
            <div class="row text-center pb-5 d-flex">
              <div class="col-6 pt-2">
                <i class="far fa-calendar-alt pe-2"></i>{{ auto.anio }}
              </div>
              <div class="col-6 pt-2">
                <i class="fas fa-code-branch"></i> {{ auto.transmision }}
              </div>
              <div class="col-6 pt-2">
                <i class="fas fa-gas-pump"></i> {{ auto.combustible }}
              </div>
              <div class="col-6 pt-2">
                <i class="fas fa-road"></i>{{ auto.kms }} Kms
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <a class="btn btn-dark"  >VER MÁS</a>
              <div  class="text-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Añadir a favoritos">
                <i class="fas fa-star fa-2x " data-bs-toggle="modal" data-bs-target="#modalFavoritos" style="cursor:pointer;"></i>
              </div>
            </div>
            <!-- MODAL -->
            <div class="modal fade" id="modalFavoritos" tabindex="-1" aria-hidden="true" >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ALERTA DE <strong>FAVORITO</strong></h5>
                    <button type="button" class="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p>Te enviaremos toda la información referente al automóvil que marcaste como favorito, 
                    alertas cuando se modifique su precio o cuando el mismo no se encuentre disponible.</p>
                    <div>
                      <label class="form-label">Nombre:</label>
                      <input type="text" class="form-control mb-3" placeholder="Nombre">
                      <label class="form-label">Apellido:</label>
                      <input type="text" class="form-control mb-3" placeholder="Apellido">
                      <label class="form-label">Rut:</label>
                      <input type="number" class="form-control mb-3" placeholder="Rut">
                      <label class="form-label">Teléfono:</label>
                      <input type="number" class="form-control mb-3" placeholder="Teléfono">
                      <label class="form-label">Email:</label>
                      <input type="email" class="form-control mb-3" placeholder="Email">
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-danger">Enviar</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- FIN MODAL -->
          </div>
        </div>
      </div>
      <!-- cards -->
    </div>
    <div class="row" v-else>
      <div
        class="col-md-6 col-lg-4 pb-3"
        v-for="(auto, i) in getFiltrosLateral"
        :key="i"
      >
        <div class="card my-2" style="height: 100%">
          <router-link to="/page">
            <img :src="auto.pic" class="card-img-top" alt="vehículo imagen" />
          </router-link>
          <div
            class="
              form-check form-check-inline
              comparar-check
              p-0
              rounded
              bg-light
            "
          >
            <input
              class="form-check-input ms-1"
              type="checkbox"
              :value="auto"
              v-model="seleccionador"
            />
            <label class="form-check-label ps-1"> Comparar </label>
          </div>
          <div class="card-body">
            <h5 class="card-title text-center text-uppercase">
              {{ auto.marca }}
            </h5>
            <hr />
            <h5 class="card-title text-center text-uppercase text-danger">
              {{ auto.formatPrecio }}
            </h5>
            <hr />
            <div class="row text-center pb-3">
              <div class="col-6 pt-2">
                <i class="far fa-calendar-alt pe-2"></i>{{ auto.anio }}
              </div>
              <div class="col-6 pt-2">
                <i class="fas fa-code-branch"></i> {{ auto.transmision }}
              </div>
              <div class="col-6 pt-2">
                <i class="fas fa-gas-pump"></i> {{ auto.combustible }}
              </div>
              <div class="col-6 pt-2">
                <i class="fas fa-road"></i>{{ auto.kms }} Kms
              </div>
            </div>
            <div class="d-grid gap-2 d-md-block">
              <a class="btn btn-dark">VER MÁS</a>
            </div>
          </div>
        </div>
      </div>
      <!-- cards -->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Cards",
  props: {
    autos: {
      type: Array,
    },
  },
  methods: {
    ...mapMutations(["formatPrices", "observadorSeleccionado"]),
  },
  computed: {
    ...mapState([
      "data",
      "categorias",
      "transmisiones",
      "filtrados",
      "combustibles",
      "seleccionados"
    ]),
    seleccionador: {
      get() {
        return this.seleccionados;
      },
      set(v){
        this.observadorSeleccionado(v)
      }
    },
    ...mapGetters(["getFiltrosLateral"]),
  },
  created() {
    this.formatPrices();
  },
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 10px 0x #a7a7a7;
  transition: box-shadow 0.3s ease-in-out;
}
.card:hover {
  box-shadow: 0 10px 20px #a7a7a7;
}
.card-img-top {
  height: 180px;
  object-fit: cover;
  cursor: pointer;
}
.comparar-check {
  position: absolute;
  right: 0;
  top: 9.0625rem;
  width: 6.25rem;
}
.star {
  color: #fff;
  text-shadow: 0 0 2px #000;
  cursor: pointer;
}


</style>
