const numbers = [1, 2, 3, 4, 5];
const reversed = [];

// unshift
for (let i = 0; i < numbers.length; i++){
    reversed.unshift(numbers[i]);
}

// reverse loop
for(let i = numbers.length-1; i >= 0; i--){
    reversed.push(numbers[i]);
}
console.log(reversed);

// for of
for(const num of numbers){
    reversed.unshift(num);
}
console.log(reversed);

// reverse function
console.log(numbers);
numbers.reverse();
console.log(numbers);

// function in a variable
console.log(numbers);
const result = numbers.reverse();
console.log(result);