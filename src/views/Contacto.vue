<template>
  <div class="contacto">
    <div class="container my-5">
      <section class="dark-grey-text">
        <div class="card p-4">
          <div class="row">
            <!-- Grid Column -->
            <div class="col-lg-8">
              <div class="card-body-form">
                <h3 class="fw-bold dark-grey-text mt-4 ps-xs-0 ps-md-5">
                  <i class="fas fa-envelope pe-2 me-1 mb-3"></i>¡Comunicate con
                  Nosotros!
                </h3>
                <form class="mb-5 mx-md-5">
                  <ContactoSeparados v-if="contactoNombres === false" />
                  <ContactoJuntos v-else />
                  <!-- Segunda Fila -->
                  <div class="row">
                    <!-- Correo Electrónico -->
                    <div class="col-md-6">
                      <div class="mb-4">
                        <input
                          type="text"
                          name="email"
                          class="form-control"
                          placeholder="Correo Electrónico"
                        />
                      </div>
                    </div>
                    <!-- Teléfono -->
                    <div class="col-md-6">
                      <div class="mb-4">
                        <input
                          type="text"
                          name="telefono"
                          class="form-control"
                          placeholder="Teléfono"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Tercera Fila -->
                  <div class="row">
                    <!-- Mensaje -->
                    <div class="col-md-12">
                      <div class="mb-0">
                        <textarea
                          name="mensaje"
                          placeholder="Mensaje"
                          class="form-control"
                          cols="30"
                          rows="5"
                        ></textarea>
                        <br />
                        <button
                          type="submit"
                          class="btn btn-danger btn-lg text-white"
                        >
                          <i class="far fa-paper-plane"></i
                          ><span
                            style="display: none; margin-right: 5px"
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          <span> Enviar </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- Grid Column -->
            <div class="col-lg-4">
              <div class="card-body indigo text-center h-100 white-text">
                <h3 class="fw-bold mt-3 pb-4">Nuestros Datos</h3>
                <ul class="text-lg-start list-unstyled ms-4">
                  <li>
                    <p>
                      <i class="fas fa-map-marker-alt pe-2"></i>Av. Nombre 123
                      Comuna
                    </p>
                  </li>
                  <li>
                    <p><i class="fas fa-phone pe-2"></i>+56 9 1234 5678</p>
                  </li>
                  <li>
                    <p>
                      <i class="fas fa-envelope pe-2"></i>contacto@sitioweb.cl
                    </p>
                  </li>
                </ul>
                <hr class="hr-light my-4" />
                <ul class="list-inline text-center list-unstyled">
                  <li class="list-inline-item">
                    <a class="p-2 fa-lg li-ic"
                      ><i class="fab fa-facebook"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a class="p-2 fa-lg li-ic"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a class="p-2 fa-lg li-ic"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Mapa />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ContactoSeparados from "@/components/filtros/filtro-contacto/ContactoNombresJuntos";
import ContactoJuntos from "@/components/filtros/filtro-contacto/ContactoNombresSeparados";
import Mapa from "@/components/Mapa.vue";
export default {
  name: "Contacto",
  components: {
    ContactoSeparados,
    ContactoJuntos,
    Mapa,
  },
  computed: {
    ...mapState(["contactoNombres"]),
  },
};
</script>

<style></style>
