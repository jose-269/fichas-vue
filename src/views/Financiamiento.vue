<template>
  <div class="financiamiento">
    <div class="container my-5 px-0">
      <section
        class="p-5 my-md-5 text-center"
        style="
          background-image: url(https://mdbootstrap.com/img/Photos/Others/background2.jpg);
          background-size: cover;
          background-position: center center;
        "
      >
        <h3 class="text-center fw-bold text-white mt-5 mb-3 pb-5">
          SOLICITUD DE<br />FINANCIAMIENTO
        </h3>
        <!-- Start Form -->
        <form class="mb-5 mx-md-5">
          <ContactoJuntos v-if="FinanciamientoNombres === true" />
          <ContactoSeparados v-else />
          <div class="row">
            <div class="col-md-4 mb-4">
              <input
                type="text"
                class="form-control"
                placeholder="Correo Electrónico"
                value=""
                required
              />
            </div>
            <div class="col-md-4 mb-4">
              <input
                type="text"
                class="form-control"
                placeholder="Monto de Crédito"
                value=""
                required
              />
            </div>
            <div class="col-md-4 mb-4">
              <select name="cuotas" type="number" class="form-control" required>
                <option>Cantidad de cuotas</option>
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="18">18</option>
                <option value="24">24</option>
                <option value="36">36</option>
                <option value="48">48</option>
              </select>
            </div>
          </div>

          <div class="row pb-3 accordion-section">
            <div class="col-md-12 mt-3 mb-4 text-center">
              <h2 class="">
                <button
                  class="btn indigo text-white accordion-header"
                  type="button"
                  style="font-size: 1rem"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="colapsable"
                >
                  ¿Desea entregar vehículo como parte de pago?
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              class="accordion-collapse collapse ms-auto me-auto"
              data-bs-parent="accordion-section"
            >
              <div class="row accordion-body">
                <div class="col-md-4">
                  <div class="form-group pb-4 pb-sm-4 pb-md-0">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Marca del vehículo"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group pb-4 pb-sm-4 pb-md-0">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Modelo del vehículo"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="Marca del vehículo"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group mb-4">
                <textarea
                  class="form-control rounded"
                  rows="3"
                  placeholder="¿Deseas agregar un mensaje?"
                ></textarea>
              </div>

              <div class="text-center">
                <button class="btn indigo text-white" style="font-size: 1rem">
                  <span
                    style="display: none; margin-right: 5px"
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span
                  ><strong>Enviar</strong>
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
    <Mapa />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Mapa from "@/components/Mapa.vue";
import ContactoJuntos from "@/components/filtros/filtro-solicitud-financiamiento/FinanciamientoNombresJuntos";
import ContactoSeparados from "@/components/filtros/filtro-solicitud-financiamiento/FinanciamientoNombresSeparados";
export default {
  name: "Financiamiento",
  components: {
    Mapa,
    ContactoJuntos,
    ContactoSeparados,
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState(["FinanciamientoNombres"]),
  },
};
</script>

<style>
.container {
  z-index: 3;
}
</style>
