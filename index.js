var x = prompt("Please, type the number, which you need to raise in degree");

var n = prompt(
  "Please, type the degree, in which you need to raise the number"
);

parseInt(x);
parseInt(n);

console.log(x);
console.log(n);

var result = Math.pow(x, n);

console.log(result);

document.querySelector(".h2").innerHTML =
  "Result of x = " + x + " in power of n = " + n + " equals " + result;

alert("Result of x = " + x + " in power of n = " + n + " equals " + result);
