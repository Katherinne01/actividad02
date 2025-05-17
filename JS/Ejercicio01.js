
function verificarEdad(edad) {
    return edad >= 18 ? "✅ La persona es mayor de edad" : "❌ La persona es menor de edad";
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ageForm');
    const resultDiv = document.getElementById('result');
    const ageInput = document.getElementById('ageInput');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const edad = parseInt(ageInput.value);
        
        if (isNaN(edad) || edad <= 0) {
            resultDiv.textContent = "⚠️ Por favor ingresa una edad válida";
            resultDiv.className = "result show result--error";
            return;
        }

        const resultado = verificarEdad(edad);
        resultDiv.textContent = resultado;
        resultDiv.className = `result show ${edad >= 18 ? 'result--success' : 'result--error'}`;
        
        
        setTimeout(() => {
            ageInput.value = '';
            ageInput.focus();
        }, 3000);
    });
});