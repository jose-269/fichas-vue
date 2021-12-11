<template>
  <div class="body row">
    
    <div class="bg-dark">
      <!-- <CoolLightBox 
      :items="pictures" 
      :index="index"
      @close="index = null">
    </CoolLightBox> -->
      <VueSlickCarousel style="cursor: pointer" :arrows="true" :fade="true" :autoplay="true" :speed="500" :slidesToShow="1" :asNavFor="$refs.indicators"  ref="main" :focusOnSelect="true" class="images-wrapper">
        <div v-for="img in pictures" :key="img.img" @click="index = img.img" >
          <img :src="img.img" alt="main-pic"  class="main-carousel image">
        </div>
        <template #prevArrow="arrowOption">
           <div class="custom-arrow-prev">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          </div>
        </template>
        <template #nextArrow="arrowOption">
           <div class="custom-arrow-next">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          </div>
        </template>
      </VueSlickCarousel>
    </div>
    <div class="bg-dark pb-2">
      <VueSlickCarousel :autoplay="true" :speed="500" :slidesToShow="6" :arrows="false" :asNavFor="$refs.main"  ref="indicators" :focusOnSelect="true">
        <div v-for="img,i in pictures" :key="i" >
          <img :src="img.img" alt="indicator-pic" class="indicator-carousel d-inline">
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
// import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
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
      pictures: [
        {
          img: require("@/assets/img/carousel/foto-kkkk31-1.jpg")
        },
         {
          img: require("@/assets/img/carousel/foto-kkkk31-2.jpg")
        },
         {
          img: require("@/assets/img/carousel/foto-kkkk31-3.jpg")
        },
         {
          img: require("@/assets/img/carousel/foto-kkkk31-4.jpg")
        },
         {
          img: require("@/assets/img/carousel/foto-kkkk31-5.jpg")
        },
         {
          img: require("@/assets/img/carousel/foto-kkkk31-6.jpg")
        },
         {
          img: require("@/assets/img/carousel/foto-kkkk31-7.jpg")
        },
         {
          img: require("@/assets/img/carousel/foto-kkkk31-8.jpg")
        },
         {
          img: require("@/assets/img/carousel/foto-kkkk31-9.jpg")
        },
         {
          img: require("@/assets/img/carousel/foto-kkkk31-10.jpg")
        },
      ],
      settingsIndicators: {
        "dots": false,
        "arrows": true,
        "edgeFriction": 0.35,
        "infinite": true,
        "speed": 500,
        // "slidesToShow": 9,
        "slidesToScroll": 1,
        "autoplay": true,
        // "focusOnSelect": true,
        "asNavFor": "refs.main"
      },
      index: null,
    };
  },
  components: {
    VueSlickCarousel,
    // CoolLightBox,
  },
};
</script>

<style lang="scss" scoped>
// .images-wrapper {
// width: 80%;
// }
.main-carousel {
  // width: 730px;
  // height: 548px;
  width: 100%;
  //  object-fit: cover
}
.indicator-carousel {
  width: 121.666667px;
  height: 91.3333333px;
}
.custom-arrow-prev {
  z-index: 200;
}
.custom-arrow-next {
  z-index: 200;
  right: -165px;
}

.slick-prev::before {
  color: black !important;
  font-size: 50px;
  line-height: 1;
  position: absolute;
  display: inline-block;
  left: 40px;
  opacity: 0.45;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slick-next::before {
  color: black !important;
  font-size: 50px;
  line-height: 1;
  position: absolute;
  display: inline-block;
  right: 180px;
  opacity: 0.45;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>