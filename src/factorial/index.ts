/**
 * Write a function that takes a positive integer as input and returns the factorial of that number.
    For example, if the given number is 5, the function should return 120 (1 * 2 * 3 * 4 * 5).
 */

const factorial = (max: number) => {
   if (max <= 0) return 0;

   let value = 1
   for (let index = 1; index <= max; index++) {
      value *= index
   }

   return value
}

const factorialResult = factorial(5)

console.log('Factorial Result of 5: ', factorialResult)