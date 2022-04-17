const button = document.querySelector('#btn');
button.addEventListener('click', function() {
    calc();
    this.form.reset();
});

function calc() {
    let a = parseInt(document.querySelector('#value1').value);
    let b = parseInt(document.querySelector('#value2').value);

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter only number values: ");
        return false;
    }

    let op = document.querySelector('#operator').value;

    let calculate;

    if (op == "add") {
        calculate = a + b;
    } else if (op == "minus") {
        calculate = a - b;
    } else if (op == "div") {
        calculate = a / b;
    } else {
        calculate = a * b;
    }

    const res = document.querySelector('#result');
    res.innerHTML = 'Answer: ' + calculate
    res.style = 'display = show'
}