var FizzBuzz = function() {

}

FizzBuzz.prototype.isDivisibleBy = function (number) {
  if (number % 3 === 0) return true;
  if (number % 5 === 0) return true;
  return false;
}
