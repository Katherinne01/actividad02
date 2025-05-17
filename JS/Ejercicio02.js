function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    const notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);
    
    return {
        nombre: nombre,
        carnet: carnet,
        notaFinal: notaFinal.toFixed(2)
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('gradeForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
 
        const nombre = document.getElementById('nameInput').value;
        const carnet = document.getElementById('idInput').value;
        const examen = parseFloat(document.getElementById('examInput').value);
        const tareas = parseFloat(document.getElementById('homeworkInput').value);
        const asistencia = parseFloat(document.getElementById('attendanceInput').value);
        const investigacion = parseFloat(document.getElementById('researchInput').value);

        if ([examen, tareas, asistencia, investigacion].some(grade => grade < 0 || grade > 10)) {
            alert("Todas las notas deben estar entre 0 y 10");
            return;
        }

       
        const resultado = calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion);

        resultDiv.innerHTML = `
            <h2>Resultado Académico</h2>
            <p><strong>Alumno:</strong> ${resultado.nombre}</p>
            <p><strong>Carnet:</strong> ${resultado.carnet}</p>
            <p><strong>Nota Final:</strong> <span class="final-grade">${resultado.notaFinal}</span></p>
            <p><strong>Estado:</strong> ${resultado.notaFinal >= 6 ? '✅ Aprobado' : '❌ Reprobado'}</p>
        `;
        
        resultDiv.classList.add('show');
    });
});