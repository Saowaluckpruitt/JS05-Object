function checkObj(key) {
  for (let text in key) {
    return false;
  }
  return true;
}
console.log(checkObj("1"));
