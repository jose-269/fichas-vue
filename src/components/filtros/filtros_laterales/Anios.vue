<template>
  <div class="container px-0 mb-3">
    <div class="row">
      <div class="col">
        <p class="bg-dark text-white fw-bold p-1 text-center rounded-top m-0">
          RANGO DE AÑOS
        </p>
        <div class="container pb-2 shadow p-3 bg-body rounded-bottom">
          <div class="py-4 px-3">
            <vue-slider v-model="getYear" 
            :min="minAnio" 
            :max="maxAnio" 
            :lazy=true
            :interval="1" 
            :process-style="{ backgroundColor: '#DC3545' }"
            :marks="AniosMarks" 
            :tooltip="'always'"
            :enable-cross="false">
            <template v-slot:dot="">
              <div :class="['custom-dot']"></div>
            </template>
            </vue-slider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import { mapState, mapMutations } from "vuex";
// import $ from "jquery";
export default {
  name: "Anios",
  data() {
    return {
      anios: [2010, 2021],
      // min: this.minAnio(),
      AniosMarks: [],
    };
  },
  computed: {
    minAnio() {
      const min = Math.min.apply(Math, this.minMaxYear);
      return min;
    },
    maxAnio() {
      const max = Math.max.apply(Math, this.minMaxYear);
      return max;
    },
    getYear:{
      get(){
        return this.minMaxYear;
      },
      set(v) {
        this.getMinYear(v)
      }
    },
    ObserverMinYear: {
      get() {
        return this.minMaxYear[0];
      },
      // set() {
      //    this.getMinMaxYear(this.minMaxYear[0]);
      // }
    },
    // min() {
    //   return this.minMaxYear[0]
    // },
    // max() {
    //   return this.minMaxYear[1]
    // },
    // observerYear: {
    //   get() {
    //     return this.getMinMaxYear
    //   },
    //   set(v){
    //     console.log(v);
    //     return v
    //   }
    // },
    // ...mapGetters(["getMinMaxYear"]),
  ...mapState(["minMaxYear"])
  },
  methods: {
    ...mapMutations(["getMinMaxYear", "getMinYear"])
  },
  created () {
    this.getMinMaxYear();
    this.getMinYear()
  },
  components: {
    VueSlider,
  },
  props: {
    year: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" >
.custom-dot {
  width: 150%;
  height: 150%;
  background-color: #fff;
  border: 4px solid #DC3545;
  border-radius: 100%;
  margin-top: -4px;
}
.vue-slider-dot-tooltip-inner   {
  background-color: #DC3545;
  color: white;
}
.vue-slider-dot-tooltip-inner {
  border-top-color: #DC3545;
}
</style>
