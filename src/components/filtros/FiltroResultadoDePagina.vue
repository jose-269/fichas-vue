<template>
  <div class="container my-5">
    <div class="row justify-content-end">
      <div class="col-12 col-md-3 mb-4 mb-sm-4 mb-md-0 text-center">
        <FiltroResultados />
      </div>
      <div
        class="
          col-12 col-md-3
          mb-4 mb-sm-4 mb-md-0
          ms-md-5 ms-lg-0
          text-center
          d-flex
          justify-content-center
        "
      >
        <AutosPorPagina />
      </div>
      <div
        class="
          col-12 col-md-3
          ms-md-5 ms-lg-0
          text-center
          d-flex
          justify-content-center
        "
      >
        <PrecioMayorMenor />
      </div>
    </div>
  </div>
</template>

<script>
import FiltroResultados from "@/components/filtros/filtros_resultado_pagina/FiltroResultados";
import AutosPorPagina from "@/components/filtros/filtros_resultado_pagina/AutosPorPagina";
import PrecioMayorMenor from "@/components/filtros/filtros_resultado_pagina/PrecioMayorMenor";
export default {
  components: {
    FiltroResultados,
    AutosPorPagina,
    PrecioMayorMenor,
  },
};
</script>

<style lang="scss">
.underline {
  border-top: 0.125rem solid black;
  width: 6.25rem;
  margin: 0 auto;
  opacity: 1;
}
</style>
