// Task 1
// join()
const fruitArray = ["Mango", "Poly", "Kiwi", "Ajax"]
let joinToArray = fruitArray.join(", ");
console.log(joinToArray)
// for
let res = ""
for (let i = 0; i < fruitArray.length; i++) {
    res += fruitArray[i] + ", "
} 
console.log(res)
// Task 2
const arrayCards = ["Karta 1", "Karta 2", "Karta 3", "Karta 4", "Karta 5"];
const removeCards = arrayCards.shift()
console.log(arrayCards)
// Task 3
const joinCard = arrayCards.push("Karta 6")
console.log(arrayCards)
// Task 4
const cardToUpadate = arrayCards.splice(1, 1, "Karta nie3")
console.log(arrayCards)
