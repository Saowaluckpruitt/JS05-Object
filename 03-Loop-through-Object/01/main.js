function sumsalary(obj) {
  let sum = 0;
  for (let name in obj) {
    let salary = obj[name];
    sum += salary;
  }
  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
