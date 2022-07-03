function standardFactorial (number) {
  if (number === 1) {
    return 1;
  } else {
    return number * standardFactorial(number - 1);
  }
};

function memoizedFactorial (number, lookupTable = {}) {
  if (number in lookupTable) {
    console.log("cached");
    return lookupTable[number];
  } else {
    console.log("calculating");
    let reduceValue;
    if (number < 2) {
      reduceValue = 1;
    } else {
      reduceValue = number * (memoizedFactorial(number - 1, lookupTable)).result;
    }
    lookupTable[number] = reduceValue;
    return { result: reduceValue, lookupTable };
  }
}

module.exports = { standardFactorial, memoizedFactorial };
