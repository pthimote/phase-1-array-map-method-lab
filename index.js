const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


  const titleCased = () => {
  return tutorials.map(title => title.split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' '))
}


// const array1 = [1, 4, 9, 16];
// // pass a function to map
// const map1 = array1.map(x => x * 2);
// console.log(map1);
// // expected output: Array [2, 8, 18, 32]



// function toTitleCase(str) {
//   return str.toLowerCase().split(' ').map(function (word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// }
// console.log(toTitleCase("welcome to w3docs"));