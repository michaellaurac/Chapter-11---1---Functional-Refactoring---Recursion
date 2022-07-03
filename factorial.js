function standardFactorial (number) {
  if (number === 1) {
    return 1;
  } else {
    return number * standardFactorial(number - 1);
  }
};

const lookupTable = {};
function memoizedFactorial (number) {
  if (number in lookupTable) {
    console.log("cached");
    return lookupTable[number];
  } else {
    console.log("calculating");
    const reduceValue = standardFactorial(number);
    lookupTable[number] = reduceValue;
    return reduceValue;
  }
}

module.exports = { standardFactorial, memoizedFactorial };
