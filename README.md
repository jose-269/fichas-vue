# fichas_vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Version Bootstrap
v5.1 
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
```
### version jQuery 

version ^3.6.0

### nigthcatsama   

Libreria de Vue para implementar input range.   
version v3.2.10

## General

La aplicación está desarrollada con Vue Cli 2.0, el repositorio de Bitbucket es: [link](https://jose-269@bitbucket.org/destacados/fichas-vue.git)  

Para incializar el proyecto se debe instalar los modulos de node a través de la consola con el comando:

```
npm install
```

## Estructura de carpetas del proyecto fichas

```
node_modulos
│
│
│
public
│
│   favicon.ico
│   index.html 
│___
│
src
│   App.vue
│   main.js
│   .browserslistrc
│   .eslintrc.js
│   .gitignore
│   babel.config.js
│   package-lock.json
│   package.json
│
└───assets
    │   1920x400.png
    │   logo-sitio.png
    │
    └───img
    │   │   1920x400.png
    │   │   logo-sitio.png
    │   │___
    │   │
    │   │___logo.png
    │
    │___components
    │   │
    │   │   Buscador.vue
    │   │   Cards.vue
    │   │   Footer.vue
    │   │   Mapa.vue
    │   │   Nav.vue
    │   │   NuestroStock.vue
    │   │   Paginacion.vue
    |   |   RandomCards.vue
    │   │   MainSlider.vue        
    │   │
    |   |__ficha-detalle
    |   |  | 
    |   |  |  Slider.vue
    |   |  |
    |   |  |___   
    |   | 
    |   |
    │   │___filtros
    |       |
    │       │   FiltroLateral.vue   
    │       │   FiltroSobre.vue
    |       |   FiltroResultadoDePagina.vue
    │       │ 
    │       │___filtros_laterales
    │       │   │
    │       │   │   Anios.vue
    │       │   │   Categorias.vue
    │       │   │   Combustible.vue
    │       │   │   Marca.vue
    │       │   │   Precio.vue
    │       │   │   Transmision.vue
    │       │   │___
    │       │
    │       │___filtros_resultado_pagina
    │       |   │
    │       |   │   AutosPorPagina.vue
    │       |   │   FiltroResultados.vue
    │       |   │   PrecioMayorMenor.vue
    │       |   │___
    │       |
    |       |___filtro-contacto
    |       |   |
    |       |   |   ContactoNombresJuntos.vue 
    |       |   |   ContactoNombresSeparados.vue
    |       |   |___
    |       | 
    |       |___filtro-nombres-page
    |       |   |
    |       |   |   PageNombresJuntos.vue   
    |       |   |   PageNombresSeparados.vue
    |       |   |___
    |       |
    |       |___filtro-solicitud-financiamiento
    |           |
    |           |   FinanciamientoNombresJuntos.vue           
    |           |   FinanciamientoNombresSeparados.vue
    |           |___
    |
    │___router
    │   │
    │   │   index.js
    │   │___
    │
    │___scss
    │   │
    │   │   main.scss
    │   │
    │   │___abstract
    │   │   │
    │   │   │   _function.scss
    │   │   │   _mixins.scss
    │   │   │   _placeholders.scss
    │   │   │   _variables.scss
    │   │   │___
    │   │
    │   │___base
    │   │   │
    │   │   │   _reset.scss
    │   │   │   _typography.scss
    │   │   │
    │   │   │___
    │   │
    │   │
    │   │___components
    │   │   │
    │   │   │   _buttons.scss
    │   │   │   _carousel.scss
    │   │   │   _cover.scss
    │   │   │   _dropdown.scss
    │   │   │
    │   │   │___
    │   │
    │   │
    │   │___layout
    │   │   │
    │   │   │   _footer.scss
    │   │   │   _forms.scss
    │   │   │   _grid.scss
    │   │   │   _header.scss
    │   │   │   _main.scss
    │   │   │   _navigarion.scss
    │   │   │   _sidebar.scss
    │   │   │
    │   │   │___
    │   │
    │   │
    │   │___pages
    │   │   │
    │   │   │   _contact.scss
    │   │   │   _home.scss
    │   │   │
    │   │   │___
    │   │
    │   │
    │   │___themes
    │   │   │
    │   │   │   _admin.scss
    │   │   │   _theme.scss
    │   │   │
    │   │   │____
    │   │
    │   │
    │   │___vendors
    │   │
    │   │   _bootdtrap.scss
    │   │   _jquery-ui.scss
    │   │
    │   │___
    │
    │
    │___store
    │   │
    │   │   index.js
    │   │
    │   │___
    │
    │  
    │___views
        │
        |   Comparador.vue
        |   Compramos-tu-auto.vue
        |   Contacto.vue
        |   Cotizacion-cliente.vue
        │   Financiamiento.vue  
        │   Formulario-contacto.vue
        │   Home.vue
        |   Mailto.vue
        |   Page.vue
        │   Seminuevos.vue
        │
        |___

