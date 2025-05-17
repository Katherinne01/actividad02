document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('salaryForm');
    const resultCard = document.getElementById('resultado');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const nombre = document.getElementById('nombre').value;
        const salario = parseFloat(document.getElementById('salario').value);
        const categoria = document.getElementById('categoria').value;

        
        if (isNaN(salario) || salario <= 0) {
            alert('Por favor ingrese un salario válido');
            return;
        }

        if (!categoria) {
            alert('Por favor seleccione una categoría');
            return;
        }

       
        const resultado = calcularAumento(nombre, salario, categoria);

      
        document.getElementById('res-nombre').textContent = resultado.nombre;
        document.getElementById('res-salario').textContent = '$' + resultado.salario.toFixed(2);
        document.getElementById('res-categoria').textContent = resultado.categoria.toUpperCase();
        document.getElementById('res-aumento').textContent = resultado.aumento;
        document.getElementById('res-nuevo-salario').textContent = '$' + resultado.nuevoSalario;

        
        resultCard.classList.remove('hidden');
    });
});