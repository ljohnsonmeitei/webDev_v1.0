//simple primitives : variables
let str_name = "Johnson";
let age = 31;
let isMarried = true;

console.log(
  "The first name " + str_name + " aged " + age + " is married " + isMarried,
);

//simple primitives : condtional
if (age > 30) {
  console.log("good age to marry");
} else {
  condole.log("not a good age to marry");
}

//simple primitives : loops
sum = 0;
for (let val = 0; val < 1000; val++) {
  sum += val;
}
console.log(sum);

//complex primitives : Arrays
let arr_name = ["name1", "name2", "name3"];

for (let i = 0; i < arr_name.length; i++) {
  console.log(arr_name[i]);
}

//print all the even number in an array
num_list = [12, 34, 553, 232, 33, 35532];

for (let i = 0; i < num_list.length; i++) {
  if (num_list[i] % 2 == 0) {
    console.log(num_list[i]);
  }
}

//complex primitives : Objects
const person = [
  {
    first_name: "Johnson",
    gender: "Male",
  },
  {
    first_name: "Arrav",
    gender: "Male",
  },
  {
    first_name: "Priya",
    gender: "Female",
  },
];

for (let i = 0; i < person.length; i++) {
  if (person[i].gender == "Male") {
    console.log(person[i].first_name);
  }
}
