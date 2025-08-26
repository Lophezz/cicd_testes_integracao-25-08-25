const math = require('../math');

test('soma 2 + 3 igual a 5', () => { 
    expect(math.add(2, 3)).toBe(5); 
}); 

test('subtração 3 - 3 igual a 0', () => { 
    expect(math.subtract(3, 3)).toBe(0); 
}); 

test('multiplicação 2 * 3 igual a 6', () => { 
    expect(math.multiply(2, 3)).toBe(6); 
}); 

test('divisão 4 / 4 igual a 1', () => { 
    expect(math.divide(4, 4)).toBe(1); 
}); 
