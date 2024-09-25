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
  