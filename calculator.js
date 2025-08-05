const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
  return a - b;
}

function divide(a, b){
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function multiply(a, b){
  return a * b;
}

// ¡Esto es lo importante! Asegúrate de exportar **todas** las funciones:
module.exports = {
  add,
  subtract,
  divide,
  multiply
};
