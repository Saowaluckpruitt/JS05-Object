let user = {
  name: "John",
  sayHi: function () {
    console.log(this.name);
  },
};

user.sayHi(); // * John coz sayHi fn log this ,this = user so this.name mean John
