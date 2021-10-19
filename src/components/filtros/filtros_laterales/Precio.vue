<template>
  <div class="container px-0 mb-3">
    <div class="row">
      <div class="col">
        <p class="bg-dark text-white fw-bold p-1 text-center rounded-top m-0">
          RANGO DE PRECIO
        </p>
        <div class="container pb-2 shadow p-3 bg-body rounded-bottom">
          <div class="py-4 px-3">
            <VueSlider v-model="precio" 
            :min="4490000" 
            :max="26490000" 
            :interval="1000000"
            :process-style="{ backgroundColor: '#DC3545' }"
            :tooltip="'always'"
            :enable-cross="false"
            :tooltip-formatter="formatter"
            >
            <template v-slot:dot="">
              <div :class="['custom-dot']"></div>
            </template>
            </VueSlider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css"
export default {
  name: "Precio",
  data() {
    return {
      precio: [4490000, 26490000],
      formatter: v => `$${('' + v).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`,
    };
  },
  components: {
    VueSlider,
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
