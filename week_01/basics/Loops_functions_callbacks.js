//sum of 0 to 100
sum = 0;
for(let i=0; i<=100; i++){
  sum += i;
}
console.log(sum);

//functions
function calculate_sum(a, b){
  for(let i=0;i<=a;i++){
    b += i;
  }
  return b;
}
console.log(calculate_sum(100,0))

//calback function-basic
function square(n){
  return n*n;
}

function sum_square(a,b){
  const a_square = square(a);
  const b_square = square(b);
  return a_square + b_square;
}

console.log(sum_square(3,4));

//callback-adcance
function square(n){
  return n*n;
}

function cube(n){
  return n*n*n;
}

function sumofsomething(a,b,func){
  const a_sum = func(a);
  const b_sum = func(b);

  return a_sum + b_sum;
}

console.log(sumofsomething(3,5,cube))
