let numbers = {
    'two': 2,
    'eight': 8,
    'one': 1,
}

let keys = Object.keys(numbers);
let values = Object.values(numbers);
let entries = Object.entries(numbers);
let result = Object.entries(numbers)
    .sort((a, b) => a[1] - b[1]);
console.log(result);

// връщане на масив отново в обект
let sortedObject = Object.fromEntries(result);

