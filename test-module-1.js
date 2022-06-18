// class Calculator {
//   add(a, b) {
//     return a + b;
//   }

//   multiple(a, b) {
//     return a * b;
//   }

//   divide(a, b) {
//     return a / b;
//   }
// }
// module.exports = Calculator;
module.exports = class {
  add(a, b) {
    return a + b;
  }

  multiple(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
};
