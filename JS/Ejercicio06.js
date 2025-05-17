document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('travelForm');
    const resultCard = document.getElementById('result');
    const discountBadge = document.getElementById('discountBadge');
    const originResult = document.getElementById('originResult');
    const destinationResult = document.getElementById('destinationResult');
    const resultDiscount = document.getElementById('resultDiscount');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const origen = document.getElementById('origin').value;
        const destino = document.getElementById('destination').value;

        if (!origen) {
            alert('Por favor seleccione un origen');
            return;
        }

        if (!destino) {
            alert('Por favor seleccione un destino');
            return;
        }

        const descuento = calcularDescuentoViaje(origen, destino);

        originResult.textContent = 'Palma';
        destinationResult.textContent = destino.charAt(0).toUpperCase() + destino.slice(1);
        resultDiscount.textContent = descuento;
        
        discountBadge.textContent = descuento;
        
        const discountValue = parseFloat(descuento);
        if (discountValue > 0) {
            discountBadge.style.backgroundColor = '#28a745';
        } else {
            discountBadge.style.backgroundColor = '#6c757d';
        }

        resultCard.classList.remove('hidden');
    });

    document.getElementById('destination').addEventListener('change', function() {
        const destino = this.value;
        const transportIcon = document.querySelector('.transport-icon i');
        
        if (destino.includes('costa')) {
            transportIcon.className = 'fas fa-ship';
        } else if (destino.includes('puerto')) {
            transportIcon.className = 'fas fa-anchor';
        } else {
            transportIcon.className = 'fas fa-bus';
        }
    });
});