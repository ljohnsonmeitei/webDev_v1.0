const { runMain } = require("module");

function add(a, b) {
  return a + b;
}

//function inside functions
function display_add(){
  console.log("the sum is " + add(2,3))
}
display_add()

//function as a paramter to functions
function add(a, b, function_to_call) {
  let result = a + b;
  if (function_to_call == 'function'){
    function_to_call(result);    
  }
}

function display_result(add_result){
  console.log("the sum is " + add_result)
}

let result = add(2,3,display_result);
