document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('discountForm');
    const resultCard = document.getElementById('result');
    const discountBadge = document.getElementById('discountBadge');
    const resultModel = document.getElementById('resultModel');
    const resultPrice = document.getElementById('resultPrice');
    const resultDiscount = document.getElementById('resultDiscount');
    const resultFinal = document.getElementById('resultFinal');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const modelo = document.getElementById('carModel').value;
        const precio = parseFloat(document.getElementById('carPrice').value);

        
        if (!modelo) {
            alert('Por favor seleccione un modelo de vehículo');
            return;
        }

        if (isNaN(precio) || precio <= 0) {
            alert('Por favor ingrese un precio válido');
            return;
        }

        const resultado = calcularDescuento(modelo, precio);

        
        resultModel.textContent = modelo.charAt(0).toUpperCase() + modelo.slice(1).toLowerCase();
        resultPrice.textContent = '$' + precio.toFixed(2);
        resultDiscount.textContent = resultado.descuento;
        resultFinal.textContent = '$' + resultado.precioFinal;
        
        
        discountBadge.textContent = resultado.descuento + ' OFF';
        discountBadge.style.backgroundColor = resultado.descuento === '0%' ? '#6c757d' : '#28a745';

        
        resultCard.classList.remove('hidden');
    });
    
    document.getElementById('carModel').addEventListener('change', function() {
        const modelo = this.value;
        let precioEjemplo = '';
        
        switch(modelo) {
            case 'FORD FIESTA':
                precioEjemplo = 'Ej: 15000';
                break;
            case 'FORD FOCUS':
                precioEjemplo = 'Ej: 20000';
                break;
            case 'FORD ESCAPE':
                precioEjemplo = 'Ej: 30000';
                break;
            default:
                precioEjemplo = 'Ingrese el precio';
        }
        
        document.getElementById('carPrice').placeholder = precioEjemplo;
    });
});