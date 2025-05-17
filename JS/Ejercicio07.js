document.addEventListener('DOMContentLoaded', function() {
    const analyzeBtn = document.getElementById('analyzeBtn');
    const resultSection = document.getElementById('result');
    const numbersDisplay = document.getElementById('numbersDisplay');
    const negativosEl = document.getElementById('negativos');
    const positivosEl = document.getElementById('positivos');
    const multiplos15El = document.getElementById('multiplos15');
    const sumaParesEl = document.getElementById('sumaPares');

    analyzeBtn.addEventListener('click', function() {
        const inputText = document.getElementById('numberInput').value;
        
        const valores = inputText.split(',')
            .map(item => parseFloat(item.trim()))
            .filter(item => !isNaN(item));
        
        if (valores.length === 0) {
            alert('Por favor ingresa valores numéricos separados por comas');
            return;
        }

        const resultados = analizarValores(valores);

        mostrarResultados(valores, resultados);
    });

    function mostrarResultados(valores, resultados) {
        numbersDisplay.innerHTML = '';

        
        valores.forEach(valor => {
            const numberBubble = document.createElement('div');
            numberBubble.className = 'number-bubble';
            
            if (valor < 0) {
                numberBubble.classList.add('negative');
            } else if (valor > 0) {
                numberBubble.classList.add('positive');
            } else {
                numberBubble.classList.add('zero');
            }
            
            if (valor % 15 === 0 && valor !== 0) {
                numberBubble.classList.add('multiple');
            }
            
            if (valor % 2 === 0 && valor !== 0) {
                numberBubble.classList.add('even');
            }
            
            numberBubble.textContent = valor;
            numbersDisplay.appendChild(numberBubble);
        });

        
        negativosEl.textContent = resultados.negativos;
        positivosEl.textContent = resultados.positivos;
        multiplos15El.textContent = resultados.multiplos15;
        sumaParesEl.textContent = resultados.sumaPares;

       
        resultSection.classList.remove('hidden');
    }

    
    const valoresIniciales = [10, -5, 30, 7, -8, 15, 0, 22, -3, 45];
    document.getElementById('numberInput').value = valoresIniciales.join(', ');
    mostrarResultados(valoresIniciales, analizarValores(valoresIniciales));
});