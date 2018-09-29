/* // USING REVERSE FUNCTION

function lastIndexOf(array, value) {
    var reversedIndex = array.reverse().indexOf(value);
    if (reversedIndex === -1) {
        return -1;
    } else {
        return array.length - reversedIndex - 1;
    }
} */

/* // USING LOOPS

function lastIndexOf(array, value) {
    var arrayIndex = -1; 
    for (var i = 0; i < array.length; i++) {
        if (array.indexOf(value, i) === -1) {
            break;
        } else {
            arrayIndex = array.indexOf(value, i);
        }
    }
    return arrayIndex;
} */

// WITHOUT indexOf() method

function lastIndexOf(array, value) {
    if (array.length > 0) {
        var counter = array.length - 1;
        while (counter >= 0) {
            if (array[counter] === value) {
                return counter;
            } else {
                if (counter === 0) {
                    return -1;
                } else {
                    counter--;
                }
            }
        }
    } else {
        return -1;
    }

} 


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);