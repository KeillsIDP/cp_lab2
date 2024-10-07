const { diff } = require('../src/miniMaple');

describe('Differentiation', () => {
    test('4*x^3 по x', () => {
        expect(diff('4*x^3', 'x')).toBe('12*x^2');
    });

    test('4*x^3 по y', () => {
        expect(diff('4*x^3', 'y')).toBe('0');
    });

    test('4*x^3 - x^2 по x', () => {
        expect(diff('4*x^3 - x^2', 'x')).toBe('12*x^2 - 2*x');
    });

    test('x^2 + 3*x по x', () => {
        expect(diff('x^2 + 3*x', 'x')).toBe('2*x + 3');
    });

    test('2*x^2 + 5 по x', () => {
        expect(diff('2*x^2 + 5', 'x')).toBe('4*x');
    });

    test('5 по x', () => {
        expect(diff('5', 'x')).toBe('0');
    });

    test('Не поддерживаемый запрос', () => {
        expect(diff('sin(x)', 'x')).toBe('0');
    });
});

test('it fails', () => {
    expect(false).toBeTruthy();
});