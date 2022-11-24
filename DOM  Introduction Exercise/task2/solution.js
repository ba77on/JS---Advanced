function solve() {
  let enteredText = document.getElementById("text").value;
  let typeOfCase = document.getElementById("naming-convention").value;

  let orderedEl = whitchToReturn(enteredText, typeOfCase)

  let resultTemp = document.getElementById('result');
  resultTemp.textContent = orderedEl;

  function whitchToReturn(text, conversion) {
    let nameAndConversion = {
      'Pascal Case': () => text
        .toLowerCase()
        .split(' ')
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(''),

      'Camel Case': () => text
        .toLowerCase()
        .split(' ')
        .map((x, i) => x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
        .join(''),

      default: () => `Error!`
    }
    return (nameAndConversion[conversion] || nameAndConversion.default)();
  }
}