const output = document.getElementById('progOutput');
const input = document.getElementById('userInput');
let result = 0;

input.addEventListener('input', function getUserInput() {
    result = input.value.length;

    output.textContent = result;
});