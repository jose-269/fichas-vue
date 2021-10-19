<template>
  <div class="container">
    <div class="row ">
      <div class="col-12 my-5 centrar ">
        <h3 class="text-center mb-5 text-justify">
          Estimado cliente, has enviado la siguiente solicitud de cotización:
        </h3>
        <div class="justify-content-center">
          <table class="table table-1 table-striped table-bordered border-dark mb-5">
            <tbody>
              <tr>
                <th scope="row" class="text-start">Nombre:</th>
                <td class="text-end text-danger">AAA</td>
              </tr>
              <tr>
                <th scope="row" class="text-start">Correo:</th>
                <td class="text-end text-danger text-end">AAA</td>
              </tr>
              <tr>
                <th scope="row" class="text-start">Teléfono:</th>
                <td class="text-end text-danger text-end">AAA</td>
              </tr>
            </tbody>
          </table>

          <table class="table table-1 table-striped table-bordered border-dark mb-5">
            <tbody>
              <tr>
                <th scope="row" class="text-start">Pie:</th>
                <td class="text-end text-danger">AAA</td>
              </tr>
              <tr>
                <th scope="row" class="text-start">Cuota:</th>
                <td class="text-end text-danger text-end">AAA</td>
              </tr>
              <tr>
                <th scope="row" class="text-start">Vehículo:</th>
                <td class="text-end text-danger text-end">AAA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- <h2 class="text-center mb-5 text-justify">Estimado cliente, has enviado la siguiente solicitud de cotización:</h2>
        <div class="personal-data">
          <h5 class="fw-bold text-start">Nombre: <span class="fw-light text-danger">aquí va el nombre.</span></h5>
          <h5 class="fw-bold text-start">Correo: <span class="fw-light text-danger">aquí va el correo.</span></h5>
          <h5 class="fw-bold mb-5 text-start">Teléfono: <span class="fw-light text-danger">aquí va el teléfono.</span></h5>
        </div>
        <div class="cotizacion-data">
          <h5 class="fw-bold text-start">Pie: <span class="fw-light text-danger">aquí va el pie.</span></h5>
          <h5 class="fw-bold text-start">Cuota: <span class="fw-light text-danger">aquí van las cuota</span></h5>
          <h5 class="fw-bold text-start mb-5">Vehículo: <span class="fw-light text-danger">aquí va el vehículo</span></h5>
        </div>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="card my-2" >
          <img
            src="../assets/img/auto-foto.png"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div class="col-6">
        <h5 class="fw-bold text-start ">Marca: <span class="fw-light text-danger">Aqui va la marca</span></h5>
        <h5 class="fw-bold text-start ">Modelo: <span class="fw-light text-danger">Aqui va el modelo</span></h5>
        <h5 class="fw-bold text-start ">Versión: <span class="fw-light text-danger">Aqui va la versión</span></h5>
        <h5 class="fw-bold text-start ">Año: <span class="fw-light text-danger">Aqui va el año</span></h5>
        <h5 class="fw-bold text-start pb-4">Mensaje: <span class="fw-light text-danger">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae tempore, voluptate fuga fugit vitae odio! Exercitationem at cumque ut voluptatem nam necessitatibus error.</span></h5>
        <h5 class="fw-bold text-start pb-3">Precio: <span class="fw-light text-danger">Aqui va el precio</span></h5>
        <button class="btn btn-dark px-5 mb-5">Ver más</button>
      </div>
      <hr>
        <div class="col-12">
          <h2 class="pb-3">En breve recibirás un llamado o un correo de nuestros ejecutivos</h2>
          <h2 class="fw-bold"><strong>¡GRACIAS POR CONTACTARNOS!</strong></h2>
          <hr>
        </div>
        <div class="col-12 py-3 d-flex justify-content-between">
          <div class="d-flex flex-column">
            <a href="#" style="text-decoration: none;"><i class="fas fa-phone-alt text-dark pe-2"></i>+56 9 12345678</a>
            <a href="#" class="text-dark"><i class="fas fa-envelope text-dark pe-2"></i>ejemplo@mail.com</a>
          </div>
          <div>
            <a href="#"><i class="fab fa-instagram fa-2x text-dark"></i></a>
            <a href="#" class="px-2"><i class="fab fa-facebook-square fa-2x text-dark"></i></a>
            <a href="#"><i class="fab fa-youtube fa-2x text-dark"></i></a>
          </div> -->

    <div class="row">
      <div class="col-md-6 mb-5">
        <div class="card my-2">
          <img
            src="../assets/img/auto-foto.png"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div class="col-md-6">
        <table class="table table-striped table-bordered border-dark">
          <tbody>
            <tr>
              <th scope="row" class="text-start">Marca:</th>
              <td class="text-end text-danger">AAA</td>
            </tr>
            <tr>
              <th scope="row" class="text-start">Modelo:</th>
              <td class="text-end text-danger text-end">AAA</td>
            </tr>
            <tr>
              <th scope="row" class="text-start">Versión:</th>
              <td class="text-end text-danger text-end">AAA</td>
            </tr>
            <tr>
              <th scope="row" class="text-start">Año:</th>
              <td class="text-end text-danger text-end">AAA</td>
            </tr>
            <tr>
              <th scope="row" colspan="2">Mensaje:</th>
            </tr>
            <tr>
              <td colspan="2" class="text-end text-danger text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                eum sunt iure! Consequatur sit earum, pariatur nesciunt.
              </td>
            </tr>
            <tr>
              <td colspan="2" class="text-center py-3">
                <button class="btn btn-dark px-5">Ver más</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- <h5 class="fw-bold text-start">
          Marca: <span class="fw-light text-danger">AAA</span>
        </h5>
        <h5 class="fw-bold text-start">
          Modelo: <span class="fw-light text-danger">AAA</span>
        </h5>
        <h5 class="fw-bold text-start">
          Versión: <span class="fw-light text-danger">AAA</span>
        </h5>
        <h5 class="fw-bold text-start">
          Año: <span class="fw-light text-danger">AAA</span>
        </h5>
        <h5 class="fw-bold text-start pb-4">
          Mensaje:
          <span class="fw-light text-danger"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            tempore, voluptate fuga fugit vitae odio! Exercitationem at cumque
            ut voluptatem nam necessitatibus error.</span
          >
        </h5>
        <h5 class="fw-bold text-start pb-3">
          Precio: <span class="fw-light text-danger">AAA</span>
        </h5>
        <button class="btn btn-dark px-5 mb-5">Ver más</button> -->

    <div class="row">
      <div class="col-12 text-center">
        <div>
          <h3 class="pb-3">
            En breve recibirás un llamado o un correo de nuestros ejecutivos
          </h3>
          <h3 class="fw-bold"><strong>¡GRACIAS POR CONTACTARNOS!</strong></h3>
          <hr />
        </div>
        <div class="col-12 py-3 d-flex justify-content-between">
          <div class="d-flex flex-column">
            <a href="#" style="text-decoration: none"
              ><i class="fas fa-phone-alt text-dark pe-2"></i>+56 9 12345678</a
            >
            <a href="#" class="text-dark"
              ><i class="fas fa-envelope text-dark pe-2"></i>ejemplo@mail.com</a
            >
          </div>
          <div>
            <a href="#"><i class="fab fa-instagram fa-2x text-dark"></i></a>
            <a href="#" class="px-2"
              ><i class="fab fa-facebook-square fa-2x text-dark"></i
            ></a>
            <a href="#"><i class="fab fa-youtube fa-2x text-dark"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* .container { */
  /* width: 60%;
  text-align: center;
  margin: 0 auto; */
/* } */
.table-1 {
  width: 50%;
  /* display: flex; */
}
.centrar {
  margin: 0 auto;
}
</style>
