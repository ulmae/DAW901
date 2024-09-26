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
