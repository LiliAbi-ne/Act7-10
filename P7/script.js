// Arreglo de ejemplo
const arreglo = [
    [1, 0, 3, 0],
    [0, 2, 0, 4],
    [5, 6, 0, 0],
    [7, 0, 9, 10]
];

function mostrarArreglo(arreglo) {
    const tabla = document.getElementById('arreglo-table').querySelector('tbody');
    tabla.innerHTML = '';
    arreglo.forEach(fila => {
        const tr = document.createElement('tr');
        fila.forEach(num => {
            const td = document.createElement('td');
            td.textContent = num;
            tr.appendChild(td);
        });
        tabla.appendChild(tr);
    });
}

function contarCeros(arreglo) {
    return arreglo.map(fila => {
        return fila.reduce((contador, valor) => {
            return valor === 0 ? contador + 1 : contador;
        }, 0);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarArreglo(arreglo);

    const resultado = contarCeros(arreglo);

    // Mostrar el resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = resultado.map((ceros, index) => `Fila ${index + 1}: ${ceros} ceros`).join('<br>');
});