```

# Detalles de estructura del proyecto

En la carpetas node_modules estan los nodos de modules.

## Public

En la carpeta public está el index.html que es donde van los CDN de Bootstrap y Fontawesome, también van
las fuentes de Google Fonts por ejemplo.

## src

Acá están las carpetas que principalmente vamos a usar. Esta el App.vue que es el archivo principal de
nuestra aplicación, en el main.js esta todo lo que vamos a usar en vue como por ejemplo vuex o router.

## assets

Acá esta la carpeta img que es donde estan nuestras imagenes estáticas.

## Componentes

### Los componentes son los siguientes:

* Buscador.vue
* Cards.vue
* Footer.vue
* Mapa.vue
* Nav.vue
* NuestroStock.vue
* Paginacion.vue
* RandomCards.vue
* MainSlider.vue  

### Buscador.vue

Este componente es el buscador por palabras, este componente puede ser opcional de acuerdo el cliente.

### Cards.vue

Este componente son las fichas, o sea las cards de cada vehículo. Las cards dentro de la imagen tienen un checkbox de comparar dos o tres vehículos, además si pinchamos sobre la imagen nos dirigimos a la vista del detalle del vehículo que su nombre es page.
También tiene una propiedad computada llamada "seleccionador" que funciona como "Listener" del vehículo seleccionado.

### Footer.vue

Este componente es el footer y esta disponible para toda la aplicación.

### MainSlider.vue

Este componente es el carousel principal de la aplicación y esta disponible para la vista de Home.vue y para la vista de Seminuevos.vue 

### Mapa.vue

Este componente es el mapa de la ubicación de la automotora (google-Maps), por el momento esta disponible para las vistas de Home.vue, Financiamiento.vue, Contacto.vue.

### Nav.vue

Este componente es el navbar, tiene el logo del sitio y las rutas de:

* Compramos tu auto
* Inicio
* Seminuevos
* Financiamiento
* Contacto

y un dropdown que dice "Sieguenos" que muestra las redes sociales.

### NuestroStack.vue

Este componente solo tiene una sita que dice "Visita nuestro amplio stock en vehículos seminuevos y un boton que redirige a la ruta o vista de Seminuevos.

### Paginacion.vue

Este componente contiene la paginación de la vista y solamente está presente en Seminuevos.vue

### RandomCards.vue

Este componente tambien contiene las cards de los vehículos pero solo está en la vista de Home y debe mostrar cierta cantidad de tarjetas.

### En la carpeta filtros que está dentro de componentes se encuentran los siguientes componentes:   
  
* FiltroSobre.vue  
* FiltroLateral.vue  
* FiltroResultadoDePagina.vue

### FiltroLateral.vue

Este componente contiene dentro de el los siguientes componentes que se encuentran separados por módulos:

* Categorias.vue
* Marcas.vue
* Anios.vue
* Precio.vue
* Transmision.vue
* Combustible.vue

Estos componentes reciben como atributos la data filtrada correspondiente para cada uno, también recibe un v-if con su toggle correspondiente: 

```html
          <Categorias :categories="itemsCategorias" v-if="categoriasToggle" />
          <Marca :mark="marca" v-if="marcaToggle" />
          <Anios v-if="aniosToggle"/>
          <Precio v-if="precioToggle" />
          <Transmision :transmission="itemsTransmision" v-if="transmisionToggle" />
          <Combustible :fuel="itemsCombustible" v-if="combustibleToggle"/>
