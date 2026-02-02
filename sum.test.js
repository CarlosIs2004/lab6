const sum = require('./sum.js');

test('Suma de 3 + 4 debe ser 7',()=>{
    expect(sum(3,4)).toBe(7);
});

test('Suma de -2 + 2 debe ser 0',()=>{
    expect(sum(-2,2)).toBe(0);
});

test('Suma de 0 + 0 debe ser 0',()=>{
    expect(sum(0,0)).toBe(0);
});

test('Suma de 6.4 + 2.3',()=>{
    expect(sum(6.4,2.3)).toBeCloseTo(8.7);
});