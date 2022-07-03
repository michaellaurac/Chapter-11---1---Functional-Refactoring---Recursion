function iterativeFind (toFind, array) {
  let found = "not found";
  array.forEach((element) => {
    if (element === toFind) {
      found = "found";
    };
  });
  return found;
};

function recursiveFind (toFind, array) {
  if (array[0] === toFind) {
    return "found";
  } else if (array.length === 0) {
    return "not found";
  } else {
    return recursiveFind(toFind, array.slice(1));
  }
};

module.exports = { iterativeFind, recursiveFind };
