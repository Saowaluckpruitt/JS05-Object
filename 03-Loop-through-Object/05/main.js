function fruits(thaiFruit) {
  for (let fruit in thaiFruit) {
    if (thaiFruit > 1) {
      thaiFruit[fruit] = menu + "s";
    }
  }
  return thaiFruit;
}

let yellowFruit = {
  Banana: 3,
  Mango: 4,
  Orange: 1,
};
console.log(yellowFruit.Banana[fruits]);
