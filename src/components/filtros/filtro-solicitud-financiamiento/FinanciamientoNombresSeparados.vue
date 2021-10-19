<template>
  <div class="row">
    <div class="col-md-3 mb-4">
      <input
        type="text"
        class="form-control"
        placeholder="Nombre"
        value=""
        required
      />
    </div>
    <div class="col-md-3 mb-4">
      <input
        type="text"
        class="form-control"
        placeholder="Apellido"
        value=""
        required
      />
    </div>
    <div class="col-md-3 mb-4">
      <input
        type="text"
        class="form-control"
        placeholder="RUT"
        value=""
        required
      />
    </div>
    <div class="col-md-3 mb-4">
      <input type="text" class="form-control" placeholder="Teléfono" value="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactoSeparados",
};
</script>

<style></style>
