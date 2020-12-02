// function doctorize(firstName) {
//     return `Dr. ${firstName}`;
// }

// A Non Function
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// Smaller expression function
// function inchToCM(inches) {
//   return inches * 2.54;
// }

// const inchToCM = function (inches) {
//   return inches * 2.54;
// };

// Arrow Function
// const inchToCM = (inches) => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IFFE
// Immdiately Invoked Function Expression

// (function (age) {
//   return `You are cool and age ${age}`;
// })(10);

// Methods!!
const wes = {
  name: `Wes Bos`,
  // Method
  sayHi() {
    console.log('Hey Wes');
  },
  // Short hand Method
  yellHi() {
    console.log('HEY WESSSSS');
  },
  // Arrow function
  wisperHi: () => {
    console.log('hii wesss im a mouse');
  },
};

// Callback Function
// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log(`Great Clicking!!`);  
}

button.addEventListener(`click`, function() {
  console.log(`Nice Job!!`);
});


// Timer Callback

// setTimeout(wes.yellHi, 1000);

// setTimeout(function(){
//   console.log(`Done! Time to Eat!`);
// }, 1000);

setTimeout(() => {
  console.log(`Done! Time to Eat!`);
}, 1000);
