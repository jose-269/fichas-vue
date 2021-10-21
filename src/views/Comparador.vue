<template>
  <div class=" container-lg">
    <router-link v-if="!comparadorSeleccion.length" to="/seminuevos">
        <button class="btn btn-danger rounded-circle previous-button">
          <i class="fas fa-angle-left fa-2x"></i>
        </button>
      </router-link>
    <div class="row">
      <div class="col-12 text-center">
        <button v-if="comparadorComparteAmigo" class="btn btn-secondary mx-3 my-4 px-5 py-4" data-bs-toggle="modal" data-bs-target="#comparte">Comparte con un amigo</button>
        <button v-if="cotizarMasdeUno" class="btn btn-secondary mx-3 my-4 px-5 py-4" data-bs-toggle="modal" data-bs-target="#cotizaMasDeUno">Cotizar estos<strong> {{comparadorSeleccion.length}} </strong>vehículos</button>
        <h2 class="fw-light mt-3">COMPARADOR DE <strong>VEHÍCULOS</strong></h2>
      </div>
      <hr>
      <!-- MODALES -->
      <div class="modal fade" id="comparte">
        <div class="modal-dialog modal-dialog-centered px-3">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">COMPARTE CON UN <strong>AMIGO</strong></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label class="pb-1">Tu Nombre y Apellido:</label>
              <input type="text" class="form-control mb-4" placeholder="Nombre y Apellido">
              <label class="pb-1">Tu Email:</label>
              <input type="email" class="form-control mb-4" placeholder="E-mail">
              <label class="pb-1">El Nombre y Apellido de tu amigo:</label>
              <input type="text" class="form-control mb-4" placeholder="Nombre y Apellido">
              <label class="pb-1">El Email de tu amigo:</label>
              <input type="email" class="form-control mb-4" placeholder="E-mail">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-danger">Enviar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="cotizaMasDeUno">
        <div class="modal-dialog modal-dialog-centered px-3">
          <div class="modal-content">
            <div class="modal-header" v-if="comparadorSeleccion.length > 1">
              <h5 class="modal-title" id="exampleModalLabel">COTIZAR ESTOS <strong> {{comparadorSeleccion.length}} </strong><strong>VEHÍCULOS</strong></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div v-else class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">COTIZA ESTE <strong>VEHÍCULO</strong></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
              <label class="pb-1">Nombre:</label>
              <input type="text" class="form-control mb-4" placeholder="Nombre">
              <label class="pb-1">Apellido:</label>
              <input type="text" class="form-control mb-4" placeholder="Apellido">
              <label class="pb-1">RUT:</label>
              <input type="number" class="form-control mb-4" placeholder="RUT">
              <label class="pb-1">Email:</label>
              <input type="email" class="form-control mb-4" placeholder="E-mail">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-danger">Enviar</button>
            </div>
          </div>
        </div>
      </div>  
      <!-- FIN MODALES -->
      <div class="d-none d-lg-block">
        <table class="table table-striped mb-5">
          <thead>
            <tr>
              <th scope="col" colspan="2"></th>
              <th scoped="col" class="text-uppercase text-center " v-for="(auto, i) in comparadorSeleccion" :key="i">{{auto.marca}}<span @click="eliminaSelectComparador(auto.id)"><i class="fas fa-window-close fa-1x" style="float: right; cursor: pointer"></i></span></th>
            </tr>
            <tr>
              <th scope="col" colspan="2"></th>
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
              <td class="text-center text-capitalize"  v-for="(auto, i) in comparadorSeleccion" :key="i">{{auto.formatKms}}</td>
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
            <tr v-if="CotizaUno">
              <th scope="row" colspan="2"></th>
              <td class="text-center text-capitalize"  v-for="(auto, i) in comparadorSeleccion" :key="i"><button class="btn btn-danger" data-bs-toggle="modal" :data-bs-target="'#cotizaUno'+ auto.id">Cotizar</button>
              <div class="modal fade" :id="'cotizaUno'+ auto.id">
                <div class="modal-dialog modal-dialog-centered px-3">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">COTIZA ESTE <strong>VEHÍCULO</strong></h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-start">
                      <label class="pb-1">Nombre:</label>
                      <input type="text" class="form-control mb-4" placeholder="Nombre">
                      <label class="pb-1">Apellido:</label>
                      <input type="text" class="form-control mb-4" placeholder="Apellido">
                      <label class="pb-1">RUT:</label>
                      <input type="number" class="form-control mb-4" placeholder="RUT">
                      <label class="pb-1">Email:</label>
                      <input type="email" class="form-control mb-4" placeholder="E-mail">
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-danger">Enviar</button>
                    </div>
                  </div>
                </div>
              </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-md-block d-lg-none">
        <div class="row" v-for="(auto, i) in comparadorSeleccion" :key="i">
          <div class=" col-sm-12 col-md-6 text-center ">
            <img :src="auto.pic" class="card-img-top" alt="table picture">
          </div>
          <div class="col-sm-12 col-md-6 mb-4">
            <table class="table table-striped table-sm">
              <thead>
                <th scope="row" colspan="2" class="text-center text-uppercase py-1"><h5 class="m-0 ">{{auto.marca}}<span  @click="eliminaSelectComparador(auto.id)"><i class="fas fa-window-close fa-1x" style="float: right; cursor: pointer"></i></span></h5></th>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Categoria:</th>
                  <td>{{auto.categoria}}</td>
                </tr>
                <tr>
                  <th scope="row">Precio:</th>
                  <td>{{auto.precio}}</td>
                </tr>
                <tr>
                  <th scope="row">Kilometraje:</th>
                  <td>{{auto.kms}}</td>
                </tr>
                <tr>
                  <th scope="row">Año:</th>
                  <td>{{auto.anio}}</td>
                </tr>
                <tr>
                  <th scope="row">Combustible:</th>
                  <td>{{auto.combustible}}</td>
                </tr>
                <tr>
                  <th scope="row">Transmisión:</th>
                  <td>{{auto.transmision}}</td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center text-capitalize"><button class="btn btn-danger" data-bs-toggle="modal" :data-bs-target="'#cotizaUno-md'+ auto.id">Cotizar</button></td>
                  <div class="modal fade" :id="'cotizaUno-md'+ auto.id">
                <div class="modal-dialog modal-dialog-centered px-3">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">COTIZA ESTE <strong>VEHÍCULO</strong></h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-start">
                      <label class="pb-1">Nombre:</label>
                      <input type="text" class="form-control mb-4" placeholder="Nombre">
                      <label class="pb-1">Apellido:</label>
                      <input type="text" class="form-control mb-4" placeholder="Apellido">
                      <label class="pb-1">RUT:</label>
                      <input type="number" class="form-control mb-4" placeholder="RUT">
                      <label class="pb-1">Email:</label>
                      <input type="email" class="form-control mb-4" placeholder="E-mail">
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-danger">Enviar</button>
                    </div>
                  </div>
                </div>
              </div>
                </tr>
              </tbody>
            </table>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Comparador",
  computed: {
    ...mapState(["comparadorComparteAmigo", "cotizarMasdeUno", "CotizaUno"]),
    ...mapGetters(["comparadorSeleccion"])
  },
  methods: {
    ...mapMutations(["formatPrices", "deleteByIdSeleccionados"]),
    eliminaSelectComparador(autoSeleccion) {
      this.deleteByIdSeleccionados(autoSeleccion);
    },
  },
  created () {
    this.formatPrices();
  },
}
</script>

<style lang="scss" scoped>
.card-img-top {
  height: 7.5rem;
  width: 12.5rem;
  overflow: hidden;
  object-fit: cover;
}
@media only screen and(max-width: 992px) and (min-width: 379px){
  .card-img-top {
  height: 15.625rem;
  width: 21.875rem;
  overflow: hidden;
  object-fit: cover;
  }
}
.previous-button {
    margin-top: 0px;
    position: relative;
    right: -100%;
    z-index: 1;
  }
</style>