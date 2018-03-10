var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Daniel',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`); // 'this' doesn't work
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`); // 'this' works
  }
};
user.sayHiAlt(1, 2, 3);
