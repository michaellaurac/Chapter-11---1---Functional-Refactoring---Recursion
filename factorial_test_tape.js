const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

const test = require("tape");
const { factorial } = require("./factorial.js");

// setup test
test("verifies the test file name", (assert) => {
  assert.strictEqual(fileName(), "factorial_test_tape.js");
  assert.end();
});

// functional tests
test("verifies that 3! is equal to 6", (assert) => {
  assert.strictEqual(factorial(3), 6);
  assert.end();
});
