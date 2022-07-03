const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

const test = require("tape");
const { standardFactorial, memoizedFactorial } = require("./factorial.js");

// setup test
test("verifies the test file name", (assert) => {
  assert.strictEqual(fileName(), "factorial_test_tape.js");
  assert.end();
});

// functional tests
test("verifies that 3! is equal to 6 with a standard recursive factorial function", (assert) => {
  assert.strictEqual(standardFactorial(3), 6);
  assert.end();
});
test("verifies that 10! is equal to 3628800 with a memoized recursive factorial function", (assert) => {
  assert.strictEqual(memoizedFactorial(10), 3628800);
  assert.end();
});
test("verifies that 10! is equal to 3628800 with a memoized recursive factorial function", (assert) => {
  assert.strictEqual(memoizedFactorial(10), 3628800);
  assert.end();
});
