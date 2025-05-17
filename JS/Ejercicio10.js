document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultSection = document.getElementById('result');
    const conclusionCard = document.getElementById('conclusionCard');

    // Elementos de resultados
    const countManana = document.getElementById('countManana');
    const promedioManana = document.getElementById('promedioManana');
    const countTarde = document.getElementById('countTarde');
    const promedioTarde = document.getElementById('promedioTarde');
    const countNoche = document.getElementById('countNoche');
    const promedioNoche = document.getElementById('promedioNoche');
    const turnoMayor = document.getElementById('turnoMayor');

    calculateBtn.addEventListener('click', function() {
        // Obtener valores de los textareas
        const edadesManana = parseInput('mananaInput');
        const edadesTarde = parseInput('tardeInput');
        const edadesNoche = parseInput('nocheInput');

        // Validar que haya al menos un valor en cada turno
        if (edadesManana.length === 0 || edadesTarde.length === 0 || edadesNoche.length === 0) {
            alert('Por favor ingresa valores en todos los turnos');
            return;
        }

        // Calcular promedios
        const resultado = calcularPromedios(edadesManana, edadesTarde, edadesNoche);

        // Mostrar resultados
        mostrarResultados(edadesManana, edadesTarde, edadesNoche, resultado);
    });

    function parseInput(inputId) {
        const inputText = document.getElementById(inputId).value;
        return inputText.split(',')
            .map(item => parseFloat(item.trim()))
            .filter(item => !isNaN(item));
    }

    function mostrarResultados(manana, tarde, noche, resultado) {
        // Actualizar cantidades
        countManana.textContent = manana.length;
        countTarde.textContent = tarde.length;
        countNoche.textContent = noche.length;

        // Actualizar promedios
        promedioManana.textContent = resultado.promedios.manana.toFixed(2);
        promedioTarde.textContent = resultado.promedios.tarde.toFixed(2);
        promedioNoche.textContent = resultado.promedios.noche.toFixed(2);

        // Actualizar turno con mayor promedio
        turnoMayor.textContent = resultado.turnoMayor;

        // Resaltar la tarjeta ganadora
        document.querySelectorAll('.result-card').forEach(card => {
            card.classList.remove('winner');
        });

        if (resultado.turnoMayor === 'mañana') {
            document.querySelector('.result-card.manana').classList.add('winner');
        } else if (resultado.turnoMayor === 'tarde') {
            document.querySelector('.result-card.tarde').classList.add('winner');
        } else {
            document.querySelector('.result-card.noche').classList.add('winner');
        }

        // Mostrar resultados
        resultSection.classList.remove('hidden');

        // Mostrar en consola
        console.log('Promedio turno mañana:', resultado.promedios.manana.toFixed(2));
        console.log('Promedio turno tarde:', resultado.promedios.tarde.toFixed(2));
        console.log('Promedio turno noche:', resultado.promedios.noche.toFixed(2));
        console.log('Turno con mayor promedio:', resultado.turnoMayor);
    }

    // Calcular con los valores iniciales
    calculateBtn.click();
});