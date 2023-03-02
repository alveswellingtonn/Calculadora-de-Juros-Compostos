var total = document.getElementById('total');

const btnCalculate = document.getElementById('calculate');

btnCalculate.addEventListener("click", function () {

    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value) / 100;
    const time = document.getElementById('time').value;

    const result = value * (1 + fee) ** time;

    total.innerText = ("R$ " + result.toFixed(2).replace(".",","))
})