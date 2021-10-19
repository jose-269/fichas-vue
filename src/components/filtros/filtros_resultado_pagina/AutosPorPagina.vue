<template>
  <div class="d-flex">
    <label class="me-2">Mostrar autos por página<hr class="underline mt-3"></label>
    <select class="form-select align-self-start" style="width: auto" name="cantidad">
      <option value="12">12</option>
      <option value="24">24</option>
      <option value="48">48</option>
    </select>  
  </div>
</template>

<script>
export default {
  name: "FiltroAutosPorPagina",
}
</script>

<style>

</style>