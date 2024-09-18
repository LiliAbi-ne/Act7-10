document.addEventListener('DOMContentLoaded', () => {
    generarMatrices();
});

function generarMatrices(i = 0) {
    const matriz1Container = document.getElementById('matriz1-container');
    const matriz2Container = document.getElementById('matriz2-container');

    if (i < 4) {
        const input1 = document.createElement('input');
        input1.type = 'number';
        input1.value = Math.floor(Math.random() * 10); // Valores aleatorios para facilitar pruebas
        matriz1Container.appendChild(input1);

        const input2 = document.createElement('input');
        input2.type = 'number';
        input2.value = Math.floor(Math.random() * 10); // Valores aleatorios para facilitar pruebas
        matriz2Container.appendChild(input2);


        generarMatrices(i + 1);
    }
}

function calcularOperaciones() {
    const matriz1 = [];
    const matriz2 = [];

    document.querySelectorAll('#matriz1-container input').forEach(input => matriz1.push(parseInt(input.value)));
    document.querySelectorAll('#matriz2-container input').forEach(input => matriz2.push(parseInt(input.value)));

    const suma = matriz1.map((value, index) => value + matriz2[index]);
    const resta = matriz1.map((value, index) => value - matriz2[index]);
    const producto = matriz1.map((value, index) => value * matriz2[index]);
    const division = matriz1.map((value, index) => (matriz2[index] !== 0 ? (value / matriz2[index]).toFixed(2) : ''));

    document.getElementById('resultado').innerHTML = `
        <h3>Resultados:</h3>
        <p><strong>Suma:</strong> ${suma.join(', ')}</p>
        <p><strong>Resta:</strong> ${resta.join(', ')}</p>
        <p><strong>Producto:</strong> ${producto.join(', ')}</p>
        <p><strong>División:</strong> ${division.join(', ')}</p>
    `;
}
