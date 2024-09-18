function generarMatrizRecursiva(size, i = 0, j = 0, matriz = []) {
    if (i === 0 && j === 0) {
        matriz = Array(size).fill().map(() => Array(size).fill(0));
    }

    if (i >= size) {
        mostrarMatriz(matriz);
        const matrizReducida = metodoGaussRecursivo(matriz);
        mostrarResultado(matrizReducida);
        return;
    }

    matriz[i][j] = Math.floor(Math.random() * 9) + 1;

    if (j < size - 1) {
        generarMatrizRecursiva(size, i, j + 1, matriz);
    } else {
        generarMatrizRecursiva(size, i + 1, 0, matriz);
    }
}

function mostrarMatriz(matriz) {
    const container = document.getElementById('matriz-container');

    if (!container) {
        console.error("El contenedor 'matriz-container' no se encontró.");
        return;
    }

    container.innerHTML = '';
    const size = matriz.length;
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    matriz.forEach(fila => {
        fila.forEach(valor => {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = valor;
            input.readOnly = true;
            container.appendChild(input);
        });
    });
}

function mostrarResultado(matriz) {
    const resultadoContainer = document.getElementById('resultado-container');

    if (!resultadoContainer) {
        console.error("El contenedor 'resultado-container' no se encontró.");
        return;
    }

    resultadoContainer.innerHTML = '';
    const size = matriz.length;
    resultadoContainer.style.display = 'grid';
    resultadoContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    matriz.forEach(fila => {
        fila.forEach(valor => {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = valor.toFixed(2);
            input.readOnly = true;
            resultadoContainer.appendChild(input);
        });
    });
}

function metodoGaussRecursivo(matriz, i = 0) {
    const size = matriz.length;

    if (i >= size) {
        return matriz;
    }

    let maxFila = i;
    for (let k = i + 1; k < size; k++) {
        if (Math.abs(matriz[k][i]) > Math.abs(matriz[maxFila][i])) {
            maxFila = k;
        }
    }

    if (maxFila !== i) {
        [matriz[i], matriz[maxFila]] = [matriz[maxFila], matriz[i]];
    }

    const pivote = matriz[i][i];
    if (pivote !== 0) {
        for (let j = 0; j < size; j++) {
            matriz[i][j] = matriz[i][j] / pivote;
        }
    }

    eliminarElementosDebajo(matriz, i, size, i + 1);

    return metodoGaussRecursivo(matriz, i + 1);
}

function eliminarElementosDebajo(matriz, filaActual, size, filaAEliminar) {
    if (filaAEliminar >= size) {
        return;
    }

    const factor = matriz[filaAEliminar][filaActual];
    for (let j = 0; j < size; j++) {
        matriz[filaAEliminar][j] -= factor * matriz[filaActual][j];
    }

    eliminarElementosDebajo(matriz, filaActual, size, filaAEliminar + 1);
}

function generarMatriz() {
    const size = parseInt(document.getElementById('size').value);
    generarMatrizRecursiva(size);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generar-btn').addEventListener('click', generarMatriz);
});
