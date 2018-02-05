var message;
message = 'hello';
console.log(message);

sayHello();

function sayHello() {
  // message2 declaration get's hoisted up here
  var message2 = 'Hello Gacrux';
  console.log(message2); // this is not "not defined" error
}

// console.log('var loop');
var peeps = ['Ally', 'Dev', 'Mary'];
for (var i=0; i<peeps.length; i++) {
  var person = peeps[i];
  console.log(person);
}
console.log('After loop person is:', person);

// This is defined in the function so can't see outside
//console.log(message2);

// ES6 new syntax for variables - let and const
let cohort = 'Gacrux';
console.log(cohort);

const school = "Prime Digital Academy";
console.log(school);

// Can't change a const
//school = "Something else";

const TOPPINGS_FOR_DISCOUNT = 3;

let orderToppings = 2;
if (orderToppings < TOPPINGS_FOR_DISCOUNT) {
  console.log("qualify for discount");
} else {
  console.log("No discount for you!");
}

console.log('ES6 loop');
const people = ['Ally', 'Dev', 'Mary'];
// Traditional for loop
for (let i=0; i<people.length; i++) {
  const hello ='hello';
  let person = people[i];
  console.log(person);
}
//console.log('After loop person is:', person);
//console.log('After loop i is:', i);
//console.log(hello);

// Can put something in
people.push('Jacob');
console.log('People are now', people);

// Can take something out
people.shift();
console.log('People are now', people);

// But we can't do this
//people = ['Jacob'];

// Template literals
// String concatenation
let html = '<p>This is ' + cohort + ' at ' + school + '!</p>';
console.log(html);

// template literal - they can be mult-line
let better_html = `<p>This is ${cohort} 
at ${school}!</p>`;
console.log(better_html);

// New ways to loop
console.log('For each loop');
people.forEach(function (person) {
  if (person == 'Dev'){
    return;
  }
  console.log(person);
});

console.log('for..of loop');
for (let person of people) {
  if (person == 'Dev'){
    break;
  }
  console.log(person);
}

// don't use the for..in for an array
console.log('for..in loop');
for (let i in people) {
  console.log(people[i]);
}

// object literal
let cat = {
  name: 'kyo',
  age: 9,
  color: 'orange'
}
for (let property in cat) {
  console.log(`${property} is ${cat[property]}`);
}

let numbers = [1, 2, 3, 4];
console.log('Numbers start', numbers);

numbers = numbers.map( num => num*2 );
//numbers = numbers.map( (num) => { return num*2 } );

console.log('Numbers doubled', numbers);


// constructor function
function Cat(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;

  // Can do this, but then function is on every cat
  // this.meow = function() {
  //   console.log('Meow');
  // }
}

// Better to add your functions to the prototype
Cat.prototype.meow = function() {
  console.log('Meow');
}

let kyo = new Cat('kyo', 9, 'orange');
kyo.meow();
console.log('Kyo', kyo);

class CatClass {
  constructor (name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  meow() {
    console.log('Meow');
  }
}

let abby = new CatClass('abby', 10, 'brown');
abby.meow();
console.log('Abby', abby);