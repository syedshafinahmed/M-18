// let price = 25;
// let com_price = price;
// com_price = 15;
// console.log(price);
// console.log(com_price);



const products = [25, 35, 45];
const comp_products = [];
// const comp_products = products;
for(const product of products){
    comp_products.push(product);
}
console.log(comp_products);

products[0] = 15;
// comp_products[1] = 55;

console.log(products);
// console.log(comp_products);




// add values to copied array
const numbers = [1, 2, 3, 4, 5, 6];
const new_numbers = Array.from(numbers);
new_numbers.push(7);
console.log(new_numbers);
console.log(numbers);

// using concat
const numbers1 = [11, 22, 33, 44, 55, 66];
const new_numbers1 = [].concat(numbers1);
new_numbers1.push(18);
console.log(new_numbers1);
console.log(numbers1);