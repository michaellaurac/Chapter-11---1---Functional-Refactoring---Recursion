const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

const test = require("tape");
const { iterativeFind, recursiveFind } = require("./recursion.js");

// setup test
test("verifies the test file name", (assert) => {
  assert.strictEqual(fileName(), "recursion_test_tape.js");
  assert.end();
});

// functional tests
test("verifies that 3 is found in [3, 9, 2] iteratively", (assert) => {
  assert.strictEqual(iterativeFind(3, [3, 9, 2]), "found");
  assert.end();
});
test("verifies that 3 is found in [2, 9, 3] iteratively", (assert) => {
  assert.strictEqual(iterativeFind(3, [2, 9, 3]), "found");
  assert.end();
});
test("verifies that 3 is not found in [2, 9, 2] iteratively", (assert) => {
  assert.strictEqual(iterativeFind(3, [2, 9, 2]), "not found");
  assert.end();
});
// functional tests
test("verifies that 3 is found in [3, 9, 2] recursively", (assert) => {
  assert.strictEqual(recursiveFind(3, [3, 9, 2]), "found");
  assert.end();
});
test("verifies that 3 is found in [2, 9, 3] recursively", (assert) => {
  assert.strictEqual(recursiveFind(3, [2, 9, 3]), "found");
  assert.end();
});
test("verifies that 3 is not found in [2, 9, 2] recursively", (assert) => {
  assert.strictEqual(recursiveFind(3, [2, 9, 2]), "not found");
  assert.end();
});
