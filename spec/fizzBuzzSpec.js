describe("FizzBuzz", function(){

  var fizzBuzz;

  beforeEach( function(){
    fizzBuzz = new FizzBuzz;
  });

  it("FizzBuzz should be a constructor", function(){
    expect(fizzBuzz).toEqual(jasmine.any(FizzBuzz));
  });

});
