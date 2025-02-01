// This is how we can reverse a list and pop an element in list
const list2 = [1, 2, 3, ..., 100]; // Example list
const last20Elements = list2.splice(-20); // Removes and returns the last 20 elements

console.log(last20Elements); // The last 20 elements
console.log(list2); // The remaining list after removal

const list = [1, 2, 3, 4, 5];
const reversedList = [...list].reverse(); // Creates a reversed copy

console.log(reversedList); // [5, 4, 3, 2, 1]
