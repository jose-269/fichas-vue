<template>
  <div class="body">
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          v-for="(img, index) in pics"
          :key="index"
          :class="{ 'carousel-item': true, active: index === active }"
        >
          <div
            data-bs-toggle="modal"
            :data-bs-target="'#myModal-' + index"
          >
            <img :src="img" class=" d-block w-100 auto" />
          </div>
          <!-- MODAL -->
          <div class="modal modal-xl fade" :id="'myModal-' + index" rop="static" data-bs-keyboard="false" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered text-center">
              <div class="modal-content">
                <div class="text-center justify-content-center">
                  <img :src="img" class=" modal-thumbnail " alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- CONTROLADORES -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- INDICADORES -->
    <div class="indicadores bg-dark" >
      <ul class="list-inline carousel-indicators--thumbnails">
        <li
          v-for="(img, i) in pics"
          :key="i"
          :class="{ 'list-inline-item ': true, active: i === active }"
          data-bs-target="#myCarousel"
          :data-bs-slide-to="i"
          aria-current="true"
        >
          <div class="thumbnail">
            <img
              :src="img"
              class="d-block img-fluid thumbnails-cars pe-0"
              alt="..."
            />
          </div>
        </li>
      </ul>
    </div>
    <!-- Fin carousel -->
    <div class="textDes">
      “Precios, equipamiento e información sujetos a cambio sin previo aviso.
      Las imágenes son ilustrativas y pueden no coincidir con los productos
      exhibidos y ofrecidos en concesionarios. Contacte un vendedor para
      verificar los datos publicados”
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",

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
      // bgClass: true,
      'border border-light border-5':false,
    };
  },
  computed: {
    getPics() {
      return this.active;
    },
  },
  methods: {
    setActive(index) {
      let active = index;

      if (index === this.pics.length) active;
      else if (index === -1) active = this.pics.length - 1;
      this.active = active;
    },
  },
};
</script>

<style lang="scss" scoped>
.textDes {
  padding: 1% 2%;
  color: #000;
  font-size: 0.6875rem;
  text-align: justify;
  // float: left;
  // margin-top: 0.625rem
}
.auto {
  width: 45.625rem;
  height: 34.25rem;
}
.thumbnails-cars {
  width: 100px;
  height: 80px;
}
.indicadores {
  // background-color: #212529;
  height: 110px;
  cursor: pointer;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  
}

::-webkit-scrollbar {
  // width: 1px;
  height: 14px;
  background-color: #000;
}

::-webkit-scrollbar-thumb{
	border-radius: 10px;
	// -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
.carousel-indicators--thumbnails li {
  // width: 120px;
  // height: 40px;
  // margin: 0;
  margin: 8px 4px;
  // border: none;
  // border-radius: 0;
  opacity: 1;
}
.carousel-item {
  cursor: pointer;
}
.modal-thumbnail {
  width: 180%;
  margin-right: 500px;
  position: relative;
  right: 0;
  left: 0;
}

// .active {
//   background-color: #fff;
//   color: #fff;
// }
// .carousel-indicators.carousel-indicators--thumbnails .active {
//   background-color: transparent;
// }
// .carousel-indicators.carousel-indicators--thumbnails .active .thumbnail {
//   border-color: #337ab7;
// }
</style>
