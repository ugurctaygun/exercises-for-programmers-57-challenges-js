//CHALLANGES
// Write a new version of the program without using any variables.
// Write a version of the program that displays different greetings for different people
//CONSTRAINTS
// Keep the input, string concatenation, and output separate.

function sayHello(input) {
  this.name = input;
  //Assigning result code to each case for easier testing
  this.resultCode = 0;
}

sayHello.prototype.askName = function () {
  if (typeof this.name != "string") {
    this.resultCode = 400;
    return `What is your name ? Sorry I didn't get that`;
  } else if (this.name.length < 3) {
    this.resultCode = 406;
    return `What is your name ? Well ${this.name} , that is a very short name`;
  } else {
    this.resultCode = 202;
    return `What is your name ? ${this.name}`;
  }
};

sayHello.prototype.greet = function () {
  if (this.resultCode === 202) {
    return `Hello , ${this.name} , nice to meet you`;
  } else {
    return "";
  }
};

sayHello.prototype.dialogue = function () {
  return this.askName() + "\n" + this.greet();
};

const sayingHello = new sayHello("uğur");

console.log(sayingHello.dialogue());

module.exports = sayHello;
