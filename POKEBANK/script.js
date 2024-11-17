document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("nav-bar").classList.toggle("active");
  });

  /*DETALLES DE TRANSACCION E HISTORIAL JS */
// JavaScript para manejar el modal de detalles
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('details-modal');
  const closeBtn = document.querySelector('.close');
  const detailsButtons = document.querySelectorAll('.details-btn');

  // Al hacer clic en cualquier botón "Ver más"
  detailsButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      // Encuentra la fila correspondiente a la transacción
      const row = e.target.closest('tr');

      // Obtiene los datos de la fila (puedes ajustar según el índice de cada celda)
      const date = row.cells[0].textContent;
      const description = row.cells[1].textContent;
      const amount = row.cells[3].textContent;
      const balance = row.cells[4].textContent;

      // Inserta los datos en el modal
      document.getElementById('modal-date').textContent = date;
      document.getElementById('modal-description').textContent = description;
      document.getElementById('modal-amount').textContent = amount;
      document.getElementById('modal-balance').textContent = balance;

      // Muestra el modal
      modal.style.display = 'block';
    });
  });

  // Cierra el modal al hacer clic en la "X"
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Cierra el modal al hacer clic fuera del contenido del modal
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
function enterBank() {
  const welcomeText = document.getElementById('welcome-text');
  
  // Cambiar el texto al hacer clic
  welcomeText.innerHTML = 'Cargando tu banca en línea...';
  
  // Simular una pequeña espera antes de redirigir a otra página
  setTimeout(() => {
    window.location.href = './login/index.html'; 
  }, 2000);
}

//VALIDACION DE PIN EN LOGIN
// Información del usuario para autenticación
const usuario = {
  nombre: "Ash Ketchum",
  pin: "1234",
  cuenta: "0987654321",
  saldo: 500.00
};

// Referencias a elementos del DOM
const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Definir reglas de validación
const constraints = {
  username: {
      presence: { allowEmpty: false, message: "es obligatorio" },
      format: {
          pattern: "^[a-zA-Z0-9 ]+$",  // Permite letras, números y espacios
          message: "solo puede contener caracteres alfanuméricos y espacios"
      }
  },
  password: {
      presence: { allowEmpty: false, message: "es obligatorio" },
      length: {
          is: 4,
          message: "debe tener exactamente 4 dígitos"
      },
      numericality: {
          onlyInteger: true,
          message: "debe ser un número"
      }
  }
};

// Función para mostrar mensajes de error con SweetAlert
function mostrarErrores(errores) {
  let mensajes = [];
  for (const campo in errores) {
      mensajes.push(`${campo}: ${errores[campo].join(", ")}`);
  }
  Swal.fire({
      title: 'Errores de validación',
      text: mensajes.join("\n"),
      icon: 'error',
      confirmButtonText: 'Aceptar'
  });
}

// Evento de envío del formulario
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtener los valores de los campos
  const values = {
      username: usernameInput.value,
      password: passwordInput.value
  };

  // Validar los valores
  const errores = validate(values, constraints);

  // Si hay errores, mostrar mensaje de error
  if (errores) {
      mostrarErrores(errores);
      return;
  }

  // Validación del PIN
  if (passwordInput.value === usuario.pin && usernameInput.value === usuario.nombre) {
      // Guardar datos completos del usuario en localStorage
      localStorage.setItem("usuario", JSON.stringify(usuario));
      
      // Mostrar alerta de bienvenida
      Swal.fire({
          title: `¡Bienvenido, ${usuario.nombre}!`,
          text: `Número de Cuenta: ${usuario.cuenta}\nSaldo: $${usuario.saldo.toFixed(2)}`,
          icon: 'success',
          confirmButtonText: 'Continuar'
      }).then(() => {
          // Redirigir al historial de transacciones después de la alerta
          window.location.href = "../historial/index.html";
      });
      
  } else {
      // Mostrar alerta de error de PIN incorrecto
      Swal.fire({
          title: 'Error',
          text: 'PIN o Usuario incorrecto. Inténtalo de nuevo.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
      });
  }

  // Limpia el campo de PIN después del intento
  passwordInput.value = "";
});
