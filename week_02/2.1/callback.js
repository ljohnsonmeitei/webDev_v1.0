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
