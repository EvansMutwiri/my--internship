const button = document.querySelector('#btn');
button.addEventListener('click', () => calc());

function calc () {
    let a = parseInt(document.querySelector('#value1').value || 0);
    let b = parseInt(document.querySelector('#value2').value || 0);

    let op = document.querySelector('#operator').value;

    let calculate;

    if(op == "add") {
        calculate = a + b;
    } else if (op == "minus") {
        calculate = a - b;
    } else if (op == "div") {
        calculate = a / b;
    } else {
        calculate = a * b;
    }

    document.querySelector('#result').innerHTML = 'Answer ' + calculate;
}