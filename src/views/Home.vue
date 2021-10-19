<template>
  <div class="home">
    <Slider />
    <RandomCards />
    <Nuestro />
    <Mapa />
  </div>
</template>

<script>
import RandomCards from '@/components/RandomCards.vue';
import Nuestro from '@/components/NuestroStock.vue';
import Mapa from '@/components/Mapa.vue';
import Slider from '@/components/MainSlider.vue';

export default {
  name: "Home",
  components: {
    Slider,
    RandomCards,
    Nuestro,
    Mapa
  },
};
</script>
