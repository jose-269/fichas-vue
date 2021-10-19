<template>
  <div>
    <Slider />
    <div class="container px-5">
      <div class="row ">
        <div class="col-md-12 col-lg-6 pb-3">
          <input type="text" placeholder="Nombre" class="form-control" />
        </div>
        <div class="col-md-12 col-lg-6 pb-3">
          <input type="text" placeholder="Apellido" class="form-control" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-lg-6 pb-3">
          <input type="number" placeholder="Teléfono" class="form-control" />
        </div>
        <div class="col-md-12 col-lg-6 pb-3">
          <input type="text" placeholder="Email" class="form-control" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-lg-3 pb-3">
          <input type="text" placeholder="Marca" class="form-control" />
        </div>
        <div class="col-md-12 col-lg-3 pb-3">
          <input type="text" placeholder="Modelo" class="form-control" />
        </div>
        <div class="col-md-12 col-lg-3 pb-3">
          <select type="text" class="form-select">
            <option selected>Año</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div class="col-lg-3 pb-3">
          <input type="number" placeholder="Kilometraje" class="form-control" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-lg-3 pb-3">
          <input type="text" placeholder="Version" class="form-control">
        </div>
        <div class="col-md-12 col-lg-3 pb-3">
          <input type="text" placeholder="Patente" class="form-control">
        </div>
        <div class="col-md-12 col-lg-6 pb-3">
          <input class="form-control" type="file" id="formFileMultiple" multiple>
        </div>
      </div>
      <div class="row">
        <div class="col-12 pb-3">
          <textarea name="mensaje" placeholder="Mensaje" cols="30" rows="3" class="form-control"></textarea>
        </div>
      </div>
      <div class="row pb-5">
        <div class="col-3">
          <button class="btn btn-danger btn-lg px-5">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../components/MainSlider.vue";
export default {
  name: "Compramos-tu-auto",
  components: {
    Slider,
  },
};
</script>

<style lang="scss">
// #formFile::before {
  // content: "pick File";
// }
</style>
