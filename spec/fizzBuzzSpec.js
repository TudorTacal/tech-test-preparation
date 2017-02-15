describe("FizzBuzz", function(){

  var fizzBuzz;

  beforeEach( function(){
    fizzBuzz = new FizzBuzz;
  });

  it("FizzBuzz should be a constructor", function(){
    expect(fizzBuzz).toEqual(jasmine.any(FizzBuzz));
  });

  describe("#isDivisibleBy", function (){
    it("returns true if is divisible by three", function (){
      expect(fizzBuzz.isDivisibleBy(3)).toBe(true)
    });
    it("return false if it is not divisible by three", function(){
      expect(fizzBuzz.isDivisibleBy(4)).toBe(false)
    });
    it("return true if it's divisible by 5", function () {
      expect(fizzBuzz.isDivisibleBy(5)).toBe(true)
    })


  });

});
