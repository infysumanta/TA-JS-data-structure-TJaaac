// 1. Create an array named numbers and store 5 number values in it

let numbers = [1, 2, 3, 4, 5];

// 2. Calculate the sum of array items and print it to the console using console.log()

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(`Addition of the array value is ${sum}`);

// 3. Calculate the average of array items and print it to the console using console.log()

let average = sum / numbers.length;
console.log(`Average of array values is ${average}`);

// 4. Find the highest number in the array and print it to the console using console.log()

let highest = 0;
for (let i = 0; i < numbers.length; i++) {
  if (highest < numbers[i]) {
    highest = numbers[i];
  } else continue;
}
console.log(`Highest value in the array is ${highest}`);

// 5. Find the lowest number in the array and print it to the console using console.log()

let lowest = numbers.length - 1;
for (let i = 0; i < numbers.length; i++) {
  if (lowest > numbers[i]) {
    lowest = numbers[i];
  } else continue;
}
console.log(`Highest value in the array is ${lowest}`);

// 6. Find the even numbers in the array and print them to the console using console.log()

let even = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even.push(numbers[i]);
  } else continue;
}
console.log(`Even values in the array are ${even}`);

// 7. Find the odd numbers in the array and print them to the console using console.log()

let odd = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    odd.push(numbers[i]);
  } else continue;
}
console.log(`Odd values in the array are ${odd}`);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

let num = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) {
    num.push(numbers[i]);
  } else continue;
}
console.log(`Numbers divisible by 5 in the array are ${num}`);

// 9. Log all the element of the array one by one

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 10. Find all the number in the array that is divisible by 3

let divisibleBy3 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    divisibleBy3.push(numbers[i]);
  } else continue;
}
console.log(`Numbers divisible by 3 in the array are ${divisibleBy3}`);
