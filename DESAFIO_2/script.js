// Variables para almacenar las transacciones
let ingresos = [];
let egresos = [];

// Funcion para truncar textos (para evitar que se rompa el diseno)
function truncar(str, max) {
  return str.length>max ? `${str.slice(0, max - 3)}...` : str;
}

// Función para actualizar el resumen del presupuesto
function actualizarResumen() {
  const totalIngresos = ingresos.reduce((total, ingreso) => total + ingreso.monto, 0);
  const totalEgresos = egresos.reduce((total, egreso) => total + egreso.monto, 0);
  const totalDisponible = totalIngresos - totalEgresos;

  // Actualizar el DOM con los nuevos valores
  document.querySelector('.budget h2').innerText = `+${totalDisponible.toFixed(2)}`;
  document.querySelector('.income .amount').innerText = `+${totalIngresos.toFixed(2)}`;
  document.querySelector('.expense .amount').innerText = `-${totalEgresos.toFixed(2)}`;

  const porcentajeEgreso = totalIngresos > 0 ? (totalEgresos / totalIngresos) * 100 : 0;
  document.querySelector('.percent span').innerText = `${porcentajeEgreso.toFixed(2)}%`;
}

// Función para agregar transacción
function agregarTransaccion(event) {
  event.preventDefault();

  const tipo = document.getElementById('type').value;
  const descripcion = document.getElementById('description').value;
  const monto = parseFloat(document.getElementById('amount').value);

  if (descripcion === '' || isNaN(monto) || monto <= 0) {
    alert('Por favor, introduce una descripción válida y un monto mayor a 0.');
    return;
  }

  const transaccion = { descripcion, monto };

  if (tipo === 'ingreso') {
    ingresos.push(transaccion);
  } else {
    egresos.push(transaccion);
  }

  document.getElementById('description').value = '';
  document.getElementById('amount').value = '';

  actualizarResumen();
  mostrarTransacciones(); // Mostrar en la pestaña activa
}

function mostrarTransacciones() {
    const totalIngresos = ingresos.reduce((total, ingreso) => total + ingreso.monto, 0);
    const tipoActivo = document.querySelector('.tab.active').dataset.tipo;
    const listaTransacciones = document.querySelector('.transactions-list');
    listaTransacciones.innerHTML = ''; // Limpiar lista
    const transacciones = tipoActivo === 'ingreso' ? ingresos : egresos;
    transacciones.forEach(transaccion => {
      const transaccionElemento = document.createElement('p');
      transaccionElemento.innerText = `${truncar(transaccion.descripcion,20)}: ${tipoActivo === 'ingreso' ? '+' : '-'}${transaccion.monto.toFixed(2)}`;
      if(tipoActivo==='egreso') {
        const porcentajeElemento = document.createElement('span');
        const porcentaje = (transaccion.monto*100)/totalIngresos;
        porcentajeElemento.innerText = `${porcentaje.toFixed(0)}%`;
        transaccionElemento.appendChild(porcentajeElemento);
      }
      listaTransacciones.appendChild(transaccionElemento);
      console.log(transaccionElemento);
    });
    document.querySelectorAll('.transactions-list').forEach(list => list.classList.remove('active'));
    document.querySelector(`.transactions-list.${tipoActivo}`).classList.add('active');
  }
  

// Función para cambiar pestañas
function cambiarPestaña(event) {
  const tipo = event.target.dataset.tipo;

  // Cambiar la clase activa
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');

  mostrarTransacciones();
}

// Asignar evento al formulario de transacciones
document.getElementById('transaction-form').addEventListener('submit', agregarTransaccion);

// Asignar eventos a las pestañas
document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', cambiarPestaña));

// Inicialización
actualizarResumen();
mostrarTransacciones(); // Mostrar transacciones en la pestaña activa

