// JavaScript para manejar el modal de detalles
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('details-modal');
  const closeBtn = document.querySelector('.close');
  const detailsButtons = document.querySelectorAll('.details-btn');

  detailsButtons.forEach(button => {
    button.addEventListener('click', () => {
      const transactionId = button.getAttribute('data-id');
      // Aquí se pueden cargar los detalles de la transacción según el ID
      document.getElementById('modal-date').textContent = '03/09/2024';
      document.getElementById('modal-description').textContent = 'Depósito';
      document.getElementById('modal-amount').textContent = '+ $200.00';
      document.getElementById('modal-balance').textContent = '$1150.00';

      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Asegúrate de que jsPDF esté cargado
  if (!window.jspdf) {
    console.error("jsPDF no está disponible.");
    return;
  }

  const { jsPDF } = window.jspdf;

  // Referencia al botón para generar PDF
  const pdfButton = document.getElementById("generate-pdf");

  // Verifica si hay datos del usuario en localStorage
  const usuario = JSON.parse(localStorage.getItem("usuario")) || {
    nombre: "Ash Ketchum",
    cuenta: "0987654321",
    saldo: 500.0,
  };

  // Transacción de ejemplo (puedes reemplazarla con datos dinámicos)
  const transaccion = {
    fecha: "01/09/2024",
    descripcion: "Pago en Tienda",
    monto: -50.0,
    saldo: usuario.saldo - 50.0,
  };

  // Generar PDF al hacer clic en el botón
  pdfButton.addEventListener("click", () => {
    const doc = new jsPDF();

    // Encabezado
    doc.setFontSize(18);
    doc.text("PokeBank - Comprobante de Transacción", 20, 20);

    // Información del usuario
    doc.setFontSize(12);
    doc.text(`Nombre: ${usuario.nombre}`, 20, 40);
    doc.text(`Número de Cuenta: ${usuario.cuenta}`, 20, 50);

    // Detalles de la transacción
    doc.text("Detalles de la Transacción:", 20, 70);
    doc.text(`Fecha: ${transaccion.fecha}`, 20, 80);
    doc.text(`Descripción: ${transaccion.descripcion}`, 20, 90);
    doc.text(`Monto: $${transaccion.monto.toFixed(2)}`, 20, 100);
    doc.text(`Saldo después de la transacción: $${transaccion.saldo.toFixed(2)}`, 20, 110);

    // Pie de página
    doc.text("Gracias por usar PokeBank.", 20, 140);

    // Guardar como PDF
    doc.save("comprobante.pdf");
  });
});

  
