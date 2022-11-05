//callStack
function funcThree() {
  console.log("3");
}
function funcTwo() {
  funcThree();
  console.log(2);
}
function funcOne() {
  funcTwo();
  console.log(1);
}
funcOne();

//factorial
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
