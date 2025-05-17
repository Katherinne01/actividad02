document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('comparatorForm');
    const resultCard = document.getElementById('result');
    const num1Display = document.getElementById('num1-value');
    const num2Display = document.getElementById('num2-value');
    const winnerDisplay = document.getElementById('winner-value');
    const num1Box = document.getElementById('num1-display');
    const num2Box = document.getElementById('num2-display');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const num1 = parseFloat(document.getElementById('number1').value);
        const num2 = parseFloat(document.getElementById('number2').value);

        // Validar que sean números válidos
        if (isNaN(num1)) {
            alert('Por favor ingrese un número válido en el primer campo');
            return;
        }

        if (isNaN(num2)) {
            alert('Por favor ingrese un número válido en el segundo campo');
            return;
        }

        // Calcular el mayor
        const mayor = encontrarMayor(num1, num2);

        // Mostrar resultados
        num1Display.textContent = num1;
        num2Display.textContent = num2;
        winnerDisplay.textContent = mayor;

        // Resaltar el número ganador
        num1Box.classList.remove('winner');
        num2Box.classList.remove('winner');
        
        if (num1 === num2) {
            winnerDisplay.textContent = 'Son iguales';
            winnerDisplay.style.color = '#2ecc71';
        } else if (mayor === num1) {
            num1Box.classList.add('winner');
            winnerDisplay.style.color = '#f72585';
        } else {
            num2Box.classList.add('winner');
            winnerDisplay.style.color = '#f72585';
        }

        // Mostrar tarjeta de resultados
        resultCard.classList.remove('hidden');
    });
});