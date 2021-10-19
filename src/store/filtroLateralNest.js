
export function getCategoria(autos, categorias) {
  if (categorias.length === 0) return autos;
  else return autos.filter((el) => categorias.includes(el.categoria));
};

export function getTransmision(autos, transmisiones){
  if (transmisiones.length === 0) return autos;
  else return autos.filter((el) => transmisiones.indexOf(el.transmision) !== -1)
}
