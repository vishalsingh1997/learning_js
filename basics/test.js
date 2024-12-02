console.log("Hello Visu...!");
console.log("It's running...");



function sum(a, b, c) {
    return a + b + c;
}

const num1 = [2, 5, 7]
const num2 = [2, 3, 9]

const num = [...num1, ...num2]



console.log(num)


const original = { name: 'Alice', address: { city: 'Wonderland' } };
const shallowCopy = { ...original };

shallowCopy.name = 'Bob';
shallowCopy.address.city = 'Neverland';

console.log(original.name); // Outputs: 'Alice' (primitive value is independent)
console.log(shallowCopy.name); // Outputs: 'Alice' (primitive value is independent)
console.log(original.address.city); // Outputs: 'Neverland' (nested object is shared)