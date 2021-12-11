<template>
  <div class="container-lg">
    <div class="row">
      <div class="col-12 col-md-8 mt-5">
        <!-- carousel-slider -->
        <Slider />
      </div>
      <div class="col-12 col-md-4 mt-5">
        <div class="text-end pe-3">
          <router-link to="/seminuevos">
            <button class="btn btn-danger rounded-circle previous-button">
              <i class="fas fa-angle-left fa-2x"></i>
            </button>
          </router-link>
        </div>
        <h4 class="text-capitalize">{{item.marca}}</h4>
        <div class="precios">
          <h5>
            <i class="fas fa-star text-warning"></i>Precio: 
            <span class="text-danger fw-bold">{{item.formatPrecio}}</span>
          </h5>
          <h5 class="ms-4">Precio con financiamiento: <span class="text-danger fw-bold">$19.990.000</span></h5>
        </div>
        <hr />
        <div class="text-center">
          <img src="../assets/img/banner-2.png" class="img-fluid" alt="banner-1">
        </div>
        <hr />
        <div class="row">
          <div class="col px-sm-4 px-md-0 px-lg-2">
            <i class="fas fa-circle text-danger me-1"></i>Año
          </div>
          <div class="col px-sm-4 px-md-0 px-lg-2">2015</div>
        </div>
        <div class="row">
          <div class="col px-sm-4 px-md-0 px-lg-2">
            <i class="fas fa-circle text-danger me-1"></i>Kilometraje
          </div>
          <div class="col px-sm-4 px-md-0 px-lg-2">89.000</div>
        </div>
        <div class="row">
          <div class="col px-sm-4 px-md-0 px-lg-2">
            <i class="fas fa-circle text-danger me-1"></i>Transmisión
          </div>
          <div class="col px-sm-4 px-md-0 px-lg-2">Automatica</div>
        </div>
        <div class="row">
          <div class="col px-sm-4 px-md-0 px-lg-2">
            <i class="fas fa-circle text-danger me-1"></i>Combustible
          </div>
          <div class="col px-sm-4 px-md-0 px-lg-2">Diesel</div>
        </div>
        <div class="row">
          <div class="col px-sm-4 px-md-0 px-lg-2">
            <i class="fas fa-circle text-danger me-1"></i>Cilindrada
          </div>
          <div class="col px-sm-4 px-md-0 px-lg-2">2000</div>
        </div>
        <div class="row">
          <div class="col px-sm-4 px-md-0 px-lg-2">
            <i class="fas fa-circle text-danger me-1"></i>Color
          </div>
          <div class="col px-sm-4 px-md-0 px-lg-2">negro</div>
        </div>
        <div class="cotiza border border-warning mt-3">
          <div class="form-group py-4 px-3">
            <h4 class="text-center">
              <i class="fas fa-star text-warning me-1"></i>COTIZAR ESTE VEHÍCULO
            </h4>
            <PageJuntos v-if="pageNombres === true" />
            <PageSeparados v-else />
            <div class="row mb-3">
              <div class="col-6">
                <input
                  type="phono"
                  class="form-control"
                  placeholder="Teléfono"
                />
              </div>
              <div class="col-6">
                <input type="text" class="form-control" placeholder="E-mail" />
              </div>
            </div>
            <textarea
              class="form-control mb-4"
              name="mensaje"
              cols="30"
              rows="2"
              placeholder="Mensaje"
            ></textarea>
            <div class="form-check pb-2">
              <input
                class="form-check-input"
                type="checkbox"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-credito"
              />
              <label class="form-check-label label-credito">
                COTIZA TU CRÉDITO
              </label>
            </div>
            <div id="collapse-credito" class="collapse">
              <input
                type="text"
                class="form-control form-control-sm mb-2"
                placeholder="Pie"
              />
              <h6 class="label-credito ms-2">Cuotas</h6>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label label-credito">12</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label label-credito">24</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label label-credito">36</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label label-credito">48</label>
              </div>
              <div class="form-check form-check-inline pb-2">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label label-credito">60</label>
              </div>
            </div>

            <div class="form-check pb-2">
              <input
                class="form-check-input"
                type="checkbox"
                data-bs-toggle="collapse"
                data-bs-target="#parte-de-pago"
              />
              <label class="form-check-label label-credito">
                DEJA TU AUTO EN PARTE DE PAGO
              </label>
            </div>
            <div id="parte-de-pago" class="collapse">
              <input
                type="text"
                class="form-control form-control-sm mb-2"
                placeholder="Automóvil, marca, modelo, versión, año, kilometraje, etc"
              />
            </div>
          </div>
        </div>
        <div class="text-end">
          <button class="btn btn-danger px-4 enviar-cotizacion me-3">
            Enviar
          </button>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12 col-md-8 mt-3">
        <div class="border p-4 shadow">
          <h5><i class="fas fa-star text-warning me-1"></i>Equipamiento</h5>
          <div class="pt-4 px-4">
            <ul class="des-lista p-0">
              <li>
                <i class="fas fa-check text-danger me-2 pb-3"></i>Aire
                Acondicionado
              </li>
              <li><i class="fas fa-check text-danger me-2 pb-3"></i>Alarma</li>
              <li>
                <i class="fas fa-check text-danger me-2 pb-3"></i>Cierre
                centralizado
              </li>
              <li>
                <i class="fas fa-check text-danger me-2 pb-3"></i>Dirección
              </li>
              <li>
                <i class="fas fa-check text-danger me-2 pb-3"></i>4 Puertas
              </li>
              <li>
                <i class="fas fa-check text-danger me-2 pb-3"></i>4 Air bag
              </li>
              <li>
                <i class="fas fa-check text-danger me-2 pb-3"></i>Alzavidrios
                Eléctricos delanteros
              </li>
              <li><i class="fas fa-check text-danger me-2 pb-3"></i>Cuero</li>
              <li>
                <i class="fas fa-check text-danger me-2 pb-3"></i>Frenos ABS
              </li>
            </ul>
          </div>
          <h5><i class="fas fa-star text-warning me-1"></i>Descripción</h5>
        </div>
      </div>
      <div class="col-12 col-md-4 mt-3">
        <div class="border p-4 shadow">
          <div class="d-flex justify-content-between">
            <div>
              <h5><i class="fas fa-star text-warning me-1"></i>Ubicación</h5>
              <a href="#" style="text-decoration: none">+56-51-2296917</a>
            </div>
            <div class="waze-button my-auto">
              <a href="https://ul.waze.com/ul?ll=-33.45408800%2C-70.60303410&navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location" target="_blank">
              <i class="fab fa-waze fa-2x p-1"></i></a>
            </div>
          </div>
          <div class="mapa pt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426000.965030887!2d-70.91001965610009!3d-33.47189991731077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1588798327102!5m2!1ses!2scl"
              width="100%"
              height="200"
              frameborder="0"
              style="border: 0; margin-bottom: -7px"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class=" text-center">
          <img src="../assets/img/banner-bajo-el-precio.png" class="img-fluid" alt="banner-1">
        </div>
    </div>
    <div class="row mb-5">
      <div class="col-12">
        <h2 class="pb-4">Sugeridos</h2>
        <div class="card mb-5" style="width: 18rem">
          <div class="card-header bg-warning">
            <h4 class="mb-0 text-white">Diesel</h4>
          </div>
          <img src="../assets/img/auto-foto.png" class="pb-3" alt="" />
          <div class="container py-3">
            <h5 class="card-title pb-2">
              <i class="fas fa-star text-warning"></i>AUDI Q3
            </h5>
            <h5 class="card-title pb-2">$ 2199000</h5>
            <div class="row justify-content-around">
              <div class="col fw-ligth">2018</div>
              <div class="col fw-ligth">Mecánica</div>
              <div class="col fw-ligth">98000 Kms</div>
            </div>
          </div>
          <button class="btn btn-danger">VER MÁS</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PageJuntos from "@/components/filtros/filtro-nombres-page/PageNombresJuntos";
