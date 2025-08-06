const numbers = [8, 1, 4, 5, 3, 6, 7, 2];
console.log(numbers);
numbers.sort();
console.log(numbers);



const friends = ["sakib", "nokib", "akib", "rakib"];
console.log(friends);
friends.sort();
console.log(friends);

// ascending
const age = [1, 5, 100, 15, 8, 2, 28];
// console.log(age);
// age.sort();
// console.log(age);

const sorted_age = age.sort(function(a, b){ return a - b})
console.log(sorted_age);


// descending
const sorted_age_desc = age.sort(function(a, b){ return b - a});
console.log(sorted_age_desc);