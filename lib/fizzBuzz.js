var FizzBuzz = function() {

}

FizzBuzz.prototype.isDivisibleByThree = function (number) {
  if (number % 3 === 0) return true;
  return false;
}

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  if (number % 5 === 0) return true;
  return false;
}

FizzBuzz.prototype.isDivisibleByThreeAndFive = function(number) {
  if (this.isDivisibleByThree(number) && this.isDivisibleByFive(number)) return true
  return false;
}

FizzBuzz.prototype.play = function(number){
  if (this.isDivisibleByThreeAndFive(number)) return 'fizzbuzz';
  if (this.isDivisibleByThree(number)) return "fizz";
  if (this.isDivisibleByFive(number)) return "buzz";
  return number;
}
