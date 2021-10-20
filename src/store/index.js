import Vue from "vue";
import Vuex from "vuex";
import json from "../../pruebaAutos.json";
// import {getCategoria, getTransmision} from "./filtroLateralNest"
// import {getCategoria} from "./filtroLateralNest"
// import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: json.data,
    // CAMBIO DE FILTRO SEMINUEVOS
    cambioDeFiltro: true,
    // CAMBIO DE FILTRO SOLICITUD FINANCIMIENTO
    FinanciamientoNombres: false,
    // CAMBIO DE FILTRO CONTACTO
    contactoNombres: true,
    // CAMBIO DE FILTRO PAGE
    pageNombres: true,
    // CAMBIO DE FILTRO LATERAL
    categoriasToggle: true,
    marcaToggle: true,
    aniosToggle: true,
    precioToggle: true,
    transmisionToggle: true,
    combustibleToggle: true,
    // FIN CAMBIO DE FILTRO LATERAL
    // ESTADO FILTRO DE CATEGORIA
    categorias: [],
    transmisiones: [],
    combustibles: [],
    categoriasTotal: [],
    categoriasFiltradas: [],
    filtrados: [],
    // SELECCIONADOS SEMINUEVOS COMPARADOR
    seleccionados: [],
    minMaxYear: [],

  },
  getters: {
    getFiltrosLateral(state) {
      if(state.categorias.length && state.transmisiones.length && state.combustibles.length) return state.data.filter(obj => state.categorias.includes(obj.categoria) && state.transmisiones.includes(obj.transmision) && state.combustibles.includes(obj.combustible));
      else if(state.categorias.length && state.transmisiones.length) return state.data.filter(obj => state.categorias.includes(obj.categoria) && state.transmisiones.includes(obj.transmision));
      else if(state.categorias.length && state.combustibles.length) return state.data.filter(obj => state.categorias.includes(obj.categoria) && state.combustibles.includes(obj.combustible));
      else if(state.categorias.length) return state.data.filter(obj => state.categorias.includes(obj.categoria));
      else if(state.transmisiones.length && state.categorias.length) return state.data.filter(obj => state.transmisiones.includes(obj.transmision) && state.categorias.includes(obj.categoria));
      else if(state.transmisiones.length && state.combustibles.length) return state.data.filter(obj => state.transmisiones.includes(obj.transmision) && state.combustibles.includes(obj.combustible));
      else if(state.transmisiones.length) return state.data.filter(obj => state.transmisiones.includes(obj.transmision));
      else if(state.combustibles.length && state.categorias.length) return state.data.filter(obj => state.combustibles.includes(obj.combustible) && state.categorias.includes(obj.categoria));
      else if(state.combustibles.length && state.transmisiones.length) return state.data.filter(obj => state.combustibles.includes(obj.combustible) && state.transmisiones.includes(obj.transmision))
      else if(state.combustibles.length) return state.data.filter(obj => state.combustibles.includes(obj.combustible));
      else return state.data
    },
      /***  CATEGORIAS  ***/
    itemsCategorias(state) {
      const categorias = state.data.map(el => el.categoria).filter((categoria, i, arr) => arr.indexOf(categoria) === i);
      return categorias;
    },
    /***  TRANSMISIONES  ***/
    itemsTransmision(state) {
      const transmisiones = state.data.map(el => el.transmision).filter((transmision, i, arr) => arr.indexOf(transmision) === i);
      return transmisiones;
    },
    /***  COMBUSTIBLES  ***/
    itemsCombustible(state) {
      const combustibles = state.data.map(el => el.combustible).filter((combustible, i, arr) => arr.indexOf(combustible) === i);
      return combustibles;
    },
    intemsAnios(state) {
      const anios = state.data.map(el => el.anio).filter((anio, i, arr) => arr.indexOf(anio) === i);
      return anios;
    },
    comparadorSeleccion(state) {
      if(state.seleccionados.length > 3) {
        state.seleccionados.pop();
        alert("No puede seleccionar más de automóviles");
      };
      return state.seleccionados;
    },
    // minMaxYear(state){
    //   let minMax = [];
    //   const anios = state.data.map(el => el.anio).filter((anio, i, arr) => arr.indexOf(anio) === i);

    // },
    getMinMaxYear(state){
      let arr = []
      const anios = state.data.map(el => el.anio).filter((anio, i, arr) => arr.indexOf(anio) === i);
      const min = Math.min.apply(Math, anios);
      arr.push(min)
      const max = Math.max.apply(Math, anios);
      arr.push(max)
      return arr
    }
  },
  mutations: {
    // FORMATEADOR DE PRECIOS CL Y USD
    formatPrices(state) {
      const filtradosCl = state.data.filter((el) => el.moneda === "$");
      filtradosCl.forEach(
        (el) =>
          (el.formatPrecio = `$${el.precio.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            "."
          )}`)
      );
      const formatter = new Intl.NumberFormat("en-US", {
        currency: "USD",
      });
      const filtradosUsd = state.data.filter((el) => el.moneda === "USD");
      filtradosUsd.forEach(
        (el) => (el.formatPrecio = `USD ${formatter.format(el.precio)}`)
      );
    },
    // OBSERVADOR DE CATEGORIAS
    categoriasObserver(state, payload) {
      const carga = payload;
      if (!carga) return;
      state.categorias = carga;
    },
    // OBSERVADOR DE TRANSMISION
    transmisionObserver(state, payload) {
      const carga = payload;
      if(!carga) return
      state.transmisiones = carga;
    },
    //OBSERVADOR DE COMBUSTIBLE
    combustiblesObserver(state, payload) {
      const carga = payload;
      if(!carga) return;
      state.combustibles = carga;
    },
    // OBSERVADOR DE COMPARADOR
    observadorSeleccionado(state, payload) {
      const carga = payload;
      if(!carga) return;
      state.seleccionados = carga;
    },
    // BORRAR DEL COMPARADOR
    deleteByIdSeleccionados(state, payload) {
      const carga = payload;
      if(!carga) return;
      state.seleccionados.splice(carga.indexOf(state.seleccionados))
    },
    deleteTodosSeleccionados(state) {
      state.seleccionados = [];
    },
    // showValue(state, payload) {
    //   state.data;
    //   const carga = payload;
    //   console.log(carga);
    // }
    getMinMaxYear(state){
      let arr = []
      const anios = state.data.map(el => el.anio).filter((anio, i, arr) => arr.indexOf(anio) === i);
      const min = Math.min.apply(Math, anios);
      arr.push(min)
      const max = Math.max.apply(Math, anios);
      arr.push(max)
      state.minMaxYear = arr;
      return arr
    },
    getMinYear(state, payload){
      state;
      console.log(payload);
      // console.log(payload);
    },
  },
  actions: {},
  modules: {},
});
