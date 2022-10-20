function extractText() {
    let items = document.querySelectorAll('#items li');
    let result = document.getElementById('result');

    for (const line of items) {
        result.value += line.textContent + '\n';
    }



}


    // let listOfItems = document.querySelectorAll('#items li');
    // let textArea = document.getElementById('result');
    // let result = '';

    // for (const singleItem of listOfItems) {
    //     result += singleItem.textContent + '\n'
    // }
    // textArea.textContent = result