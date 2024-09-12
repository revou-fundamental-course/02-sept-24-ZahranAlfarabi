// script.js

// Event listeners for buttons
document.getElementById('calculate-area').addEventListener('click', calculateArea);
document.getElementById('calculate-perimeter').addEventListener('click', calculatePerimeter);

// Function to calculate area
function calculateArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert('Input valid values for base and height!');
        return;
    }

    const area = 0.5 * base * height;
    document.getElementById('area-result').textContent = 'Luas Segitiga: ' + area.toFixed(2);
}

// Function to calculate perimeter
function calculatePerimeter() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert('Input valid values for all sides!');
        return;
    }

    const perimeter = sideA + sideB + sideC;
    document.getElementById('perimeter-result').textContent = 'Keliling Segitiga: ' + perimeter.toFixed(2);
}