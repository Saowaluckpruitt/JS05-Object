let num1;
let num2;
let calculator = {
  read: function read() {
    num1 = +prompt("Enter your number");
    num2 = +prompt("Enter your number");
  },
  sum: function sum() {
    return +(num1 + num2);
  },
  mul: function multiply() {
    return num1 * num2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/*let calculator = {
  read: function read() {
    num1 = +prompt("Enter your number");
    num2 = +prompt("Enter your number");
  },
  sum: function sum() {
    return num1 + num2;
  },
  mul: function multiply() {
    return num1 * num2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */
