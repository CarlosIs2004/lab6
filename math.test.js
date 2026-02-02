const {fibonacci, factorial} = require('./math.js');


test('Fibonacci de 6 debe ser 8', () => {
    expect(fibonacci(6)).toBe(8)
});

test('Factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(0);
});