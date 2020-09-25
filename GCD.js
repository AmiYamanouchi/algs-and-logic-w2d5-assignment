// find the greatest common divisor of the two numbers given

const gcd = function(a, b) {

  if(!b) {
    return a
  }

  return gcd(b, a % b)
  // your code here
}

console.log(gcd(8,12));
