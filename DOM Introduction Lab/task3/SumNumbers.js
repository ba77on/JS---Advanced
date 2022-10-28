function calc() {
    let textOne = document.getElementById('num1').value;
    let textTwo = document.getElementById('num2').value;
    let sum = document.getElementById('sum');

    let result = Number(textOne) + Number(textTwo);

    sum.value = result;

}
