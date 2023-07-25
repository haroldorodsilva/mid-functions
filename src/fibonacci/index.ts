// Write a function that calculates the nth number in the Fibonacci sequence. The Fibonacci
// sequence is formed by adding the two previous numbers, starting with 0 and 1 (or 1 and 1,
// depending on the initial order), and the first numbers in the sequence are: 0, 1, 1, 2, 3, 5, 8,
// 13, ...


const fibonacci = (value: number): number => {
    if (value <= 1) return value
    return fibonacci(value - 1) + fibonacci(value - 2)
}


console.log('fibonacci de 8: ', fibonacci(8))