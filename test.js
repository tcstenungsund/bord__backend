function mainFunction() {
  function subFunction() {
    var str = "foo";
    return str;
  }
  return subFunction();
}

var test = mainFunction();

var test = mainFunction();
console.log(test);
