const backward = yourString => {
    let arrayString = yourString.split('')
    let newArray = [];
    for (i = 1; i <= yourString.length; i++) {
        newArray.push(arrayString[arrayString.length - i])
    }
    newArray = newArray.join('');
    return newArray;

}
console.log(backward('Hello world'));
