function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisao por zero nao permitida");
  }
  return a / b;
}

module.exports = { somar, subtrair, multiplicar, dividir };

// SIMULAÇÃO DE VAZAMENTO DE SEGREDO
const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE1234567890abcdef";
