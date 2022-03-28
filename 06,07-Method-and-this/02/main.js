var name = "Joe";
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user = makeUser();
console.log(user.ref.name); // * joe  coz ref this mean makeUser() so it cant find variable so it use var name =joe
