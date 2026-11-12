const costo = document.querySelector('#costo');
const margen = document.querySelector('#margen');
const precio = document.querySelector('#precio');
const pesos = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });

function actualizarPrecio() {
  if (!costo.validity.valid || !margen.validity.valid) {
    precio.textContent = '—';
    return;
  }

  const precioSugerido = Math.ceil(costo.valueAsNumber * 100 / (100 - margen.valueAsNumber));
  precio.textContent = pesos.format(precioSugerido);
}

costo.addEventListener('input', actualizarPrecio);
margen.addEventListener('input', actualizarPrecio);
actualizarPrecio();
