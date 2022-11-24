function subtract() {
    let first = document.getElementById("firstNumber").value;
    let second = document.getElementById("secondNumber").value;

    let result = Number(first) - Number(second);
    let finalDiv = document.getElementById("result");
    finalDiv.textContent = result;
}