```

En este caso :categories="itemsCategorias" es la prop que recibe la data filtrada y v-if="categoriasToggle" /> es el condicional.

Todos estos componentes estan con una condicional para mostrar u ocultarse por ejemplo cuando la variable cambia de true a false se oculta (este archivo esta en Store/Index.js):

```js
    categoriasToggle: false,
    marcaToggle: true,
    aniosToggle: true,
    precioToggle: true,
    transmisionToggle: true,
    combustibleToggle: true,
```

### Categorias.vue

Dentro de este componente iteramos con el atributo v-for y la data la recibimos como Props (nuestro arreglo a iterar en este caso es categories), como vemos a continuación:

```html
<div class="form-check" v-for="(item, i) in categories" :key="i">
  <input class="form-check-input" type="checkbox" :id="item" :value="item" v-model="observadorCategoria"/>
  <label class="form-check-label text-capitalize">
      {{ item }}
  </label>
</div>
```

Tambien tenemos una propiedad computada que se funciona como listener de la categoria seleccionada:

```js
observadorCategoria: {
      get() {
        return this.categorias;
      },
      set(v) {
        this.categoriasObserver(v);
      }
    }
```

### En la carpeta filtros_resultado_pagina que esta dentro de filtros se encuentran los siguientes componentes:  
  
* AutosPorPagina.vue  
* FiltroResultados.vue  
* PrecioMayorMenor.vue  

Estos componentes pueden ser insertados como etiquetas Html y para editarlos hay quen entrar directamente en el archivo. Los filtros de busqueda y de muestra han sido separados como componentes individuales cada uno.

## Vistas

## Las vistas son las siguientes:

* App.vue (que es la vista principal donde se carga la aplicación,)    
* Home.vue  
* Seminuevos.vue  
* Financiamiento.vue  
* Contacto.vue
* Page
* Email.vue
      
Para editar las vistas hay que entrar directamente en ellas.

## App

Contiene los componentes que van en todas las vistas que son:

Nav.vue  
Footer.vue  
router-view (Para que funcionen las rutas)

## Home

## componentes: 

Slider.vue  
Cards.vue  
NuestroStock.vue  
Mapa.vue

## Seminuevos

Slider.vue  
Buscador.vue  
FiltroSobre.vue  
FiltroLateral.vue  
FiltroResultadoDePagina.vue  
Paginacion.vue

## Financiamiento

Mapa.vue

## Contacto

Mapa.vue


## Estilos

Ya sea componentes o vistas tienen sus estilos abajo de las etiquetas script, dentro de estas etiquetas se
puede escribir CSS o Scss, para escribir Scss hay que agregar el atributo lang="scss" y si deseamos que los 
estilos se apliquen sólo a la misma vista o componente sobre la que estamos escribiendo hay que agregarle el atributo scoped. Si queremos importar los archivos scss, hay que importarlo dentro de la etiqueta style.

Está implementado el patron 7-1 en la carpeta scss.

En el siguiente ejemplo tenemos el atributo scoped, el atributo lang y la importación de scss:

///Ejemplo///

```
<style lang="scss" scoped>
  @import "@/scss/main.scss";

  .bg {
  background-color: #212121;
  }

  .main-title {
  font-size: 3.5rem;
  font-weight: normal;
  font-family: $hero-title;
  }

```
///Fin Ejemplo///

## Router

Acá hay un archivo index.js que es donde manejamos las distintas rutas o vistas de la pagina.

## Scss

Carpetas con el patrón 7,1 de sass.

## Store

Acá manejamos las distintas variables y estados para nuestro proyecto y contiene el archivo:

index.js


## Views

Acá estan todas las rutas o vistas de  nuestra aplicación y las vistas son:

Home.vue  
Seminuevo.vue  
Financiamiento.vue  
Contacto.vue
Page.vue  
Email.vue
