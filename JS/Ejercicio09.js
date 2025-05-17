document.addEventListener('DOMContentLoaded', function() {
    const tempForm = document.getElementById('tempForm');
    const resultCard = document.getElementById('result');
    const celsiusInput = document.getElementById('celsiusInput');
    const celsiusResult = document.getElementById('celsiusResult');
    const fahrenheitResult = document.getElementById('fahrenheitResult');
    const tempStatus = document.getElementById('tempStatus');
    const rangeIndicator = document.getElementById('rangeIndicator');

    tempForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const celsius = parseFloat(celsiusInput.value);
        
        if (isNaN(celsius)) {
            alert('Por favor ingresa una temperatura válida');
            return;
        }
        
        const resultado = analizarTemperatura(celsius);
        
        // Mostrar resultados
        celsiusResult.textContent = celsius.toFixed(1);
        fahrenheitResult.textContent = resultado.fahrenheit;
        
        // Actualizar estado
        actualizarEstado(resultado.mensaje, parseFloat(resultado.fahrenheit));
        
        // Mostrar tarjeta de resultados
        resultCard.classList.remove('hidden');
        
        // Mostrar en consola
        console.log(resultado);
    });

    function actualizarEstado(mensaje, fahrenheit) {
        // Limpiar clases anteriores
        tempStatus.className = 'temp-status';
        tempStatus.classList.add(mensaje.toLowerCase().replace(' ', '-'));
        
        // Actualizar icono y mensaje
        const icon = tempStatus.querySelector('.status-icon i');
        const message = tempStatus.querySelector('.status-message');
        
        message.textContent = mensaje;
        
        switch(mensaje) {
            case 'Temperatura baja':
                icon.className = 'fas fa-temperature-low';
                break;
            case 'Temperatura adecuada':
                icon.className = 'fas fa-temperature-empty';
                break;
            case 'Temperatura alta':
                icon.className = 'fas fa-temperature-high';
                break;
            default:
                icon.className = 'fas fa-question';
        }
        
        // Actualizar indicador de rango
        actualizarIndicadorRango(fahrenheit);
    }

    function actualizarIndicadorRango(fahrenheit) {
        const min = 14;
        const max = 96;
        const range = max - min;
        
        // Calcular posición porcentual (limitada entre 0% y 100%)
        let position = ((fahrenheit - min) / range) * 100;
        position = Math.max(0, Math.min(100, position));
        
        rangeIndicator.style.left = `${position}%`;
    }

    // Ejemplo inicial
    const ejemploInicial = 25;
    celsiusInput.value = ejemploInicial;
    const resultadoInicial = analizarTemperatura(ejemploInicial);
    celsiusResult.textContent = ejemploInicial;
    fahrenheitResult.textContent = resultadoInicial.fahrenheit;
    actualizarEstado(resultadoInicial.mensaje, parseFloat(resultadoInicial.fahrenheit));
    resultCard.classList.remove('hidden');
});