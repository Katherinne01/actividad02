document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const printBtn = document.getElementById('printBtn');
    const copyBtn = document.getElementById('copyBtn');
    const numberInput = document.getElementById('numberInput');
    const tableNumber = document.getElementById('tableNumber');
    const multiplicationTable = document.getElementById('multiplicationTable');

    generarTabla(5);

    generateBtn.addEventListener('click', function() {
        const numero = parseInt(numberInput.value);
        
        if (isNaN(numero)) {
            alert('Por favor ingresa un número válido');
            return;
        }
        
        generarTabla(numero);
    });

    printBtn.addEventListener('click', function() {
        window.print();
    });

    copyBtn.addEventListener('click', function() {
        const tablaTexto = obtenerTablaTexto();
        navigator.clipboard.writeText(tablaTexto)
            .then(() => {
                alert('¡Tabla copiada al portapapeles!');
            })
            .catch(err => {
                console.error('Error al copiar: ', err);
            });
    });

    function generarTabla(numero) {
        tableNumber.textContent = numero;
        
        multiplicationTable.innerHTML = '';
        
        for (let i = 1; i <= 10; i++) {
            const tableItem = document.createElement('div');
            tableItem.className = 'table-item';
            
            const operation = document.createElement('div');
            operation.className = 'operation';
            operation.textContent = `${numero} × ${i}`;
            
            const result = document.createElement('div');
            result.className = 'result';
            result.textContent = numero * i;
            
            tableItem.appendChild(operation);
            tableItem.appendChild(result);
            multiplicationTable.appendChild(tableItem);
        }
        
        mostrarTablaMultiplicar(numero);
    }

    function obtenerTablaTexto() {
        const numero = parseInt(numberInput.value) || 5;
        let texto = `Tabla del ${numero}\n\n`;
        
        for (let i = 1; i <= 10; i++) {
            texto += `${numero} × ${i} = ${numero * i}\n`;
        }
        
        return texto;
    }

    
    numberInput.value = '5';
});