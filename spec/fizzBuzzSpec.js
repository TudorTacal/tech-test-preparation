describe("FizzBuzz", function(){

  var fizzBuzz;

  beforeEach( function(){
    fizzBuzz = new FizzBuzz;
  });
  it("FizzBuzz should be a constructor", function(){
    expect(fizzBuzz).toEqual(jasmine.any(FizzBuzz));
  });
  describe("#isDivisibleByThree", function (){
    it("returns true if is divisible by three", function (){
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true)
    });
    it("return false if it is not divisible by three", function(){
      expect(fizzBuzz.isDivisibleByThree(4)).toBe(false)
    });
  })
  describe("#isDivisibleByFive", function () {
    it("return true if it's divisible by 5", function () {
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true)
    });

    it("returns false if it's not divisible by 5", function(){
      expect(fizzBuzz.isDivisibleByFive(6)).toBe(false)
    });
  });
  describe("isDivisibleByThreeAndFive", function () {
    it("returns true if it's divisible by 3 and 5", function(){
      expect(fizzBuzz.isDivisibleByThreeAndFive(15)).toBe(true)
    })
    it("return false if it's not divisible by 3 and 5", function () {
      expect(fizzBuzz.isDivisibleByThreeAndFive(16)).toBe(false)
    });
  });

  describe("play", function(){
    it("should return 'fizz' when passed the number 3", function(){
      expect(fizzBuzz.play(3)).toEqual("fizz");
    });

    it("should return 'buzz' when passed the number 5", function(){
      expect(fizzBuzz.play(5)).toEqual("buzz");
    });

    it("should return 'fizzbuzz' when passed the number 15", function () {
      expect(fizzBuzz.play(15)).toEqual('fizzbuzz')
    })

    it("should return the number if it's not divisible by 3 or 5", function () {
      expect(fizzBuzz.play(16)).toEqual(16)
    })
  });

});
