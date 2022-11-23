function returnImpares(array) {
    let arrayNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arrayNumbers.push(array[i]);
        }
    }
    console.log('ímpares:', array.length - arrayNumbers.length )
}

let array = [1,2,1,3];

returnImpares(array);