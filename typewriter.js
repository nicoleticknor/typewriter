const sentence = 'hello there from lighthouse labs';

//Final Attempt
const typewriter = () => {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
      //adding the carriage return
      if (i === sentence.length - 1) {
        console.log('');
      }
    }, 50 * (i + 1));
  };
};

typewriter();

// const sentence = 'hello'; //shortening for testing

// for (const char of sentence) {
//   //this will log with \n after each
//   // console.log(char);
//   //this will print the characters on a single line
//   //but it will also put the next CLI prompt immediate after it
//   //we could fix that but we're gonna use setTimeout instead
//   // process.stdout.write(char);

//   //fix the set timeout so it prints each char to a new line after a 50 ms delay
//     setTimeout(() => {
//     callback(char);
//   }, 1000);
// };

//////ATTEMPT #1

// //wrap it in a HO function 
// const type = (callback) => {
//   for (const char of sentence) {
//       setTimeout(() => {
//       // set a variable to store char in???? Nope
//       // let variable = char
//       //call the function within the settimeout
//       callback(char);
//       //change delay to 50ms
//     }, 500);
//   };
// };

// //create a function named callback that will be a callback within setTimeout
// const logChar = (char) => {
//   //expect this to log out the char of the sentence within the forloop within typewriter
//   console.log(char);
// };

// //call the higher order function and store it in a variable 
// //this is because callback(char) within the settimeout function does not return anything
// const typewriter = type(logChar);

// //log the variable to see it
// console.log(typewriter);


///////ATTEMPT #2

//maybe I need the setTimeout within the callback. I'm just making stuff up at this point

// const type = (callback) => {
//   for (const char of sentence) {
//     callback(char);
//   };
// };

// const logChar = (char) => {
//   setTimeout(() => {
//     console.log(char)
//   }, 500);
// };

// type(logChar)

///ATTEMPT #3

// const typewriter = () => {
//   for (let i = 0; i < sentence.length; i++) {
//     setTimeout(() => {
//       process.stdout.write(sentence[i]);
//     }, 1000 * (i + 1));
//   };
// };

// console.log(typewriter());

//hmmm but the question wanted for of instead of c-style for


