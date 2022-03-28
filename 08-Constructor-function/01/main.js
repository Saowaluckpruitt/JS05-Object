function Calculator() {
  (this.read = function () {
    num1 = +prompt("Enter your number");
    num2 = +prompt("Enter your number");
  }),
    (this.sum = function () {
      return +(num1 + num2);
    }),
    (this.mul = function () {
      return num1 * num2;
    });
}

let calculator = new Calculator();
console.log(calculator);
