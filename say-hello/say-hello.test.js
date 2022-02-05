const sayHello = require("./say-hello");

function expectedDialogue(name) {
  return `What is your name ? ${name}\nHello , ${name} , nice to meet you`;
}

test("Passing a valid name", () => {
  const sayingHello = new sayHello("john");
  sayingHello.askName();
  expect(sayingHello.resultCode).toBe(202);
});

test("Display expected dialogue", () => {
  const sayingHello = new sayHello("john");
  sayingHello.dialogue();
  expect(sayingHello.dialogue()).toBe(expectedDialogue(sayingHello.name));
});
