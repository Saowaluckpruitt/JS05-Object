function miltiplyNumberic(obj, num) {
  for (let name in obj) {
    let menu = obj[name];

    if (typeof menu == "number") {
      obj[name] = menu * num;
    }
  }
  return obj;
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
console.log(menu[miltiplyNumberic]);
