<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <nav>
          <ul class="pagination py-5 justify-content-center">
            <li class="page-item border-dark">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link border-dark" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paginacion",
};
</script>

<style lang="scss" scoped>
.page-item.active .page-link {
  color: #fff !important;
  background: #000000 !important;
}
.page-link {
  color: #000000;
}
</style>
