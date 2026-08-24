const { somar, subtrair, multiplicar, dividir } = require("./calculadora");

describe("Calculadora", () => {
    test("soma 2 + 3 deve ser 5", () => {
      expect(somar(2, 3)).toBe(5);
});

  test("subtracao 5 - 2 deve ser 3", () => {
        expect(subtrair(5, 2)).toBe(3);
});

  test("multiplicacao 4 * 3 deve ser 12", () => {
        expect(multiplicar(4, 3)).toBe(12);
});

  test("divisao 10 / 2 deve ser 5", () => {
        expect(dividir(10, 2)).toBe(5);
});

  test("divisao por zero deve lancar erro", () => {
        expect(() => dividir(10, 0)).toThrow("Divisao por zero nao permitida");
});
});