import PageSeparados from "@/components/filtros/filtro-nombres-page/PageNombresSeparados";
import Slider from "@/components/ficha-detalle/Slider.vue";
export default {
  data() {
    return {
      pics: [
        "https://imgd.aeplcdn.com/0x0/n/cw/ec/27032/s60-exterior-right-front-three-quarter-3.jpeg",
        "https://media.istockphoto.com/photos/illustration-of-generic-red-car-front-view-picture-id1145720458?k=20&m=1145720458&s=612x612&w=0&h=51ooOfUOao-3k9MJdmqsoEITBgdMQjdEdG35sczCgJs=",
        "https://cf.ltkcdn.net/cars/images/std/223247-800x600r1-Car-Parked.jpg",
        "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg",
        "http://1.bp.blogspot.com/-83mxjsGz1Ao/TkViL9hReSI/AAAAAAAADTU/a1P0HMQbEPI/w1200-h630-p-k-no-nu/1968-Dodge-Charger-Black.jpg",
        "https://i.pinimg.com/originals/3b/c6/7b/3bc67be03d47e26808a2bc07f3a2a22a.jpg",
        "https://x-assets.autorevo-powersites.com/content/assets/clients/30c54b61-2e18-4534-b347-5367e7a27956/1968_chevy_nova_ss_DSC03288_1920.jpg",
        "https://cdn.shopify.com/s/files/1/1021/2921/articles/nissan-z-proto-front.jpg?v=1629268796",
        "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210908165711-02-bentley-bacalar-drive.jpg",
      ],
      active: 0,
    };
  },
  methods: {
    setActive(index) {
      let active = index;
      if (index === this.pics.length) active;
      else if (index === -1) active = this.pics.length - 1;
      this.active = active;
    },
  },
  computed: {
    item() {
      const finder = this.data.find(el => el.id === this.$route.params.id);
      if (!finder) return;
      return finder;
    },
    ...mapState(["data", "pageNombres"]),
  },
  components: {
    PageJuntos,
    PageSeparados,
    Slider,
  },
};
</script>

<style lang="scss" scoped>

  .previous-button {
    margin-top: -70px;
    position: relative;
    right: 0px;
    z-index: 1;
  }
.enviar-cotizacion {
  margin-top: -20px;
}
.des-lista {
  columns: 2;
  list-style: none;
  margin-right: 0;
}
  .textDes {
    padding: 1% 2%;
    color: #000;
    font-size: 0.6875rem;
    text-align: justify;
  }
.label-credito {
  font-size: 13px;
}
.waze-button {
  background-color: #fff;
  height: fit-content;
  border: 4px solid #42D5FF;
  border-radius: 13px 13px;
  a {
    color: #395359;
  }
}

</style>
