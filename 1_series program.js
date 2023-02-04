let n = 9; //Range of series
let a = 0;
let b = 1;
while (n > 0) {
  console.log(a);
  [a, b] = [b, a + b];
  n -= 1;
}
