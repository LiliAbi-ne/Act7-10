// Genera una matriz de inputs según el tamaño dado
function generarCuadrado() {
    const size = document.getElementById('size').value;
    const container = document.getElementById('cuadrado-container');
    container.innerHTML = ''; // Limpiar contenido previo
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.value = Math.floor(Math.random() * 10); // Valor aleatorio para facilitar pruebas
        container.appendChild(input);
    }
}

// Verifica si la matriz es un cuadrado mágico
function verificarCuadrado() {
    const size = document.getElementById('size').value;
    const inputs = document.getElementById('cuadrado-container').getElementsByTagName('input');
    const matriz = [];

    // Convertir inputs en una matriz bidimensional
    for (let i = 0; i < size; i++) {
        matriz[i] = [];
        for (let j = 0; j < size; j++) {
            matriz[i].push(parseInt(inputs[i * size + j].value));
        }
    }

    // Calcular la suma de la primera fila como referencia
    const sumaReferencia = matriz[0].reduce((a, b) => a + b, 0);

    // Verificar sumas de filas y columnas
    for (let i = 0; i < size; i++) {
        const sumaFila = matriz[i].reduce((a, b) => a + b, 0);
        const sumaColumna = matriz.map(row => row[i]).reduce((a, b) => a + b, 0);
        if (sumaFila !== sumaReferencia || sumaColumna !== sumaReferencia) {
            document.getElementById('resultado').textContent = "No es un cuadrado mágico.";
            return;
        }
    }

    // Verificar diagonales
    const sumaDiagonal1 = matriz.map((row, index) => row[index]).reduce((a, b) => a + b, 0);
    const sumaDiagonal2 = matriz.map((row, index) => row[size - 1 - index]).reduce((a, b) => a + b, 0);

    if (sumaDiagonal1 !== sumaReferencia || sumaDiagonal2 !== sumaReferencia) {
        document.getElementById('resultado').textContent = "No es un cuadrado mágico.";
        return;
    }

    // Si pasa todas las pruebas, es un cuadrado mágico
    document.getElementById('resultado').textContent = `Es un cuadrado mágico. La constante mágica es ${sumaReferencia}.`;
}
