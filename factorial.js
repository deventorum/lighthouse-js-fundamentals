const factorial = num => num === 0 ? 1 : num*=factorial(num - 1);
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(0));