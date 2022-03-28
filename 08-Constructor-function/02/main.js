function Accumulator(startingValue) {
  (this.currentValue = startingValue),
    (this.read = function () {
      let num = +prompt("Enter  number ");
      this.currentValue += num;
    }),
    (this.show = function () {
      alert(this.currentValue);
    });
}
let accumulator = new Accumulator(1);
console.log(accumulator);
